---
title: 一些可以创建 360 全景视图的工具
date: 2022-01-13
tags:
  - note
categories:
  - note
---

::: tip

一些可以创建 360 全景视图的工具：Panolens.js/Pannellum/Marzipano/view360/JS Cloudimage 360 View/A-Frame/VR View/Panoraven

:::

<!-- more -->

## 1. Panolens.js

地址：[https://pchen66.github.io/Panolens/](https://pchen66.github.io/Panolens/)

![](/360view/view1.gif)

上手简单，对图片要求比较高需要完整的 360 度全景照片
可以自动处理 VR 的模式

### 代码

```html
<script src="../js/three.min.js"></script>
<script src="../js/panolens.min.js"></script>
<style>
  #panolens-div {
    width: 100%;
    height: 100%;
  }
</style>

<div id="panolens-div"></div>

<script>
  const panorama = new PANOLENS.ImagePanorama("/image/gugong.jpg");
  const viewer = new PANOLENS.Viewer({ container: document.querySelector("#panolens-div") });
  viewer.add(panorama);
</script>
```

## Pannellum

地址：[https://pannellum.org/](https://pannellum.org/)

![](/360view/view2.gif)

Pannellum 是一个使用 HTML5、CSS3、Javascript 和 WebGL 组合构建的开源库，大小仅约 21kb（压缩后）。

它可以帮助您以简单快捷的方式为网站创建 360 度照片或视频。此外，Pannellum 还兼容最流行的浏览器变量，例如 Chrome 24+（版本 24 或更高版本）、Firefox 23+、Safari 8+、Internet Explorer 11+ 和 Edge。

它还支持一些有用的功能，例如，添加控制按钮、自动加载、添加注释喜欢和作者。

```html
<link rel="stylesheet" href="../css/pannellum.css" />
<script type="text/javascript" src="../js/pannellum.js"></script>
<style>
  #panorama {
    width: 100%;
    height: 100%;
  }
</style>

<div id="panorama"></div>
<script>
  pannellum.viewer("panorama", {
    type: "equirectangular",
    panorama: "../image/gugong.jpg",
  });
</script>
```

## Marzipano

地址：[https://www.marzipano.net/](https://www.marzipano.net/)

![](/360view/view3.gif)

Marzipano 是一个开源库，可让您轻松为您的网站创建 360 度媒体播放器。它基于标准的 Web 技术设计，提供强大的 Javascript API 并显示在不同的设备屏幕上。

除了支持现代浏览器外，它还提供了功能特性，可以轻松应用于 IE8 等旧浏览器。我喜欢这个库的地方是，它提供了额外的工具来帮助您直接创建 360 度媒体查看器，而无需下载有关机器的库。

您只需要将该工具提供的代码嵌入您的网站，就可以了。

## view360

地址：[https://naver.github.io/egjs-view360/](https://naver.github.io/egjs-view360/)

![](/360view/view4.gif)

view360 是一个开源库，可提供代表您网站的完整 360 度媒体查看器解决方案。

具有可用于视频或图像等有用功能，它通过旋转或滑动、通过 URL 加载图像或视频来帮助用户更轻松地在移动设备上交互。

它分为 2 种主要显示类型：PanoViewer 和 SpinViewer。

对于显示的每种类型，每个功能都有详细的示例，以帮助您轻松地将其可视化并应用于其网页的页面。

## JS Cloudimage 360 View

地址：[https://scaleflex.github.io/js-cloudimage-360-view/](https://scaleflex.github.io/js-cloudimage-360-view/)

![](/360view/view5.gif)

JS Cloudimage 360 View 是一个用 Javascript 编写的紧凑型开源库，可以轻松实现 360 度显示图像，并提供更多功能帮助用户更便捷的交互。

如全屏显示、lazyload 功能、图像放大镜。此外，它还提供您可以通过非常简单的设置直接用于网站的 CDN 只需将它提供的属性调用到我们想要显示 360 的 HTML 对象图像中。

## A-Frame

地址：[https://aframe.io/](https://aframe.io/)

![](/360view/view6.gif)

A-Frame 除了帮助您构建 360 度媒体播放器外，它还提供了许多附加功能。其他功能可帮助您增强网站的虚拟现实体验。

您只需要使用 CDN 调用 A-Frame，然后使用 `<a-scene>` 标签来设置媒体查看器 360 度的属性。

因为，它是用 HTML 编写的，所以，很容易阅读、理解并很容易地应用于基于 Web 的项目。

它还被谷歌、迪斯尼、三星、丰田等许多大公司信任和使用。

## VR View

地址：[https://developers.google.com/vr/develop/web/vrview-web](https://developers.google.com/vr/develop/web/vrview-web)

![](/360view/view7.gif)

VR View 是一个使用 Google 提供的 Javascript 构建的开源库，使您可以轻松地将 360 度媒体查看器嵌入或添加到您的网站。

它最好支持图像是 jpeg 类型和视频是 mp4。此外，它还为您提供了许多适合使用的属性进行自定义，例如，确定相机位置的初始显示、确定媒体播放器的宽度和高度、使用全屏模式。

## Panoraven

地址：[https://panoraven.com/en](https://panoraven.com/en)

![](/360view/view8.gif)
