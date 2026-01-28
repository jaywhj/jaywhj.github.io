---
cover: assets/cat.jpg
---

# 下一代主题插件 MaterialX

[**MaterialX for MkDocs**](https://github.com/jaywhj/mkdocs-materialx)，下一代 mkdocs-material，基于 `mkdocs-material-9.7.1` 衍生，取名为 `X`，会持续提供维护与更新。

由于 mkdocs-material 已进入维护模式，不再有新功能，而替代品 Zensical 目前还不完善，并且不兼容 MkDocs 原有的插件生态，这将导致原本的繁荣生态被打破而失去活力，用户原本稳定而又完善的站点如果要迁移到 Zensical，则有着较高的迁移成本和不稳定性的风险。

那有没有办法做到，既能拥有 mkdocs-material 的丰富生态和稳定性，又能拥有像 Zensical 一样的新特性呢？

答案就是 **MaterialX**，并且 MaterialX 将有着以下全新的定位。

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
| **最后版本** | mkdocs-material-9.7.1 | mkdocs-materialx-10.x <br />(基于 mkdocs-material-9.7.1 升级而来) |
| **使用方式** | mkdocs.yml 中配置主题名 `material` | mkdocs.yml 中使用新主题名 `materialx` <br />其他一切都和使用 material 时一样 |
| **当前状态** | 即将停止维护 | 持续维护与更新 |
| **功能更新** | 无（有遗留 bug） | bug 修复、新功能添加、用户体验优化等 <br />具体见 [Changelog](https://github.com/jaywhj/mkdocs-materialx/releases) |

### 与 Zensical

| 差异 | Zensical | MaterialX |
| --- | --- | --- |
| **功能定位** | 技术开发者、技术文档 | 任何 Markdown 用户、Markdown 笔记及文档 |
| **开发语言** | Rust | Python |
| **发展阶段** | 诞生几个月，初期，bug多，基础功能不完善 | 诞生超十年，成熟稳定期 |
| **使用方式** | 采用 zensical.toml，全新配置格式 <br />原 mkdocs.yml 中所有配置项需从头再来 | 延用 mkdocs.yml，使用主题 `materialx` <br />无迁移成本 |
| **生态环境** | 完全从 0 构建的一个新工具，不兼容原 MkDocs 中的一切，未来发展未知 | 基于 MkDocs 与 mkdocs-material-9.7.1，兼容 MkDocs 多年沉淀下来的丰富生态，开放、活跃 |
| **侧重方向** | 注重技术个性化，功能配置将越来越繁重，使用将越来越复杂 | 侧重通用型功能和可视化呈现，以极简易用为首要原则，将会越来越轻量化 |

Zensical 很棒，但我找不到用 Zensical 的理由。

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

<br />

## 更新日志

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
- New: Add a new generation date author plugin, see doc [Add document dates authors](https://jaywhj.github.io/mkdocs-materialx/setup/adding-document-dates-authors/)
- New: Add recent updates module, see doc [Add recent updates module](https://jaywhj.github.io/mkdocs-materialx/setup/adding-recent-updates-module/)
- Fixed: Show/hide bottom navigation container wisely
- Fixed: TOC not hiding when clicked
- Fixed: Gaussian Blur not working in Safari
- Fixed: Adjust animation delay
- Fixed: Adjust TOC line spacing

#### zh

- 新增: **为移动设备重构 TOC 组件**，现在您可以在移动设备上完美体验 TOC！
- 新增: 新一代日期作者插件，参见文档 [添加文档日期作者](https://jaywhj.github.io/mkdocs-materialx/setup/adding-document-dates-authors/)
- 新增: 最近更新模块, 参见文档 [添加最近更新模块](https://jaywhj.github.io/mkdocs-materialx/setup/adding-recent-updates-module/)
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
- New: Add a new generation date author plugin, see doc [Add document dates authors](https://jaywhj.github.io/mkdocs-materialx/setup/adding-document-dates-authors/)
- New: Add recent updates module, see doc [Add recent updates module](https://jaywhj.github.io/mkdocs-materialx/setup/adding-recent-updates-module/)
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
- 新增: 添加新一代日期作者插件，参见文档 [添加文档日期作者](https://jaywhj.github.io/mkdocs-materialx/setup/adding-document-dates-authors/)
- 新增: 添加最近更新模块, 参见文档 [添加最近更新模块](https://jaywhj.github.io/mkdocs-materialx/setup/adding-recent-updates-module/)
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