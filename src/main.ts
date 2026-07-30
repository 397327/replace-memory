import {
  App,
  Editor,
  EditorPosition,
  MarkdownView,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  setIcon,
} from "obsidian";

interface ReplacementRule {
  id: string;
  find: string;
  replace: string;
  enabled: boolean;
}

interface ReplaceMemorySettings {
  version: number;
  rules: ReplacementRule[];
}

type Language = "zh" | "en";

type TextKey =
  | "open"
  | "runAllCommand"
  | "title"
  | "description"
  | "empty"
  | "addRule"
  | "runAll"
  | "findPlaceholder"
  | "replacePlaceholder"
  | "enabled"
  | "drag"
  | "moveUp"
  | "moveDown"
  | "runOne"
  | "delete"
  | "confirmDelete"
  | "noActiveNote"
  | "noEnabledRules"
  | "noValidRules"
  | "noMatches"
  | "settingsName"
  | "settingsDesc"
  | "settingsButton"
  | "from"
  | "to";

const DEFAULT_SETTINGS: ReplaceMemorySettings = {
  version: 1,
  rules: [],
};

const TEXT: Record<Language, Record<TextKey, string>> = {
  zh: {
    open: "打开替换记忆",
    runAllCommand: "按顺序执行全部已启用规则",
    title: "替换记忆",
    description: "规则会严格按照从上到下的顺序，对当前笔记依次执行。",
    empty: "还没有替换规则。点击下方按钮添加第一条。",
    addRule: "添加规则",
    runAll: "按顺序全部替换",
    findPlaceholder: "查找内容",
    replacePlaceholder: "替换为（可留空）",
    enabled: "启用此规则",
    drag: "拖动调整顺序",
    moveUp: "上移",
    moveDown: "下移",
    runOne: "执行这一条",
    delete: "删除",
    confirmDelete: "确定删除这条替换规则吗？",
    noActiveNote: "请先打开一个可编辑的 Markdown 笔记。",
    noEnabledRules: "没有可执行的已启用规则。",
    noValidRules: "没有可执行的规则；查找内容不能为空。",
    noMatches: "当前笔记中没有匹配内容。",
    settingsName: "管理替换记忆",
    settingsDesc: "添加、编辑和排序常用替换规则。",
    settingsButton: "打开",
    from: "查找",
    to: "替换为",
  },
  en: {
    open: "Open replacement memory",
    runAllCommand: "Run all enabled replacement rules in order",
    title: "Replace Memory",
    description: "Rules run sequentially from top to bottom on the current note.",
    empty: "No replacement rules yet. Add your first rule below.",
    addRule: "Add rule",
    runAll: "Run all in order",
    findPlaceholder: "Find text",
    replacePlaceholder: "Replace with (may be empty)",
    enabled: "Enable this rule",
    drag: "Drag to reorder",
    moveUp: "Move up",
    moveDown: "Move down",
    runOne: "Run this rule",
    delete: "Delete",
    confirmDelete: "Delete this replacement rule?",
    noActiveNote: "Open an editable Markdown note first.",
    noEnabledRules: "There are no enabled rules to run.",
    noValidRules: "There are no valid rules to run; find text cannot be empty.",
    noMatches: "No matching text was found in the current note.",
    settingsName: "Manage replacement memory",
    settingsDesc: "Add, edit, and reorder reusable replacement rules.",
    settingsButton: "Open",
    from: "Find",
    to: "Replace with",
  },
};

function makeRule(): ReplacementRule {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    find: "",
    replace: "",
    enabled: true,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function sanitizeRule(value: unknown): ReplacementRule {
  if (!isRecord(value)) return makeRule();

  return {
    id: typeof value.id === "string" && value.id.length > 0 ? value.id : makeRule().id,
    find: typeof value.find === "string" ? value.find : "",
    replace: typeof value.replace === "string" ? value.replace : "",
    enabled: value.enabled !== false,
  };
}

function parseSettings(value: unknown): ReplaceMemorySettings {
  if (!isRecord(value)) return { ...DEFAULT_SETTINGS };

  return {
    version: 1,
    rules: Array.isArray(value.rules) ? value.rules.map(sanitizeRule) : [],
  };
}

function countOccurrences(text: string, search: string): number {
  if (search.length === 0) return 0;

  let count = 0;
  let position = 0;
  while (true) {
    const index = text.indexOf(search, position);
    if (index === -1) return count;
    count += 1;
    position = index + search.length;
  }
}

function clampCursor(editor: Editor, cursor: EditorPosition): EditorPosition {
  const lastLine = editor.lastLine();
  const line = Math.max(0, Math.min(cursor.line, lastLine));
  const ch = Math.max(0, Math.min(cursor.ch, editor.getLine(line).length));
  return { line, ch };
}

function createIconButton(icon: string, label: string): HTMLButtonElement {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "clickable-icon replace-memory-icon-button";
  button.setAttribute("aria-label", label);
  button.title = label;
  setIcon(button, icon);
  return button;
}

export default class ReplaceMemoryPlugin extends Plugin {
  settings: ReplaceMemorySettings = { ...DEFAULT_SETTINGS };
  language: Language = "en";

  async onload(): Promise<void> {
    this.language = navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
    await this.loadSettings();

    this.addRibbonIcon("replace-all", this.t("open"), () => this.openManager());

    this.addCommand({
      id: "open-replacement-memory",
      name: this.t("open"),
      callback: () => this.openManager(),
    });

    this.addCommand({
      id: "run-enabled-replacement-rules",
      name: this.t("runAllCommand"),
      editorCallback: async (editor: Editor) => {
        await this.applyRules(
          this.settings.rules.filter((rule) => rule.enabled),
          editor,
        );
      },
    });

    this.addSettingTab(new ReplaceMemorySettingTab(this.app, this));
  }

  t(key: TextKey): string {
    return TEXT[this.language][key];
  }

  sequenceText(index: number): string {
    return this.language === "zh" ? `第 ${index} 条` : `Rule ${index}`;
  }

  resultText(rules: number, matches: number): string {
    return this.language === "zh"
      ? `已执行 ${rules} 条规则，共替换 ${matches} 处。`
      : `Ran ${rules} rule(s) and replaced ${matches} occurrence(s).`;
  }

  async loadSettings(): Promise<void> {
    const loaded: unknown = await this.loadData();
    this.settings = parseSettings(loaded);
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }

  openManager(): void {
    new ReplaceMemoryModal(this.app, this).open();
  }

  async addRule(): Promise<void> {
    this.settings.rules.push(makeRule());
    await this.saveSettings();
  }

  async removeRule(id: string): Promise<void> {
    this.settings.rules = this.settings.rules.filter((rule) => rule.id !== id);
    await this.saveSettings();
  }

  async moveRule(id: string, direction: -1 | 1): Promise<void> {
    const index = this.settings.rules.findIndex((rule) => rule.id === id);
    if (index === -1) return;

    const target = index + direction;
    if (target < 0 || target >= this.settings.rules.length) return;

    const [rule] = this.settings.rules.splice(index, 1);
    if (!rule) return;
    this.settings.rules.splice(target, 0, rule);
    await this.saveSettings();
  }

  async moveRuleBefore(sourceId: string | null, targetId: string): Promise<void> {
    if (!sourceId || sourceId === targetId) return;

    const sourceIndex = this.settings.rules.findIndex((rule) => rule.id === sourceId);
    const targetIndex = this.settings.rules.findIndex((rule) => rule.id === targetId);
    if (sourceIndex === -1 || targetIndex === -1) return;

    const [rule] = this.settings.rules.splice(sourceIndex, 1);
    if (!rule) return;

    const adjustedTarget = sourceIndex < targetIndex ? targetIndex - 1 : targetIndex;
    this.settings.rules.splice(adjustedTarget, 0, rule);
    await this.saveSettings();
  }

  getActiveEditor(): Editor | null {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    return view?.editor ?? null;
  }

  async applyRules(rules: ReplacementRule[], suppliedEditor?: Editor): Promise<void> {
    if (rules.length === 0) {
      new Notice(this.t("noEnabledRules"));
      return;
    }

    const editor = suppliedEditor ?? this.getActiveEditor();
    if (!editor) {
      new Notice(this.t("noActiveNote"));
      return;
    }

    const validRules = rules.filter(
      (rule) => rule.find.length > 0 && rule.find !== rule.replace,
    );
    if (validRules.length === 0) {
      new Notice(this.t("noValidRules"));
      return;
    }

    const originalText = editor.getValue();
    let nextText = originalText;
    let executedRules = 0;
    let totalMatches = 0;

    for (const rule of validRules) {
      const matches = countOccurrences(nextText, rule.find);
      if (matches === 0) continue;

      nextText = nextText.split(rule.find).join(rule.replace);
      executedRules += 1;
      totalMatches += matches;
    }

    if (totalMatches === 0 || nextText === originalText) {
      new Notice(this.t("noMatches"));
      return;
    }

    const selectionFrom = editor.getCursor("from");
    const selectionTo = editor.getCursor("to");
    const scroll = editor.getScrollInfo();

    editor.setValue(nextText);
    editor.setSelection(
      clampCursor(editor, selectionFrom),
      clampCursor(editor, selectionTo),
    );
    editor.scrollTo(scroll.left, scroll.top);

    new Notice(this.resultText(executedRules, totalMatches));
  }
}

class ReplaceMemoryModal extends Modal {
  private draggedId: string | null = null;

  constructor(
    app: App,
    private readonly plugin: ReplaceMemoryPlugin,
  ) {
    super(app);
  }

  onOpen(): void {
    this.modalEl.classList.add("replace-memory-modal");
    this.setTitle(this.plugin.t("title"));
    this.render();
  }

  onClose(): void {
    this.contentEl.replaceChildren();
    void this.plugin.saveSettings();
  }

  private render(): void {
    const { contentEl } = this;
    contentEl.replaceChildren();

    const description = document.createElement("p");
    description.className = "replace-memory-description";
    description.textContent = this.plugin.t("description");
    contentEl.appendChild(description);

    const list = document.createElement("div");
    list.className = "replace-memory-list";
    contentEl.appendChild(list);

    if (this.plugin.settings.rules.length === 0) {
      const empty = document.createElement("div");
      empty.className = "replace-memory-empty";
      empty.textContent = this.plugin.t("empty");
      list.appendChild(empty);
    } else {
      this.plugin.settings.rules.forEach((rule, index) => {
        list.appendChild(this.createRuleRow(rule, index));
      });
    }

    const footer = document.createElement("div");
    footer.className = "replace-memory-footer";

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.textContent = this.plugin.t("addRule");
    addButton.addEventListener("click", async () => {
      await this.plugin.addRule();
      this.render();
      this.contentEl
        .querySelector<HTMLInputElement>(".replace-memory-row:last-child .replace-memory-find")
        ?.focus();
    });

    const runAllButton = document.createElement("button");
    runAllButton.type = "button";
    runAllButton.className = "mod-cta";
    runAllButton.textContent = this.plugin.t("runAll");
    runAllButton.addEventListener("click", async () => {
      await this.plugin.applyRules(
        this.plugin.settings.rules.filter((rule) => rule.enabled),
      );
    });

    footer.append(addButton, runAllButton);
    contentEl.appendChild(footer);
  }

  private createRuleRow(rule: ReplacementRule, index: number): HTMLDivElement {
    const row = document.createElement("div");
    row.className = `replace-memory-row${rule.enabled ? "" : " is-disabled"}`;
    row.dataset.ruleId = rule.id;

    const dragHandle = createIconButton("grip-vertical", this.plugin.t("drag"));
    dragHandle.classList.add("replace-memory-drag-handle");
    dragHandle.draggable = true;
    dragHandle.addEventListener("dragstart", (event: DragEvent) => {
      this.draggedId = rule.id;
      row.classList.add("is-dragging");
      event.dataTransfer?.setData("text/plain", rule.id);
      if (event.dataTransfer) event.dataTransfer.effectAllowed = "move";
    });
    dragHandle.addEventListener("dragend", () => {
      this.draggedId = null;
      row.classList.remove("is-dragging");
      this.contentEl
        .querySelectorAll<HTMLElement>(".replace-memory-row.is-drop-target")
        .forEach((element) => element.classList.remove("is-drop-target"));
    });

    const enabledLabel = document.createElement("label");
    enabledLabel.className = "replace-memory-enabled";
    enabledLabel.title = this.plugin.t("enabled");

    const enabledInput = document.createElement("input");
    enabledInput.type = "checkbox";
    enabledInput.checked = rule.enabled;
    enabledInput.setAttribute("aria-label", this.plugin.t("enabled"));
    enabledInput.addEventListener("change", () => {
      rule.enabled = enabledInput.checked;
      row.classList.toggle("is-disabled", !rule.enabled);
      void this.plugin.saveSettings();
    });
    enabledLabel.appendChild(enabledInput);

    const sequence = document.createElement("span");
    sequence.className = "replace-memory-sequence";
    sequence.textContent = `${index + 1}`;
    sequence.setAttribute("aria-label", this.plugin.sequenceText(index + 1));
    sequence.title = this.plugin.sequenceText(index + 1);

    const findInput = document.createElement("input");
    findInput.type = "text";
    findInput.className = "replace-memory-find";
    findInput.placeholder = this.plugin.t("findPlaceholder");
    findInput.value = rule.find;
    findInput.title = rule.find;
    findInput.setAttribute("aria-label", this.plugin.t("from"));
    findInput.addEventListener("input", () => {
      rule.find = findInput.value;
      findInput.title = findInput.value;
      void this.plugin.saveSettings();
    });

    const arrow = document.createElement("span");
    arrow.className = "replace-memory-arrow";
    arrow.textContent = "→";
    arrow.setAttribute("aria-hidden", "true");

    const replaceInput = document.createElement("input");
    replaceInput.type = "text";
    replaceInput.className = "replace-memory-replace";
    replaceInput.placeholder = this.plugin.t("replacePlaceholder");
    replaceInput.value = rule.replace;
    replaceInput.title = rule.replace;
    replaceInput.setAttribute("aria-label", this.plugin.t("to"));
    replaceInput.addEventListener("input", () => {
      rule.replace = replaceInput.value;
      replaceInput.title = replaceInput.value;
      void this.plugin.saveSettings();
    });

    const actions = document.createElement("div");
    actions.className = "replace-memory-actions";

    const upButton = createIconButton("chevron-up", this.plugin.t("moveUp"));
    upButton.disabled = index === 0;
    upButton.addEventListener("click", async () => {
      await this.plugin.moveRule(rule.id, -1);
      this.render();
    });

    const downButton = createIconButton("chevron-down", this.plugin.t("moveDown"));
    downButton.disabled = index === this.plugin.settings.rules.length - 1;
    downButton.addEventListener("click", async () => {
      await this.plugin.moveRule(rule.id, 1);
      this.render();
    });

    const runButton = createIconButton("play", this.plugin.t("runOne"));
    runButton.addEventListener("click", async () => {
      await this.plugin.applyRules([rule]);
    });

    const deleteButton = createIconButton("trash-2", this.plugin.t("delete"));
    deleteButton.classList.add("replace-memory-delete");
    deleteButton.addEventListener("click", async () => {
      if (!window.confirm(this.plugin.t("confirmDelete"))) return;
      await this.plugin.removeRule(rule.id);
      this.render();
    });

    actions.append(upButton, downButton, runButton, deleteButton);
    row.append(
      dragHandle,
      enabledLabel,
      sequence,
      findInput,
      arrow,
      replaceInput,
      actions,
    );

    row.addEventListener("dragover", (event: DragEvent) => {
      if (!this.draggedId || this.draggedId === rule.id) return;
      event.preventDefault();
      row.classList.add("is-drop-target");
      if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
    });
    row.addEventListener("dragleave", () => row.classList.remove("is-drop-target"));
    row.addEventListener("drop", async (event: DragEvent) => {
      event.preventDefault();
      row.classList.remove("is-drop-target");
      const sourceId = this.draggedId ?? event.dataTransfer?.getData("text/plain") ?? null;
      await this.plugin.moveRuleBefore(sourceId, rule.id);
      this.draggedId = null;
      this.render();
    });

    return row;
  }
}

class ReplaceMemorySettingTab extends PluginSettingTab {
  constructor(
    app: App,
    private readonly plugin: ReplaceMemoryPlugin,
  ) {
    super(app, plugin);
  }

  display(): void {
    this.containerEl.replaceChildren();
    new Setting(this.containerEl)
      .setName(this.plugin.t("settingsName"))
      .setDesc(this.plugin.t("settingsDesc"))
      .addButton((button) => {
        button.setButtonText(this.plugin.t("settingsButton"));
        button.onClick(() => this.plugin.openManager());
      });
  }
}
