# Replace Memory（记忆替换）

**An Obsidian plugin that remembers common replacement rules and applies them all with one click.**

**一款能记住常用替换内容，并按设定顺序一键完成多条替换的 Obsidian 插件。**

## Features / 功能

- Remember and reuse common plain-text replacement rules.  
  记住并重复使用常用的纯文本替换规则。
- Apply all enabled rules with one click.  
  一键执行全部已启用规则。
- Run rules sequentially from top to bottom.  
  严格按照列表从上到下依次替换。
- Reorder rules by dragging or with up/down buttons.  
  支持拖动或上下按钮调整执行顺序。
- Enable, disable, edit, delete, or run a single rule.  
  每条规则可启用、停用、编辑、删除或单独执行。
- Organize different replacement needs into independently named pages.  
  可按不同替换需求创建并命名独立页面。
- Add pages with `+`, and right-click a page to rename or delete it.  
  点击 `+` 新建页面，右键页面可重命名或直接删除。
- Store all settings locally with no network requests or telemetry.  
  数据仅保存在本地，不联网、不上传笔记内容。

## Usage / 使用方法

1. Open a Markdown note.
2. Click the Replace Memory icon in the left ribbon, or open the command palette and run **Open replacement memory**.
3. Use page `1` or click `+` to create a page for a different replacement workflow.
4. Right-click a page to rename or delete it.
5. Add and reorder your `Find → Replace with` rules.
6. Click **Run all in order** to apply all enabled rules on the current page.

中文界面下：

1. 打开一篇 Markdown 笔记；
2. 点击左侧栏的替换图标，或在命令面板中运行“打开记忆替换”；
3. 使用默认页面“1”，或点击 `+` 为不同替换需求创建新页面；
4. 右键页面可以重命名或直接删除；
5. 添加并调整“查找 → 替换为”规则顺序；
6. 点击“按顺序全部替换”，即可执行当前页面的全部已启用规则。

## Replacement order / 替换顺序

Rules are applied to the result of the previous rule. For example:

1. `Apple` → `Fruit`
2. `Fruit` → `Food`

The original text `Apple` becomes `Food`.

规则会作用于上一条规则处理后的文本，因此规则顺序可能影响最终结果。

## Manual installation / 手动安装

Download `main.js`, `manifest.json`, and `styles.css` from the latest release, then place them in:

```text
<Vault>/.obsidian/plugins/replace-memory/
```

Restart or reload Obsidian, then enable **Replace Memory** under **Settings → Community plugins**.

## Commands / 命令

- `Open replacement memory / 打开记忆替换`
- `Run all enabled replacement rules in order / 按顺序执行全部已启用规则`

## Privacy

Replace Memory is local-only. It makes no network requests, contains no telemetry, and only modifies the currently open Markdown note when the user explicitly runs a replacement command.

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
