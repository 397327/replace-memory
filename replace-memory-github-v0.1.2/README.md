# Replace Memory

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
- Store all settings locally with no network requests or telemetry.  
  数据仅保存在本地，不联网、不上传笔记内容。

## Usage / 使用方法

1. Open a Markdown note.
2. Click the Replace Memory icon in the left ribbon, or open the command palette and run **Open replacement memory**.
3. Add your commonly used `Find → Replace with` rules.
4. Reorder the rules as needed.
5. Click **Run all in order** to apply all enabled rules to the current note.

中文界面下：

1. 打开一篇 Markdown 笔记；
2. 点击左侧栏的替换图标，或在命令面板中运行“打开替换记忆”；
3. 添加常用的“查找 → 替换为”规则；
4. 调整规则顺序；
5. 点击“按顺序全部替换”，即可对当前笔记一键执行。

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

- `Open replacement memory / 打开替换记忆`
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
