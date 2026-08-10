# Changelog

## 0.1.9

- Added **Locate reference source / 定位此引用** to jump from an inserted block reference back to its original paragraph.
- Added **Clean unused images / 清理未引用图** with conservative reference detection and one-click move-to-trash confirmation.
- Improved unused-image accuracy by prioritizing current editor text and actual file contents instead of stale link-cache state.
- Kept the cleanup workflow intentionally simple: scan, show count and size, confirm, then move confirmed unused images to the Obsidian trash.

## 0.1.8

- Fixed the Obsidian directory review error by moving clipboard-helper positioning from inline styles to a CSS class.
- No user-facing behavior changes.

## 0.1.7

- Added **Copy as reference / 复制为引用**.
- Copy the current paragraph without selecting text, or copy several selected paragraphs as a group.
- Reuse existing Obsidian block IDs and automatically generate missing IDs.
- Added **Paste reference / 粘贴引用** to insert the latest copied reference at the current cursor position.
- Fixed stale-reference behavior so newly copied paragraphs replace the previous internal reference cache and clipboard content.

## 0.1.6

- Added quick reference support for selected paragraphs.
- Added commands and context-menu entries for capturing and inserting references.

## 0.1.5

- Added named replacement pages.
- Start with one page and add more pages using the `+` button.
- Right-click page tabs to rename or delete them.
- Existing rules migrate automatically to page `1`.

## 0.1.4

- Added independent rule pages.
- Existing saved rules are automatically preserved on page 1.
- The selected page is remembered between sessions.

## 0.1.3

- Prepared the repository for Obsidian Community review.
- Placed all required files at the repository root.

## 0.1.2

- Removed the redundant list header for a cleaner compact layout.
- Kept the compact one-line rule editor and ordered replacement workflow.
