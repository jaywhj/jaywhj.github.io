---
cover: assets/cat.jpg
---

# 下一代主题插件 MaterialX

[**MaterialX for MkDocs**](https://github.com/jaywhj/mkdocs-materialx){target="_blank"}，下一代 mkdocs-material，让你继续用熟悉和喜爱的方式构建漂亮站点。基于 `mkdocs-material-9.7.1` 衍生，命名为 `X`，提供持续的维护与更新。

??? desc "为什么选择 MaterialX ?"

    由于 MkDocs 原作者的个人问题，MkDocs 项目即将走向尽头。他已停止更新 MkDocs，并打算发布一个全新的 2.0 版本作为替代。可是，这个新版本与现有生态系统完全不兼容，它是一个完全独立的项目，只是沿用了 MkDocs 这个名称，一旦你不小心升级了，将导致毁灭性的破坏。
    
    因此，为了摆脱对 MkDocs 的依赖，原流行主题框架 mkdocs-material 背后团队停止了对 mkdocs-material 的维护，转而去开发了一个全新的同类项目 Zensical，优点是采用了新的架构并消除了对 MkDocs 的依赖，缺点是它仍然缺失很多功能，此外它与现有的 MkDocs 生态不兼容，导致许多现有插件无法使用。这给用户带来了一定的迁移成本，其稳定性也未经证实。
    
    为了让原有的 MkDocs 生态和项目持续且稳定的运行下去，MkDocs 有了新的社区继任者 [ProperDocs](https://github.com/ProperDocs/properdocs){target="_blank"} (基于 MkDocs 1.6.1)，会提供持续的更新维护且无缝兼容原来的 MkDocs 生态。
    
    同样 mkdocs-material 也迎来了新的继任者 **MaterialX** (基于 mkdocs-material 9.7.1)，也会提供持续的更新维护，且无缝兼容原有的生态，零迁移成本。
    
    ---
    
    简而言之：**`MaterialX + ProperDocs`** 是 `mkdocs-material + mkdocs` 的等价替代品，并提供持续的维护和更新。

MaterialX 既维持了 mkdocs-material 项目的 **丰富功能** 和 **稳定性**，又拥有了 **新特性** 和 **兼容性**，并将拥有以下全新愿景和定位。

## 路线图

MaterialX 旨在成为 **极简易用傻瓜式** 的静态站点生成器，用户只需要简单且少量的配置，就能轻松把平时的笔记和文档转成专业站点，方便传播分享与交流。

??? desc "为什么强调极简易用 ?"

    在我看来，技术的魅力在于让更多的人利用你提供的工具轻而易举就实现了他原来很难做到的事。
    
    一个好的产品，在功能设计上，应该是恰到好处，适可而止，而不是提供更多的功能选择和眼花缭乱的配置项。说实话，无论是 mkdocs-material 还是 Zensical，都有点个性化过度了，配置项太多太复杂了，谁的配置项最后不是动辄几百行？哪个初次用 mkdocs-material 的人没折腾上好几天？

所以，MaterialX 将遵循以下目标和原则：

- **目标**：追求**人人可用**，人人都可拥有自己的网站，包括但不限于开发者、产品经理、运营人员、运维人员等，不再是技术人员的专利
- **原则**：以**极简易用**为首要原则，化繁为简，未来会简化配置和功能项，提供更合理的默认配置和自动化配置，减少用户的配置和使用成本
- **侧重**：**通用型功能**和**可视化呈现**，未来在功能选择上会更多偏向通用型和可视化表达型功能，将为大家提供更丰富的内容呈现形式，如图形、图表、图像、音视频等，让内容动起来
- **偏执**：**用户体验**，会更注重交互细节和视觉细节，会花很多时间去关注这些，可能是一个毫不起眼的行间距，也可能是一根简单的线条 ...

## 更新要点

- 为 **AI agents** 添加了 Markdown 源支持，以提供结构化内容， 能将 token 消耗减少 80% 以上
- 用全新架构重构了搜索模块，支持 **Pagefind** 框架，大大提高了**搜索质量**和**索引效率**。支持多供应商模式，分块索引，按需加载，索引压缩，多语言搜索和跨域搜索。适用于各种复杂场景和大型网站，可以处理超过 100,000 页的网站，参见 [Search](https://jaywhj.github.io/mkdocs-materialx/plugins/search.html){target="_blank"}
- 新增了**代码块下载**和**自动折叠**/展开长代码块功能，参见 [Code blocks](https://jaywhj.github.io/mkdocs-materialx/reference/code-blocks.html#code-collapse-expand){target="_blank"}
- 新增了 **Steps** 组件，可更清晰、直观地显示步骤或工作流，具体见 [Steps](https://jaywhj.github.io/mkdocs-materialx/reference/steps){target="_blank"}
- 增强了 `blog`，支持 CJK 语言
- 新增了下一代日期作者插件，参见：[document-dates-zh](document-dates-zh.md){target="_blank"}
    - 它比 `git-revision-date-localized` 和 `git-authors` **快 20-500 倍**，并可在任何环境（无 Git、Git 环境、Docker、所有 CI/CD 构建系统等）下运行
    - 彻底解决了基于日期时间的基建问题，让项目有了自动化日期的能力，**再也无需为任何功能手动设置日期**，包括：页面日期展示、blog 日期展示、blog 日期分类、blog 列表排序、sitemap.xml (lastmod - SEO 增强)、RSS feed、最近更新模块、搜索排序等
- 添加了最新更新模块，参见：[recently-updated-zh](recently-updated-zh.md){target="_blank"}
    - 按更新时间倒序展示最近更新的文档，列表项动态更新
    - 提供了丰富的页面展示形态（列表、详情、网格）
    - 智能提取文档摘要（无需手动设置）
    - 智能预估阅读时长，支持所有语言（中日韩 & 空格分隔型语言）
- 重构了移动端 TOC 组件，在移动设备上实现无缝 NAV 和 TOC 体验（更好的交互体验）
- 完美修复了在移动设备上当侧边栏抽屉处于激活时，轻扫会穿透抽屉的历史遗留 bug（容易引起误操作，很影响用户体验，在 Zensical 和 Material 中尚未解决）
- 大幅改进了在移动端的使用体验和细节
    - 将 "返回顶部" 容器移至底部，更符合就近操作的交互逻辑
    - 优化了 "返回顶部" 容器的显示与隐藏的灵敏度
    - 为 TOC 添加了缩进引导线和活动链接强调色
- 添加了 Liquid Glass 现代主题，允许在 Liquid Glass 主题中设置顶栏背景颜色，以支持不同配色方案的背景，参见 [Topbar style](https://jaywhj.github.io/mkdocs-materialx/setup/changing-the-colors.html#topbar-style){target="_blank"}
- 更多见 [Changelog](https://github.com/jaywhj/mkdocs-materialx/releases){target="_blank"}

<br />

## 快速开始

<div class="steps" markdown>

1. 安装:

``` sh
pip install mkdocs-materialx
```

2. 配置 `materialx` 主题到 mkdocs.yml:

``` yaml
theme:
  name: materialx
```

> 注意：主题名字是 `materialx`，不是 material，其他一切都和使用 material 时一样

3. 使用以下命令启动实时预览，自动开启和自动热重载：

=== "MkDocs"

    ```
    mkdocs serve --livereload -o
    ```

=== "ProperDocs"

    ```
    properdocs serve -o
    ```

</div>

## 更新日志

[Changelog](https://jaywhj.github.io/mkdocs-materialx/changelog/index.html){target="_blank"}

<br />

## Chat Group

**Discord**: <https://discord.gg/cvTfge4AUy>

**Wechat**: 

<img src="assets/wechat-group.jpg" width="140" />