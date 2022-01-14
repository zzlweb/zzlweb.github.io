---
title: 前端开发规范 - CSS 代码规范
date: 2022-01-13
tags:
  - note
categories:
  - note
---

::: tip

前端代码规范系列 - CSS 代码规范

:::

<!-- more -->

## 编码规范

CSS 样式表是一个序列通用字符集，传输和存储过程中，这些字符必须由支持 US-ASCII（例如 UTF-8, ISO 8859-x, SHIFT JIS 等）字符编码方式编译

## 文档内嵌样式表编码

> When a style sheet is embedded in another document, such as in the STYLE element or “style” attribute of HTML, the style sheet shares the character encoding of the whole document.

当样式出现在其它文档，如 HTML 的 STYLE 标签或标签属性 “style”，样式的编码由文档的决定。

## 文档外链样式表编码

> When a style sheet resides in a separate file, user agents must observe the following priorities when determining a style sheet’s character encoding (from highest priority to lowest):

> 1. An HTTP “charset” parameter in a “Content-Type” field (or similar parameters in other protocols)
> 2. BOM and/or @charset
> 3. or other metadata from the linking mechanism (if any)
> 4. charset of referring style sheet or document (if any)
> 5. Assume UTF-8

文档外链样式表的编码可以由以下各项按照由高到低的优先级顺序决定：

1. HTTP “Content-Type” 字段参数 “charset”（或其它协议相似的参数）
2. BOM（byte-order mark）和（或）@charset
3. Link 中的元数据设置（如果有的话）
4. 引用样式表字符集或文档编码（如果有的话）
5. 假定为 UTF-8 编码

## 样式表编码

> Authors using an @charset rule must place the rule at the very beginning of the style sheet, preceded by no characters. (If a byte order mark is appropriate for the encoding used, it may precede the @charset rule.)

> @charset must be written literally, i.e., the 10 characters ‘@charset “‘ (lowercase, no backslash escapes), followed by the encoding name, followed by ‘“;’.

- `@charset`规则一定要在样式文件的第一行首个字符位置开始，否则的话就会有机会让 BOM 设置生效（如果有设置 BOM 的话）而优于 @charset 作为样式表的编码
- `@charset "";` 一定要写上，并且用小写字母，不能出现转义符

## 团队约定

- 样式文件必须写上 @charset 规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用 “UTF-8”
- 字符 @charset “”; 都用小写字母，不能出现转义符，编码名允许大小混写
- 考虑到在使用“UTF-8”编码情况下 BOM 对代码的污染和编码显示的问题，在可控范围下，坚决不使用 BOM。（更多关于 BOM 可参考 [BOM 的介绍](https://zh.wikipedia.org/wiki/%E4%BD%8D%E5%85%83%E7%B5%84%E9%A0%86%E5%BA%8F%E8%A8%98%E8%99%9F) 和 [「带 BOM 的 UTF-8」和「无 BOM 的 UTF-8」有什么区别？](http://www.zhihu.com/question/20167122) ）

推荐：

```
@charset "UTF-8";

.uihc {}
```

不推荐：

```
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */

/* @charset规则不在文件首行首个字符开始 */
@charset "UTF-8";

.uihc {}
```

```
@CHARSET "UTF-8";
/* @charset规则没有用小写 */

.uihc {}
/* 无@charset规则 */
.uihc {}
```

更多关于样式编码：[CSS style sheet representation](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#charset)

## 代码格式化

样式书写一般有两种：一种是紧凑格式 (Compact)

```
.uihc { display: block;width: 50px;}
```

一种是展开格式（Expanded）

```
.uihc {
    display: block;
    width: 50px;
}
```

团队约定

**统一使用展开格式书写样式**

## 代码大小写

样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。

```
/* 推荐 */
.uihc {
	display:block;
}

/* 不推荐 */
.uihc {
	DISPLAY:BLOCK;
}
```

## 选择器

- 尽量少用通用选择器 \*
- 禁止使用层级过深的选择器，最多 3 级。
- 除非有特定的功能、组件要求等，禁止随意使用 ID 来定义元素样式
- 除非是样式 reset 需要，禁止对纯元素选择器设置特定样式，避免样式污染
- 不使用无具体语义定义的标签选择器
- 选择器要尽可能短，并且尽量限制组成选择器的元素个数，建议不要超过 3 。

```
/* 推荐 */
.uihc {}
.uihc li {}
.uihc li p{}

/* 不推荐 */
*{}
#uihc {}
.uihc div{}
```

## 代码缩进

统一使用两个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

```
.uihc {
    width: 100%;
    height: 100%;
}
```

## 分号

每个属性声明末尾都要加分号；

```
.uihc {
    width: 100%;
    height: 100%;
}
```

## 代码易读性

左括号与类名之间一个空格，冒号与属性值之间一个空格

推荐：

```
.uihc {
    width: 100%;
}
```

不推荐：

```
.uihc {
    width:100%;
}
```

逗号分隔的取值，逗号之后一个空格

推荐：

```
.uihc {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```

不推荐：

```
.uihc {
    box-shadow: 1px 1px 1px #333,2px 2px 2px #ccc;
}
```

为单个 css 选择器或新申明开启新行

推荐：

```
.uihc,
.uihc-logo,
.uihc-hd {
    color: #ff0;
}

.nav{
    color: #fff;
}
```

不推荐：

```
.uihc,uihc-logo,.uihc-hd {
    color: #ff0;
}.nav{
    color: #fff;
}
```

颜色值 `rgb()` `rgba()` `hsl()` `hsla()` `rect()` 中可以有空格，取值不要带有不必要的 0

推荐：

```
.uihc {
    color: rgba(255,255,255,.5);
}
```

不推荐：

```
.uihc {
    color: rgba( 255, 255, 255, 0.5 );
}
```

属性值十六进制数值为 4 位的时候用 rgb 或 rgba 代替

推荐：

```
.uihc {
    color: #ffff;
}
```

不推荐：

```
.uihc {
    color: rgb(255, 255, 255);
}
```

不要为 0 指明单位

推荐：

```
.uihc {
    margin: 0 10px;
}
```

不推荐：

```
.uihc {
    margin: 0px 10px;
}
```

## 属性值引号

css 属性值需要用到引号时，统一使用单引号

```
/* 推荐 */
.uihc {
	font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.uihc {
	font-family: "Hiragino Sans GB";
}
```

## 属性书写顺序 (不做限定）

建议遵循以下顺序：

1. 布局定位属性：display / position / float / clear / visibility / overflow
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

```
.uihc {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

[属性顺序推荐](https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/main/css/index.js)

## CSS3 浏览器私有前缀写法

CSS3 浏览器私有前缀在前，标准前缀在后

```
.uihc {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

更多关于浏览器私有前辍写法：[#Vendor-specific extensions](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#vendor-keywords)

## reset 示例 腾讯版

### PC 端

```
body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,p,form,header,section,article,footer{margin:0;}
body,button,input,select,textarea{font:12px/1.5 tahoma,'\5FAE\8F6F\96C5\9ED1',sans-serif}
h1,h2,h3,h4,h5,h6{font-size:100%}
em,b{font-style:normal}
a{text-decoration:none}
a:hover{text-decoration:underline}
img{border:0}
body{padding-top:42px}
button,input,select,textarea{font-size:100%;outline:none}
table{border-collapse:collapse;border-spacing:0}
td,th,ul,ol{padding:0}
```

### 移动端

有较多文字的文章类页面：

```
/* 移动端常用reset.css (文字版本) */
/* reset */
html,body,div,p,ul,li,dl,dt,dd,em,i,span,a,img,input,h1,h2,h3,h4,h5 {margin:0;padding:0}
a,img,input {border:none;}
body{font: 14px/1.75 -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;}
a {text-decoration:none;}
ul,li{list-style: none}
```

如果页面无文字，或者不希望文字被长按选中，可使用下面的 reset；适合于大多数专题页面

```
/* 移动端常用reset.css (无文字版本) */
/* reset */
html,body,div,p,ul,li,dl,dt,dd,em,i,span,a,img,input,h1,h2,h3,h4,h5 {margin:0;padding:0}
a,img,input {border:none;}
body{font: 14px/1.75  -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;-webkit-tap-highlight-color: rgba(0,0,0,0);}
a {text-decoration:none;}
ul,li{list-style: none}
a, img {-webkit-touch-callout: none; /* 禁止长按链接与图片弹出菜单 */}
html, body {
    -webkit-user-select: none;   /* 禁止选中文本（如无文本选中需求，此为必选项） */
    user-select: none;
}
```

> 提示  
> 移动端页面不需要设置微软雅黑、宋体等字体，终端浏览器字体取决于设备上的系统字体。

## 重置样式 凹凸版

### 移动端

```
* { -webkit-tap-highlight-color: transparent; outline: 0; margin: 0; padding: 0; vertical-align: baseline; }
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0; vertical-align: baseline; }
img { border: 0 none; vertical-align: top; }
i, em { font-style: normal; }
ol, ul { list-style: none; }
input, select, button, h1, h2, h3, h4, h5, h6 { font-size: 100%; font-family: inherit; }
table { border-collapse: collapse; border-spacing: 0; }
a { text-decoration: none; color: #666; }
body { margin: 0 auto; min-width: 320px; max-width: 640px; height: 100%; font-size: 14px; font-family: -apple-system,Helvetica,sans-serif; line-height: 1.5; color: #666; -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }
input[type="text"], textarea { -webkit-appearance: none; -moz-appearance: none; appearance: none; }
```

### PC 端

```
html, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video { margin: 0; padding: 0; }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }
article, aside, dialog, figure, footer, header, hgroup, nav, section, blockquote { display: block; }
ul, ol { list-style: none; }
img { border: 0 none; vertical-align: top; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: none; }
table { border-collapse: collapse; border-spacing: 0; }
strong, em, i { font-style: normal; font-weight: normal; }
ins { text-decoration: underline; }
del { text-decoration: line-through; }
mark { background: none; }
input::-ms-clear { display: none !important; }
body { font: 12px/1.5 \5FAE\8F6F\96C5\9ED1, \5B8B\4F53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", "Droid Sans Fallback", SimSun, sans-serif; background: #fff; }
a { text-decoration: none; color: #333; }
a:hover { text-decoration: underline; }
```

## init.less 自用版

```
// 初始化标签默认样式
/* CSS Document */
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  outline-style: none;
  /*FF*/
}

* {
  box-sizing: border-box;
  // transition: all 0.3s linear;
  font-family: arial;
}

html,
body {
  line-height: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

a {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

a:hover,
a:focus {
  text-decoration: none;
  outline-style: none;
  /*FF*/
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input,
select {
  vertical-align: middle;
}

/*css为clearfix，清除浮动*/
.clearfix::before,
.clearfix::after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
  /*IE/7/6*/
}

input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #b7b7b7;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #b7b7b7;
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #b7b7b7;
}

input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #b7b7b7;
}

// /*---------------------------scrollbar--------------------------*/
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
// ::-webkit-scrollbar {
//   width: 6px;
//   height: 6px;
//   background-color: transparent;
//   // border-left:1px solid @BtnBorder;
//   // border-top:1px solid @BtnBorder;
// }

// ::-webkit-scrollbar:hover {
//   //background-color:#f5f7fa;
// }

// /*定义滚动条轨道 内阴影+圆角*/
// ::-webkit-scrollbar-track {
//   //background-color:transparent;
// }

// /*定义滑块 内阴影+圆角*/
// ::-webkit-scrollbar-thumb {
//   background: rgba(#0f1939, 0.4);
//   border-radius: 5px;
//   width: 6px;
// }

// ::-webkit-scrollbar-thumb:decrement {
//   border-width: 0;
//   border-color: transparent;
// }

// ::-webkit-scrollbar-thumb:increment {
//   border-width: 0;
//   border-color: transparent;
// }

// ::-webkit-scrollbar-thumb:hover {
//   background-color: rgba(#0f1939, 0.4);
// }

// ::-webkit-scrollbar-button:decrement {
//   //display:none;
//   //width: 16px;
//   //height: 25px;
//   //background:url(../../Images/scrollBtn.png);
//   //background-position:top;
// }

// ::-webkit-scrollbar-button:increment {
//   //display:none;
//   //width: 16px;
//   //height: 25px;
//   //background:url(../../Images/scrollBtn.png);
//   //background-position:bottom;
// }

// ::-webkit-scrollbar-button:hover {
//   //background-color:#ccc;border-radius: 1em;border:1px solid rgba(0,0,0,0.1);
// }

// ::-webkit-scrollbar-corner {
//   //background-color:@BG;
// }

// ::-webkit-resizer {
// }

/*---------------------------layout--------------------------*/
.flex-col {
  .flex-col;
}

.flex-row {
  .flex-row;
}

.fill-flex {
  .fill-flex;
}

.flex-row(@flex: flex, @Row: row, @wrap: nowrap) {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: @flex;
  -webkit-box-orient: horizontal;
  //horizontal    vertical
  -moz-box-direction: @Row;
  -ms-flex-direction: @Row;
  -webkit-flex-direction: @Row;
  flex-direction: @Row;
  -webkit-box-wrap: @wrap;
  -moz-box-wrap: @wrap;
  -ms-flex-wrap: @wrap;
  -webkit-flex-wrap: @wrap;
  flex-wrap: @wrap;
}

.flex-col(@flex: flex, @Col: column, @wrap: nowrap) {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: @flex;
  -webkit-box-orient: vertical;
  -moz-box-direction: @Col;
  -ms-flex-direction: @Col;
  -webkit-flex-direction: @Col;
  flex-direction: @Col;
  -webkit-box-wrap: @wrap;
  -moz-box-wrap: @wrap;
  -ms-flex-wrap: @wrap;
  -webkit-flex-wrap: @wrap;
  flex-wrap: @wrap;
}

.fill-flex(@fill: 1) {
  -webkit-box-flex: @fill;
  -moz-box: @fill;
  -webkit-flex: @fill;
  -ms-flex: @fill;
  flex: @fill;
}

```

# 以下为样式&命名参考 （不做限定）

## 媒体查询

设备像素信息 ：[Mobile devices](https://screensiz.es/)

媒体查询类型浏览器支持情况：[CSS3 Media Queries overview](http://cssmediaqueries.com/overview.html)

### 常用查询语句

判断设备横竖屏

```
/* 横屏 */
@media all and (orientation :landscape) {

}

/* 竖屏 */
@media all and (orientation :portrait) {

}
```

判断设备宽高

```
/* 设备宽度大于 320px 小于 640px */
@media all and (min-width:320px) and (max-width:640px) {

}
```

判断设备像素比

```
/* 设备像素比为 1 */
@media only screen and (-webkit-min-device-pixel-ratio: 1), only screen and (min-device-pixel-ratio: 1) {

}

/* 设备像素比为 1.5 */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min-device-pixel-ratio: 1.5) {

}

/* 设备像素比为 2 */
@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {

}
```

## 常用设备设置

### iPhones

```
/* ----------- iPhone 4 and 4S ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 5 and 5S ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 6 ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {

}

/* Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 6+ ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3) {

}

/* Portrait */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {

}
```

### Galaxy Phones

```
/* ----------- Galaxy S3 ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 2) {

}

/* Portrait */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 2)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- Galaxy S4 ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: landscape) {

}

/* ----------- Galaxy S5 ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: landscape) {

}
```

### HTC Phones

```
/* ----------- HTC One ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: landscape) {

}
```

### iPads

```
/* ----------- iPad mini ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Portrait */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* ----------- iPad 1 and 2 ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Portrait */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* ----------- iPad 3 and 4 ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 2) {

}
```

## 移动端常用私有属性

目前两大主流移动平台为 `iOS` 和 `Android`，有不少带 `-webkit-` 前辍的 CSS 私有属性以及一些 iOS only 属性，当中好些属性在日常需求中经常应用到。

`WebKit` CSS 属性中的一部分已经被包含在 CSS 规范草案中，并且可能成为最后的推荐标准，但目前仍然是试验性的属性，还有一些属性是不规范的属性，它们没有出现在跟踪规范中。

### -webkit-scrollbar

`-webkit-scrollbar` 是-webkit-私有的伪元素，用于对拥有 overflow 属性的区域 自定义滚动条的样式。

譬如，为了隐藏滚动条，你可以这么做：

```
.scroll::-webkit-scrollbar {
    width: 0;
    height: 0;
}
```

除了对整个滚动条的控制外，Webkit 还提供了控制对滚动条各组成部分的表现渲染的伪元素，甚至具体到滚动条的各种状态行为的伪类。

### 滚动条各块组成表现渲染的伪元素

一般而言，滚动条的主要组成部分包括：

- 滚动按钮 — 滚动按钮的夹角则被称为滚动角(corner)。
- 轨道 — 轨道(track)可以进一步分为轨枕(track pieces) 和滑块(thumb)。

Webkit 则根据滚动条各组成部分，提供了不同的伪元素来自定义样式。

```
::-webkit-scrollbar              { /* 1 */ }
::-webkit-scrollbar-button       { /* 2 */ }
::-webkit-scrollbar-track        { /* 3 */ }
::-webkit-scrollbar-track-piece  { /* 4 */ }
::-webkit-scrollbar-thumb        { /* 5 */ }
::-webkit-scrollbar-corner       { /* 6 */ }
::-webkit-resizer                { /* 7 */ }
```

`::-webkit-scrollbar`：滚动条整体部分。可设置 width、height、background、border 等。

`::-webkit-scrollbar-button`：滚动条两端的按钮。可以用 display:none 让其不显示，也可以添加背景图片，颜色改变显示效果。

`::-webkit-scrollbar-track`：轨道。可以用 display:none 让其不显示，也可以添加背景图片，颜色改变显示效果。

`::-webkit-scrollbar-track-piece`：轨枕，也就是除去滚动滑块的部分。

`::-webkit-scrollbar-thumb`：滚动滑块，也就是滚动条里面可以拖动的那部分。

`::-webkit-scrollbar-corner`：滚动按钮的夹角则被称为滚动角。

`::-webkit-resizer`：用于定义右下角拖动块的样式。

**需要注意的是**：若是水平滚动条，则 width 属性不起作用，height 属性用来控制滚动条相应部分竖直方向高度；若是竖直滚动条，则 height 属性不起作用，width 属性用来控制相应部分的宽度。

### 滚动条各块组成的伪元素

下面的伪类可以应用到上面的伪元素中。
`:horizontal`：选择水平方向的滚动条。

`:vertical`：选择垂直方向的滚动条。

`:decrement`：适用于滚动按钮和轨枕。选择能够使得视窗位置递减状态(例如，垂直滚动条向上滚动，水平滚动条向左滚动。)的滚动按钮或轨枕。

`:increment`：适用于滚动按钮和轨枕。选择能够使得视窗位置递增状态(例如，垂直滚动条向下滚动，水平滚动条向右滚动。)的滚动按钮或轨枕。

`:start`：适用于滚动按钮和轨枕。选择位于滚动滑块前边的滚动按钮和轨枕。

`:end`：适用于滚动按钮和轨枕。选择位于滚动滑块后边的滚动按钮和轨枕。

`:double-button`：适用于滚动按钮和轨枕。选中紧挨着一对按钮的轨枕以及位于滚动条某一端的一对按钮中的其中一个滚动按钮。

`:single-button`：适用于滚动按钮和轨枕。选中紧挨着仅一个按钮的轨枕以及位于滚动条某一端的仅它本身一个的滚动按钮。

`:no-button`：适用于轨枕。选中轨道结束位置没有按钮的轨枕。

`:corner-present`：适用于选中滚动角不存在的滚动条。

`:window-inactive`：适用于所有滚动条，选中焦点不在该视窗的滚动区域。

**另外，:enabled、:disabled、:hover、和:active 等伪类同样在滚动条中适用**。
为了更好地理解，以下是几个伪元素组合伪类的应用例子：

```
::-webkit-scrollbar-track-piece:start {
 /\*滚动条上半边或左半边\*/
}
::-webkit-scrollbar-thumb:window-inactive {
 /\*当焦点不在当前区域滑块的状态\*/

::-webkit-scrollbar-button:horizontal:decrement:hover {
 /\*当鼠标在水平滚动条下面的按钮上的状态\*/
```

**参考资料**：

- [Webkit-Styling Scrollbars](https://webkit.org/blog/363/styling-scrollbars/)
- [自定义浏览器滚动条的样式，打造属于你的滚动条风格](http://www.lyblog.net/detail/314.html)

### -webkit-touch-callout

`-webkit-touch-callout` 是一个不规范的属性（[unsupported WebKit property](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html)），它没有出现在 CSS 规范草案中。

当你触摸并按住触摸目标时候，禁止或显示系统默认菜单。在 iOS 上，当你触摸并按住触摸的目标，比如一个链接，Safari 浏览器将显示链接有关的系统默认菜单，这个属性可以让你禁用系统默认菜单。

### 属性值

- `none`：系统默认菜单被禁用
- `inherit`：系统默认菜单不被禁用

### 兼容性

- iOS 2.0 及更高版本的 Safari 浏览器可用
- Android 尚不明确

### -webkit-tap-highlight-color

`-webkit-tap-highlight-color` 是一个不规范的属性（[unsupported WebKit property](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html)），它没有出现在 CSS 规范草案中。

在 iOS Safari 上，当用户点击链接或具有 JavaScript 可点击脚本的元素，系统会为这些被点击元素加上一个默认的透明色值，该属性可以覆盖该透明值。

### 属性值

`color`：颜色值

兼容性

- iOS 1.1.1 及更高版本的 Safari 浏览器可用
- 大部分安卓手机

### -webkit-overflow-scrolling

定义在具 `overflow:scroll` 属性的元素内是否采用原生样式滚动行为

### 属性值

- `auto`：默认值，单手滚动，滚动没有惯性效果
- `touch`：原生样式滚动，应用此属性值会产生层叠上下文（会影响定位参照物的属性，类似 `opacity`、`masks`、`transforms属性`，影响到 `position` 的效果，甚至影响到 `position:fixed` 的定位参照物，）

### 兼容性

- iOS 5.0 及更高版本
- 大部分安卓机

### -webkit-line-clamp

`-webkit-line-clamp` 是一个不规范的属性（[unsupported WebKit property](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html)），它没有出现在 CSS 规范草案中。

限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他外来的 WebKit 属性。

常见结合属性：

- `display: -webkit-box`：必须结合的属性，将对象作为弹性伸缩盒子模型显示。
- `-webkit-box-orient`：必须结合的属性，设置或检索伸缩盒对象的子元素的排列方式。
- `text-overflow`：可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本。

### 属性值

`number`：块元素显示的文本的行数

### 兼容性

- iOS
- Andriod

### -webkit-appearance

`-webkit-appearance` 是一个不规范的属性（[unsupported WebKit property](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html)），它没有出现在 CSS 规范草案中。

改变按钮和其他控件的外观，使其类似于原生控件。

### 属性值

- `none`：去除系统默认 appearance 的样式，常用于 iOS 下移除原生样式
- `button`：渲染成 button 的风格
- `checkbox`：渲染成 input checkbox 样式的复选框按钮
- `radio`：渲染成 radio 的风格
- …

更多属性值参考 [mozilla：-webkit-appearance 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance)

### 兼容性

- iOS 2.0 及更高版本的 Safari 浏览器可用
- Android 尚不明确

### -webkit-font-smoothing

字体平滑，该属性定义文本的平滑属性，但要**注意以下说明**：

> 非标准属性，**不建议用于网页上**，这个属性不能保证所有用户都能看到相同效果，这会使网站的字体渲染造成不一致，而此属性的渲染行为日后也有可能会改变

### 属性值

- `none`：去掉字体平滑效果，使字体带锯齿
- `antialiased`：使字体在像素级别更平滑更轻细
- `subpixel-antialiased`：在多数非 Retina 显示设备中字体将会更锐利。

**注意：以上属性在 Retina 设备上会有明显的效果，在非 Retina 设备上看不出差异**

### 兼容性

- 部分高清设备，如 Retina Mac

### -webkit-backface-visibility

`backface-visibility` 在 [W3 文档](http://www.w3.org/TR/css3-transforms/#backface-visibility-property) 有定义描述

定义转换元素的背面是否显示

### 属性值

- `visible`：显示（默认值）
- `hidden`：隐藏

### 兼容性

- iOS 2.0 及更高版本的 Safari 浏览器可用
- 大部分 Android

### -webkit-mask

定义多样的蒙板效果属性（缩写属性，类似 margin）

使用语法

```
<mask-image> [<mask-repeat> || <mask-attachment> || <mask-position> || <mask-origin> || <mask-clip> || <mask-composite>]*
where
<mask-position> = [ <percentage> | <length> | left | center | right ] [ <percentage> | <length> | top  | center | bottom ]?
```

默认值：

```
-webkit-mask: none repeat scroll 0% 0% padding border add;
```

### 属性值

- `mask-image`：为元素设置蒙板图片，蒙板图片会根据图片的透明区域对元素可视部分进行裁剪 - `uri`：图片链接作为蒙板图片
  - `gradient`：渐变函数 `-webkit-gradient` 作为蒙板图片
  - `none`：去掉蒙板图片
- `mask-repeat`：定义蒙板图片是否平铺或平铺的方式
  - `repeat`：默认值，水平和垂直方向平铺
  - `repeat-x`：水平方向平铺
  - `repeat-y`：垂直方向平铺
  - `no-repeat`：不平铺
- `mask-attachment`：如果 `-webkit-mask-image` 属性有设置，`attachment` 决定该图片是否相对视窗固定或随着其容器滚动

  - `scroll`：默认值，随容器滚动
  - `fixed`：相地视窗固定

- `mask-position`：定义蒙板图片的初始位置，书写格式类似 `background-position`—-`<mask-position>[， <mask-position>]*`

  - `<percentage>`
  - `<length>`
  - `left`
  - `right`
  - `center`

- `mask-origin`：定义蒙板图片定位相对起点，与 `webkit-mask-position` 属性相关。当 `-webkit-mask-attachment:fixed` 的时候，该属性不生效。

  - `padding`：默认值，蒙板定位相对边距
  - `border`：蒙板定位相对边框
  - `content`：蒙板定位相对元素盒子内容

- `mask-clip`：如果 `-webkit-mask-image` 属性有设置，`-webkit-mask-clip` 将定义蒙板图片的裁剪区域
- -
  - `border`：默认值，蒙板图片延伸到容器的边框
  - `padding`：蒙板图片延伸到容器的边距
  - `content`：蒙板图片裁剪到元素盒子内容范围
  - `text`：蒙板图片裁剪到元素文本范围
- `mask-composite`：定义蒙板图片重合的裁剪显示方式
- -
  - `add`：默认值，图片重合不裁剪
  - `subtract`：去掉层级低的图形以及图片重合部分图形，只留层级高非重合部分图形
  - `intersect`：只留重合部分图形
  - `exclude`：只去掉重合部分图形

有关属性更详细描述请参考：

[w3 - css-masking](http://www.w3.org/TR/css-masking/)

[MDN - -webkit-mask](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask)

[携程 UED - -webkit-mask](http://ued.ctrip.com/webkitcss/)

### 兼容性

- Safari 4.0 及更高版本
- iOS 4.0 及更高版本
- Android 2.1 及更高版本

### -webkit-user-select

定义用户是否能选中元素内容

### 属性值

- `auto`：可选中元素内容
- `none`：不能选中任何内容
- `text`：可选中元素内的文本

### 兼容性

- iOS 3.0 及更高版本的 Safari
- 大部分安卓手机

### -webkit-user-modify

定义用户是否可编辑元素内容

### 属性值

- `read-only`：只读
- `read-write`：可读可写，粘贴内容会保留富文本格式（ Android 机不保留富文本格式 ）
- `read-write-plaintext-only`：可读可写，粘贴内容所有富文本格式都会丢失

**注意：使用这个属性的时候，请不要出现 `-webkit-user-select: none`，文本无法选中的情况下，在 Safari 该属性不生效，不过在 Chrome 依然生效**

### 兼容性

- iOS 5.0 及更高版本
- Safari 3.0 及更高版本
- 大部分安卓手机

### -webkit-text-stroke

定义文本描边，可以设计描边的宽和颜色，一般与文本填充属性 `-webkit-text-fill-color` 共用。

### 属性值

- `length`：长度单位
- `color`：颜色值

### 兼容性

- iOS 2.0 及更高版本
- Safari 3.0 及更高版本
- 安卓尚不明确

### -webkit-text-fill-color

定义文本填充，一般与文本描边属性 `-webkit-text-stroke` 共用。

### 属性值

- `color`：颜色值
- `currentcolor`：元素 color 属性值
- `-webkit-activelink`：链接被点击时系统的默认颜色

更多属性值参考：[Safari CSS Reference -webkit-text-fill-color](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html)

### 兼容性

- iOS 2.0 及更高版本
- Safari 3.0 及更高版本
- 安卓尚不明确

### -webkit-text-size-adjust

定义 iOS Safari 网页文本大小调整属性

### 属性值

- `<percentage>`：百分比值，字体显示调整值
- `auto`：字体自动调整
- `none`：字体不能自动调整

### 兼容性

- iOS 1.0 及更高版本
- Safari on iOS only
- 安卓尚不明确

### -webkit-marquee

定义滚动文本内容属性（缩写属性，类似`margin`）。

### 使用语法

`-webkit-marquee: direction increment repetition style speed`

### 属性值

- `<direction>`：滚动方向
  - `ahead`：从下到上滚动
  - `auto`：默认滚动方向
  - `backwards`：从右到左滚动
  - `down`：从上到下滚动
  - `forwards`：从左到右滚动
  - `left`：从右到左滚动
  - `reverse`：从上到下滚动
  - `right`：从左到右滚动
  - `up`：从下到上滚动
- `<increment>`：每次移动的距离
  - `[<percentage> | <length>]`
  - `large`：距离常量
  - `medium`：距离常量
  - `small`：距离常量
- `<repetition>`：文字滚动的重复次数
  - 非负整数
  - `infinite`：无限次
- `<style>`：文字滚动的方式
  - `alternate`：重复滚动
  - `none`：停止滚动
  - `scroll`：在定义方向上滚动
  - `slide`：定义方向上滚动，内容显示完毕或者内容滚动到滚动区域另一端边框时候都会停止下来
- `<speed>`：滚动或滑动的速度
  - 非负整数（毫秒单位）或带时间单位的非负整数
  - `fast`
  - `normal`
  - `slow`

### 兼容性

- iOS 1.0 及更高版本
- Safari 3.0 及更高版本
- 大部分安卓手机

### -webkit-filter

滤镜属性可以让元素本身内容（文本、背景等）及其子元素加上滤镜效果

### 属性值

- `blur(<length>)`：模糊，原始效果值为 `0px`，不接受负值

- `brightness([ <number> | <percentage> ])`：亮度，原始效果值为 `1` 或 `100%`，不接受负值

- `contrast([ <number> | <percentage> ])`：对比度，原始效果值为 `1` 或 `100%`，不接受负值

- `drop-shadow( <length>{2，4} <color>?)`：投影，原始效果值为所有长度值为 `0`，长度值至少 2 个，最多 4 个，

- `grayscale([ <number> | <percentage> ] )`：灰度，原始效果值为 `0`，最大值为 `1` 或 `100%`，不接受负值

- `hue-rotate( <angle>)`：相位，原始效果值为 0deg

- `invert( [ <number> | <percentage> ])`：反相，原始效果值为 `0`，最大值为 `1` 或 `100%`，不接受负值

- `opacity([ <number> | <percentage> ] )`：透明度，原始效果值为 `1`，最大值为 `1` 或 `100%`，不接受负值

- `saturate([ <number> | <percentage> ])`：饱和度，原始效果值为 `1`，不接受负值

- `sepia([ <number> | <percentage> ])`：乌贼墨，原始效果值为 `0`，最大值为 `1` 或 `100%`，不接受负值

关于 `-webkit-filter` 与 `-webkit-backdrop-filter` 的属性对比可以参考：

[What’s New in Safari 9.0 - backdrop-filter](http://aotu.io/notes/2015/12/23/new-safari-9/)

### 兼容性

- iOS 8.0 及更高版本
- Safari 8.0 及更高版本
- Android 4.4 及更高版本

### -webkit-backdrop-filter

背景滤镜属性可以让元素的背景或元素层级以下的元素加上滤镜效果

### 属性值

- `blur(<length>)`：模糊，原始效果值为 `0px`，不接受负值

- `brightness([ <number> | <percentage> ])`：亮度，原始效果值为 `1` 或 `100%`，不接受负值

- `contrast([ <number> | <percentage> ])`：对比度，原始效果值为 `1` 或 `100%`，不接受负值

- `drop-shadow( <length>{2，4} <color>?)`：投影，原始效果值为所有长度值为 `0`，长度值至少 2 个，最多 4 个，

- `grayscale([ <number> | <percentage> ] )`：灰度，原始效果值为 `0`，最大值为 `1` 或 `100%`，不接受负值

- `hue-rotate( <angle>)`：相位，原始效果值为 0deg

- `invert( [ <number> | <percentage> ])`：反相，原始效果值为 `0`，最大值为 `1` 或 `100%`，不接受负值

- `opacity([ <number> | <percentage> ] )`：透明度，原始效果值为 `1`，最大值为 `1` 或 `100%`，不接受负值

- `saturate([ <number> | <percentage> ])`：饱和度，原始效果值为 `1`，不接受负值

- `sepia([ <number> | <percentage> ])`：乌贼墨，原始效果值为 `0`，最大值为 `1` 或 `100%`，不接受负值

关于 -webkit-filter 与 -webkit-backdrop-filter 的属性对比可以参考：

[What’s New in Safari 9.0](http://aotu.io/notes/2015/12/23/new-safari-9/)

### 兼容性

- iOS 9.0 及更高版本
- Safari 9.0 及更高版本
- 安卓尚未明确

### position:-webkit-sticky

可以使得元素在页面没有滚动的情况下表现得像`relative`，在滚动条滚到该元素区域的时候根据 top 值的设置使元素固定离顶部的距离，表现像 `position:fixed`，也就是常见的吸顶需求效果。

### 特性

- 依赖父级元素滚动区域
- 定位参考物始终是 viewport，`transform` 等可以改变 `position:fixed` 定位参考物的属性也没办法改变 `position:-webkit-sticky` 的定位参考物
- `position:-webkit-sticky` 属性的元素固定区域只依赖其父元素的可滚动高度，如果其父元素高度小于元素本身的高度，fixed 效果失效。

### 兼容性

- iOS 6.1 及更高版本
- iOS only

### -apple-system

苹果操作系统会从两种不同外观和大小的字体进行自动转换去调节系统新字体 “San Francisco”，可以通过 CSS 规则

```
font-family: -apple-system , sans-serif;
```

让系统智能选择适配操作系统的字体，添加`-apple-system` 可以使字体变得更圆润锐利。

关于 `-apple-system` 更详细的介绍可以参考：

[What’s New in Safari 9.0](http://aotu.io/notes/2015/12/23/new-safari-9/)

### 兼容性

- iOS 9.0 及更高版本
- Safari 9.0 及更高版本
- iOS / OS X only

### 更多 WebKit CSS 属性

更多 `-webkit-` CSS 属性介绍请参考：

- [MDN 文档 - Webkit Extensions](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Webkit-Extensions)
- [携程 UED - webkitcss](http://ued.ctrip.com/webkitcss/)

## CSS 规范 - 最佳实践

### 最佳选择器写法（模块）

```
/* 这是某个模块 */
.m-nav{}/* 模块容器 */
.m-nav li,.m-nav a{}/* 先共性  优化组合 */
.m-nav li{}/* 后个性  语义化标签选择器 */
.m-nav a{}/* 后个性中的共性 按结构顺序 */
.m-nav a.a1{}/* 后个性中的个性 */
.m-nav a.a2{}/* 后个性中的个性 */
.m-nav .z-crt a{}/* 交互状态变化 */
.m-nav .z-crt a.a1{}
.m-nav .z-crt a.a2{}
.m-nav .btn{}/* 典型后代选择器 */
.m-nav .btn-1{}/* 典型后代选择器扩展 */
.m-nav .btn-dis{}/* 典型后代选择器扩展（状态） */
.m-nav .btn.z-dis{}/* 作用同上，请二选一（如果可以不兼容IE6时使用） */
.m-nav .m-sch{}/* 控制内部其他模块位置 */
.m-nav .u-sel{}/* 控制内部其他元件位置 */
.m-nav-1{}/* 模块扩展 */
.m-nav-1 li{}
.m-nav-dis{}/* 模块扩展（状态） */
.m-nav.z-dis{}/* 作用同上，请二选一（如果可以不兼容IE6时使用） */
/* 这是某个模块 */
.m-nav{}/* 模块容器 */
.m-nav li,.m-nav a{}/* 先共性  优化组合 */
.m-nav li{}/* 后个性  语义化标签选择器 */
.m-nav a{}/* 后个性中的共性 按结构顺序 */
.m-nav a.a1{}/* 后个性中的个性 */
.m-nav a.a2{}/* 后个性中的个性 */
.m-nav .z-crt a{}/* 交互状态变化 */
.m-nav .z-crt a.a1{}
.m-nav .z-crt a.a2{}
.m-nav .btn{}/* 典型后代选择器 */
.m-nav .btn-1{}/* 典型后代选择器扩展 */
.m-nav .btn-dis{}/* 典型后代选择器扩展（状态） */
.m-nav .btn.z-dis{}/* 作用同上，请二选一（如果可以不兼容IE6时使用） */
.m-nav .m-sch{}/* 控制内部其他模块位置 */
.m-nav .u-sel{}/* 控制内部其他元件位置 */
.m-nav-1{}/* 模块扩展 */
.m-nav-1 li{}
.m-nav-dis{}/* 模块扩展（状态） */
.m-nav.z-dis{}/* 作用同上，请二选一（如果可以不兼容IE6时使用） */
```

### 统一语义理解和命名

#### 布局（.g-）

| 语义       | 命名     | 简写     |
| ---------- | -------- | -------- |
| 文档       | doc      | doc      |
| 头部       | head     | hd       |
| 主体       | body     | bd       |
| 尾部       | foot     | ft       |
| 主栏       | main     | mn       |
| 主栏子容器 | mainc    | mnc      |
| 侧栏       | side     | sd       |
| 侧栏子容器 | sidec    | sdc      |
| 盒容器     | wrap/box | wrap/box |

#### 模块（.m-）、元件（.u-）

| 语义   | 命名         | 简写  |
| ------ | ------------ | ----- | --- |
| 导航   | nav          | nav   |
| 子导航 | subnav       | snav  |
| 面包屑 | crumb        | crm   |
| 菜单   | menu         | menu  |
| 选项卡 | tab          | tab   |
| 标题区 | head/title   | hd/tt |
| 内容区 | body/content | bd/ct |
| 列表   | list         | lst   |
| 表格   | table        | tb    |
| 表单   | form         | fm    |
| 热点   | hot          | hot   |
| 排行   | top          | top   |
| 登录   | login        | log   |
| 标志   | logo         | logo  |
| 广告   | advertise    | ad    |
| 搜索   | search       | sch   |
| 幻灯   | slide        | sld   |
| 提示   | tips         | tips  |
| 帮助   | help         | help  |
| 新闻   | news         | news  |
| 下载   | download     | dld   |
| 注册   | regist       | reg   |
| 投票   | vote         | vote  |
| 版权   | copyright    | cprt  |
| 结果   | result       | rst   |
| 标题   | title        | tt    |
| 按钮   | button       |       | btn |
| 输入   | input        | ipt   |

#### 功能（.f-）

| 语义     | 命名                | 简写 |
| -------- | ------------------- | ---- |
| 浮动清除 | clearboth           | cb   |
| 向左浮动 | floatleft           | fl   |
| 向右浮动 | floatright          | fr   |
| 内联块级 | inlineblock         | ib   |
| 文本居中 | textaligncenter     | tac  |
| 文本居右 | textalignright      | tar  |
| 文本居左 | textalignleft       | tal  |
| 垂直居中 | verticalalignmiddle | vam  |
| 溢出隐藏 | overflowhidden      | oh   |
| 完全消失 | displaynone         | dn   |
| 字体大小 | fontsize            | fs   |
| 字体粗细 | fontweight          | fw   |

#### 皮肤（.s-）

| 语义     | 命名               | 简写 |
| -------- | ------------------ | ---- |
| 字体颜色 | fontcolor          | fc   |
| 背景     | background         | bg   |
| 背景颜色 | backgroundcolor    | bgc  |
| 背景图片 | backgroundimage    | bgi  |
| 背景定位 | backgroundposition | bgp  |
| 边框颜色 | bordercolor        | bdc  |

#### 状态（.z-）

| 语义   | 命名     | 简写  |
| ------ | -------- | ----- |
| 选中   | selected | sel   |
| 当前   | current  | crt   |
| 显示   | show     | show  |
| 隐藏   | hide     | hide  |
| 打开   | open     | open  |
| 关闭   | close    | close |
| 出错   | error    | err   |
| 不可用 | disabled | dis   |
