---
title: Jinja2 教程
icon: simple/jinja
---

# Jinja2 教程

Jinja2 是一个现代的、功能强大的 Python 模板引擎。它是 Flask 和 Django 等流行 Web 框架的默认模板引擎，同时也可以作为独立的模板引擎使用。以下是 Jinja2 的全部教程，包括基础语法、控制结构、过滤器、宏和继承等内容。



## 1. 基础语法

### 1.1 变量

在 Jinja2 中，可以使用 `{{ ... }}` 语法来输出变量的值。例如：

```jinja2
{% set name = "Alice" %}
<p>我的名字是 {{ name }}。</p>
```

在上面的代码中，使用 `{% set name = "Alice" %}` 定义了一个名为 `name` 的变量，并在 `<p>` 标签中使用 `{{ name }}` 输出了该变量的值。

### 1.2 注释

在 Jinja2 中，可以使用 `{# ... #}` 语法来添加注释。例如：

```jinja2
{# 这是一个注释 #}
<p>这是一个段落。</p>
```

在上面的代码中，使用 `{# ... #}` 添加了一个注释，不会在 HTML 中显示。

### 1.3 控制结构

在 Jinja2 中，可以使用 `{% ... %}` 语法来添加各种控制结构，例如条件语句、循环语句等。例如：

```jinja2
{% if name == "Alice" %}
<p>你好，{{ name }}！</p>
{% elif name == "Bob" %}
<p>你好，{{ name }}！</p>
{% else %}
<p>你好，陌生人！</p>
{% endif %}
```

在上面的代码中，使用 `{% if ... %}`、`{% elif ... %}`、`{% else %}` 和 `{% endif %}` 构建了一个条件语句，根据变量 `name` 的值输出不同的内容。

### 1.4 过滤器

在 Jinja2 中，可以使用 `|` 语法来应用各种过滤器（可以理解为内置函数或字符串处理函数），例如格式化日期、字符串转换等：

```jinja2
<p>今天是 {{ now()|date('Y年m月d日') }}。</p>
```

在上面的代码中，使用 `now()` 函数获取当前日期时间，然后使用 `|date('Y年m月d日')` 过滤器将日期格式化为 `Y年m月d日` 的形式。

### 1.5 常量

在 Jinja2 中，可以使用常量来表示一些不变的值，例如 `true`、`false`、`none` 等。例如：

```jinja2
{% set x = none %}
{% if x is none %}
<p>x 是空值。</p>
{% endif %}
```

在上面的代码中，使用 `none` 常量表示一个空值，然后使用 `is none` 条件判断语句判断变量 `x` 是否为空值。



## 2. 控制结构

### 2.1 条件语句

在 Jinja2 中，可以使用 `{% if ... %}`、`{% elif ... %}`、`{% else %}` 和 `{% endif %}` 构建条件语句。例如：

```jinja2
{% if x > 0 %}
<p>x 是正数。</p>
{% elif x < 0 %}
<p>x 是负数。</p>
{% else %}
<p>x 是零。</p>
{% endif %}
```

在上面的代码中，根据变量 `x` 的值输出不同的内容。

### 2.2 循环语句

在 Jinja2 中，可以使用 `{% for ... in ... %}` 和 `{% endfor %}` 构建循环语句。例如：

```jinja2
{% for item in items %}
<p>{{ item }}</p>
{% endfor %}
```

在上面的代码中，使用 `{% for ... in ... %}` 循环遍历列表 `items` 中的元素，并使用 `{{ item }}` 输出每个元素的值。

### 2.3 宏

在 Jinja2 中，可以使用 `{% macro ... %}` 和 `{% endmacro %}` 定义宏，以便在模板中重复使用一些代码块。例如：

```jinja2
{% macro hello(name) %}
<p>你好，{{ name }}！</p>
{% endmacro %}

{{ hello("Alice") }}
{{ hello("Bob") }}
```

在上面的代码中，使用 `{% macro ... %}` 定义了一个名为 `hello` 的宏，然后在模板中多次调用该宏，并传递不同的参数。



## 3. 过滤器

### 3.1 基本过滤器

在 Jinja2 中，可以使用各种过滤器来转换、格式化和操作变量的值。例如：

```jinja2
{{ name|upper }}
{{ age|round }}
{{ text|truncate(50) }}
```

在上面的代码中，使用 `|` 语法应用了三个过滤器，分别将变量 `name` 转换为大写字母、将变量 `age` 四舍五入、将变量 `text` 截取为最多 50 个字符。多个过滤器可以链式调用，前一个过滤器的输出会作为后一个过滤器的输入。

### 3.2 自定义过滤器

在 Jinja2 中，可以使用 `Environment.filters` 属性或 `@app.template_filter` 装饰器来定义自定义过滤器。例如：

```python
from jinja2 import Environment

def reverse_filter(value):
    return value[::-1]

env = Environment()
env.filters["reverse"] = reverse_filter

# 或者使用 @app.template_filter
@app.template_filter("reverse")
def reverse_filter(value):
    return value[::-1]
```

在上面的代码中，定义了一个名为 `reverse_filter` 的自定义过滤器，并将其添加到 Jinja2 环境中。然后，在模板中就可以使用 `|reverse` 过滤器来调用该自定义过滤器。



## 4. 继承和包含

### 4.1 继承

在 Jinja2 中，可以使用 `{% extends ... %}` 和 `{% block ... %}` 构建模板继承关系，以便在不同的模板中重用相同的代码块。例如：

```jinja2
<!-- base.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>{% block title %}{% endblock %}</title>
  </head>
  <body>
    {% block content %}{% endblock %}
  </body>
</html>
```
```jinja2
<!-- child.html -->
{% extends "base.html" %}

{% block title %}
  我是子模板的标题
{% endblock %}

{% block content %}
  <p>这是子模板的内容。</p>
{% endblock %}
```

在上面的代码中，定义了一个名为 `base.html` 的父模板和一个名为 `child.html` 的子模板，并使用 `{% extends ... %}` 和 `{% block ... %}` 构建了模板继承关系。子模板继承了父模板的结构和内容，并在其中重定义了两个模板块。

### 4.2 包含

在 Jinja2 中，可以使用 `{% include ... %}` 包含其他的模板文件，以便在模板中重用相同的代码块。例如：

```html
<!-- header.html -->
<header>
  <h1>这是一个标题</h1>
</header>
```
```html
<!-- footer.html -->
<footer>
  <p>版权所有 &copy; 2022</p>
</footer>
```
```jinja2
<!-- page.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>页面标题</title>
  </head>
  <body>
    {% include "header.html" %}
    <p>这是页面的内容。</p>
    {% include "footer.html" %}
  </body>
</html>
```

在上面的代码中，定义了三个模板文件，分别表示页面的头部、尾部和内容。然后，在 `page.html` 模板中使用 `{% include ... %}` 包含了头部和尾部的模板文件，以便在页面中重用这些代码块。

以上就是 Jinja2 的全部教程，涵盖了 Jinja2 的基础语法、控制结构、过滤器、宏、继承和包含等多个方面，希望对您有所帮助。下面是一些常见问题和答案，供参考。



## QA

### Q: Jinja2 和 Django 模板引擎有什么区别？

Jinja2 和 Django 模板引擎都是 Python 的模板引擎，用于生成 HTML、XML 等文本格式的输出。它们的语法和功能有一些区别，主要体现在以下几个方面：

- 语法：Jinja2 的语法更加简洁和灵活，支持更多的控制结构和过滤器。而 Django 模板引擎的语法相对较为简单，支持的控制结构和过滤器较少。
- 性能：Jinja2 的性能比 Django 模板引擎更快，尤其在处理大量数据和复杂逻辑时表现更加出色。
- 集成性：Jinja2 可以方便地与 Flask、Tornado、Google App Engine 等多个 Python 框架集成，而 Django 模板引擎则是 Django 框架的默认模板引擎，与 Django 框架集成更为紧密。

### Q: Jinja2 如何处理模板中的 HTML 转义问题？

Jinja2 默认会自动将模板中的 HTML 特殊字符进行转义，以避免 XSS 攻击等安全问题。例如，将 `<` 转义为 `&lt;` ，将 `>` 转义为 `&gt;` ，将 `&` 转义为 `&amp;` 等。如果希望输出原始的 HTML 内容，可以使用 `safe` 过滤器。例如：

```jinja2
{{ html|safe }}
```

在上面的代码中，使用 `safe` 过滤器告诉 Jinja2 输出原始的 HTML 内容，而不进行转义。
需要注意的是，使用 `safe` 过滤器可能存在安全风险，应该谨慎使用，并确保输出的内容是可信的。

### Q: Jinja2 如何处理模板中的变量作用域问题？

Jinja2 中的变量作用域遵循类似 Python 的作用域规则，即内部作用域可以访问外部作用域的变量，但外部作用域不能访问内部作用域的变量。例如：

```jinja2
{% set x = 1 %}
{% if true %}
  {% set y = 2 %}
{% endif %}
<p>x = {{ x }}, y = {{ y }}</p>
```

在上面的代码中，变量 `x` 定义在外部作用域中，可以被内部作用域访问。变量 `y` 定义在内部作用域中，只能在条件语句中访问，外部作用域无法访问。
需要注意的是，如果在模板中使用了 `{% include ... %}` 或 `{% extends ... %}` 等构建模板继承关系的语句，则变量作用域会被继承和覆盖，需要特别注意。

### Q: Jinja2 如何处理模板中的循环引用问题？

Jinja2 中的循环引用问题指的是，当模板 A 包含了模板 B，并且模板 B 也包含了模板 A 时，会产生无限循环的引用关系，导致程序崩溃。为了避免这种情况，Jinja2 提供了 `{% include ... ignore missing %}` 语法，表示如果模板文件不存在，则忽略该错误，并继续执行后续的代码。例如：

```jinja2
{% include "header.html" ignore missing %}
```

在上面的代码中，如果模板文件 `header.html` 不存在，则忽略该错误，并继续执行后续的代码。
需要注意的是，使用 `{% include ... ignore missing %}` 可能会导致模板中的某些部分缺失或功能不完整，应该谨慎使用。最好的解决方案是避免循环引用问题的产生，优化模板结构和组织方式。



## 更多教程资源

- [Jinja2 官方文档](https://docs.jinkan.org/docs/jinja2/)；
- [本教程原文](https://www.kancloud.cn/ay947528/aypy/3156529)；
- [jinja2模块使用教程](https://www.cnblogs.com/sui776265233/p/10570712.html)；
- [jinja2-cli](https://github.com/mattrobenolt/jinja2-cli)：Jinja2 命令行工具，可以方便地渲染模板文件；
- [Flask-Jinja2](https://github.com/pallets/flask/tree/main/src/flask/templating.py)：Flask 框架默认使用的 Jinja2 扩展，提供了更多的功能和集成方式；

