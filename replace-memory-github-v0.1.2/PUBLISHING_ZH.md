# 发布到 Obsidian 社区插件库

## 一、发布前需要确认

当前插件信息：

- 插件名称：`Replace Memory`
- 插件 ID：`replace-memory`
- 初始版本：`0.1.2`
- 作者：`zoe`
- 许可证：MIT

正式发布前，请检查 `manifest.json` 和 `package.json` 中的作者名称是否按你的意愿填写。插件 ID 一旦进入社区库，不建议再更改。

## 二、先在本地测试

把安装包解压后的 `replace-memory` 文件夹放入：

```text
你的知识库/.obsidian/plugins/replace-memory/
```

确认该文件夹内至少有：

```text
main.js
manifest.json
styles.css
```

重启 Obsidian，在“设置 → 第三方插件”中启用 Replace Memory。至少测试：

1. 新增、编辑、删除规则；
2. 启用和停用规则；
3. 上移、下移和拖动排序；
4. 单条替换；
5. 全部替换是否严格从上到下执行；
6. 重启 Obsidian 后规则和顺序是否仍然保留；
7. Ctrl+Z 是否可以撤销本次整篇替换。

## 三、创建 GitHub 仓库

1. 登录 GitHub，新建一个公开仓库，建议仓库名为 `replace-memory`。
2. 将源码包中的文件上传到仓库根目录。
3. 在电脑安装 Node.js 18 或更高版本。
4. 在项目目录运行：

```bash
npm install
npm run build
```

`npm install` 会生成 `package-lock.json`。请将该文件一并提交到 GitHub。

## 四、创建首个 Release

1. 确认 `manifest.json` 中版本为 `0.1.2`。
2. 在 GitHub 仓库中创建 Release。
3. Tag 必须填写：

```text
0.1.2
```

不要写成 `v0.1.2`。

4. 将以下三个文件作为 Release 附件上传：

```text
main.js
manifest.json
styles.css
```

5. 发布 Release。

## 五、提交到 Obsidian 社区目录

1. 登录 Obsidian 官方社区插件目录。
2. 绑定 GitHub 账号。
3. 进入 Plugins，选择 New plugin。
4. 填写 GitHub 仓库地址。
5. 阅读并接受开发者政策后提交。
6. 根据自动审查提示修正问题；每次修改后需要提高版本号并重新发布 Release。

Obsidian 审核通过后，其他用户就可以直接在：

```text
设置 → 第三方插件 → 浏览
```

搜索 `Replace Memory` 并安装。

## 六、后续更新

例如从 `0.1.2` 更新到 `0.1.1`：

1. 修改代码；
2. 修改 `package.json` 版本，或运行：

```bash
npm version patch
```

3. 确认 `manifest.json` 和 `versions.json` 已同步；
4. 运行 `npm run build`；
5. 创建 Tag 为 `0.1.1` 的 GitHub Release；
6. 上传新的 `main.js`、`manifest.json` 和 `styles.css`。

社区插件首次审核通过后，后续版本通常会由 Obsidian 根据 GitHub Release 自动提供给用户更新。
