// @ts-nocheck
// Source snapshot for Replace Memory 0.1.6
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
const SETTINGS_VERSION = 4;
function makeId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
function makePage(name, rules = []) {
    return {
        id: makeId(),
        name,
        rules,
    };
}
function makeDefaultSettings() {
    const firstPage = makePage("1");
    return {
        version: SETTINGS_VERSION,
        pages: [firstPage],
        activePageId: firstPage.id,
        pendingReference: null,
    };
}
const TEXT = {
    zh: {
        open: "打开记忆替换",
        runAllCommand: "按顺序执行当前页全部已启用规则",
        title: "记忆替换",
        description: "当前页规则会严格按照从上到下的顺序，对当前笔记依次执行。",
        empty: "当前页还没有替换规则。点击下方按钮添加第一条。",
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
        noEnabledRules: "当前页没有可执行的已启用规则。",
        noValidRules: "当前页没有可执行的规则；查找内容不能为空。",
        noMatches: "当前笔记中没有匹配内容。",
        settingsName: "管理记忆替换",
        settingsDesc: "添加、编辑和排序常用替换规则。",
        settingsButton: "打开",
        from: "查找",
        to: "替换为",
        addPage: "添加页面",
        renamePage: "重命名页面",
        deletePage: "删除页面",
        confirmDeletePage: "确定删除页面“{name}”及其中的全部规则吗？",
        cannotDeleteLastPage: "至少需要保留一个页面。",
        pageNamePrompt: "请输入页面名称",
        emptyPageName: "页面名称不能为空。",
        duplicatePageName: "已经存在同名页面。",
        save: "保存",
        cancel: "取消",
        quickReference: "快速引用",
        captureReference: "记录选中内容为待引用",
        insertReference: "插入待引用内容",
        clearReference: "清空待引用内容",
        noSelection: "请先在当前笔记中选中一段或连续多段文字。",
        noPendingReference: "目前没有待引用内容。",
        quickReferenceHelp: "选中文字后右键记录，再将光标放到目标位置插入引用。",
        pendingReference: "待引用内容",
        source: "来源",
        paragraphCount: "段数",
    },
    en: {
        open: "Open replacement memory",
        runAllCommand: "Run all enabled rules on the current page in order",
        title: "Replace Memory",
        description: "Rules on the current page run sequentially from top to bottom on the current note.",
        empty: "No replacement rules on this page yet. Add your first rule below.",
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
        noEnabledRules: "There are no enabled rules on the current page to run.",
        noValidRules: "There are no valid rules on the current page; find text cannot be empty.",
        noMatches: "No matching text was found in the current note.",
        settingsName: "Manage replacement memory",
        settingsDesc: "Add, edit, and reorder reusable replacement rules.",
        settingsButton: "Open",
        from: "Find",
        to: "Replace with",
        addPage: "Add page",
        renamePage: "Rename page",
        deletePage: "Delete page",
        confirmDeletePage: "Delete page “{name}” and all rules on it?",
        cannotDeleteLastPage: "At least one page must remain.",
        pageNamePrompt: "Enter a page name",
        emptyPageName: "Page name cannot be empty.",
        duplicatePageName: "A page with this name already exists.",
        save: "Save",
        cancel: "Cancel",
        quickReference: "Quick reference",
        captureReference: "Save selected text for reference",
        insertReference: "Insert pending reference",
        clearReference: "Clear pending reference",
        noSelection: "Select one paragraph or several consecutive paragraphs first.",
        noPendingReference: "There is no pending reference.",
        quickReferenceHelp: "Select text and save it from the context menu, then place the cursor and insert the reference.",
        pendingReference: "Pending reference",
        source: "Source",
        paragraphCount: "Paragraphs",
    },
};
function makeRule() {
    return {
        id: makeId(),
        find: "",
        replace: "",
        enabled: true,
    };
}
function isRecord(value) {
    return typeof value === "object" && value !== null;
}
function sanitizeRule(value) {
    if (!isRecord(value))
        return makeRule();
    return {
        id: typeof value.id === "string" && value.id.length > 0 ? value.id : makeRule().id,
        find: typeof value.find === "string" ? value.find : "",
        replace: typeof value.replace === "string" ? value.replace : "",
        enabled: value.enabled !== false,
    };
}
function sanitizeRuleList(value) {
    return Array.isArray(value) ? value.map(sanitizeRule) : [];
}
function sanitizeNamedPage(value, fallbackName) {
    if (!isRecord(value))
        return null;
    const name = typeof value.name === "string" && value.name.trim().length > 0
        ? value.name.trim()
        : fallbackName;
    const id = typeof value.id === "string" && value.id.length > 0 ? value.id : makeId();
    return {
        id,
        name,
        rules: sanitizeRuleList(value.rules),
    };
}
function sanitizePendingReference(value) {
    var _a;
    if (!isRecord(value))
        return null;
    if (typeof value.sourcePath !== "string" || value.sourcePath.length === 0)
        return null;
    if (!Array.isArray(value.blocks) || value.blocks.length === 0)
        return null;
    const blocks = value.blocks
        .map((block) => {
        if (!isRecord(block))
            return null;
        if (typeof block.id !== "string" || !/^[A-Za-z0-9-]+$/.test(block.id))
            return null;
        return {
            id: block.id,
            preview: typeof block.preview === "string" ? block.preview : "",
        };
    })
        .filter((block) => block !== null);
    if (blocks.length === 0)
        return null;
    return {
        sourcePath: value.sourcePath,
        sourceName: typeof value.sourceName === "string" && value.sourceName.length > 0
            ? value.sourceName
            : (_a = value.sourcePath.replace(/\.md$/i, "").split("/").pop()) !== null && _a !== void 0 ? _a : value.sourcePath,
        blocks,
        createdAt: typeof value.createdAt === "number" ? value.createdAt : Date.now(),
    };
}
function extractBlockId(line) {
    var _a;
    const match = line.match(/(?:^|\s)\^([A-Za-z0-9-]+)\s*$/);
    return (_a = match === null || match === void 0 ? void 0 : match[1]) !== null && _a !== void 0 ? _a : null;
}
function createReferenceId(usedIds) {
    let id = "";
    do {
        id = `rmref-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
    } while (usedIds.has(id));
    usedIds.add(id);
    return id;
}
function makeBlockPreview(lines) {
    const cleaned = [...lines];
    const lastIndex = cleaned.length - 1;
    if (lastIndex >= 0) {
        cleaned[lastIndex] = cleaned[lastIndex].replace(/(?:^|\s)\^[A-Za-z0-9-]+\s*$/, "");
    }
    const preview = cleaned.join(" ").replace(/\s+/g, " ").trim();
    return preview.length > 120 ? `${preview.slice(0, 117)}...` : preview;
}
function markdownLinkPath(path) {
    return path.replace(/\.md$/i, "");
}
function parseSettings(value) {
    var _a, _b;
    const settings = makeDefaultSettings();
    if (!isRecord(value))
        return settings;
    let pages = [];
    if (Array.isArray(value.pages) && value.pages.length > 0) {
        const containsLegacyArrays = value.pages.some((page) => Array.isArray(page));
        if (containsLegacyArrays) {
            // Migrate v0.1.4: retain page 1 and every page through the last page
            // that has rules or was active, while allowing fresh/empty installs to start with one page.
            const legacyPages = value.pages.map(sanitizeRuleList);
            const requestedIndex = typeof value.activePage === "number" ? Math.trunc(value.activePage) : 0;
            let lastRelevantIndex = Math.max(0, requestedIndex);
            legacyPages.forEach((rules, index) => {
                if (rules.length > 0)
                    lastRelevantIndex = Math.max(lastRelevantIndex, index);
            });
            pages = legacyPages
                .slice(0, Math.min(lastRelevantIndex + 1, legacyPages.length))
                .map((rules, index) => makePage(`${index + 1}`, rules));
        }
        else {
            pages = value.pages
                .map((page, index) => sanitizeNamedPage(page, `${index + 1}`))
                .filter((page) => page !== null);
        }
    }
    else if (Array.isArray(value.rules)) {
        // Migrate v0.1.3 and earlier: keep every existing rule on page 1.
        pages = [makePage("1", value.rules.map(sanitizeRule))];
    }
    if (pages.length === 0)
        pages = [makePage("1")];
    let activePageId = typeof value.activePageId === "string" ? value.activePageId : "";
    if (!pages.some((page) => page.id === activePageId)) {
        const requestedIndex = typeof value.activePage === "number" ? Math.trunc(value.activePage) : 0;
        const safeIndex = Math.max(0, Math.min(requestedIndex, pages.length - 1));
        activePageId = (_b = (_a = pages[safeIndex]) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : pages[0].id;
    }
    return {
        version: SETTINGS_VERSION,
        pages,
        activePageId,
        pendingReference: sanitizePendingReference(value.pendingReference),
    };
}
function countOccurrences(text, search) {
    if (search.length === 0)
        return 0;
    let count = 0;
    let position = 0;
    while (true) {
        const index = text.indexOf(search, position);
        if (index === -1)
            return count;
        count += 1;
        position = index + search.length;
    }
}
function clampCursor(editor, cursor) {
    const lastLine = editor.lastLine();
    const line = Math.max(0, Math.min(cursor.line, lastLine));
    const ch = Math.max(0, Math.min(cursor.ch, editor.getLine(line).length));
    return { line, ch };
}
function createIconButton(icon, label) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "clickable-icon replace-memory-icon-button";
    button.setAttribute("aria-label", label);
    button.title = label;
    (0, obsidian_1.setIcon)(button, icon);
    return button;
}
class ReplaceMemoryPlugin extends obsidian_1.Plugin {
    constructor() {
        super(...arguments);
        this.settings = makeDefaultSettings();
        this.language = "en";
    }
    async onload() {
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
            editorCallback: async (editor) => {
                await this.applyRules(this.getCurrentRules().filter((rule) => rule.enabled), editor);
            },
        });
        this.addCommand({
            id: "open-quick-reference",
            name: this.t("quickReference"),
            callback: () => this.openQuickReference(),
        });
        this.addCommand({
            id: "capture-selection-as-reference",
            name: this.t("captureReference"),
            editorCallback: async (editor, view) => {
                await this.captureSelection(editor, view);
            },
        });
        this.addCommand({
            id: "insert-pending-reference",
            name: this.t("insertReference"),
            editorCallback: async (editor, view) => {
                await this.insertPendingReference(editor, view);
            },
        });
        this.registerEvent(this.app.workspace.on("editor-menu", (menu, editor, view) => {
            // Always show the quick-reference actions. In some editor modes the
            // selection is not reliably available while the menu is being built,
            // so checking it here can incorrectly hide the command.
            menu.addItem((item) => {
                item.setTitle(this.t("captureReference"));
                item.setIcon("quote");
                item.onClick(() => void this.captureSelection(editor, view));
            });
            menu.addItem((item) => {
                item.setTitle(this.t("insertReference"));
                item.setIcon("text-cursor-input");
                item.setDisabled(!this.settings.pendingReference);
                item.onClick(() => void this.insertPendingReference(editor, view));
            });
        }));
        this.addSettingTab(new ReplaceMemorySettingTab(this.app, this));
    }
    t(key) {
        return TEXT[this.language][key];
    }
    sequenceText(index) {
        return this.language === "zh" ? `第 ${index} 条` : `Rule ${index}`;
    }
    pageText(name) {
        return this.language === "zh" ? `页面：${name}` : `Page: ${name}`;
    }
    formatText(key, values) {
        let text = this.t(key);
        for (const [name, value] of Object.entries(values)) {
            text = text.replace(`{${name}}`, value);
        }
        return text;
    }
    resultText(rules, matches) {
        return this.language === "zh"
            ? `已执行 ${rules} 条规则，共替换 ${matches} 处。`
            : `Ran ${rules} rule(s) and replaced ${matches} occurrence(s).`;
    }
    referenceCapturedText(count) {
        return this.language === "zh"
            ? `已记录 ${count} 段待引用内容。`
            : `Saved ${count} paragraph(s) for reference.`;
    }
    referenceInsertedText(count) {
        return this.language === "zh"
            ? `已插入 ${count} 段引用。`
            : `Inserted ${count} reference(s).`;
    }
    getActivePage() {
        var _a;
        const active = this.settings.pages.find((page) => page.id === this.settings.activePageId);
        if (active)
            return active;
        const fallback = (_a = this.settings.pages[0]) !== null && _a !== void 0 ? _a : makePage("1");
        if (this.settings.pages.length === 0)
            this.settings.pages.push(fallback);
        this.settings.activePageId = fallback.id;
        return fallback;
    }
    getCurrentRules() {
        return this.getActivePage().rules;
    }
    async loadSettings() {
        const loaded = await this.loadData();
        this.settings = parseSettings(loaded);
    }
    async saveSettings() {
        await this.saveData(this.settings);
    }
    async setActivePage(pageId) {
        if (pageId === this.settings.activePageId)
            return;
        if (!this.settings.pages.some((page) => page.id === pageId))
            return;
        this.settings.activePageId = pageId;
        await this.saveSettings();
    }
    nextDefaultPageName() {
        const names = new Set(this.settings.pages.map((page) => page.name));
        let number = 1;
        while (names.has(`${number}`))
            number += 1;
        return `${number}`;
    }
    async addPage() {
        const page = makePage(this.nextDefaultPageName());
        this.settings.pages.push(page);
        this.settings.activePageId = page.id;
        await this.saveSettings();
    }
    async renamePage(pageId, requestedName) {
        const page = this.settings.pages.find((entry) => entry.id === pageId);
        if (!page)
            return false;
        const name = requestedName.trim();
        if (name.length === 0) {
            new obsidian_1.Notice(this.t("emptyPageName"));
            return false;
        }
        if (this.settings.pages.some((entry) => entry.id !== pageId && entry.name === name)) {
            new obsidian_1.Notice(this.t("duplicatePageName"));
            return false;
        }
        page.name = name;
        await this.saveSettings();
        return true;
    }
    async deletePage(pageId) {
        if (this.settings.pages.length <= 1) {
            new obsidian_1.Notice(this.t("cannotDeleteLastPage"));
            return false;
        }
        const pageIndex = this.settings.pages.findIndex((page) => page.id === pageId);
        if (pageIndex === -1)
            return false;
        this.settings.pages.splice(pageIndex, 1);
        if (this.settings.activePageId === pageId) {
            const nextIndex = Math.min(pageIndex, this.settings.pages.length - 1);
            this.settings.activePageId = this.settings.pages[nextIndex].id;
        }
        await this.saveSettings();
        return true;
    }
    openManager() {
        new ReplaceMemoryModal(this.app, this).open();
    }
    async addRule() {
        this.getCurrentRules().push(makeRule());
        await this.saveSettings();
    }
    async removeRule(id) {
        this.getActivePage().rules = this.getCurrentRules().filter((rule) => rule.id !== id);
        await this.saveSettings();
    }
    async moveRule(id, direction) {
        const rules = this.getCurrentRules();
        const index = rules.findIndex((rule) => rule.id === id);
        if (index === -1)
            return;
        const target = index + direction;
        if (target < 0 || target >= rules.length)
            return;
        const [rule] = rules.splice(index, 1);
        if (!rule)
            return;
        rules.splice(target, 0, rule);
        await this.saveSettings();
    }
    async moveRuleBefore(sourceId, targetId) {
        if (!sourceId || sourceId === targetId)
            return;
        const rules = this.getCurrentRules();
        const sourceIndex = rules.findIndex((rule) => rule.id === sourceId);
        const targetIndex = rules.findIndex((rule) => rule.id === targetId);
        if (sourceIndex === -1 || targetIndex === -1)
            return;
        const [rule] = rules.splice(sourceIndex, 1);
        if (!rule)
            return;
        const adjustedTarget = sourceIndex < targetIndex ? targetIndex - 1 : targetIndex;
        rules.splice(adjustedTarget, 0, rule);
        await this.saveSettings();
    }
    getActiveEditor() {
        var _a;
        const view = this.app.workspace.getActiveViewOfType(obsidian_1.MarkdownView);
        return (_a = view === null || view === void 0 ? void 0 : view.editor) !== null && _a !== void 0 ? _a : null;
    }
    getActiveMarkdownView() {
        return this.app.workspace.getActiveViewOfType(obsidian_1.MarkdownView);
    }
    openQuickReference() {
        new QuickReferenceModal(this.app, this).open();
    }
    async clearPendingReference() {
        this.settings.pendingReference = null;
        await this.saveSettings();
    }
    async captureSelection(editor, suppliedView) {
        if (editor.getSelection().trim().length === 0) {
            new obsidian_1.Notice(this.t("noSelection"));
            return false;
        }
        const view = suppliedView !== null && suppliedView !== void 0 ? suppliedView : this.getActiveMarkdownView();
        const file = view === null || view === void 0 ? void 0 : view.file;
        if (!file) {
            new obsidian_1.Notice(this.t("noActiveNote"));
            return false;
        }
        const from = editor.getCursor("from");
        const to = editor.getCursor("to");
        let startLine = from.line;
        let endLine = to.line;
        if (to.ch === 0 && endLine > startLine)
            endLine -= 1;
        while (startLine > 0 && editor.getLine(startLine - 1).trim().length > 0) {
            startLine -= 1;
        }
        while (endLine < editor.lastLine() && editor.getLine(endLine + 1).trim().length > 0) {
            endLine += 1;
        }
        const blocks = [];
        let line = startLine;
        while (line <= endLine) {
            while (line <= endLine && editor.getLine(line).trim().length === 0)
                line += 1;
            if (line > endLine)
                break;
            const blockStart = line;
            while (line <= endLine && editor.getLine(line).trim().length > 0)
                line += 1;
            blocks.push({ startLine: blockStart, endLine: line - 1 });
        }
        if (blocks.length === 0) {
            new obsidian_1.Notice(this.t("noSelection"));
            return false;
        }
        const usedIds = new Set();
        for (const match of editor.getValue().matchAll(/\^([A-Za-z0-9-]+)/g)) {
            if (match[1])
                usedIds.add(match[1]);
        }
        const pendingBlocks = [];
        const insertions = [];
        for (const block of blocks) {
            const lines = [];
            for (let index = block.startLine; index <= block.endLine; index += 1) {
                lines.push(editor.getLine(index));
            }
            const lastLine = editor.getLine(block.endLine);
            let id = extractBlockId(lastLine);
            if (!id) {
                id = createReferenceId(usedIds);
                insertions.push({
                    line: block.endLine,
                    ch: lastLine.length,
                    text: ` ^${id}`,
                });
            }
            pendingBlocks.push({
                id,
                preview: makeBlockPreview(lines),
            });
        }
        insertions
            .sort((left, right) => right.line - left.line)
            .forEach((insertion) => {
            editor.replaceRange(insertion.text, { line: insertion.line, ch: insertion.ch });
        });
        this.settings.pendingReference = {
            sourcePath: file.path,
            sourceName: file.basename,
            blocks: pendingBlocks,
            createdAt: Date.now(),
        };
        await this.saveSettings();
        new obsidian_1.Notice(this.referenceCapturedText(pendingBlocks.length));
        return true;
    }
    async insertPendingReference(editor, suppliedView) {
        const pending = this.settings.pendingReference;
        if (!pending) {
            new obsidian_1.Notice(this.t("noPendingReference"));
            return false;
        }
        const targetEditor = editor !== null && editor !== void 0 ? editor : this.getActiveEditor();
        const view = suppliedView !== null && suppliedView !== void 0 ? suppliedView : this.getActiveMarkdownView();
        if (!targetEditor || !(view === null || view === void 0 ? void 0 : view.file)) {
            new obsidian_1.Notice(this.t("noActiveNote"));
            return false;
        }
        const sameFile = view.file.path === pending.sourcePath;
        const source = markdownLinkPath(pending.sourcePath);
        const embeds = pending.blocks
            .map((block) => sameFile
            ? `![[#^${block.id}]]`
            : `![[${source}#^${block.id}]]`)
            .join("\n\n");
        const cursor = targetEditor.getCursor();
        const currentLine = targetEditor.getLine(cursor.line);
        const before = currentLine.slice(0, cursor.ch);
        const after = currentLine.slice(cursor.ch);
        const prefix = before.trim().length > 0 ? "\n\n" : "";
        const suffix = after.trim().length > 0 ? "\n\n" : "";
        const insertion = `${prefix}${embeds}${suffix}`;
        targetEditor.replaceRange(insertion, cursor);
        const insertionLines = insertion.split("\n");
        const endPosition = insertionLines.length === 1
            ? { line: cursor.line, ch: cursor.ch + insertionLines[0].length }
            : {
                line: cursor.line + insertionLines.length - 1,
                ch: insertionLines[insertionLines.length - 1].length,
            };
        targetEditor.setCursor(endPosition);
        new obsidian_1.Notice(this.referenceInsertedText(pending.blocks.length));
        return true;
    }
    async applyRules(rules, suppliedEditor) {
        if (rules.length === 0) {
            new obsidian_1.Notice(this.t("noEnabledRules"));
            return;
        }
        const editor = suppliedEditor !== null && suppliedEditor !== void 0 ? suppliedEditor : this.getActiveEditor();
        if (!editor) {
            new obsidian_1.Notice(this.t("noActiveNote"));
            return;
        }
        const validRules = rules.filter((rule) => rule.find.length > 0 && rule.find !== rule.replace);
        if (validRules.length === 0) {
            new obsidian_1.Notice(this.t("noValidRules"));
            return;
        }
        const originalText = editor.getValue();
        let nextText = originalText;
        let executedRules = 0;
        let totalMatches = 0;
        for (const rule of validRules) {
            const matches = countOccurrences(nextText, rule.find);
            if (matches === 0)
                continue;
            nextText = nextText.split(rule.find).join(rule.replace);
            executedRules += 1;
            totalMatches += matches;
        }
        if (totalMatches === 0 || nextText === originalText) {
            new obsidian_1.Notice(this.t("noMatches"));
            return;
        }
        const selectionFrom = editor.getCursor("from");
        const selectionTo = editor.getCursor("to");
        const scroll = editor.getScrollInfo();
        editor.setValue(nextText);
        editor.setSelection(clampCursor(editor, selectionFrom), clampCursor(editor, selectionTo));
        editor.scrollTo(scroll.left, scroll.top);
        new obsidian_1.Notice(this.resultText(executedRules, totalMatches));
    }
}
module.exports = ReplaceMemoryPlugin;
class ReplaceMemoryModal extends obsidian_1.Modal {
    constructor(app, plugin) {
        super(app);
        this.plugin = plugin;
        this.draggedId = null;
    }
    onOpen() {
        var _a;
        this.modalEl.classList.add("replace-memory-modal");
        this.setTitle(this.plugin.t("title"));
        const quickReferenceButton = document.createElement("button");
        quickReferenceButton.type = "button";
        quickReferenceButton.className = "replace-memory-title-action";
        quickReferenceButton.textContent = this.plugin.t("quickReference");
        quickReferenceButton.addEventListener("click", () => this.plugin.openQuickReference());
        const header = this.titleEl.parentElement;
        const closeButton = (_a = header === null || header === void 0 ? void 0 : header.querySelector(".modal-close-button")) !== null && _a !== void 0 ? _a : null;
        header === null || header === void 0 ? void 0 : header.insertBefore(quickReferenceButton, closeButton);
        this.render();
    }
    onClose() {
        this.contentEl.replaceChildren();
        void this.plugin.saveSettings();
    }
    render() {
        const { contentEl } = this;
        contentEl.replaceChildren();
        const description = document.createElement("p");
        description.className = "replace-memory-description";
        description.textContent = this.plugin.t("description");
        contentEl.appendChild(description);
        const list = document.createElement("div");
        list.className = "replace-memory-list";
        contentEl.appendChild(list);
        const rules = this.plugin.getCurrentRules();
        if (rules.length === 0) {
            const empty = document.createElement("div");
            empty.className = "replace-memory-empty";
            empty.textContent = this.plugin.t("empty");
            list.appendChild(empty);
        }
        else {
            rules.forEach((rule, index) => {
                list.appendChild(this.createRuleRow(rule, index));
            });
        }
        const footer = document.createElement("div");
        footer.className = "replace-memory-footer";
        const addButton = document.createElement("button");
        addButton.type = "button";
        addButton.textContent = this.plugin.t("addRule");
        addButton.addEventListener("click", async () => {
            var _a;
            await this.plugin.addRule();
            this.render();
            (_a = this.contentEl
                .querySelector(".replace-memory-row:last-child .replace-memory-find")) === null || _a === void 0 ? void 0 : _a.focus();
        });
        const pageTabs = document.createElement("div");
        pageTabs.className = "replace-memory-page-tabs";
        pageTabs.setAttribute("role", "tablist");
        for (const page of this.plugin.settings.pages) {
            const isActive = page.id === this.plugin.settings.activePageId;
            const pageButton = document.createElement("button");
            pageButton.type = "button";
            pageButton.className = `replace-memory-page-button${isActive ? " is-active" : ""}`;
            pageButton.textContent = page.name;
            pageButton.title = this.plugin.pageText(page.name);
            pageButton.setAttribute("aria-label", this.plugin.pageText(page.name));
            pageButton.setAttribute("role", "tab");
            pageButton.setAttribute("aria-selected", isActive ? "true" : "false");
            pageButton.addEventListener("click", async () => {
                await this.plugin.setActivePage(page.id);
                this.render();
            });
            pageButton.addEventListener("contextmenu", (event) => {
                event.preventDefault();
                this.showPageMenu(event, page);
            });
            pageTabs.appendChild(pageButton);
        }
        const addPageButton = document.createElement("button");
        addPageButton.type = "button";
        addPageButton.className = "replace-memory-page-button replace-memory-add-page-button";
        addPageButton.textContent = "+";
        addPageButton.title = this.plugin.t("addPage");
        addPageButton.setAttribute("aria-label", this.plugin.t("addPage"));
        addPageButton.addEventListener("click", async () => {
            await this.plugin.addPage();
            this.render();
        });
        pageTabs.appendChild(addPageButton);
        const runAllButton = document.createElement("button");
        runAllButton.type = "button";
        runAllButton.className = "mod-cta";
        runAllButton.textContent = this.plugin.t("runAll");
        runAllButton.addEventListener("click", async () => {
            await this.plugin.applyRules(this.plugin.getCurrentRules().filter((rule) => rule.enabled));
        });
        footer.append(addButton, pageTabs, runAllButton);
        contentEl.appendChild(footer);
    }
    showPageMenu(event, page) {
        const menu = new obsidian_1.Menu();
        menu.addItem((item) => {
            item.setTitle(this.plugin.t("renamePage"));
            item.setIcon("pencil");
            item.onClick(() => {
                new RenamePageModal(this.app, this.plugin, page, () => this.render()).open();
            });
        });
        menu.addItem((item) => {
            item.setTitle(this.plugin.t("deletePage"));
            item.setIcon("trash-2");
            item.setDisabled(this.plugin.settings.pages.length <= 1);
            item.onClick(async () => {
                if (this.plugin.settings.pages.length <= 1) {
                    new obsidian_1.Notice(this.plugin.t("cannotDeleteLastPage"));
                    return;
                }
                if (await this.plugin.deletePage(page.id))
                    this.render();
            });
        });
        menu.showAtMouseEvent(event);
    }
    createRuleRow(rule, index) {
        const row = document.createElement("div");
        row.className = `replace-memory-row${rule.enabled ? "" : " is-disabled"}`;
        row.dataset.ruleId = rule.id;
        const dragHandle = createIconButton("grip-vertical", this.plugin.t("drag"));
        dragHandle.classList.add("replace-memory-drag-handle");
        dragHandle.draggable = true;
        dragHandle.addEventListener("dragstart", (event) => {
            var _a;
            this.draggedId = rule.id;
            row.classList.add("is-dragging");
            (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text/plain", rule.id);
            if (event.dataTransfer)
                event.dataTransfer.effectAllowed = "move";
        });
        dragHandle.addEventListener("dragend", () => {
            this.draggedId = null;
            row.classList.remove("is-dragging");
            this.contentEl
                .querySelectorAll(".replace-memory-row.is-drop-target")
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
        downButton.disabled = index === this.plugin.getCurrentRules().length - 1;
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
            if (!window.confirm(this.plugin.t("confirmDelete")))
                return;
            await this.plugin.removeRule(rule.id);
            this.render();
        });
        actions.append(upButton, downButton, runButton, deleteButton);
        row.append(dragHandle, enabledLabel, sequence, findInput, arrow, replaceInput, actions);
        row.addEventListener("dragover", (event) => {
            if (!this.draggedId || this.draggedId === rule.id)
                return;
            event.preventDefault();
            row.classList.add("is-drop-target");
            if (event.dataTransfer)
                event.dataTransfer.dropEffect = "move";
        });
        row.addEventListener("dragleave", () => row.classList.remove("is-drop-target"));
        row.addEventListener("drop", async (event) => {
            var _a, _b, _c;
            event.preventDefault();
            row.classList.remove("is-drop-target");
            const sourceId = (_c = (_a = this.draggedId) !== null && _a !== void 0 ? _a : (_b = event.dataTransfer) === null || _b === void 0 ? void 0 : _b.getData("text/plain")) !== null && _c !== void 0 ? _c : null;
            await this.plugin.moveRuleBefore(sourceId, rule.id);
            this.draggedId = null;
            this.render();
        });
        return row;
    }
}
class QuickReferenceModal extends obsidian_1.Modal {
    constructor(app, plugin) {
        super(app);
        this.plugin = plugin;
    }
    onOpen() {
        this.modalEl.classList.add("replace-memory-quick-reference-modal");
        this.setTitle(this.plugin.t("quickReference"));
        this.render();
    }
    render() {
        this.contentEl.replaceChildren();
        const help = document.createElement("p");
        help.className = "replace-memory-quick-reference-help";
        help.textContent = this.plugin.t("quickReferenceHelp");
        this.contentEl.appendChild(help);
        const pending = this.plugin.settings.pendingReference;
        if (!pending) {
            const empty = document.createElement("div");
            empty.className = "replace-memory-empty";
            empty.textContent = this.plugin.t("noPendingReference");
            this.contentEl.appendChild(empty);
        }
        else {
            const summary = document.createElement("div");
            summary.className = "replace-memory-reference-summary";
            summary.textContent = `${this.plugin.t("source")}：${pending.sourceName} · ${this.plugin.t("paragraphCount")}：${pending.blocks.length}`;
            this.contentEl.appendChild(summary);
            const previews = document.createElement("div");
            previews.className = "replace-memory-reference-previews";
            pending.blocks.forEach((block, index) => {
                const preview = document.createElement("div");
                preview.className = "replace-memory-reference-preview";
                preview.textContent = `${index + 1}. ${block.preview || `^${block.id}`}`;
                previews.appendChild(preview);
            });
            this.contentEl.appendChild(previews);
        }
        const actions = document.createElement("div");
        actions.className = "replace-memory-reference-actions";
        const captureButton = document.createElement("button");
        captureButton.type = "button";
        captureButton.textContent = this.plugin.t("captureReference");
        captureButton.addEventListener("click", async () => {
            const editor = this.plugin.getActiveEditor();
            const view = this.plugin.getActiveMarkdownView();
            if (!editor || !view) {
                new obsidian_1.Notice(this.plugin.t("noActiveNote"));
                return;
            }
            if (await this.plugin.captureSelection(editor, view))
                this.render();
        });
        actions.appendChild(captureButton);
        if (pending) {
            const clearButton = document.createElement("button");
            clearButton.type = "button";
            clearButton.textContent = this.plugin.t("clearReference");
            clearButton.addEventListener("click", async () => {
                await this.plugin.clearPendingReference();
                this.render();
            });
            const insertButton = document.createElement("button");
            insertButton.type = "button";
            insertButton.className = "mod-cta";
            insertButton.textContent = this.plugin.t("insertReference");
            insertButton.addEventListener("click", async () => {
                if (await this.plugin.insertPendingReference())
                    this.close();
            });
            actions.append(clearButton, insertButton);
        }
        this.contentEl.appendChild(actions);
    }
    onClose() {
        this.contentEl.replaceChildren();
    }
}
class RenamePageModal extends obsidian_1.Modal {
    constructor(app, plugin, page, onRenamed) {
        super(app);
        this.plugin = plugin;
        this.page = page;
        this.onRenamed = onRenamed;
    }
    onOpen() {
        this.modalEl.classList.add("replace-memory-rename-modal");
        this.setTitle(this.plugin.t("renamePage"));
        const form = document.createElement("form");
        form.className = "replace-memory-rename-form";
        const input = document.createElement("input");
        input.type = "text";
        input.value = this.page.name;
        input.placeholder = this.plugin.t("pageNamePrompt");
        input.setAttribute("aria-label", this.plugin.t("pageNamePrompt"));
        const actions = document.createElement("div");
        actions.className = "replace-memory-rename-actions";
        const cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.textContent = this.plugin.t("cancel");
        cancelButton.addEventListener("click", () => this.close());
        const saveButton = document.createElement("button");
        saveButton.type = "submit";
        saveButton.className = "mod-cta";
        saveButton.textContent = this.plugin.t("save");
        actions.append(cancelButton, saveButton);
        form.append(input, actions);
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const renamed = await this.plugin.renamePage(this.page.id, input.value);
            if (!renamed) {
                input.focus();
                input.select();
                return;
            }
            this.onRenamed();
            this.close();
        });
        this.contentEl.appendChild(form);
        window.setTimeout(() => {
            input.focus();
            input.select();
        }, 0);
    }
    onClose() {
        this.contentEl.replaceChildren();
    }
}
class ReplaceMemorySettingTab extends obsidian_1.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        this.containerEl.replaceChildren();
        new obsidian_1.Setting(this.containerEl)
            .setName(this.plugin.t("settingsName"))
            .setDesc(this.plugin.t("settingsDesc"))
            .addButton((button) => {
            button.setButtonText(this.plugin.t("settingsButton"));
            button.onClick(() => this.plugin.openManager());
        });
    }
}
