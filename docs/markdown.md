---
created: 2018-05-16
title: Markdown 实用教程
author: Aaron Wang
icon: simple/markdown
tags:
    - tutorial
    - markdown
---



# Markdown 实用教程



## 一、什么是 Markdown

Markdown 是一种轻量级的纯文本标记语言，用简单少量的符号对文字进行标注，从而实现 <span style="color:red">以最小的输入代价生成印刷级排版格式的文档</span>。它在 <span style="color:red">流畅的书写</span> 和 <span style="color:red">印刷级阅读体验</span> 之间找到了平衡，让人只需**专注内容而不是纠结排版**。

常用的标记符号 **不超过十个**，好记好用好效果。(非程序员用户如产品、运营 ... 也可以轻松搞定)



## 二、Markdown 编辑器

- [Typora](https://www.typora.io/)（Mac、Win、Linux），简约不简单，所见即所得；✓
- [MWeb](https://zh.mweb.im/)（Mac、iOS），一款专注于 Markdown 的写作、记笔记和发布软件；
- [Obsidian](https://obsidian.md/download)（Mac、Win、Linux、iOS、Android），一款支持 Zettelkasten 笔记法的笔记管理软件，利用「双向链接」打造「知识循环」体系，支持基础的 markdown 语法；
- [YankNote](https://yank-note.com/zh-CN)（Mac、Win、Linux），一款强大可扩展的 Markdown 编辑器，满足了所有幻想，还可以[在线体验](https://demo.yank-note.com/)；✓
- [mdx-notes](https://github.com/maqi1520/mdx-notes)（Mac、Win、Linux、Web），跨平台笔记软件，Web版 [在线编辑器](https://mdxnotes.com/post?id=demo)可作为网文排版工具；
- [markdown-online-editor](https://github.com/nicejade/markdown-online-editor)，[Arya - 在线 Markdown 编辑器](https://markdown.lovejade.cn/)，支持所有基础语法、数学公式、Mermaid 图表、Echarts 图表、五线谱，以及 PPT 模式、视频音频解析等；✓
- [md](https://github.com/doocs/md)，[在线微信 Markdown 编辑器](https://doocs.github.io/md/)，支持所有基础语法、数学公式、Mermaid 图表、GFM 警告块；

### 使用推荐

- 当日常工具用：推荐 Typora、Arya - 在线 Markdown 编辑器；
- 用作网文排版：推荐 Arya - 在线 Markdown 编辑器，md 在线微信 Markdown 编辑器；
- 写知识笔记形成库：推荐 YankNote；
    - Obsidian 的问题是对 HTML 的支持太弱了，比如 HTML 锚点链接识别不出来，另外导出功能也很弱，就支持一个PDF格式且还不带目录大纲；

使用和体验过不下二十款 Markdown 编辑器，从 **简洁易用、基础功能完善、语法兼容、扩展性、跨平台** 角度看，给大家以上建议，我自己的习惯是 **Typora** 和 **YankNote** 的组合，至少到 2024年是这样。



## 三、Markdown 实用语法

本教程基于流行的 [CommonMark 规范](http://spec.commonmark.org/) 和 [GitHub Flavored Markdown](https://github.github.com/gfm/) (GFM) 语法提炼与拓展。



### 1. 标题

两种写法：

1. 用 1-6 个 `#` 加空格，分别表示 1-6 级标题；
2. `=` 或 `-` 号，只能表示一二级标题，不常用；

```markdown
# 一级标题
## 二级标题
#### 四级标题


这是一个一级标题
=====

这是一个二级标题
-----
```



### 2. 文字样式

Markdown 语法：

```
*斜体*    _斜体_
**粗体**    __粗体__
***加粗斜体***    ___加粗斜体___
~~删除线~~
<u>下划线</u>
<mark>背景高亮</mark>
```

*斜体*    _斜体_
**粗体**    __粗体__
***加粗斜体***    ___加粗斜体___
~~删除线~~
<u>下划线</u>
<mark>背景高亮</mark>



### 3. 列表

#### 无序列表

使用 `-` 或 `+` 或 `*` 加空格 表示无序列表：

```markdown
- 无序列表项 一
- 无序列表项 二
    - 无序列表
- 无序列表项 三
```

*示例效果：*

- 无序列表项 一
- 无序列表项 二
    - 无序列表
- 无序列表项 三

#### 有序列表

使用 `数字+点` 加空格 表示有序列表：

```markdown
1. 有序列表项 一
2. 有序列表项 二
    1. 有序列表
3. 有序列表项 三
```

*示例效果：*

1. 有序列表项 一
2. 有序列表项 二
    1. 有序列表
3. 有序列表项 三



### 4. 链接

使用 `[描述](链接地址)` ，为文字增加链接：

```markdown
这是去往 [Apple](https://www.apple.com.cn) 的链接。
```

*示例效果：*

这是去往 [Apple](https://www.apple.com.cn) 的链接。



### 5. 图像

使用 `![描述](图片链接地址)` 插入图像，图片链接地址 可以是本地图片路径，也可以是网络图片url：

```markdown
![网络图片](https://lf3-static.bytednsdoc.com/obj/eden-cn/ulkphgeh7nuvspognuhbo/douyin_web/img/images/logo-horizontal.svg)
![本地图片](file:///Users/aaron/Pictures/cat.jpg)
![本地图片](/Users/aaron/Pictures/cat.jpg)
```

*示例效果：*

![网络图片](https://lf3-static.bytednsdoc.com/obj/eden-cn/ulkphgeh7nuvspognuhbo/douyin_web/img/images/logo-horizontal.svg)

### 6. 引用

使用 `>` 加空格 表示引用，也可以多个组合：

```markdown
> 野火烧不尽，春风吹又生。
> > 春风吹又生
```

*示例效果：*

> 野火烧不尽，春风吹又生。
> > 春风吹又生



### 7. 代码片

使用一个反引号 \` 前后包围的方式表示代码片段：

```markdown
让我们聊聊 `html`。
```

*示例效果：*

让我们聊聊 `html`。



### 8. 代码块

使用三个反引号 \`\`\` 上下包围的方式表示代码块。后面跟编程语言可以支持语法高亮显示，支持所有主流编程语言。

JavaScript 示例：

````
```javascript
function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2); 
```
````

*示例效果：*

```javascript
function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2); 
```



### 9. 分割线

可以在一行中用 **3** 个以上的 `-` 或 `*` 或 `_` 来建立一个分隔线：

Markdown 语法：

```markdown
---
- - -
***
```

*示例效果：*

---
- - -
***



### 10. 表格

Markdown 语法：

```
| 项目(左对齐) | 价格(居中) | 数量(右对齐) |
| :--- | :---: | ---: |
| 计算机 | 1600 | 5 |
| 手机 | 12 | 12 |
| 管线 | 1 | 234 |
```

*示例效果：*

| 项目(左对齐) | 价格(居中) | 数量(右对齐) |
| :--- | :---: | ---: |
| 计算机 | 1600 | 5 |
| 手机 | 12 | 12 |
| 管线 | 1 | 234 |



### 11. 复选框

Markdown 语法：

```markdown
- [x] 支持 导出 HTML、PDF、ePub、Word 等；
- [x] 支持 高亮代码段；
- [x] 支持 数学公式；
- [x] 支持 幻灯片；
- [x] 支持 思维导图；
- [x] 支持 流程图、序列图、甘特图和各类图表；
- [ ] 任务一，未做任务；
    - [ ] 子任务；
```

*示例效果：*

- [x] 支持 导出 HTML、PDF、ePub、Word 等；
- [x] 支持 高亮代码段；
- [x] 支持 数学公式；
- [x] 支持 幻灯片；
- [x] 支持 思维导图；
- [x] 支持 流程图、序列图、甘特图和各类图表；
- [ ] 任务一，未做任务；
    - [ ] 子任务；



### 12. 文档目录

使用 `[TOC]` 会自动提取全文标题，生成目录结构。字母用大小写都可以。



### 13. 脚注

标准语法为 `[^keyword]`，keyword随意，保证唯一就行。

Markdown 语法：

```markdown
Markdown到底是什么？[^ftnt]

[^ftnt]: Markdown 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号以最小的输入代价生成极富表现力的文档。
```

*示例效果：*

Markdown到底是什么？[^ftnt]

[^ftnt]: Markdown 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号以最小的输入代价生成极富表现力的文档。


<mark>普通用户到此，足够了。</mark>



## 六、数理公式

### 1. 数学公式

#### 内联公式

使用 \$ 前后包围方式。

- 用 `$E=mc^2$` 表示：$E=mc^2$
- 用 `$\sum_{i=1}^n a_i=0$` 表示：$\sum_{i=1}^n a_i=0$


#### 块级公式

使用 \$\$ 前后包围的方式。

- 用 `$$ \displaystyle x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$` 表示：

$$ \displaystyle x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

- 用 `$$ f(x_1,x_x,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2 $$` 表示：

$$ f(x_1,x_x,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2 $$



### 2. 化学方程式

通过 [mhchem](https://mhchem.github.io/MathJax-mhchem/) 扩展实现，支持 MathJax 和 KaTeX。

- 用 `$$ \ce{CH4 + 2 $\left( \ce{O2 + 79/21 N2} \right)$} $$` 表示：

$$ \ce{CH4 + 2 $\left( \ce{O2 + 79/21 N2} \right)$} $$



## 七、图形与图表

使用 Markdown 快速生成各类图形与图表，参考另一篇文档 [Markdown 图形与图表](graph-chart.md)。



## 八、静态网站

使用 Markdown 快速生成静态网站，参考另一篇文档 [Markdown 静态网站](website.md)。



## 九、幻灯片

使用 Markdown 快速生成精美幻灯片，参考另一篇文档 [Markdown 幻灯片](slideshow.md)。

