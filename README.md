# ContentEasyJS
:star2:Easily and automatically create directory navigation for your articles without configuration. | 轻松为你的网站文章设置右侧悬浮目录导航，支持点击跳转，不需要复杂的设置！

[中文版本说明](#中文版本)

[English version](#english-version)

# Preview

![](/pics/preview.png)

# 中文版本

请注意：在使用ContentEasy之前，必须先引用`JQuery`：

```
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
```

分别下载**JS**与**CSS**中的内容，在你的页面中引用（这里使用CDN，你可以改为自己的本地目录）：

```
<link rel="stylesheet" href="https://www.stackoverflow.wiki/User/contentEasy/css/contentEasy.min.css" />
<script type="text/javascript" src="https://www.stackoverflow.wiki/User/contentEasy/js/contentEasy.min.js"></script>
```

紧接着，在网站中任意位置（建议将引用JS、CSS和以下代码都放在页面底部</body>上方）写入下方内容：

```
<script>
    window.onload = function () {
        contentEasy({
            "range": "",
            "autoHide" : "true"
        });
    };
</script>
<div class="contentEasy-window">
    <ul class="contentEasy-class"></ul>
</div>
```

由于contentEasy是悬浮在页面右侧的，所以可以将代码贴到任何位置。

开启页面，你的网页应该自动为h1-h6标签建立了目录，并显示在页面右侧了。

contentEasy还预置了几个参数，可以在`<script>`标签中添加或修改：

参数名称|参数|默认值|作用
-|-|-|-
range|`class`、`id`或`标签`名称|空|将扫描指定`class`、`id`或`标签`中的h1-h6标签建立为目录，为空则扫描整个页面，用法：`.class` / `#id` / `tag`
autohide|true或false|false|设置为true，在页面加载时不显示目录，在向下滚动一次后显示。
contentClass|`class`、`id`或`标签`名称|.contentEasy-class|指定contentEasy默认追加目录显示的DIV
windowClass|`class`、`id`或`标签`名称|.contentEasy-window|指定contentEasy默认的窗体

# English version

Please note: Before using ContentEasy, you must first reference `JQuery`:

```
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
```

Download the contents of **JS** and **CSS** separately and refer to it on your page (use CDN here, you can change to your own local directory):

```
<link rel="stylesheet" href="https://www.stackoverflow.wiki/User/contentEasy/css/contentEasy.min.css" />
<script type="text/javascript" src="https://www.stackoverflow.wiki/User/contentEasy/js/contentEasy.min.js"></script>
```

Next, write the following content anywhere on the site (recommended to reference JS, CSS, and the following code at the bottom of the page </body>):

```
<script>
    Window.onload = function () {
        contentEasy({
            "range": "",
            "autoHide" : "true"
        });
    };
</script>
<div class="contentEasy-window">
    <ul class="contentEasy-class"></ul>
</div>
```

Since contentEasy is floating on the right side of the page, you can paste the code anywhere.

When you open the page, your web page should automatically create a directory for the h1-h6 tag and display it on the right side of the page.

contentEasy also presets several parameters that can be added or modified in the `<script>` tag:

Parameter name|Parameter|Default value|Action
-|-|-|-
Range|`class`, `id` or `tag` name|empty|will be used to scan the h1-h6 tag in the `class`, `id` or `tag` to create a directory. If it is empty, scan the entire page. Usage: `.class` / `#id` / `tag`
Autohide|true or false|false| is set to true, the directory is not displayed when the page is loaded, and is displayed after scrolling down once.
contentClass|`class`, `id` or `tag` name|.contentEasy-class|specify the contentEasy default append directory display DIV
windowClass|`class`, `id` or `tag` name|.contentEasy-window|specify contentEasy default form
