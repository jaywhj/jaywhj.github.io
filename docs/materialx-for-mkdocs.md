---
cover: assets/cat.jpg
---

# 下一代主题插件 MaterialX

[**MaterialX for MkDocs**](https://github.com/jaywhj/mkdocs-materialx)，下一代 mkdocs-material，让你继续用熟悉的方式构建漂亮站点。基于 `mkdocs-material-9.7.1` 衍生，取名为 `X`，提供持续的维护与更新。

由于 mkdocs-material 已进入维护模式，不再有新功能，而替代品 Zensical 目前还不完善，并且不兼容 MkDocs 原有的插件生态，这将导致原本的繁荣生态被打破而失去活力，用户原本稳定而又完善的站点如果要迁移到 Zensical，则有着较高的迁移成本和不稳定性的风险。

那有没有办法做到，既能拥有 mkdocs-material 的丰富生态和稳定性，又能拥有像 Zensical 一样的新特性呢？

答案就是 **MaterialX**，它将拥有以下全新愿景和定位。

## MaterialX 路线图

在我看来，技术的魅力在于让更多的人利用你提供的工具轻而易举就实现了他原来很难做到的事。

一个好的产品，在功能设计上，应该是恰到好处，适可而止，而不是提供更多的功能选择和眼花缭乱的配置项。说实话，无论是 mkdocs-material 还是 Zensical，都有点个性化过度了，配置项太多太复杂了，谁的配置项最后不是动辄几百行？哪个初次用 mkdocs-material 的人没折腾上好几天？

而我希望把它做成一个**傻瓜式**的程序，用户只需要简单少量的配置，就能轻松把平时的笔记和文档转成自己的专业站点，方便传播分享与交流。

所以，MaterialX 将遵循以下目标和原则：

- **目标**：追求**人人可用**，人人都可拥有自己的网站，包括但不限于开发者、产品经理、运营人员、运维人员等，不再是技术人员的专利
- **原则**：以**极简易用**为首要原则，化繁为简，将来会简化配置和功能项，提供更合理的默认配置和自动化配置，减少用户的配置和维护成本
- **侧重**：**通用型功能**和**可视化呈现**，未来在功能选择上会更多偏向通用型功能和可视化表达，将为大家提供更丰富的内容呈现形式，如图形、图表、图像、音视频等，让内容动起来
- **偏执**：**用户体验**，会更注重交互细节和视觉细节，会花很多时间去关注这些，可能是一个毫不起眼的行间距，也可能是一根简单的线条 ...

## 差异
### 与 mkdocs-material

| 差异 | mkdocs-material | MaterialX |
| --- | --- | --- |
| **最后版本** | mkdocs-material-9.7.1 | mkdocs-materialx-10.x <br />(基于 mkdocs-material-9.7.1 衍生) |
| **使用方式** | mkdocs.yml 配主题名 `material` | mkdocs.yml 配新主题名 `materialx` <br />其他一切都和使用 material 时一样 |
| **当前状态** | 即将停止维护 | 持续维护与更新 |
| **功能更新** | 无（有遗留 bug） | bug 修复、新功能添加、用户体验优化等 <br />具体见 [Changelog](https://github.com/jaywhj/mkdocs-materialx/releases) |

### 与 Zensical

| 差异 | Zensical | MaterialX |
| --- | --- | --- |
| **功能定位** | 技术开发者、技术文档 | 任何 Markdown 用户、Markdown 笔记及文档 |
| **开发语言** | Rust | Python |
| **发展阶段** | 诞生几个月，初期，bug多，基础功能不完善 | 诞生超十年，成熟稳定期 |
| **使用方式** | 采用 TOML 全新配置格式 <br />原 mkdocs.yml 中所有配置项需从头再来 | 延用 mkdocs.yml <br />0 迁移成本 |
| **生态环境** | 完全从 0 构建的一个新工具，不兼容原 MkDocs 中的一切，未来发展未知 | 基于 MkDocs 与 mkdocs-material-9.7.1，兼容 MkDocs 多年沉淀下来的丰富生态，开放、活跃 |
| **侧重方向** | 注重技术个性化，功能配置将越来越繁重，使用将越来越复杂 | 侧重通用型功能和可视化呈现，以极简易用为首要原则，将会越来越轻量化 |

Zensical 很棒，但我找不到用 Zensical 的理由。

### MaterialX 更新要点

- 添加了与 Zensical 一致的现代 Liquid Glass 主题
- 新增了下一代日期作者插件，参见：[document-dates-zh](document-dates-zh.md)
- 添加了最新更新模块，参见：[recently-updated-zh](recently-updated-zh.md)
- 重构了移动端 TOC 组件，在移动设备上实现无缝 NAV 和 TOC 体验 (Zensical 在移动端无 TOC 功能)
- 完美修复了移动设备上当抽屉处于激活时，轻扫会穿透抽屉的问题 (Zensical & Material 未能修复)
- 为 TOC 添加了缩进引导线和活动链接强调色
- 将 "返回顶部容器" 移至底部，更符合就近操作的交互逻辑
- 允许在 Liquid Glass 主题中设置顶栏背景颜色，参见 [Topbar style](https://jaywhj.github.io/mkdocs-materialx/setup/changing-the-colors.html#topbar-style)

<br />

## 快速开始

安装:

``` sh
pip install mkdocs-materialx
```

配置 `materialx` 主题到 mkdocs.yml:

``` yaml
theme:
  name: materialx
```

> 注意：主题名字是 `materialx`，不是 material，其他一切都和使用 material 时一样

使用以下命令启动实时预览，自动打开和自动热重载：

```
mkdocs serve --livereload -o
```

<br />

## 更新日志

### mkdocs-materialx-10.0.9

#### en

- Added configurable styles for topbar, allow to set topbar background color in Liquid Glass theme, see [Topbar style](https://jaywhj.github.io/mkdocs-materialx/setup/changing-the-colors.html#topbar-style)
- Make color-mix of navigation background compatible with iOS 14 and earlier
- Optimized the css details of NAV and TOC on different platforms again to improve the aesthetics

#### zh

- 为 topbar 增加了可配置样式，允许在 Liquid Glass 主题中设置 topbar 的背景颜色，见 [Topbar style](https://jaywhj.github.io/mkdocs-materialx/setup/changing-the-colors.html#topbar-style)
- 让导航的背景混合色兼容 iOS 14 及更早版本
- 再次优化了 NAV 和 TOC 在不同平台上的 css 细节，提升了美观度

<br />

### mkdocs-materialx-10.0.8

#### en

- **Highlights**: Fixed issue where swipe events would wear through on mobile
- **Highlights**: Adjust the “back to top” container to dynamic positioning, now it will be intelligently centered and auto-hide when not needed
- Adjust the color of active link from `accent` to `primary`, the primary color is used for active links in NAV and TOC, text links and several other components
- Optimized NAV and TOC styles
- Adjusted the style of `admonition`
- Added underline for text link on hover/focus
- Fixed incorrect actor-line color in `mermaid` sequence
- Fixed issue where the top container may be blocked by the tabbed
- Fixed search containers vertical not centered issue
- Fixed `annotation` button vertical not centered issue

#### zh

- **重点更新** ：修复了在移动设备上轻扫事件会穿透的问题
- **重点更新** ：将 "返回顶部 "容器调整为动态定位，现在它会智能居中，并在不需要时自动隐藏
- 将活动链接的颜色从 `accent` 调整为 `primary`，primary 用于导航和目录中的活动链接、文本链接和其他一些组件
- 优化了 nav 和 toc 样式
- 调整了 `admonition` 的样式
- 在悬停/聚焦时为文本链接添加了下划线
- 修复了 `mermaid` sequence 图中 actor-line 颜色不正确的问题
- 修复了顶部容器可能被选项卡遮挡的问题
- 修复了搜索容器垂直不居中的问题
- 修复了 `annotation` 按钮垂直不居中的问题

<br />

### mkdocs-materialx-10.0.6

#### en

- New: The recently updated document list supports **summary mode** and automatically extracts article summaries
- New: The recently updated document list supports **dynamic layout**, with multiple view modes added including list, detail and grid
- Updated: Adjusted the UI style of `admonition`
- Updated: Adjusted the UI style of `blockquote`
- Updated: Adjusted the UI style of the search box
- Updated: Adjusted the tooltip layer level to prevent it from obscuring tabs
- Updated: Adjusted the vertical spacing of the page-turning buttons in the footer
- Fixed: The issue where the back-to-top button was not centered

#### zh

- 新增：最近更新的文档列表支持摘要模式，会自动提取文章摘要
- 新增：最近更新的文档列表支持动态布局，新增列表、详情、网格等多种视图模式
- 更新：调整 admonition 的 UI 样式
- 更新：调整 blockquote 的 UI 样式
- 更新：调整搜索框的 UI 样式
- 更新：调整 tooltip 层级以避免挡住 tabs
- 更新：调整页脚翻页按钮上下间距
- 修复：back-to-top 按钮不居中的问题

<br />

### mkdocs-materialx-10.0.5

#### en

- New: **Refactor the TOC components for mobile**, now you can experience TOC perfectly on mobile!
- New: Add a new generation date author plugin, see doc [Add document dates authors](https://jaywhj.github.io/mkdocs-materialx/setup/adding-document-dates-authors.html)
- New: Add recent updates module, see doc [Add recent updates module](https://jaywhj.github.io/mkdocs-materialx/setup/adding-recent-updates-module.html)
- Fixed: Show/hide bottom navigation container wisely
- Fixed: TOC not hiding when clicked
- Fixed: Gaussian Blur not working in Safari
- Fixed: Adjust animation delay
- Fixed: Adjust TOC line spacing

#### zh

- 新增: **为移动设备重构 TOC 组件**，现在您可以在移动设备上完美体验 TOC！
- 新增: 新一代日期作者插件，参见文档 [添加文档日期作者](https://jaywhj.github.io/mkdocs-materialx/setup/adding-document-dates-authors.html)
- 新增: 最近更新模块, 参见文档 [添加最近更新模块](https://jaywhj.github.io/mkdocs-materialx/setup/adding-recent-updates-module.html)
- 修复: 合理显示/隐藏底部导航器
- 修复: 选中 TOC 后不隐藏的问题
- 修复: 高斯模糊在 Safari 中不起作用的问题
- 修复: 优化动画延迟
- 修复: 调整 TOC 的行间距

<br />

### mkdocs-materialx-10.0.4

#### en

- New: Refactor the TOC components for mobile, now you can experience TOC perfectly on mobile!
- New: Show `git repo` in sidebar on mobile
- New: Add a new generation date author plugin, see doc [Add document dates authors](https://jaywhj.github.io/mkdocs-materialx/setup/adding-document-dates-authors.html)
- New: Add recent updates module, see doc [Add recent updates module](https://jaywhj.github.io/mkdocs-materialx/setup/adding-recent-updates-module.html)
- Fixed: Placing the back-to-top button at the bottom, this is more in line with the interaction logic of proximity operation
- Fixed: Optimize the judgment of the direction of the swipe gesture, so as to adjust the sensitivity of showing the bottom menu
- Fixed: Search function does not display properly on mobile
- Fixed: iconsearch_index.json write issue
- Fixed: Language selector escapes viewport when too wide on mobile
- Fixed: Replace the gap attribute to increase compatibility
- Fixed: Adjust the style for kbd
- Fixed: Merge the upstream 9.7.1 update
- Fixed: Update Doc Site, see [MaterialX](https://jaywhj.github.io/mkdocs-materialx/)

#### zh

- 新增: 针对移动设备重构 TOC 组件
- 新增: 在移动设备侧边栏添加 `git repo` 显示
- 新增: 添加新一代日期作者插件，参见文档 [添加文档日期作者](https://jaywhj.github.io/mkdocs-materialx/setup/adding-document-dates-authors.html)
- 新增: 添加最近更新模块, 参见文档 [添加最近更新模块](https://jaywhj.github.io/mkdocs-materialx/setup/adding-recent-updates-module.html)
- 修复: 将「回到页面顶部」按钮放在底部，更符合就近操作的交互逻辑
- 修复: 优化对轻扫手势方向的判断，以调整显示底部菜单的灵敏度
- 修复: 搜索功能在手机上无法正常显示的问题
- 修复: iconsearch_index.json 的写入问题
- 修复: 语言选择器在移动设备上太宽时会跳出视口
- 修复: 替换 gap 属性以增加兼容性
- 修复: 调整键盘快捷键 kbd 的样式
- 修复: 合并上游 9.7.1 更新
- 修复: 更新文档站点, 参见 [MaterialX](https://jaywhj.github.io/mkdocs-materialx/)

<br />

### v10.0.3

#### zh

- 新增：添加时代潮流 Liquid Glass 主题，这是一款与 Zensical 相同的现代主题
- 新增：调整语言选择框的最大高度，在不滚动时可显示更多语言选项
- 新增：给 TOC 添加缩进参考线，使用户更容易直观地浏览目录
- 新增：给 TOC 中的活动链接添加与 nav 相同的强调色，以便清晰地跟踪进度
- 新增：为表格增加斑马条纹，并适配明暗模式
- 新增：更新 `source-file.html` 模板示例
- 修复：当启用 `navigation.tabs.sticky` 时 header 栏中的 tooltip 提示框被挡住的问题
- 修复：右上角 repo 的 tooltip 提示框位置偏右不居中的问题
- 修复：当语言选择框最大宽度超过 150px 时，在移动设备上显示不正常的问题（chrome：右侧被遮挡；safari：整个页面会左右滚动）

#### en

- New: Added Liquid Glass theme, a modern theme identical to Zensical
- New: Adjusted the maximum height of the language selection box to display more language options without scrolling
- New: Added indentation guide lines to the TOC for more intuitive navigation
- New: Applied the same accent color as the nav to active links in the TOC for clear progress tracking
- New: Added zebra-striping to tables with support for both light and dark modes
- New: Updated the `source-file.html` template example
- Fixed: Tooltip in the header being blocked when `navigation.tabs.sticky` is enabled
- Fixed: Misaligned (right-offset) tooltip for the repo link in the top-right corner
- Fixed: Display issues on mobile devices when the maximum width of the language selection box exceeds 150px (Chrome: right side gets clipped; Safari: horizontal page scrolling occurs)

<br />

## Chat Group

**Discord**: <https://discord.gg/cvTfge4AUy>

**Wechat**: 

<img src="assets/wechat-group.jpg" width="140" />