# Replace Memory（记忆替换）

**An Obsidian plugin that remembers common replacement rules, applies them with one click, and quickly copies or pastes reusable block references.**

**一款能记住常用替换内容、按设定顺序一键完成多条替换，并快速复制或粘贴块引用的 Obsidian 插件。**

## Features / 功能

- Remember and reuse common plain-text replacement rules.  
  记住并重复使用常用的纯文本替换规则。
- Apply all enabled rules with one click, strictly from top to bottom.  
  按照列表从上到下，一键执行全部已启用规则。
- Organize different replacement needs into independently named pages.  
  可按不同替换需求创建并命名独立页面。
- Add pages with `+`, and right-click a page to rename or delete it.  
  点击 `+` 新建页面，右键页面可重命名或直接删除。
- Copy the current paragraph or selected paragraphs as Obsidian block references.  
  将当前段落或选中的多段文字一键复制为 Obsidian 块引用。
- Reuse existing block IDs, or automatically generate missing IDs.  
  已有块编号时直接复用，没有编号时自动生成。
- Paste the most recently copied reference at the current cursor position.  
  在当前光标位置快速粘贴最近复制的引用。
- Store all settings locally with no network requests or telemetry.  
  数据仅保存在本地，不联网、不上传笔记内容。

## Usage / 使用方法

### Replacement memory / 记忆替换

1. Open a Markdown note.
2. Click the Replace Memory icon in the left ribbon, or run **Open replacement memory** from the command palette.
3. Use page `1`, or click `+` to create a page for another replacement workflow.
4. Add and reorder `Find → Replace with` rules.
5. Click **Run all in order** to execute the enabled rules on the current page.

中文界面下：

1. 打开一篇 Markdown 笔记；
2. 点击左侧栏图标，或在命令面板中运行“打开记忆替换”；
3. 使用默认页面“1”，或点击 `+` 创建新的规则页面；
4. 添加并调整“查找 → 替换为”规则顺序；
5. 点击“按顺序全部替换”。

### Copy and paste references / 复制与粘贴引用

- Right-click inside a paragraph and choose **Copy as reference** to reference the current paragraph.
- Select one or several paragraphs, then choose **Copy as reference** to copy them as a group.
- Existing block IDs are reused; missing block IDs are generated automatically.
- Move the cursor to the target position and choose **Paste reference**, or paste directly with the system clipboard.

中文界面下：

- 未选中文字时，在某个段落内右键并选择“复制为引用”，即可复制当前段落；
- 选中一段或多段后选择“复制为引用”，可一次复制多个引用；
- 已有块编号会直接复用，没有编号会自动生成；
- 将光标放到目标位置，右键选择“粘贴引用”，也可以直接按 `Ctrl+V`。

## Replacement order / 替换顺序

Rules are applied to the result of the previous rule. For example:

1. `Apple` → `Fruit`
2. `Fruit` → `Food`

The original text `Apple` becomes `Food`.

规则会作用于上一条规则处理后的文本，因此规则顺序会影响最终结果。

## Manual installation / 手动安装

Download `main.js`, `manifest.json`, and `styles.css` from the latest release, then place them in:

```text
<Vault>/.obsidian/plugins/replace-memory/
```

Restart or reload Obsidian, then enable **Replace Memory** under **Settings → Community plugins**.

## Commands / 命令

- `Open replacement memory / 打开记忆替换`
- `Run all enabled replacement rules in order / 按顺序执行当前页全部已启用规则`
- `Copy as reference / 复制为引用`
- `Paste reference / 粘贴引用`

## Privacy

Replace Memory is local-only. It makes no network requests, contains no telemetry, and only modifies the currently open Markdown note when the user explicitly runs a command.

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
