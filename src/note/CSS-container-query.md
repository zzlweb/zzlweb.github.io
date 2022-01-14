---
title: CSS 新出的容器查询
date: 2022-01-13
tags:
  - note
categories:
  - note
---

::: tip

在前端开发中经常需要按不同屏幕尺寸来进设计达到 PC 和移动端响应式。我们一般使用 CSS 媒体查询来检测视口宽度或高度，然后根据该模式改变设计。这就是在过去 10 年中设计 Web 布局的方式。

:::

<!-- more -->

在前端开发中经常需要按不同屏幕尺寸来进设计达到 PC 和移动端响应式。我们一般使用 CSS 媒体查询来检测视口宽度或高度，然后根据该模式改变设计。这就是在过去 10 年中设计 Web 布局的方式。

**CSS 容器查询**，一个长期以来被 web 开发者要求的特性，很快就会出现在 CSS 中，在最新的 Chrome Canary 中，我们可以通过 `chrome://flags/#enable-container-queries` 开启 Container Queries 功能。本文将介绍它是什么，它将如何改变作为设计师的工作流，等等。

### 当前响应设计状态

当前，我们实现响应式，一般需要 UI 设计三个样式，分别是移动，平板电脑和桌面等。
![](/css-container-query/1.jpg)

在上图中，UI 设计了三种版本，因此开发人员可以很好的实现它，这是很 nice 的(这怕偷懒的 UI 只提供 PC 版本，这就很蛋疼)。

现在我们来看看使用媒体查询来看看怎么实现它。

![](/css-container-query/2.jpg)

上图是同一个组件，它有三个变体，即`default`、`Card`和`Featured`。在 CSS 中，开发人员需要创建此组件的三个变体，其中每个组成均是唯一的。

```css
.c-media {
  /*the default styles*/
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (min-with: 400px) {
  .c-media--card {
    display: block;
  }

  .c-media--cardimg {
    margin-bottom: 1rem;
  }
}

@media (min-with: 1300px) {
  .c-media--featured {
    position: relative;
    /*otherstyles*/
  }

  .c-media--featured.c-media__content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
```

上面的变体取决于媒体查询或视口宽度。这意味着，我们无法根据其父宽度控制它们。现在你可能会想，这里有什么问题？喔或，这是一个很好的问题。

问题是，只有当视口宽度大于特定值时，开发人员才会使用组件的变体。例如，如果我在平板中使用 `featured` 也就是 PC 的样式，它不能工作，为什么?因为它的媒体查询宽度是大于`1300px`。

![](/css-container-query/3.jpg)

不仅如此，当内容低于预期时，我们还会面临一个问题。有时，UP 主可能只会添加一篇文章，而设计是包含其中的三篇。在这种情况下，要么我们将有一个空的空间，要么项目将扩展以填满可用的空间。考虑下图：

![](/css-container-query/4.jpg)

在第一种情况下(Case 1)，文章太宽，会导致封面变形。第二种情况下(Case 2)也是一样的问题

如果使用容器查询，我们可以通过查询父组件来决定如何显示特定组件来解决这些问题。考虑下图，它展示了我们如何使用容器查询来修复这个问题。

![](/css-container-query/5.jpg)

这样的话，如果我们把思路转向组件的父组件呢?换句话说，如果我们查询父组件，并根据父组件的宽度或高度来决定组件应该是什么样子的呢?我们来看下**容器查询** 的概念。

### 什么是容器查询

首先，让我定义容器。它就包含另一个元素的元素，一般我们叫它 `wrapper`。

最新的 Chrome Canary 中，我们可以通过 chrome://flags/#enable-container-queries 开启 Container Queries 功能。

当一个组件被放置在一个项中，它就被包含在该项中。这意味着，我们可以查询父元素的宽度并据此修改它。考虑下图

![](/css-container-query/6.jpg)

注意，每个卡片都有一个黄色的轮廓线，代表每个组件的父组件。使用 CSS 容器查询，我们可以根据父组件的宽度修改组件。

```html
<div class="o-grid">
  <div class="o-grid__item">
    <article class="c-media"></article>
  </div>
  <!--+more items-->
</div>
```

该组件是具有类`.c-media`的项，它的父级是`.o-grid__item`元素。在 CSS 中，我们可以执行以下操作：

```css
.o-grid__item {
  contain: layout inline-size style;
}

.c-media {
  /*Default style*/
}

@container (min-width:320px) {
  .c-media {
    /*The styles*/
  }
}

@container (min-width:450px) {
  .c-media {
    /*Thestyles*/
  }
}
```

首先，我们告诉浏览器，每个带有 class `.o-grid`项的元素都是一个容器。然后，再告诉浏览器，如果父元素的宽度等于或大于 500px，它应该以不同的方式显示。对于 700px 查询也是如此。这就是 CSS 容器查询的工作原理。

此外，我们可以在任何想要的地方定义它们，这意味着如果需要，我们可以在顶级容器上进行查询。现在大家已经理解了 CSS 容器查询的基本思想，在看看下面图片加深一下映像。

![](/css-container-query/7.jpg)

在左边，这是一个正在调整大小的视口。在右边，一个根据父组件宽度更改的组件。这就是容器查询的功能和用途。

### 在设计时考虑容器查询

作为一名 UI，你需要适应这个革命性的 CSS 特性，因为它将改变我们为网页设计的方式。我们不仅为屏幕尺寸设计，还考虑组件在容器宽度变化时应如何适应。

现在，设计系统变得越来越流行。设计团队将构建一组规则和组件，以便其他成员可以基于它们构建页面。随着 CSS 容器查询的到来，我们还将设计一个组件应该如何根据其父组件的宽度进行调整。

考虑以下设计:

![](/css-container-query/8.jpg)

请注意，我们有标题、文章部分、引文和时事通讯。它们中的每一个都应该适应父视图的宽度。

我可以把这些组件分成以下几个部分

- Viewport (媒体查询)
- Parent （容器查询）
- 通用:不受影响的组件，如按钮、标签、段落。

对于示例 UI，下面是我们如何划分组件。

![](/css-container-query/9.jpg)

当我们在设计 UI 时以这种心态思考时，我们可以开始考虑组件的不同变体，这些组件依赖于它们的父宽度。

在下面的图中，请注意文章组件的每个变化是如何以特定的宽度开始的。

![](/css-container-query/10.jpg)

作为一名设计师，一开始考虑父级宽度可能有点奇怪，但这是未来的发展方向。我们为前端开发人员提供每个组件的细节和版本，他们可以使用它们。

不仅如此，我们还可能有一个组件的变体，它应该只显示在特定的上下文中。例如，事件列表页面。在这种情况下，清楚在何处使用此变体是很重要的。

问题是，如何告诉设计师应该在哪里使用这些组件。

### 与开发人员沟通

良好的沟通是项目成功的重要因素。作为一名设计人员，我们应该提供关于应该在何处使用组件变体的指导。它可以是一个完整的页面设计，也可以是一个显示如何使用每个组件的简单图。

![](/css-container-query/11.jpg)

注意我是如何将每个变体映射到一个特定的上下文，而不是一个视口。为了进一步证明这一点，我们配合 CSS 网格一起使用时，组件的行为会有何不同。

在 CSS 网格中，我们可以通过使用 auto-fit 关键字告诉浏览器，如果列的数量低于预期，我们希望展开列(您可以在这里阅读更多相关内容)。这一功能非常强大，因为它可以帮助我们在相同的背景下呈现不同的变体。

![](/css-container-query/12.jpg)

让一个组件对它的父宽度做出反应是非常有用的。正如刚才所看到的，我们重新查看了桌面大小的页面，并且有不同的部分，每个部分的列数不同。

### 在设计响应式组件时避免复杂性

重要的是要记住，组件的内部部分就像乐高游戏。我们可以根据当前的变化对它们进行排序，但所有的东西都有一个限制。有时，前端开发人员最好处理一个全新的组件，而不是使用容器查询创建变体。

考虑以下。

![](/css-container-query/13.jpg)

它具有以下内容：

- 头像
- 名称
- 按钮
- 键/值对

如果内部部分保持不变，或者至少不包含新的部分，我们可以改变组件，并有如下所示的多种变化。

![](/css-container-query/14.jpg)

### CSS 容器查询用例

我们来探索一些可以使用 CSS 容器查询实现的用例。

#### 聊天列表

我在 Facebook messenger 上看到了这种模式。聊天列表根据视口宽度改变。我们可以使用 CSS 容器查询来实现它。

![](/css-container-query/15.jpg)

当有足够的空间时，清单将展开并显示每个用户的名称。聊天列表的父元素可以是动态调整大小的元素(例如:使用 CSS 视口单元，或 CSS 比较函数)。

```html
//HTML
<div class="content">
  <aside>
    <ul>
      <li>
        <img src="shadeed.jpg" alt="Ahmad Shadeed" />
        <span class="name">Ahmad Shadeed</span>
      </li>
    </ul>
  </aside>
  <main>
    <h2>Main content</h2>
  </main>
</div>
```

```css
//CSS
.content {
  display: grid;
  grid-template-columns: 0.4fr 1fr;
}

aside {
  contain: layout inline-sizes tyle;
}

@container (min-width:180px) {
  .name {
    display: block;
  }
}
```

`aside` 宽度是`0.4f`，所以它是动态宽度。另外，我添加了`contain`属性。然后，如果容器宽度大于 180px，将显示用户名。

另一个类似的用例是侧导航。我们可以切换导航项标签的位置，从在新行或旁边的图标。

![](/css-container-query/16.jpg)

当容器很小时，导航项标签是如何从一个新行切换的，当有足够的空间时，导航项标签是如何靠近导航图标的。

转载自 [公众号-前端小智](https://mp.weixin.qq.com/s?__biz=MzI0NDQ0ODU3MA==&mid=2247500199&idx=1&sn=02e5db4527123433eb6de7da30b9a0e3&chksm=e95f2df2de28a4e44ecffc2efb8b82cd536286115cc2662d6baca5b1686f0c67c9c3af601fcc&mpshare=1&scene=1&srcid=0722zrWj52KPQLGJRTE15b2t&sharer_sharetime=1626939684396&sharer_shareid=9298e504632c196bd9806b0528a621c9&version=3.1.10.3010&platform=win#rd)

来源自 [Ahmad Shadeed - Say Hello To CSS Container Queries](https://ishadeed.com/article/say-hello-to-css-container-queries/)
