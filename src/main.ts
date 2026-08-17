// @ts-nocheck
// Source snapshot matching the released main.js for Replace Memory 0.1.11.
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
        lastExportFolder: "",
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
        dragPage: "拖动调整页面顺序",
        renamePage: "重命名页面",
        duplicatePage: "复制页面",
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
        copyCurrentReference: "复制为引用",
        insertReference: "粘贴引用",
        locateReference: "定位此引用",
        noReferenceAtCursor: "请在已插入的引用上右键。",
        referenceFileNotFound: "找不到引用来源笔记。",
        referenceBlockNotFound: "找不到引用对应的原文，可能块编号已被删除。",
        referenceLocated: "已定位到引用原文。",
        clearReference: "清空待引用内容",
        noSelection: "请先在当前笔记中选中一段或连续多段文字。",
        noParagraphAtCursor: "请在需要引用的段落内右键。",
        copyReferenceFailed: "复制引用失败，请重试。",
        noPendingReference: "目前没有可粘贴的引用。",
        quickReferenceHelp: "选中文字后右键记录，再将光标放到目标位置插入引用。",
        pendingReference: "待引用内容",
        source: "来源",
        paragraphCount: "段数",
        imageCleanup: "清理未引用图",
        imageCleanupCommand: "清理未引用图",
        imageCleanupHelp: "仅清理能够高置信度判定为未引用的图片；扫描以当前编辑内容和文件实际内容为准。",
        scanImages: "扫描未引用图片",
        rescanImages: "重新扫描",
        scanningImages: "正在扫描图片引用…",
        noUnusedImages: "没有发现未引用图片。",
        unusedImagesFound: "发现未引用图片",
        selectAll: "全选",
        selectNone: "取消全选",
        deleteSelectedImages: "删除所选",
        openImage: "打开图片",
        imageCount: "张",
        confirmDeleteImages: "移到回收站",
        deletedImages: "已移入回收站",
        noImagesSelected: "请先选择需要删除的图片。",
        cleanupScanFailed: "扫描失败，请重试。",
        cleanupDeleteFailed: "部分图片删除失败，请检查后重试。",
        cleanupReady: "扫描完成",
        cleanupSafeNote: "以下图片已通过多重引用检查；点击后将全部移入 Obsidian 回收站。",
        close: "关闭",
        exportNotes: "导出所选笔记",
        exportNotesCommand: "导出所选笔记",
        exportMode: "导出方式",
        exportMarkdownAssets: "Markdown + 图片附件",
        exportPdfContinuous: "连续长页 PDF",
        exportPdfHint: "每个 Markdown 单独生成一个 PDF，不按 A4 分页，中间没有分页空白。",
        exportFolder: "导出到",
        exportFolderPlaceholder: "请选择导出文件夹",
        chooseExportFolder: "选择目录",
        selectedExportNotes: "已选择 {count} 篇笔记",
        exportFolderRequired: "请先选择导出目录。",
        exportFolderDialogFailed: "无法打开文件夹选择窗口。",
        selectNotes: "选择笔记",
        searchNotes: "搜索笔记…",
        selectedNotes: "已选择",
        selectAllNotes: "全选",
        clearSelection: "清空选择",
        startExport: "开始导出",
        exporting: "正在导出…",
        exportDone: "导出完成",
        exportFailed: "导出失败，请检查后重试。",
        exportNoFiles: "请至少选择一个 Markdown 文件。",
        exportPdfDesktopOnly: "连续长页 PDF 目前仅支持 Obsidian 桌面版。",
        exportBrowserMissing: "未找到 Microsoft Edge、Google Chrome 或 Chromium，无法生成连续长页 PDF。",
        exportOutput: "输出位置",
        exportOpenFolderHint: "导出完成：",
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
        dragPage: "Drag to reorder pages",
        renamePage: "Rename page",
        duplicatePage: "Duplicate page",
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
        copyCurrentReference: "Copy as reference",
        insertReference: "Paste reference",
        locateReference: "Locate reference source",
        noReferenceAtCursor: "Right-click an inserted block reference first.",
        referenceFileNotFound: "The source note for this reference could not be found.",
        referenceBlockNotFound: "The referenced block could not be found. Its block ID may have been removed.",
        referenceLocated: "Located the referenced source block.",
        clearReference: "Clear pending reference",
        noSelection: "Select one paragraph or several consecutive paragraphs first.",
        noParagraphAtCursor: "Right-click inside the paragraph you want to reference.",
        copyReferenceFailed: "Could not copy the reference. Please try again.",
        noPendingReference: "There is no copied reference to paste.",
        quickReferenceHelp: "Select text and save it from the context menu, then place the cursor and insert the reference.",
        pendingReference: "Pending reference",
        source: "Source",
        paragraphCount: "Paragraphs",
        imageCleanup: "Clean unused images",
        imageCleanupCommand: "Clean unused images",
        imageCleanupHelp: "Only high-confidence unused images are included. The scan uses current editor content and actual file content.",
        scanImages: "Scan unused images",
        rescanImages: "Scan again",
        scanningImages: "Scanning image references…",
        noUnusedImages: "No unused images found.",
        unusedImagesFound: "Unused images found",
        selectAll: "Select all",
        selectNone: "Select none",
        deleteSelectedImages: "Delete selected",
        openImage: "Open image",
        imageCount: "image(s)",
        confirmDeleteImages: "Move to trash",
        deletedImages: "Moved to trash",
        noImagesSelected: "Select at least one image to delete.",
        cleanupScanFailed: "Scan failed. Please try again.",
        cleanupDeleteFailed: "Some images could not be deleted. Please review and try again.",
        cleanupReady: "Scan complete",
        cleanupSafeNote: "These images passed multiple reference checks. Continuing moves all of them to the Obsidian trash.",
        close: "Close",
        exportNotes: "Export selected notes",
        exportNotesCommand: "Export selected notes",
        exportMode: "Export mode",
        exportMarkdownAssets: "Markdown + image attachments",
        exportPdfContinuous: "Continuous long-page PDF",
        exportPdfHint: "Each Markdown file becomes one PDF without A4-style page gaps.",
        exportFolder: "Export to",
        exportFolderPlaceholder: "Choose an export folder",
        chooseExportFolder: "Choose folder",
        selectedExportNotes: "{count} note(s) selected",
        exportFolderRequired: "Choose an export folder first.",
        exportFolderDialogFailed: "Could not open the folder picker.",
        selectNotes: "Select notes",
        searchNotes: "Search notes…",
        selectedNotes: "Selected",
        selectAllNotes: "Select all",
        clearSelection: "Clear selection",
        startExport: "Export",
        exporting: "Exporting…",
        exportDone: "Export complete",
        exportFailed: "Export failed. Please review and try again.",
        exportNoFiles: "Select at least one Markdown file.",
        exportPdfDesktopOnly: "Continuous long-page PDF is currently available on desktop only.",
        exportBrowserMissing: "Microsoft Edge, Google Chrome, or Chromium was not found, so PDF export cannot run.",
        exportOutput: "Output",
        exportOpenFolderHint: "Export complete: ",
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
function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const IMAGE_EXTENSIONS = new Set(["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp", "avif"]);
function isImageFile(file) {
    return !!file && typeof file.extension === "string" && IMAGE_EXTENSIONS.has(file.extension.toLowerCase());
}
function formatBytes(size) {
    if (!Number.isFinite(size) || size <= 0)
        return "0 B";
    const units = ["B", "KB", "MB", "GB"];
    let value = size;
    let index = 0;
    while (value >= 1024 && index < units.length - 1) {
        value /= 1024;
        index += 1;
    }
    const digits = index === 0 ? 0 : value >= 10 ? 1 : 2;
    return `${value.toFixed(digits)} ${units[index]}`;
}
function cleanLinkTarget(value) {
    let target = String(value !== null && value !== void 0 ? value : "").trim();
    if (target.startsWith("<") && target.endsWith(">"))
        target = target.slice(1, -1);
    target = target.replace(/^['"]|['"]$/g, "");
    target = target.split("#")[0].split("?")[0].trim();
    try {
        target = decodeURIComponent(target);
    }
    catch (_a) {
    }
    return target;
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
        lastExportFolder: typeof value.lastExportFolder === "string" ? value.lastExportFolder : "",
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
        this.contextReferenceTarget = null;
        this.exportSelectedPaths = new Set();
        this.exportSelectionRenderQueued = false;
        this.exportSelectionGesturePath = null;
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
            id: "copy-as-reference",
            name: this.t("copyCurrentReference"),
            editorCallback: async (editor, view) => {
                await this.copyCurrentParagraphReference(editor, view);
            },
        });
        this.addCommand({
            id: "paste-reference",
            name: this.t("insertReference"),
            editorCallback: async (editor, view) => {
                await this.insertPendingReference(editor, view);
            },
        });
        this.addCommand({
            id: "locate-reference-source",
            name: this.t("locateReference"),
            editorCallback: async (editor, view) => {
                await this.locateReferenceSource(editor, view);
            },
        });
        this.registerDomEvent(document, "contextmenu", (event) => {
            this.contextReferenceTarget = this.referenceTargetFromDom(event.target);
        });
        this.registerEvent(this.app.workspace.on("editor-menu", (menu, editor, view) => {
            const contextReference = this.contextReferenceTarget || this.referenceTargetAtCursor(editor);
            this.contextReferenceTarget = null;
            menu.addItem((item) => {
                item.setTitle(this.t("copyCurrentReference"));
                item.setIcon("copy");
                item.onClick(() => void this.copyCurrentParagraphReference(editor, view));
            });
            menu.addItem((item) => {
                item.setTitle(this.t("insertReference"));
                item.setIcon("clipboard-paste");
                item.setDisabled(!this.settings.pendingReference);
                item.onClick(() => void this.insertPendingReference(editor, view));
            });
            menu.addItem((item) => {
                item.setTitle(this.t("locateReference"));
                item.setIcon("link");
                item.setDisabled(!contextReference);
                item.onClick(() => void this.locateReferenceSource(editor, view, contextReference));
            });
        }));
        this.addCommand({
            id: "open-unused-image-cleanup",
            name: this.t("imageCleanupCommand"),
            callback: () => this.openImageCleanup(),
        });
        if (obsidian_1.Platform.isDesktopApp) {
            // Obsidian uses Ctrl/Cmd + click to open notes. For export selection we
            // intercept that gesture only inside the file explorer and turn it into
            // a toggleable multi-selection without opening the note.
            // Capture Ctrl/Cmd + click at the window level before the file explorer
            // can interpret it as "open note". Pointerdown toggles selection; all
            // follow-up mouse/pointer events for that gesture are swallowed.
            const exportPointerDown = (event) => this.handleExportSelectionPointerDown(event);
            const exportSuppress = (event) => this.handleExportSelectionSuppression(event);
            window.addEventListener("pointerdown", exportPointerDown, true);
            window.addEventListener("mousedown", exportSuppress, true);
            window.addEventListener("pointerup", exportSuppress, true);
            window.addEventListener("mouseup", exportSuppress, true);
            window.addEventListener("click", exportSuppress, true);
            window.addEventListener("dblclick", exportSuppress, true);
            this.register(() => {
                window.removeEventListener("pointerdown", exportPointerDown, true);
                window.removeEventListener("mousedown", exportSuppress, true);
                window.removeEventListener("pointerup", exportSuppress, true);
                window.removeEventListener("mouseup", exportSuppress, true);
                window.removeEventListener("click", exportSuppress, true);
                window.removeEventListener("dblclick", exportSuppress, true);
            });
            this.registerDomEvent(document, "click", (event) => {
                this.handleExportSelectionClick(event);
            }, true);
            this.registerDomEvent(document, "contextmenu", () => {
                this.queueExportSelectionRender();
            }, true);
            if (document.body && typeof MutationObserver !== "undefined") {
                const observer = new MutationObserver(() => {
                    if (this.exportSelectedPaths.size > 0)
                        this.queueExportSelectionRender();
                });
                observer.observe(document.body, { childList: true, subtree: true });
                this.register(() => observer.disconnect());
            }
            this.registerEvent(this.app.workspace.on("file-menu", (menu, file) => {
                if (!file || String(file.extension || "").toLowerCase() !== "md")
                    return;
                const exportFiles = this.exportFilesForContext(file);
                menu.addItem((item) => {
                    item.setTitle(this.exportMenuTitle(exportFiles.length));
                    item.setIcon("download");
                    item.setSection("replace-memory-export");
                    item.onClick(() => this.openExportNotes(exportFiles));
                });
            }));
            this.registerEvent(this.app.workspace.on("files-menu", (menu, files) => {
                const markdownFiles = Array.isArray(files)
                    ? files.filter((file) => file && String(file.extension || "").toLowerCase() === "md")
                    : [];
                if (markdownFiles.length === 0)
                    return;
                menu.addItem((item) => {
                    item.setTitle(this.exportMenuTitle(markdownFiles.length));
                    item.setIcon("download");
                    item.setSection("replace-memory-export");
                    item.onClick(() => this.openExportNotes(markdownFiles));
                });
            }));
        }
        this.addSettingTab(new ReplaceMemorySettingTab(this.app, this));
    }
    exportMenuTitle(count) {
        if (count > 1)
            return this.language === "zh" ? `导出所选笔记（${count}）` : `Export selected notes (${count})`;
        return this.t("exportNotes");
    }
    fileExplorerTitleFromTarget(target) {
        if (!(target instanceof Element))
            return null;
        return target.closest(".nav-file-title");
    }
    filePathFromExplorerTitle(title) {
        if (!title)
            return null;
        const direct = title.getAttribute("data-path") || (title.dataset ? title.dataset.path : "");
        if (direct)
            return (0, obsidian_1.normalizePath)(direct);
        const pathHost = title.closest("[data-path]");
        const hosted = pathHost ? pathHost.getAttribute("data-path") : "";
        if (hosted)
            return (0, obsidian_1.normalizePath)(hosted);
        const name = String((title.querySelector(".nav-file-title-content") || title).textContent || "").trim();
        if (!name)
            return null;
        const matches = this.app.vault.getFiles().filter((file) => file.name === name || file.basename === name);
        return matches.length === 1 ? matches[0].path : null;
    }
    markdownFileFromExplorerEvent(event) {
        const title = this.fileExplorerTitleFromTarget(event.target);
        if (!title)
            return null;
        const path = this.filePathFromExplorerTitle(title);
        if (!path)
            return null;
        const file = this.app.vault.getAbstractFileByPath(path);
        if (!(file instanceof obsidian_1.TFile) || String(file.extension || "").toLowerCase() !== "md")
            return null;
        return { title, file };
    }
    handleExportSelectionPointerDown(event) {
        if (event.button !== 0 || (!event.ctrlKey && !event.metaKey))
            return;
        const hit = this.markdownFileFromExplorerEvent(event);
        if (!hit)
            return;
        this.exportSelectionGesturePath = hit.file.path;
        event.preventDefault();
        event.stopPropagation();
        if (typeof event.stopImmediatePropagation === "function")
            event.stopImmediatePropagation();
        if (this.exportSelectedPaths.has(hit.file.path))
            this.exportSelectedPaths.delete(hit.file.path);
        else
            this.exportSelectedPaths.add(hit.file.path);
        this.queueExportSelectionRender();
    }
    handleExportSelectionSuppression(event) {
        if ((!event.ctrlKey && !event.metaKey) || (typeof event.button === "number" && event.button !== 0))
            return;
        const hit = this.markdownFileFromExplorerEvent(event);
        if (!hit)
            return;
        // Suppress the complete Ctrl/Cmd-click gesture. The selection itself is
        // toggled only once, on pointerdown. This prevents Obsidian's native
        // Ctrl-click handler from opening the note in a tab.
        event.preventDefault();
        event.stopPropagation();
        if (typeof event.stopImmediatePropagation === "function")
            event.stopImmediatePropagation();
        if (event.type === "click" || event.type === "dblclick" || event.type === "mouseup" || event.type === "pointerup")
            this.exportSelectionGesturePath = null;
    }
    handleExportSelectionClick(event) {
        const hit = this.markdownFileFromExplorerEvent(event);
        if (!hit)
            return;
        if (event.ctrlKey || event.metaKey) {
            // The selection was already toggled on pointerdown. Swallow the
            // follow-up click so Obsidian does not open the note.
            event.preventDefault();
            event.stopPropagation();
            if (typeof event.stopImmediatePropagation === "function")
                event.stopImmediatePropagation();
            return;
        }
        // A normal click returns the file explorer to its native single-file
        // behavior and clears our temporary export selection.
        if (this.exportSelectedPaths.size > 0) {
            this.exportSelectedPaths.clear();
            this.queueExportSelectionRender();
        }
    }
    exportFilesForContext(file) {
        if (this.exportSelectedPaths.has(file.path)) {
            const files = [];
            for (const path of this.exportSelectedPaths) {
                const selected = this.app.vault.getAbstractFileByPath(path);
                if (selected instanceof obsidian_1.TFile && String(selected.extension || "").toLowerCase() === "md")
                    files.push(selected);
            }
            files.sort((a, b) => a.path.localeCompare(b.path));
            if (files.length > 0)
                return files;
        }
        return [file];
    }
    queueExportSelectionRender() {
        if (this.exportSelectionRenderQueued)
            return;
        this.exportSelectionRenderQueued = true;
        requestAnimationFrame(() => {
            this.exportSelectionRenderQueued = false;
            this.renderExportSelection();
        });
    }
    renderExportSelection() {
        const titles = document.querySelectorAll(".nav-file-title");
        for (const title of titles) {
            const path = this.filePathFromExplorerTitle(title);
            title.classList.toggle("replace-memory-export-selected", !!path && this.exportSelectedPaths.has(path));
        }
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
    referenceCopiedText(count) {
        return this.language === "zh"
            ? `已复制 ${count} 段引用片段。`
            : `Copied ${count} reference snippet(s).`;
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
    nextDuplicatePageName(sourceName) {
        const names = new Set(this.settings.pages.map((page) => page.name));
        const suffix = this.language === "zh" ? " 副本" : " Copy";
        const base = `${sourceName}${suffix}`;
        if (!names.has(base))
            return base;
        let index = 2;
        while (names.has(`${base} ${index}`))
            index += 1;
        return `${base} ${index}`;
    }
    async duplicatePage(pageId) {
        const pageIndex = this.settings.pages.findIndex((page) => page.id === pageId);
        if (pageIndex === -1)
            return false;
        const source = this.settings.pages[pageIndex];
        const copiedRules = source.rules.map((rule) => ({
            ...rule,
            id: makeId(),
        }));
        const copy = makePage(this.nextDuplicatePageName(source.name), copiedRules);
        this.settings.pages.splice(pageIndex + 1, 0, copy);
        this.settings.activePageId = copy.id;
        await this.saveSettings();
        return true;
    }
    async movePageRelative(sourceId, targetId, after = false) {
        if (!sourceId || !targetId || sourceId === targetId)
            return false;
        const pages = this.settings.pages;
        const sourceIndex = pages.findIndex((page) => page.id === sourceId);
        if (sourceIndex === -1)
            return false;
        const [source] = pages.splice(sourceIndex, 1);
        if (!source)
            return false;
        const targetIndex = pages.findIndex((page) => page.id === targetId);
        if (targetIndex === -1) {
            pages.splice(sourceIndex, 0, source);
            return false;
        }
        const insertIndex = targetIndex + (after ? 1 : 0);
        pages.splice(insertIndex, 0, source);
        await this.saveSettings();
        return true;
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
    parseReferenceTarget(rawValue) {
        if (typeof rawValue !== "string")
            return null;
        let value = rawValue.trim();
        if (value.startsWith("![["))
            value = value.slice(3);
        else if (value.startsWith("[["))
            value = value.slice(2);
        if (value.endsWith("]]"))
            value = value.slice(0, -2);
        const aliasIndex = value.indexOf("|");
        if (aliasIndex !== -1)
            value = value.slice(0, aliasIndex);
        try {
            value = decodeURIComponent(value);
        }
        catch (_a) {
            // Keep the original value when it is not URI encoded.
        }
        const markerIndex = value.lastIndexOf("#^");
        if (markerIndex === -1)
            return null;
        const sourcePath = value.slice(0, markerIndex).trim();
        const blockId = value.slice(markerIndex + 2).trim();
        if (!/^[A-Za-z0-9-]+$/.test(blockId))
            return null;
        return { sourcePath, blockId };
    }
    referenceTargetAtCursor(editor) {
        const cursor = editor.getCursor();
        const line = editor.getLine(cursor.line);
        const candidates = [];
        const pattern = /!?\[\[[^\]]*#\^[A-Za-z0-9-]+(?:\|[^\]]*)?\]\]/g;
        for (const match of line.matchAll(pattern)) {
            if (typeof match.index !== "number")
                continue;
            const target = this.parseReferenceTarget(match[0]);
            if (!target)
                continue;
            candidates.push({
                start: match.index,
                end: match.index + match[0].length,
                target,
            });
        }
        const direct = candidates.find((candidate) => cursor.ch >= candidate.start && cursor.ch <= candidate.end);
        if (direct)
            return direct.target;
        return candidates.length === 1 ? candidates[0].target : null;
    }
    referenceTargetFromDom(target) {
        if (!(target instanceof Element))
            return null;
        const element = target.closest(".internal-embed, [data-href*='#^'], a.internal-link");
        if (!element)
            return null;
        const values = [
            element.getAttribute("src"),
            element.getAttribute("data-href"),
            element.getAttribute("href"),
        ];
        const nested = element.querySelector("[src*='#^'], [data-href*='#^'], [href*='#^']");
        if (nested) {
            values.push(nested.getAttribute("src"), nested.getAttribute("data-href"), nested.getAttribute("href"));
        }
        for (const value of values) {
            const parsed = this.parseReferenceTarget(value);
            if (parsed)
                return parsed;
        }
        return null;
    }
    async locateReferenceSource(editor, suppliedView, suppliedTarget) {
        const view = suppliedView !== null && suppliedView !== void 0 ? suppliedView : this.getActiveMarkdownView();
        const currentFile = view === null || view === void 0 ? void 0 : view.file;
        if (!currentFile) {
            new obsidian_1.Notice(this.t("noActiveNote"));
            return false;
        }
        const target = suppliedTarget !== null && suppliedTarget !== void 0 ? suppliedTarget : this.referenceTargetAtCursor(editor);
        if (!target) {
            new obsidian_1.Notice(this.t("noReferenceAtCursor"));
            return false;
        }
        let sourceFile = currentFile;
        if (target.sourcePath.length > 0) {
            sourceFile = this.app.metadataCache.getFirstLinkpathDest(target.sourcePath, currentFile.path);
            if (!sourceFile) {
                new obsidian_1.Notice(this.t("referenceFileNotFound"));
                return false;
            }
        }
        const content = await this.app.vault.cachedRead(sourceFile);
        const lines = content.split(/\r?\n/);
        const blockPattern = new RegExp(`(?:^|\\s)\\^${escapeRegExp(target.blockId)}\\s*$`);
        const blockLine = lines.findIndex((line) => blockPattern.test(line));
        if (blockLine === -1) {
            new obsidian_1.Notice(this.t("referenceBlockNotFound"));
            return false;
        }
        let startLine = blockLine;
        while (startLine > 0 && lines[startLine - 1].trim().length > 0) {
            startLine -= 1;
        }
        let targetView = this.getActiveMarkdownView();
        if (!(targetView === null || targetView === void 0 ? void 0 : targetView.file) || targetView.file.path !== sourceFile.path) {
            const leaf = this.app.workspace.getLeaf(false);
            await leaf.openFile(sourceFile);
            targetView = leaf.view instanceof obsidian_1.MarkdownView
                ? leaf.view
                : this.getActiveMarkdownView();
        }
        const targetEditor = targetView === null || targetView === void 0 ? void 0 : targetView.editor;
        if (!targetEditor) {
            new obsidian_1.Notice(this.t("noActiveNote"));
            return false;
        }
        const endCh = targetEditor.getLine(blockLine).length;
        const from = { line: startLine, ch: 0 };
        const to = { line: blockLine, ch: endCh };
        targetEditor.setSelection(from, to);
        targetEditor.focus();
        if (typeof targetEditor.scrollIntoView === "function") {
            targetEditor.scrollIntoView({ from, to }, true);
        }
        new obsidian_1.Notice(this.t("referenceLocated"));
        return true;
    }
    async copyCurrentParagraphReference(editor, suppliedView) {
        const view = suppliedView !== null && suppliedView !== void 0 ? suppliedView : this.getActiveMarkdownView();
        const file = view === null || view === void 0 ? void 0 : view.file;
        if (!file) {
            new obsidian_1.Notice(this.t("noActiveNote"));
            return false;
        }
        const selection = editor.getSelection();
        let startLine;
        let endLine;
        if (selection.trim().length > 0) {
            const from = editor.getCursor("from");
            const to = editor.getCursor("to");
            startLine = from.line;
            endLine = to.line;
            if (to.ch === 0 && endLine > startLine)
                endLine -= 1;
            while (startLine > 0 && editor.getLine(startLine - 1).trim().length > 0) {
                startLine -= 1;
            }
            while (endLine < editor.lastLine() && editor.getLine(endLine + 1).trim().length > 0) {
                endLine += 1;
            }
        }
        else {
            const cursor = editor.getCursor();
            if (editor.getLine(cursor.line).trim().length === 0) {
                new obsidian_1.Notice(this.t("noParagraphAtCursor"));
                return false;
            }
            startLine = cursor.line;
            endLine = cursor.line;
            while (startLine > 0 && editor.getLine(startLine - 1).trim().length > 0) {
                startLine -= 1;
            }
            while (endLine < editor.lastLine() && editor.getLine(endLine + 1).trim().length > 0) {
                endLine += 1;
            }
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
            new obsidian_1.Notice(this.t("noParagraphAtCursor"));
            return false;
        }
        const usedIds = new Set();
        for (const match of editor.getValue().matchAll(/\^([A-Za-z0-9-]+)/g)) {
            if (match[1])
                usedIds.add(match[1]);
        }
        const copiedBlocks = [];
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
            copiedBlocks.push({
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
            blocks: copiedBlocks,
            createdAt: Date.now(),
        };
        await this.saveSettings();
        const source = markdownLinkPath(file.path);
        const snippet = copiedBlocks.map((block) => `![[${source}#^${block.id}]]`).join("\n\n");
        let copiedToSystemClipboard = false;
        try {
            const textarea = document.createElement("textarea");
            textarea.value = snippet;
            textarea.setAttribute("readonly", "");
            textarea.className = "replace-memory-clipboard-helper";
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            copiedToSystemClipboard = document.execCommand("copy");
            textarea.remove();
        }
        catch (_a) {
            copiedToSystemClipboard = false;
        }
        if (!copiedToSystemClipboard) {
            try {
                if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
                    await navigator.clipboard.writeText(snippet);
                    copiedToSystemClipboard = true;
                }
            }
            catch (_b) {
                copiedToSystemClipboard = false;
            }
        }
        if (!copiedToSystemClipboard) {
            new obsidian_1.Notice(this.t("copyReferenceFailed"));
            return true;
        }
        new obsidian_1.Notice(this.referenceCopiedText(copiedBlocks.length));
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
    openImageCleanup() {
        new UnusedImageCleanupModal(this.app, this).open();
    }
    openExportNotes(files = []) {
        const markdownFiles = Array.isArray(files)
            ? files.filter((file) => file && String(file.extension || "").toLowerCase() === "md")
            : [];
        if (markdownFiles.length === 0) {
            new obsidian_1.Notice(this.t("exportNoFiles"));
            return;
        }
        new ExportNotesModal(this.app, this, markdownFiles).open();
    }
    async pickExportDirectory(currentPath = "") {
        if (!obsidian_1.Platform.isDesktopApp)
            throw new Error(this.t("exportPdfDesktopOnly"));
        let dialog = null;
        try {
            const remote = require("@electron/remote");
            dialog = remote && remote.dialog ? remote.dialog : null;
        }
        catch (_a) {
        }
        if (!dialog) {
            try {
                const electron = require("electron");
                dialog = (electron && electron.dialog) || (electron && electron.remote && electron.remote.dialog) || null;
            }
            catch (_b) {
            }
        }
        if (!dialog || typeof dialog.showOpenDialog !== "function")
            throw new Error(this.t("exportFolderDialogFailed"));
        const result = await dialog.showOpenDialog({
            title: this.t("exportFolder"),
            defaultPath: currentPath || undefined,
            properties: ["openDirectory", "createDirectory"],
        });
        if (!result || result.canceled || !Array.isArray(result.filePaths) || !result.filePaths[0])
            return null;
        return result.filePaths[0];
    }
    uniqueFsPath(folder, baseName, extension = "", asDirectory = false) {
        const fs = require("fs");
        const path = require("path");
        const safeBase = this.safeExportName(baseName);
        const ext = extension ? (String(extension).startsWith(".") ? String(extension) : `.${extension}`) : "";
        let index = 1;
        while (true) {
            const suffix = index === 1 ? "" : `-${index}`;
            const candidate = path.join(folder, `${safeBase}${suffix}${asDirectory ? "" : ext}`);
            if (!fs.existsSync(candidate))
                return candidate;
            index += 1;
        }
    }
    sanitizeExportFolder(value) {
        const cleaned = String(value || "Replace Memory Export")
            .replace(/\\/g, "/")
            .split("/")
            .map((part) => part.trim().replace(/[<>:"|?*]/g, "-").replace(/^\.+$/, "-"))
            .filter((part) => part.length > 0 && part !== "." && part !== "..")
            .join("/");
        return cleaned || "Replace Memory Export";
    }
    safeExportName(value) {
        const cleaned = String(value || "note").trim().replace(/[<>:"/\\|?*]/g, "-").replace(/[. ]+$/g, "");
        return cleaned || "note";
    }
    exportHierarchyName(file) {
        const rawPath = String((file && file.path) || (file && file.name) || "note")
            .replace(/\\/g, "/")
            .replace(/^\/+|\/+$/g, "");
        const withoutExtension = rawPath.replace(/\.[^/.]+$/i, "");
        const parts = withoutExtension
            .split("/")
            .map((part) => this.safeExportName(part))
            .filter((part) => part.length > 0);
        if (parts.length === 0)
            return this.safeExportName(file && file.basename ? file.basename : "note");
        return this.safeExportName(parts.join("_"));
    }
    async ensureVaultFolder(path) {
        const parts = String(path || "").replace(/\\/g, "/").split("/").filter(Boolean);
        let current = "";
        for (const part of parts) {
            current = current ? `${current}/${part}` : part;
            const existing = this.app.vault.getAbstractFileByPath(current);
            if (!existing)
                await this.app.vault.createFolder(current);
        }
    }
    async uniqueVaultPath(folder, baseName, extension = "") {
        const safeBase = this.safeExportName(baseName);
        const ext = extension ? (extension.startsWith(".") ? extension : `.${extension}`) : "";
        let index = 1;
        while (true) {
            const suffix = index === 1 ? "" : `-${index}`;
            const candidate = `${folder}/${safeBase}${suffix}${ext}`;
            if (!this.app.vault.getAbstractFileByPath(candidate))
                return candidate;
            index += 1;
        }
    }
    getLiveMarkdownText(file) {
        try {
            const leaves = this.app.workspace.getLeavesOfType("markdown");
            for (const leaf of leaves) {
                const view = leaf && leaf.view;
                if (view && view.file && view.file.path === file.path && view.editor && typeof view.editor.getValue === "function")
                    return view.editor.getValue();
            }
        }
        catch (_a) {
        }
        return null;
    }
    async readMarkdownForExport(file) {
        const live = this.getLiveMarkdownText(file);
        return live !== null ? live : await this.app.vault.read(file);
    }
    resolveExportImage(rawLink, sourcePath) {
        let target = String(rawLink || "").trim();
        if (!target)
            return null;
        if (target.startsWith("<") && target.endsWith(">"))
            target = target.slice(1, -1);
        target = target.split("|")[0].trim();
        target = cleanLinkTarget(target);
        if (!target || /^(?:https?:|data:|obsidian:|app:|mailto:|tel:)/i.test(target))
            return null;
        const normalized = target.replace(/\\/g, "/").replace(/^\.\//, "");
        const direct = this.app.vault.getAbstractFileByPath(normalized.replace(/^\/+/, ""));
        if (direct && isImageFile(direct))
            return direct;
        const resolved = this.app.metadataCache.getFirstLinkpathDest(normalized, sourcePath);
        return resolved && isImageFile(resolved) ? resolved : null;
    }
    async exportMarkdownWithAssets(file, batchFolder) {
        const exportName = this.exportHierarchyName(file);
        const folderPath = await this.uniqueVaultPath(batchFolder, exportName, "");
        await this.ensureVaultFolder(folderPath);
        const attachmentsFolder = `${folderPath}/attachments`;
        let content = await this.readMarkdownForExport(file);
        const assets = new Map();
        const usedNames = new Set();
        const assignAsset = (image) => {
            if (assets.has(image.path))
                return assets.get(image.path);
            const rawExt = image.extension ? `.${image.extension}` : "";
            const rawBase = this.safeExportName(image.basename || image.name || "image");
            let name = `${rawBase}${rawExt}`;
            let index = 2;
            while (usedNames.has(name.toLowerCase())) {
                name = `${rawBase}-${index}${rawExt}`;
                index += 1;
            }
            usedNames.add(name.toLowerCase());
            assets.set(image.path, name);
            return name;
        };
        const replacements = [];
        for (const match of content.matchAll(/!\[\[([^\]]+)\]\]/g)) {
            if (match.index === undefined)
                continue;
            const inner = String(match[1] || "");
            const image = this.resolveExportImage(inner, file.path);
            if (!image)
                continue;
            const name = assignAsset(image);
            replacements.push({ start: match.index, end: match.index + match[0].length, text: `![](<attachments/${name}>)` });
        }
        for (const match of content.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)) {
            if (match.index === undefined)
                continue;
            let destination = String(match[2] || "").trim();
            if (destination.startsWith("<")) {
                const close = destination.indexOf(">");
                if (close > 0)
                    destination = destination.slice(1, close);
            }
            else {
                destination = destination.replace(/\s+(?:"[^"]*"|'[^']*')\s*$/, "").trim();
            }
            const image = this.resolveExportImage(destination, file.path);
            if (!image)
                continue;
            const name = assignAsset(image);
            const alt = String(match[1] || "");
            replacements.push({ start: match.index, end: match.index + match[0].length, text: `![${alt}](<attachments/${name}>)` });
        }
        replacements.sort((left, right) => right.start - left.start);
        for (const replacement of replacements)
            content = content.slice(0, replacement.start) + replacement.text + content.slice(replacement.end);
        if (assets.size > 0)
            await this.ensureVaultFolder(attachmentsFolder);
        for (const [sourcePath, name] of assets.entries()) {
            const source = this.app.vault.getAbstractFileByPath(sourcePath);
            if (!source)
                continue;
            const data = await this.app.vault.readBinary(source);
            await this.app.vault.createBinary(`${attachmentsFolder}/${name}`, data);
        }
        await this.app.vault.create(`${folderPath}/${exportName}.md`, content);
        return folderPath;
    }
    async blobToDataUrl(blob) {
        return await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result || ""));
            reader.onerror = () => reject(reader.error || new Error("Failed to read image"));
            reader.readAsDataURL(blob);
        });
    }
    exportDocumentCss() {
        return `
html,body{margin:0;padding:0;background:#fff;color:#1f2328;}
body{font-family:"Segoe UI","Microsoft YaHei","PingFang SC","Noto Sans CJK SC",Arial,sans-serif;}
.rm-export-note{width:794px;box-sizing:border-box;padding:48px 58px;font-size:16px;line-height:1.72;overflow-wrap:anywhere;}
h1,h2,h3,h4,h5,h6{line-height:1.3;margin:1.35em 0 .65em;font-weight:650;color:#111827;}
h1{font-size:2em;border-bottom:1px solid #e5e7eb;padding-bottom:.3em;} h2{font-size:1.55em;border-bottom:1px solid #eef0f2;padding-bottom:.25em;} h3{font-size:1.28em;}
p{margin:.7em 0;} a{color:#315efb;text-decoration:none;} strong{font-weight:700;} em{font-style:italic;}
blockquote{margin:1em 0;padding:.2em 1em;border-left:4px solid #d0d7de;color:#57606a;background:#f6f8fa;}
pre,code{font-family:Consolas,"SFMono-Regular",monospace;} code{background:#f3f4f6;padding:.12em .3em;border-radius:4px;} pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f6f8fa;padding:14px;border-radius:7px;} pre code{background:transparent;padding:0;}
ul,ol{padding-left:1.7em;} li{margin:.22em 0;} hr{border:0;border-top:1px solid #d8dee4;margin:1.6em 0;}
table{width:100%;border-collapse:collapse;margin:1em 0;} th,td{border:1px solid #d0d7de;padding:6px 9px;vertical-align:top;} th{background:#f6f8fa;}
img{display:block;max-width:100%;height:auto;margin:1em auto;} .internal-embed{max-width:100%;}
.callout{border:1px solid #d8dee4;border-radius:8px;padding:10px 14px;margin:1em 0;background:#f8fafc;}
@page{margin:0;}\n`;
    }
    async imageFileToDataUrl(file) {
        const mimeByExt = {
            png: "image/png",
            jpg: "image/jpeg",
            jpeg: "image/jpeg",
            gif: "image/gif",
            webp: "image/webp",
            svg: "image/svg+xml",
            bmp: "image/bmp",
            avif: "image/avif",
        };
        const data = await this.app.vault.readBinary(file);
        const mime = mimeByExt[String(file.extension || "").toLowerCase()] || "application/octet-stream";
        return await this.blobToDataUrl(new Blob([data], { type: mime }));
    }
    escapeHtmlAttribute(value) {
        return String(value || "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
    }
    async inlineLocalImagesForPdf(markdown, sourcePath) {
        const replacements = [];
        const addImageReplacement = async (start, end, rawTarget, altText, sizeHint) => {
            const image = this.resolveExportImage(rawTarget, sourcePath);
            if (!image)
                return;
            try {
                const dataUrl = await this.imageFileToDataUrl(image);
                const alt = this.escapeHtmlAttribute(altText || image.basename || image.name || "image");
                let sizeAttr = "";
                const size = String(sizeHint || "").trim();
                const sizeMatch = size.match(/^(\d+)(?:x(\d+))?$/i);
                if (sizeMatch) {
                    sizeAttr += ` width="${sizeMatch[1]}"`;
                    if (sizeMatch[2])
                        sizeAttr += ` height="${sizeMatch[2]}"`;
                }
                replacements.push({ start, end, text: `<img src="${dataUrl}" alt="${alt}"${sizeAttr}>` });
            }
            catch (_a) {
            }
        };
        for (const match of markdown.matchAll(/!\[\[([^\]]+)\]\]/g)) {
            if (match.index === undefined)
                continue;
            const inner = String(match[1] || "");
            const parts = inner.split("|");
            const rawTarget = parts[0] || "";
            const hint = parts.length > 1 ? parts[parts.length - 1] : "";
            await addImageReplacement(match.index, match.index + match[0].length, rawTarget, cleanLinkTarget(rawTarget).split("/").pop() || "image", hint);
        }
        for (const match of markdown.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)) {
            if (match.index === undefined)
                continue;
            let destination = String(match[2] || "").trim();
            if (destination.startsWith("<")) {
                const close = destination.indexOf(">");
                if (close > 0)
                    destination = destination.slice(1, close);
            }
            else {
                destination = destination.replace(/\s+(?:"[^"]*"|'[^']*')\s*$/, "").trim();
            }
            await addImageReplacement(match.index, match.index + match[0].length, destination, String(match[1] || ""), "");
        }
        replacements.sort((left, right) => right.start - left.start);
        let result = markdown;
        for (const replacement of replacements)
            result = result.slice(0, replacement.start) + replacement.text + result.slice(replacement.end);
        return result;
    }
    async renderMarkdownToStandaloneHtml(file) {
        const sourceMarkdown = await this.readMarkdownForExport(file);
        const markdown = await this.inlineLocalImagesForPdf(sourceMarkdown, file.path);
        const holder = document.createElement("div");
        holder.className = "markdown-rendered rm-export-render-source";
        document.body.appendChild(holder);
        try {
            await obsidian_1.MarkdownRenderer.renderMarkdown(markdown, holder, file.path, this);
            await new Promise((resolve) => window.setTimeout(resolve, 80));
            const images = Array.from(holder.querySelectorAll("img"));
            for (const image of images) {
                const src = image.getAttribute("src");
                if (!src || src.startsWith("data:"))
                    continue;
                try {
                    const response = await fetch(src);
                    if (!response.ok)
                        continue;
                    const blob = await response.blob();
                    image.setAttribute("src", await this.blobToDataUrl(blob));
                }
                catch (_a) {
                }
            }
            const title = this.exportHierarchyName(file).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
            return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><style>${this.exportDocumentCss()}</style></head><body><main class="rm-export-note">${holder.innerHTML}</main></body></html>`;
        }
        finally {
            holder.remove();
        }
    }
    findChromiumExecutable() {
        if (!obsidian_1.Platform.isDesktopApp)
            return null;
        const fs = require("fs");
        const path = require("path");
        const childProcess = require("child_process");
        const platform = process.platform;
        const candidates = [];
        if (platform === "win32") {
            const env = process.env;
            const roots = [env.PROGRAMFILES, env["PROGRAMFILES(X86)"], env.LOCALAPPDATA].filter(Boolean);
            for (const root of roots) {
                candidates.push(path.join(root, "Microsoft", "Edge", "Application", "msedge.exe"));
                candidates.push(path.join(root, "Google", "Chrome", "Application", "chrome.exe"));
                candidates.push(path.join(root, "Chromium", "Application", "chrome.exe"));
            }
        }
        else if (platform === "darwin") {
            candidates.push("/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge");
            candidates.push("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome");
            candidates.push("/Applications/Chromium.app/Contents/MacOS/Chromium");
        }
        else {
            for (const name of ["microsoft-edge", "microsoft-edge-stable", "google-chrome", "google-chrome-stable", "chromium", "chromium-browser"]) {
                try {
                    const result = childProcess.spawnSync("which", [name], { encoding: "utf8" });
                    const found = String(result.stdout || "").trim();
                    if (found)
                        candidates.push(found);
                }
                catch (_a) {
                }
            }
        }
        return candidates.find((candidate) => {
            try {
                return fs.existsSync(candidate);
            }
            catch (_a) {
                return false;
            }
        }) || null;
    }
    async nodeHttpJson(port, requestPath) {
        const http = require("http");
        return await new Promise((resolve, reject) => {
            const request = http.request({ hostname: "127.0.0.1", port, path: requestPath, method: "GET" }, (response) => {
                let body = "";
                response.setEncoding("utf8");
                response.on("data", (chunk) => body += chunk);
                response.on("end", () => {
                    try {
                        resolve(JSON.parse(body));
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            });
            request.on("error", reject);
            request.end();
        });
    }
    async waitForDevToolsPort(profileDir) {
        const fs = require("fs");
        const path = require("path");
        const file = path.join(profileDir, "DevToolsActivePort");
        for (let attempt = 0; attempt < 120; attempt += 1) {
            if (fs.existsSync(file)) {
                const first = String(fs.readFileSync(file, "utf8")).split(/\r?\n/)[0];
                const port = Number(first);
                if (Number.isFinite(port) && port > 0)
                    return port;
            }
            await new Promise((resolve) => window.setTimeout(resolve, 50));
        }
        throw new Error("DevTools port was not created");
    }
    async connectCdp(webSocketUrl) {
        return await new Promise((resolve, reject) => {
            const socket = new WebSocket(webSocketUrl);
            let nextId = 0;
            const pending = new Map();
            socket.addEventListener("open", () => {
                resolve({
                    socket,
                    send: (method, params = {}) => new Promise((resolveCommand, rejectCommand) => {
                        const id = ++nextId;
                        pending.set(id, { resolve: resolveCommand, reject: rejectCommand });
                        socket.send(JSON.stringify({ id, method, params }));
                    }),
                });
            });
            socket.addEventListener("message", (event) => {
                let message;
                try {
                    message = JSON.parse(String(event.data || "{}"));
                }
                catch (_a) {
                    return;
                }
                if (!message.id || !pending.has(message.id))
                    return;
                const handler = pending.get(message.id);
                pending.delete(message.id);
                if (message.error)
                    handler.reject(new Error(message.error.message || "CDP command failed"));
                else
                    handler.resolve(message.result);
            });
            socket.addEventListener("error", () => reject(new Error("Unable to connect to PDF renderer")));
        });
    }
    async htmlToContinuousPdf(html) {
        if (!obsidian_1.Platform.isDesktopApp)
            throw new Error(this.t("exportPdfDesktopOnly"));
        const browser = this.findChromiumExecutable();
        if (!browser)
            throw new Error(this.t("exportBrowserMissing"));
        const fs = require("fs");
        const path = require("path");
        const os = require("os");
        const childProcess = require("child_process");
        const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "replace-memory-pdf-"));
        const args = ["--headless=new", "--disable-gpu", "--remote-debugging-port=0", "--remote-allow-origins=*", `--user-data-dir=${profileDir}`, "about:blank"];
        if (process.platform === "linux")
            args.unshift("--no-sandbox");
        const processHandle = childProcess.spawn(browser, args, { stdio: "ignore", windowsHide: true });
        let cdp = null;
        try {
            const port = await this.waitForDevToolsPort(profileDir);
            const targets = await this.nodeHttpJson(port, "/json/list");
            const target = Array.isArray(targets) ? targets.find((entry) => entry && entry.type === "page" && entry.webSocketDebuggerUrl) : null;
            if (!target)
                throw new Error("No PDF renderer page was created");
            let lastCdpError = null;
            for (let attempt = 0; attempt < 20 && !cdp; attempt += 1) {
                try {
                    cdp = await this.connectCdp(target.webSocketDebuggerUrl);
                }
                catch (error) {
                    lastCdpError = error;
                    await new Promise((resolve) => window.setTimeout(resolve, 100));
                }
            }
            if (!cdp)
                throw lastCdpError || new Error("Unable to connect to PDF renderer");
            await cdp.send("Page.enable");
            const frameTree = await cdp.send("Page.getFrameTree");
            const frameId = frameTree && frameTree.frameTree && frameTree.frameTree.frame && frameTree.frameTree.frame.id;
            if (!frameId)
                throw new Error("No renderer frame was created");
            await cdp.send("Page.setDocumentContent", { frameId, html });
            await cdp.send("Runtime.evaluate", {
                expression: `Promise.all([document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve(),Promise.all(Array.from(document.images).map(function(img){return img.complete?Promise.resolve():new Promise(function(resolve){img.onload=resolve;img.onerror=resolve;});}))]).then(function(){return true;})`,
                awaitPromise: true,
                returnByValue: true,
            });
            const dimensionsResult = await cdp.send("Runtime.evaluate", {
                expression: `JSON.stringify({width:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),height:Math.max(document.documentElement.scrollHeight,document.body.scrollHeight)})`,
                returnByValue: true,
            });
            const dimensions = JSON.parse(dimensionsResult.result.value);
            const pixelWidth = Math.max(794, Number(dimensions.width) || 794);
            const pixelHeight = Math.max(300, Number(dimensions.height) || 300);
            let scale = 1;
            let paperWidth = (pixelWidth + 2) / 96;
            let paperHeight = (pixelHeight + 20) / 96;
            // Chromium/PDF viewers cap a single page near 200 inches. Keep one page and
            // proportionally scale only exceptionally long notes.
            if (paperHeight > 198) {
                scale = Math.max(0.1, 198 / paperHeight);
                paperHeight = 198;
                paperWidth = Math.max(1, paperWidth * scale);
            }
            const result = await cdp.send("Page.printToPDF", {
                landscape: false,
                displayHeaderFooter: false,
                printBackground: true,
                scale,
                paperWidth,
                paperHeight,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                preferCSSPageSize: false,
                transferMode: "ReturnAsBase64",
            });
            return result.data;
        }
        finally {
            try {
                if (cdp && cdp.socket)
                    cdp.socket.close();
            }
            catch (_a) {
            }
            try {
                processHandle.kill();
            }
            catch (_b) {
            }
            await new Promise((resolve) => window.setTimeout(resolve, 120));
            try {
                fs.rmSync(profileDir, { recursive: true, force: true, maxRetries: 4, retryDelay: 80 });
            }
            catch (_c) {
            }
        }
    }
    async exportContinuousPdf(file, batchFolder) {
        const html = await this.renderMarkdownToStandaloneHtml(file);
        const base64 = await this.htmlToContinuousPdf(html);
        const buffer = Buffer.from(base64, "base64");
        const outputPath = await this.uniqueVaultPath(batchFolder, this.exportHierarchyName(file), "pdf");
        const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
        await this.app.vault.createBinary(outputPath, arrayBuffer);
        return outputPath;
    }
    async exportNotes(files, mode, folder) {
        const safeFolder = this.sanitizeExportFolder(folder);
        await this.ensureVaultFolder(safeFolder);
        const now = new Date();
        const pad = (value) => String(value).padStart(2, "0");
        const batchName = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
        const batchFolder = await this.uniqueVaultPath(safeFolder, batchName, "");
        await this.ensureVaultFolder(batchFolder);
        const outputs = [];
        for (const file of files) {
            if (mode === "pdf")
                outputs.push(await this.exportContinuousPdf(file, batchFolder));
            else
                outputs.push(await this.exportMarkdownWithAssets(file, batchFolder));
        }
        return { batchFolder, outputs };
    }
    async exportMarkdownWithAssetsExternal(file, outputDirectory) {
        const fs = require("fs");
        const path = require("path");
        const exportName = this.exportHierarchyName(file);
        const folderPath = this.uniqueFsPath(outputDirectory, exportName, "", true);
        fs.mkdirSync(folderPath, { recursive: true });
        const attachmentsFolder = path.join(folderPath, "attachments");
        let content = await this.readMarkdownForExport(file);
        const assets = new Map();
        const usedNames = new Set();
        const assignAsset = (image) => {
            if (assets.has(image.path))
                return assets.get(image.path);
            const rawExt = image.extension ? `.${image.extension}` : "";
            const rawBase = this.safeExportName(image.basename || image.name || "image");
            let name = `${rawBase}${rawExt}`;
            let index = 2;
            while (usedNames.has(name.toLowerCase())) {
                name = `${rawBase}-${index}${rawExt}`;
                index += 1;
            }
            usedNames.add(name.toLowerCase());
            assets.set(image.path, name);
            return name;
        };
        const replacements = [];
        for (const match of content.matchAll(/!\[\[([^\]]+)\]\]/g)) {
            if (match.index === undefined)
                continue;
            const inner = String(match[1] || "");
            const image = this.resolveExportImage(inner, file.path);
            if (!image)
                continue;
            const name = assignAsset(image);
            replacements.push({ start: match.index, end: match.index + match[0].length, text: `![](<attachments/${name}>)` });
        }
        for (const match of content.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)) {
            if (match.index === undefined)
                continue;
            let destination = String(match[2] || "").trim();
            if (destination.startsWith("<")) {
                const close = destination.indexOf(">");
                if (close > 0)
                    destination = destination.slice(1, close);
            }
            else {
                destination = destination.replace(/\s+(?:"[^"]*"|'[^']*')\s*$/, "").trim();
            }
            const image = this.resolveExportImage(destination, file.path);
            if (!image)
                continue;
            const name = assignAsset(image);
            const alt = String(match[1] || "");
            replacements.push({ start: match.index, end: match.index + match[0].length, text: `![${alt}](<attachments/${name}>)` });
        }
        replacements.sort((left, right) => right.start - left.start);
        for (const replacement of replacements)
            content = content.slice(0, replacement.start) + replacement.text + content.slice(replacement.end);
        if (assets.size > 0)
            fs.mkdirSync(attachmentsFolder, { recursive: true });
        for (const [sourcePath, name] of assets.entries()) {
            const source = this.app.vault.getAbstractFileByPath(sourcePath);
            if (!source)
                continue;
            const data = await this.app.vault.readBinary(source);
            fs.writeFileSync(path.join(attachmentsFolder, name), Buffer.from(new Uint8Array(data)));
        }
        fs.writeFileSync(path.join(folderPath, `${exportName}.md`), content, "utf8");
        return folderPath;
    }
    async exportContinuousPdfExternal(file, outputDirectory) {
        const fs = require("fs");
        const html = await this.renderMarkdownToStandaloneHtml(file);
        const base64 = await this.htmlToContinuousPdf(html);
        const outputPath = this.uniqueFsPath(outputDirectory, this.exportHierarchyName(file), "pdf", false);
        fs.writeFileSync(outputPath, Buffer.from(base64, "base64"));
        return outputPath;
    }
    async exportNotesExternal(files, mode, outputDirectory) {
        const fs = require("fs");
        if (!outputDirectory)
            throw new Error(this.t("exportFolderRequired"));
        fs.mkdirSync(outputDirectory, { recursive: true });
        const outputs = [];
        for (const file of files) {
            if (mode === "pdf")
                outputs.push(await this.exportContinuousPdfExternal(file, outputDirectory));
            else
                outputs.push(await this.exportMarkdownWithAssetsExternal(file, outputDirectory));
        }
        return { outputDirectory, outputs };
    }
    resolveReferencedImage(rawLink, sourcePath, referencedPaths, imageIndex) {
        const targetText = cleanLinkTarget(rawLink);
        if (!targetText || /^(?:https?:|data:|obsidian:|app:|mailto:|tel:)/i.test(targetText))
            return;
        const normalizedTarget = targetText.replace(/\\/g, "/").replace(/^\.\//, "");
        const directCandidates = [normalizedTarget, normalizedTarget.replace(/^\/+/, "")];
        for (const candidate of directCandidates) {
            const direct = this.app.vault.getAbstractFileByPath(candidate);
            if (direct && isImageFile(direct)) {
                referencedPaths.add(direct.path);
                return;
            }
        }
        const resolved = this.app.metadataCache.getFirstLinkpathDest(normalizedTarget, sourcePath);
        if (resolved && isImageFile(resolved)) {
            referencedPaths.add(resolved.path);
            return;
        }
        // Conservative fallback: an unresolved image-looking link protects every matching
        // filename/basename. It may leave a few orphans behind, but prevents false deletion.
        const finalPart = normalizedTarget.split("/").pop() || normalizedTarget;
        const lowerName = finalPart.toLowerCase();
        const lowerBase = lowerName.replace(/\.[^.]+$/, "");
        const protect = (items) => {
            if (!items)
                return;
            for (const item of items)
                referencedPaths.add(item.path);
        };
        protect(imageIndex.byName.get(lowerName));
        protect(imageIndex.byBasename.get(lowerBase));
    }
    collectReferencesFromText(text, sourcePath, referencedPaths, imageIndex) {
        const resolve = (value) => this.resolveReferencedImage(value, sourcePath, referencedPaths, imageIndex);
        for (const match of text.matchAll(/!?\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g)) {
            if (match[1])
                resolve(match[1]);
        }
        // Markdown links/embeds. Capture the full destination so paths containing spaces work.
        for (const match of text.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
            let destination = String(match[1] || "").trim();
            if (destination.startsWith("<")) {
                const close = destination.indexOf(">");
                if (close > 0)
                    destination = destination.slice(1, close);
            }
            else {
                destination = destination.replace(/\s+(?:"[^"]*"|'[^']*')\s*$/, "").trim();
            }
            if (destination)
                resolve(destination);
        }
        for (const match of text.matchAll(/<(?:img|source)\b[^>]*\b(?:src|srcset)\s*=\s*["']([^"']+)["'][^>]*>/gi)) {
            if (!match[1])
                continue;
            const values = match[1].split(",").map((part) => part.trim().split(/\s+/)[0]).filter(Boolean);
            for (const value of values)
                resolve(value);
        }
        for (const match of text.matchAll(/<a\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/gi)) {
            if (match[1])
                resolve(match[1]);
        }
        for (const match of text.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) {
            if (match[1])
                resolve(match[1]);
        }
        // JSON/Canvas/Base/Excalidraw and plugin metadata often store file paths as strings.
        for (const match of text.matchAll(/["']([^"'\r\n]+\.(?:png|jpe?g|gif|webp|svg|bmp|avif)(?:#[^"']*)?)["']/gi)) {
            if (match[1])
                resolve(match[1]);
        }
        // Common YAML/frontmatter forms, including scalar values and list items.
        for (const line of text.split(/\r?\n/)) {
            const match = line.match(/^\s*(?:[A-Za-z0-9_.-]+\s*:\s*|-\s+)(.+\.(?:png|jpe?g|gif|webp|svg|bmp|avif))(?:\s+#.*)?\s*$/i);
            if (match && match[1])
                resolve(match[1].trim().replace(/^['"]|['"]$/g, ""));
        }
    }
    collectImageStringsFromValue(value, sourcePath, referencedPaths, imageIndex, depth = 0) {
        if (depth > 8 || value === null || value === undefined)
            return;
        if (typeof value === "string") {
            if (/\.(?:png|jpe?g|gif|webp|svg|bmp|avif)(?:[#?].*)?$/i.test(value.trim()))
                this.resolveReferencedImage(value, sourcePath, referencedPaths, imageIndex);
            return;
        }
        if (Array.isArray(value)) {
            for (const item of value)
                this.collectImageStringsFromValue(item, sourcePath, referencedPaths, imageIndex, depth + 1);
            return;
        }
        if (typeof value === "object") {
            for (const item of Object.values(value))
                this.collectImageStringsFromValue(item, sourcePath, referencedPaths, imageIndex, depth + 1);
        }
    }
    async findUnusedImages() {
        const files = this.app.vault.getFiles();
        const images = files.filter((file) => isImageFile(file));
        const referencedPaths = new Set();
        const imageIndex = { byName: new Map(), byBasename: new Map() };
        const addIndex = (map, key, file) => {
            const normalized = String(key || "").toLowerCase();
            if (!normalized)
                return;
            const items = map.get(normalized) || [];
            items.push(file);
            map.set(normalized, items);
        };
        for (const image of images) {
            addIndex(imageIndex.byName, image.name, image);
            addIndex(imageIndex.byBasename, image.basename, image);
        }
        // Read the live editor buffers first. This avoids stale metadata immediately after
        // a user adds or removes an image reference in an open Markdown note.
        const liveMarkdownText = new Map();
        try {
            const leaves = this.app.workspace.getLeavesOfType("markdown");
            for (const leaf of leaves) {
                const view = leaf && leaf.view;
                if (view && view.file && view.editor && typeof view.editor.getValue === "function")
                    liveMarkdownText.set(view.file.path, view.editor.getValue());
            }
        }
        catch (_a) {
        }
        // Scan actual source content instead of treating metadataCache.resolvedLinks as proof
        // of a current reference. resolvedLinks can lag briefly after a reference is deleted.
        // metadataCache.getFirstLinkpathDest is still used inside resolveReferencedImage only
        // to resolve the path found in the current source text.
        const TEXT_EXTENSIONS = new Set([
            "md", "canvas", "base", "json", "excalidraw", "html", "htm", "css", "txt",
            "yaml", "yml", "xml", "js", "mjs", "cjs", "ts", "tsx", "jsx"
        ]);
        const textFiles = files.filter((file) => TEXT_EXTENSIONS.has(file.extension.toLowerCase()));
        for (const file of textFiles) {
            try {
                const text = file.extension.toLowerCase() === "md" && liveMarkdownText.has(file.path)
                    ? liveMarkdownText.get(file.path)
                    : await this.app.vault.read(file);
                this.collectReferencesFromText(String(text || ""), file.path, referencedPaths, imageIndex);
            }
            catch (_b) {
                // If a text-like file cannot be inspected, fail closed. We cannot prove that
                // images are unused while a potential reference source is unreadable.
                throw new Error(`Unable to inspect reference source: ${file.path}`);
            }
        }
        return images
            .filter((file) => !referencedPaths.has(file.path))
            .sort((left, right) => left.path.localeCompare(right.path, undefined, { numeric: true, sensitivity: "base" }));
    }
    async trashImages(paths) {
        let deleted = 0;
        let failed = 0;
        for (const path of paths) {
            const file = this.app.vault.getAbstractFileByPath(path);
            if (!file || !isImageFile(file))
                continue;
            try {
                await this.app.vault.trash(file, false);
                deleted += 1;
            }
            catch (_a) {
                failed += 1;
            }
        }
        return { deleted, failed };
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
        this.draggedPageId = null;
        this.suppressPageClickUntil = 0;
    }
    onOpen() {
        this.modalEl.classList.add("replace-memory-modal");
        this.setTitle(this.plugin.t("title"));
        this.titleEl.classList.add("replace-memory-titlebar");
        const imageCleanupButton = document.createElement("button");
        imageCleanupButton.type = "button";
        imageCleanupButton.className = "replace-memory-title-action";
        imageCleanupButton.textContent = this.plugin.t("imageCleanup");
        imageCleanupButton.addEventListener("click", () => this.plugin.openImageCleanup());
        this.titleEl.appendChild(imageCleanupButton);
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
            pageButton.title = `${this.plugin.pageText(page.name)} · ${this.plugin.t("dragPage")}`;
            pageButton.setAttribute("aria-label", this.plugin.pageText(page.name));
            pageButton.setAttribute("role", "tab");
            pageButton.setAttribute("aria-selected", isActive ? "true" : "false");
            pageButton.dataset.pageId = page.id;
            pageButton.draggable = true;
            pageButton.addEventListener("click", async () => {
                if (Date.now() < this.suppressPageClickUntil)
                    return;
                await this.plugin.setActivePage(page.id);
                this.render();
            });
            pageButton.addEventListener("contextmenu", (event) => {
                event.preventDefault();
                this.showPageMenu(event, page);
            });
            pageButton.addEventListener("dragstart", (event) => {
                this.draggedPageId = page.id;
                pageButton.classList.add("is-page-dragging");
                pageButton.setAttribute("aria-grabbed", "true");
                if (event.dataTransfer) {
                    event.dataTransfer.effectAllowed = "move";
                    event.dataTransfer.setData("application/x-replace-memory-page", page.id);
                    event.dataTransfer.setData("text/plain", page.id);
                }
            });
            pageButton.addEventListener("dragover", (event) => {
                if (!this.draggedPageId || this.draggedPageId === page.id)
                    return;
                event.preventDefault();
                if (event.dataTransfer)
                    event.dataTransfer.dropEffect = "move";
                pageTabs
                    .querySelectorAll(".replace-memory-page-button.is-drop-before, .replace-memory-page-button.is-drop-after")
                    .forEach((element) => element.classList.remove("is-drop-before", "is-drop-after"));
                const rect = pageButton.getBoundingClientRect();
                const after = event.clientX >= rect.left + rect.width / 2;
                pageButton.classList.add(after ? "is-drop-after" : "is-drop-before");
            });
            pageButton.addEventListener("dragleave", (event) => {
                const related = event.relatedTarget;
                if (related instanceof Node && pageButton.contains(related))
                    return;
                pageButton.classList.remove("is-drop-before", "is-drop-after");
            });
            pageButton.addEventListener("drop", async (event) => {
                event.preventDefault();
                event.stopPropagation();
                const sourceId = this.draggedPageId ||
                    (event.dataTransfer ? event.dataTransfer.getData("application/x-replace-memory-page") : "");
                const after = pageButton.classList.contains("is-drop-after");
                this.clearPageDragIndicators(pageTabs);
                this.draggedPageId = null;
                this.suppressPageClickUntil = Date.now() + 250;
                if (await this.plugin.movePageRelative(sourceId, page.id, after))
                    this.render();
            });
            pageButton.addEventListener("dragend", () => {
                this.clearPageDragIndicators(pageTabs);
                this.draggedPageId = null;
                this.suppressPageClickUntil = Date.now() + 250;
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
    clearPageDragIndicators(pageTabs = null) {
        const root = pageTabs || this.contentEl;
        root
            .querySelectorAll(".replace-memory-page-button.is-page-dragging, .replace-memory-page-button.is-drop-before, .replace-memory-page-button.is-drop-after")
            .forEach((element) => {
            element.classList.remove("is-page-dragging", "is-drop-before", "is-drop-after");
            element.removeAttribute("aria-grabbed");
        });
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
            item.setTitle(this.plugin.t("duplicatePage"));
            item.setIcon("copy");
            item.onClick(async () => {
                if (await this.plugin.duplicatePage(page.id))
                    this.render();
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
class ExportNotesModal extends obsidian_1.Modal {
    constructor(app, plugin, files) {
        super(app);
        this.plugin = plugin;
        this.files = Array.isArray(files) ? files : [];
        this.mode = "markdown";
        this.outputFolder = typeof plugin.settings.lastExportFolder === "string" ? plugin.settings.lastExportFolder : "";
        this.exporting = false;
    }
    onOpen() {
        this.modalEl.classList.add("replace-memory-export-modal", "replace-memory-export-modal-compact");
        this.setTitle(this.plugin.t("exportNotes"));
        this.render();
    }
    async chooseFolder() {
        if (this.exporting)
            return;
        try {
            const selected = await this.plugin.pickExportDirectory(this.outputFolder);
            if (selected) {
                this.outputFolder = selected;
                this.plugin.settings.lastExportFolder = selected;
                await this.plugin.saveSettings();
                this.render();
            }
        }
        catch (error) {
            console.error("[Replace Memory] Folder picker failed", error);
            new obsidian_1.Notice(error && error.message ? error.message : this.plugin.t("exportFolderDialogFailed"));
        }
    }
    render() {
        this.contentEl.replaceChildren();
        const summary = document.createElement("div");
        summary.className = "replace-memory-export-summary";
        summary.textContent = this.plugin.formatText("selectedExportNotes", { count: String(this.files.length) });
        const modeSection = document.createElement("div");
        modeSection.className = "replace-memory-export-section";
        const modeTitle = document.createElement("div");
        modeTitle.className = "replace-memory-export-section-title";
        modeTitle.textContent = this.plugin.t("exportMode");
        const modeOptions = document.createElement("div");
        modeOptions.className = "replace-memory-export-mode-list";
        const makeMode = (value, labelText, hintText) => {
            const label = document.createElement("label");
            label.className = `replace-memory-export-mode-row${this.mode === value ? " is-active" : ""}`;
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "replace-memory-export-mode";
            input.value = value;
            input.checked = this.mode === value;
            input.disabled = this.exporting;
            input.addEventListener("change", () => {
                this.mode = value;
                this.render();
            });
            const textWrap = document.createElement("span");
            const title = document.createElement("strong");
            title.textContent = labelText;
            textWrap.appendChild(title);
            if (hintText) {
                const hint = document.createElement("small");
                hint.textContent = hintText;
                textWrap.appendChild(hint);
            }
            label.append(input, textWrap);
            return label;
        };
        modeOptions.append(
            makeMode("markdown", this.plugin.t("exportMarkdownAssets"), ""),
            makeMode("pdf", this.plugin.t("exportPdfContinuous"), this.plugin.t("exportPdfHint"))
        );
        modeSection.append(modeTitle, modeOptions);
        const folderSection = document.createElement("div");
        folderSection.className = "replace-memory-export-section";
        const folderTitle = document.createElement("div");
        folderTitle.className = "replace-memory-export-section-title";
        folderTitle.textContent = this.plugin.t("exportFolder");
        const folderRow = document.createElement("div");
        folderRow.className = "replace-memory-export-folder-row";
        const folderInput = document.createElement("input");
        folderInput.type = "text";
        folderInput.className = "replace-memory-export-folder";
        folderInput.value = this.outputFolder;
        folderInput.placeholder = this.plugin.t("exportFolderPlaceholder");
        folderInput.readOnly = false;
        folderInput.disabled = this.exporting;
        folderInput.addEventListener("input", () => this.outputFolder = folderInput.value);
        const chooseButton = document.createElement("button");
        chooseButton.type = "button";
        chooseButton.textContent = this.plugin.t("chooseExportFolder");
        chooseButton.disabled = this.exporting;
        chooseButton.addEventListener("click", () => void this.chooseFolder());
        folderRow.append(folderInput, chooseButton);
        folderSection.append(folderTitle, folderRow);
        const footer = document.createElement("div");
        footer.className = "replace-memory-export-footer";
        const cancel = document.createElement("button");
        cancel.type = "button";
        cancel.textContent = this.plugin.t("cancel");
        cancel.disabled = this.exporting;
        cancel.addEventListener("click", () => this.close());
        const exportButton = document.createElement("button");
        exportButton.type = "button";
        exportButton.className = "mod-cta";
        exportButton.textContent = this.exporting ? this.plugin.t("exporting") : this.plugin.t("startExport");
        exportButton.disabled = this.exporting;
        exportButton.addEventListener("click", () => void this.runExport());
        footer.append(cancel, exportButton);
        this.contentEl.append(summary, modeSection, folderSection, footer);
    }
    async runExport() {
        if (this.files.length === 0) {
            new obsidian_1.Notice(this.plugin.t("exportNoFiles"));
            return;
        }
        if (!this.outputFolder) {
            await this.chooseFolder();
            if (!this.outputFolder)
                return;
        }
        if (this.mode === "pdf" && !obsidian_1.Platform.isDesktopApp) {
            new obsidian_1.Notice(this.plugin.t("exportPdfDesktopOnly"));
            return;
        }
        this.plugin.settings.lastExportFolder = this.outputFolder;
        await this.plugin.saveSettings();
        this.exporting = true;
        this.render();
        try {
            const result = await this.plugin.exportNotesExternal(this.files, this.mode, this.outputFolder);
            new obsidian_1.Notice(`${this.plugin.t("exportDone")} · ${result.outputs.length} · ${result.outputDirectory}`, 7000);
            this.close();
        }
        catch (error) {
            console.error("[Replace Memory] Export failed", error);
            new obsidian_1.Notice(error && error.message ? error.message : this.plugin.t("exportFailed"), 7000);
            this.exporting = false;
            this.render();
        }
    }
    onClose() {
        this.contentEl.replaceChildren();
    }
}

class UnusedImageCleanupModal extends obsidian_1.Modal {
    constructor(app, plugin) {
        super(app);
        this.plugin = plugin;
        this.items = [];
        this.scanning = false;
    }
    onOpen() {
        this.modalEl.classList.add("replace-memory-image-cleanup-modal");
        this.setTitle(this.plugin.t("imageCleanup"));
        void this.scan();
    }
    async scan() {
        this.scanning = true;
        this.render();
        try {
            this.items = await this.plugin.findUnusedImages();
        }
        catch (_a) {
            this.items = [];
            new obsidian_1.Notice(this.plugin.t("cleanupScanFailed"));
        }
        finally {
            this.scanning = false;
            this.render();
        }
    }
    totalSize() {
        return this.items.reduce((sum, file) => sum + Number(file.stat && file.stat.size || 0), 0);
    }
    render() {
        this.contentEl.replaceChildren();
        if (this.scanning) {
            const scanning = document.createElement("div");
            scanning.className = "replace-memory-cleanup-state";
            scanning.textContent = this.plugin.t("scanningImages");
            this.contentEl.appendChild(scanning);
            return;
        }
        if (this.items.length === 0) {
            const empty = document.createElement("div");
            empty.className = "replace-memory-cleanup-state";
            empty.textContent = this.plugin.t("noUnusedImages");
            const actions = document.createElement("div");
            actions.className = "replace-memory-cleanup-actions";
            const closeButton = document.createElement("button");
            closeButton.type = "button";
            closeButton.textContent = this.plugin.t("close");
            closeButton.addEventListener("click", () => this.close());
            actions.appendChild(closeButton);
            this.contentEl.append(empty, actions);
            return;
        }
        const result = document.createElement("div");
        result.className = "replace-memory-cleanup-result";
        const heading = document.createElement("div");
        heading.className = "replace-memory-cleanup-result-title";
        heading.textContent = this.plugin.t("cleanupReady");
        const count = document.createElement("div");
        count.className = "replace-memory-cleanup-result-count";
        count.textContent = `${this.plugin.t("unusedImagesFound")}：${this.items.length} ${this.plugin.t("imageCount")} · ${formatBytes(this.totalSize())}`;
        const note = document.createElement("div");
        note.className = "replace-memory-cleanup-result-note";
        note.textContent = this.plugin.t("cleanupSafeNote");
        result.append(heading, count, note);
        const actions = document.createElement("div");
        actions.className = "replace-memory-cleanup-actions";
        const cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.textContent = this.plugin.t("cancel");
        cancelButton.addEventListener("click", () => this.close());
        const trashButton = document.createElement("button");
        trashButton.type = "button";
        trashButton.className = "mod-warning";
        trashButton.textContent = this.plugin.t("confirmDeleteImages");
        trashButton.addEventListener("click", () => void this.moveAllToTrash(trashButton));
        actions.append(cancelButton, trashButton);
        this.contentEl.append(result, actions);
    }
    async moveAllToTrash(button) {
        if (this.items.length === 0)
            return;
        button.disabled = true;
        const paths = this.items.map((file) => file.path);
        const result = await this.plugin.trashImages(paths);
        if (result.deleted > 0)
            new obsidian_1.Notice(`${this.plugin.t("deletedImages")}：${result.deleted} ${this.plugin.t("imageCount")}`);
        if (result.failed > 0)
            new obsidian_1.Notice(this.plugin.t("cleanupDeleteFailed"));
        this.close();
    }
    onClose() {
        this.contentEl.replaceChildren();
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
