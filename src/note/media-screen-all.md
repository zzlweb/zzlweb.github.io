---
title: CSS3 @media 查询
date: 2022-01-13
tags:
  - note
categories:
  - note
---

::: tip

CSS3 @media 查询的使用介绍 以及一些常用的媒体查询

:::

<!-- more -->

`@media` CSS @规则 可用于基于一个或多个 媒体查询 的结果来应用样式表的一部分。 使用它，您可以指定一个媒体查询和一个 CSS 块，当且仅当该媒体查询与正在使用其内容的设备匹配时，该 CSS 块才能应用于该文档。

## 定义和使用

使用 `@media` 查询，你可以针对不同的媒体类型定义不同的样式。

`@media` 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。

当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。

## CSS 语法

```css
@media mediatype and|not|only (media feature) {
    CSS-Code;
}

例子

@media only screen and (max-width: 500px) {
    .gridmenu {
        width:100%;
    }
}
```

你也可以针对不同的媒体使用不同 stylesheets :

```html
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css" />
```

## 媒体类型

| 值         | 描述                                                                  |
| ---------- | --------------------------------------------------------------------- |
| all        | 用于所有设备                                                          |
| aural      | 已废弃。用于语音和声音合成器                                          |
| braille    | 已废弃。 应用于盲文触摸式反馈设备                                     |
| embossed   | 已废弃。 用于打印的盲人印刷设备                                       |
| handheld   | 已废弃。 用于掌上设备或更小的装置，如 PDA 和小型电话                  |
| print      | 用于打印机和打印预览                                                  |
| projection | 已废弃。 用于投影设备                                                 |
| screen     | 用于电脑屏幕，平板电脑，智能手机等。                                  |
| speech     | 应用于屏幕阅读器等发声设备                                            |
| tty        | 已废弃。 用于固定的字符网格，如电报、终端设备和对字符有限制的便携设备 |
| tv         | 已废弃。 用于电视和网络电视                                           |

## 媒体功能

| 值                      | 描述                                                                             |
| ----------------------- | -------------------------------------------------------------------------------- |
| aspect-ratio            | 定义输出设备中的页面可见区域宽度与高度的比率                                     |
| color                   | 定义输出设备每一组彩色原件的个数。如果不是彩色设备，则值等于 0                   |
| color-index             | 定义在输出设备的彩色查询表中的条目数。如果没有使用彩色查询表，则值等于 0         |
| device-aspect-ratio     | 定义输出设备的屏幕可见宽度与高度的比率。                                         |
| device-height           | 定义输出设备的屏幕可见高度。                                                     |
| device-width            | 定义输出设备的屏幕可见宽度。                                                     |
| grid                    | 用来查询输出设备是否使用栅格或点阵。                                             |
| height                  | 定义输出设备中的页面可见区域高度。                                               |
| max-aspect-ratio        | 定义输出设备的屏幕可见宽度与高度的最大比率。                                     |
| max-color               | 定义输出设备每一组彩色原件的最大个数。                                           |
| max-color-index         | 定义在输出设备的彩色查询表中的最大条目数。                                       |
| max-device-aspect-ratio | 定义输出设备的屏幕可见宽度与高度的最大比率。                                     |
| max-device-height       | 定义输出设备的屏幕可见的最大高度。                                               |
| max-device-width        | 定义输出设备的屏幕最大可见宽度。                                                 |
| max-height              | 定义输出设备中的页面最大可见区域高度。                                           |
| max-monochrome          | 定义在一个单色框架缓冲区中每像素包含的最大单色原件个数。                         |
| max-resolution          | 定义设备的最大分辨率。                                                           |
| max-width               | 定义输出设备中的页面最大可见区域宽度。                                           |
| min-aspect-ratio        | 定义输出设备中的页面可见区域宽度与高度的最小比率。                               |
| min-color               | 定义输出设备每一组彩色原件的最小个数。                                           |
| min-color-index         | 定义在输出设备的彩色查询表中的最小条目数。                                       |
| min-device-aspect-ratio | 定义输出设备的屏幕可见宽度与高度的最小比率。                                     |
| min-device-width        | 定义输出设备的屏幕最小可见宽度。                                                 |
| min-device-height       | 定义输出设备的屏幕的最小可见高度。                                               |
| min-height              | 定义输出设备中的页面最小可见区域高度。                                           |
| min-monochrome          | 定义在一个单色框架缓冲区中每像素包含的最小单色原件个数                           |
| min-resolution          | 定义设备的最小分辨率。                                                           |
| min-width               | 定义输出设备中的页面最小可见区域宽度。                                           |
| monochrome              | 定义在一个单色框架缓冲区中每像素包含的单色原件个数。如果不是单色设备，则值等于 0 |
| orientation             | 定义输出设备中的页面可见区域高度是否大于或等于宽度。                             |
| resolution              | 定义设备的分辨率。如：96dpi, 300dpi, 118dpcm                                     |
| scan                    | 定义电视类设备的扫描工序。                                                       |
| width                   | 定义输出设备中的页面可见区域宽度。                                               |

## 逻辑运算符

- not：用来排除某种设备。比如，排除打印设备 @media not print；

- only：用以指定某特定媒体设备。对于支持 Media Queries 的移动设备来说，如果存在 only 关键字，移动设备的 Web 浏览器会忽略 only 关键字并直接根据后面的表达式应用样式文件。对于不支持 Media Queries 的设备但能够读取 Media Type 类型的 Web 浏览器，遇到 only 关键字时会忽略这个样式文件。

- all：适用于所有的设备类型；

- and：媒体查询中使用来连接多种媒体特性,一个媒体查询中可以包含 0 或多个表达式，表达式可以是 0 或多个关键字，以及一种媒体类型。

如：

```css
@media screen and (max-width: 800px) and (min-width: 400px);
```

## 例子

```css
.example {
  padding: 20px;
  color: white;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .example {
    background: red;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .example {
    background: green;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .example {
    background: blue;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .example {
    background: orange;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .example {
    background: pink;
  }
}
```

> all 与 screen 包容度 all > screen 一般浏览器情况下 all 与 screen 达到的效果一样，但是在一些特殊的设备：打印机和打印预览等情况下，screen 不起作用
