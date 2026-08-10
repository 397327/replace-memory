# Replace Memory（记忆替换）

**An Obsidian plugin that remembers common replacement rules, applies them with one click, reuses block references, locates their sources, and cleans unused images.**

**一款带记忆的一键替换 Obsidian 插件，同时支持规则分页、引用复制/粘贴与定位，以及未引用图片清理。**

## Features / 功能

- **Replacement memory / 记忆替换** — Save common `Find → Replace` rules and run all enabled rules from top to bottom with one click.  
  保存常用“查找 → 替换”规则，并按设定顺序一键执行。
- **Named rule pages / 规则分页** — Create independent pages for different replacement needs, rename them, and delete them from the page context menu.  
  不同替换需求可建立独立规则页，并支持自定义名称。
- **Copy as reference / 复制为引用** — Right-click a paragraph, or select several paragraphs, to create reusable Obsidian block references. Existing block IDs are reused.  
  当前段落或选中的多段文字可一键生成引用，已有块编号会自动复用。
- **Paste reference / 粘贴引用** — Insert the most recently copied reference at the current cursor position, or paste with the system clipboard.  
  在任意位置快速粘贴刚复制的引用。
- **Locate reference source / 定位此引用** — Right-click an inserted reference to jump back to the corresponding source paragraph.  
  右键已插入的引用即可跳回并定位原始段落。
- **Clean unused images / 清理未引用图** — Scan the vault for high-confidence unused images, show the detected count and total size, then move them to the Obsidian trash after confirmation.  
  扫描知识库中确定未被引用的图片，显示数量和占用空间，确认后统一移入 Obsidian 回收站。
- **Local-only / 本地运行** — No network requests, telemetry, or note uploads.  
  所有处理均在本地完成。

## Usage / 使用方法

### Replacement memory / 记忆替换

1. Open a Markdown note.
2. Click the Replace Memory ribbon icon or run **Open replacement memory**.
3. Add `Find → Replace` rules. Use `+` to create another rule page when needed.
4. Reorder rules and click **Run all in order**.

中文：打开笔记 → 打开“记忆替换” → 添加规则 → 调整顺序 → 点击“按顺序全部替换”。

### References / 引用

- Right-click inside a paragraph and choose **Copy as reference / 复制为引用**.
- Or select several paragraphs first to copy several references together.
- At the destination, choose **Paste reference / 粘贴引用** or use normal paste.
- Right-click an inserted reference and choose **Locate reference source / 定位此引用** to jump back to the original paragraph.

### Clean unused images / 清理未引用图

Open Replace Memory and click **Clean unused images / 清理未引用图**. The plugin scans the vault, reports the number and total size of images it can confidently classify as unused, then asks whether to move them to the Obsidian trash. The scanner is intentionally conservative: uncertain images are kept rather than deleted.

## Commands / 命令

- Open replacement memory / 打开记忆替换
- Run all enabled rules on the current page in order / 按顺序执行当前页全部已启用规则
- Copy as reference / 复制为引用
- Paste reference / 粘贴引用
- Locate reference source / 定位此引用
- Clean unused images / 清理未引用图

## Manual installation / 手动安装

Download `main.js`, `manifest.json`, and `styles.css` from the latest release and place them in:

```text
<Vault>/.obsidian/plugins/replace-memory/
```

Restart or reload Obsidian, then enable **Replace Memory** under **Settings → Community plugins**.

## Privacy

Replace Memory is local-only. It makes no network requests and contains no telemetry.

## Development

Requires Node.js 18 or later.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## License

MIT © zoe
