(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{576:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("在前端开发中经常需要按不同屏幕尺寸来进设计达到 PC 和移动端响应式。我们一般使用 CSS 媒体查询来检测视口宽度或高度，然后根据该模式改变设计。这就是在过去 10 年中设计 Web 布局的方式。")])]),s._v(" "),a("p",[s._v("在前端开发中经常需要按不同屏幕尺寸来进设计达到 PC 和移动端响应式。我们一般使用 CSS 媒体查询来检测视口宽度或高度，然后根据该模式改变设计。这就是在过去 10 年中设计 Web 布局的方式。")]),s._v(" "),a("p",[a("strong",[s._v("CSS 容器查询")]),s._v("，一个长期以来被 web 开发者要求的特性，很快就会出现在 CSS 中，在最新的 Chrome Canary 中，我们可以通过 "),a("code",[s._v("chrome://flags/#enable-container-queries")]),s._v(" 开启 Container Queries 功能。本文将介绍它是什么，它将如何改变作为设计师的工作流，等等。")]),s._v(" "),a("h3",{attrs:{id:"当前响应设计状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当前响应设计状态"}},[s._v("#")]),s._v(" 当前响应设计状态")]),s._v(" "),a("p",[s._v("当前，我们实现响应式，一般需要 UI 设计三个样式，分别是移动，平板电脑和桌面等。\n"),a("img",{attrs:{src:"/css-container-query/1.jpg",alt:""}})]),s._v(" "),a("p",[s._v("在上图中，UI 设计了三种版本，因此开发人员可以很好的实现它，这是很 nice 的(这怕偷懒的 UI 只提供 PC 版本，这就很蛋疼)。")]),s._v(" "),a("p",[s._v("现在我们来看看使用媒体查询来看看怎么实现它。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/2.jpg",alt:""}})]),s._v(" "),a("p",[s._v("上图是同一个组件，它有三个变体，即"),a("code",[s._v("default")]),s._v("、"),a("code",[s._v("Card")]),s._v("和"),a("code",[s._v("Featured")]),s._v("。在 CSS 中，开发人员需要创建此组件的三个变体，其中每个组成均是唯一的。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".c-media")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*the default styles*/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("gap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@media")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("min-with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".c-media--card")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".c-media--cardimg")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@media")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("min-with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1300px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".c-media--featured")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*otherstyles*/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".c-media--featured.c-media__content")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[s._v("上面的变体取决于媒体查询或视口宽度。这意味着，我们无法根据其父宽度控制它们。现在你可能会想，这里有什么问题？喔或，这是一个很好的问题。")]),s._v(" "),a("p",[s._v("问题是，只有当视口宽度大于特定值时，开发人员才会使用组件的变体。例如，如果我在平板中使用 "),a("code",[s._v("featured")]),s._v(" 也就是 PC 的样式，它不能工作，为什么?因为它的媒体查询宽度是大于"),a("code",[s._v("1300px")]),s._v("。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/3.jpg",alt:""}})]),s._v(" "),a("p",[s._v("不仅如此，当内容低于预期时，我们还会面临一个问题。有时，UP 主可能只会添加一篇文章，而设计是包含其中的三篇。在这种情况下，要么我们将有一个空的空间，要么项目将扩展以填满可用的空间。考虑下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/4.jpg",alt:""}})]),s._v(" "),a("p",[s._v("在第一种情况下(Case 1)，文章太宽，会导致封面变形。第二种情况下(Case 2)也是一样的问题")]),s._v(" "),a("p",[s._v("如果使用容器查询，我们可以通过查询父组件来决定如何显示特定组件来解决这些问题。考虑下图，它展示了我们如何使用容器查询来修复这个问题。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/5.jpg",alt:""}})]),s._v(" "),a("p",[s._v("这样的话，如果我们把思路转向组件的父组件呢?换句话说，如果我们查询父组件，并根据父组件的宽度或高度来决定组件应该是什么样子的呢?我们来看下"),a("strong",[s._v("容器查询")]),s._v(" 的概念。")]),s._v(" "),a("h3",{attrs:{id:"什么是容器查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是容器查询"}},[s._v("#")]),s._v(" 什么是容器查询")]),s._v(" "),a("p",[s._v("首先，让我定义容器。它就包含另一个元素的元素，一般我们叫它 "),a("code",[s._v("wrapper")]),s._v("。")]),s._v(" "),a("p",[s._v("最新的 Chrome Canary 中，我们可以通过 chrome://flags/#enable-container-queries 开启 Container Queries 功能。")]),s._v(" "),a("p",[s._v("当一个组件被放置在一个项中，它就被包含在该项中。这意味着，我们可以查询父元素的宽度并据此修改它。考虑下图")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/6.jpg",alt:""}})]),s._v(" "),a("p",[s._v("注意，每个卡片都有一个黄色的轮廓线，代表每个组件的父组件。使用 CSS 容器查询，我们可以根据父组件的宽度修改组件。")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("o-grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("o-grid__item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("article")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("c-media"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("article")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--+more items--\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("该组件是具有类"),a("code",[s._v(".c-media")]),s._v("的项，它的父级是"),a("code",[s._v(".o-grid__item")]),s._v("元素。在 CSS 中，我们可以执行以下操作：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".o-grid__item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("contain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" layout inline-size style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".c-media")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*Default style*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@container")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("320px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".c-media")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*The styles*/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@container")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("450px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".c-media")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*Thestyles*/")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("首先，我们告诉浏览器，每个带有 class "),a("code",[s._v(".o-grid")]),s._v("项的元素都是一个容器。然后，再告诉浏览器，如果父元素的宽度等于或大于 500px，它应该以不同的方式显示。对于 700px 查询也是如此。这就是 CSS 容器查询的工作原理。")]),s._v(" "),a("p",[s._v("此外，我们可以在任何想要的地方定义它们，这意味着如果需要，我们可以在顶级容器上进行查询。现在大家已经理解了 CSS 容器查询的基本思想，在看看下面图片加深一下映像。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/7.jpg",alt:""}})]),s._v(" "),a("p",[s._v("在左边，这是一个正在调整大小的视口。在右边，一个根据父组件宽度更改的组件。这就是容器查询的功能和用途。")]),s._v(" "),a("h3",{attrs:{id:"在设计时考虑容器查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在设计时考虑容器查询"}},[s._v("#")]),s._v(" 在设计时考虑容器查询")]),s._v(" "),a("p",[s._v("作为一名 UI，你需要适应这个革命性的 CSS 特性，因为它将改变我们为网页设计的方式。我们不仅为屏幕尺寸设计，还考虑组件在容器宽度变化时应如何适应。")]),s._v(" "),a("p",[s._v("现在，设计系统变得越来越流行。设计团队将构建一组规则和组件，以便其他成员可以基于它们构建页面。随着 CSS 容器查询的到来，我们还将设计一个组件应该如何根据其父组件的宽度进行调整。")]),s._v(" "),a("p",[s._v("考虑以下设计:")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/8.jpg",alt:""}})]),s._v(" "),a("p",[s._v("请注意，我们有标题、文章部分、引文和时事通讯。它们中的每一个都应该适应父视图的宽度。")]),s._v(" "),a("p",[s._v("我可以把这些组件分成以下几个部分")]),s._v(" "),a("ul",[a("li",[s._v("Viewport (媒体查询)")]),s._v(" "),a("li",[s._v("Parent （容器查询）")]),s._v(" "),a("li",[s._v("通用:不受影响的组件，如按钮、标签、段落。")])]),s._v(" "),a("p",[s._v("对于示例 UI，下面是我们如何划分组件。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/9.jpg",alt:""}})]),s._v(" "),a("p",[s._v("当我们在设计 UI 时以这种心态思考时，我们可以开始考虑组件的不同变体，这些组件依赖于它们的父宽度。")]),s._v(" "),a("p",[s._v("在下面的图中，请注意文章组件的每个变化是如何以特定的宽度开始的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/10.jpg",alt:""}})]),s._v(" "),a("p",[s._v("作为一名设计师，一开始考虑父级宽度可能有点奇怪，但这是未来的发展方向。我们为前端开发人员提供每个组件的细节和版本，他们可以使用它们。")]),s._v(" "),a("p",[s._v("不仅如此，我们还可能有一个组件的变体，它应该只显示在特定的上下文中。例如，事件列表页面。在这种情况下，清楚在何处使用此变体是很重要的。")]),s._v(" "),a("p",[s._v("问题是，如何告诉设计师应该在哪里使用这些组件。")]),s._v(" "),a("h3",{attrs:{id:"与开发人员沟通"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与开发人员沟通"}},[s._v("#")]),s._v(" 与开发人员沟通")]),s._v(" "),a("p",[s._v("良好的沟通是项目成功的重要因素。作为一名设计人员，我们应该提供关于应该在何处使用组件变体的指导。它可以是一个完整的页面设计，也可以是一个显示如何使用每个组件的简单图。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/11.jpg",alt:""}})]),s._v(" "),a("p",[s._v("注意我是如何将每个变体映射到一个特定的上下文，而不是一个视口。为了进一步证明这一点，我们配合 CSS 网格一起使用时，组件的行为会有何不同。")]),s._v(" "),a("p",[s._v("在 CSS 网格中，我们可以通过使用 auto-fit 关键字告诉浏览器，如果列的数量低于预期，我们希望展开列(您可以在这里阅读更多相关内容)。这一功能非常强大，因为它可以帮助我们在相同的背景下呈现不同的变体。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/12.jpg",alt:""}})]),s._v(" "),a("p",[s._v("让一个组件对它的父宽度做出反应是非常有用的。正如刚才所看到的，我们重新查看了桌面大小的页面，并且有不同的部分，每个部分的列数不同。")]),s._v(" "),a("h3",{attrs:{id:"在设计响应式组件时避免复杂性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在设计响应式组件时避免复杂性"}},[s._v("#")]),s._v(" 在设计响应式组件时避免复杂性")]),s._v(" "),a("p",[s._v("重要的是要记住，组件的内部部分就像乐高游戏。我们可以根据当前的变化对它们进行排序，但所有的东西都有一个限制。有时，前端开发人员最好处理一个全新的组件，而不是使用容器查询创建变体。")]),s._v(" "),a("p",[s._v("考虑以下。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/13.jpg",alt:""}})]),s._v(" "),a("p",[s._v("它具有以下内容：")]),s._v(" "),a("ul",[a("li",[s._v("头像")]),s._v(" "),a("li",[s._v("名称")]),s._v(" "),a("li",[s._v("按钮")]),s._v(" "),a("li",[s._v("键/值对")])]),s._v(" "),a("p",[s._v("如果内部部分保持不变，或者至少不包含新的部分，我们可以改变组件，并有如下所示的多种变化。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/14.jpg",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"css-容器查询用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-容器查询用例"}},[s._v("#")]),s._v(" CSS 容器查询用例")]),s._v(" "),a("p",[s._v("我们来探索一些可以使用 CSS 容器查询实现的用例。")]),s._v(" "),a("h4",{attrs:{id:"聊天列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聊天列表"}},[s._v("#")]),s._v(" 聊天列表")]),s._v(" "),a("p",[s._v("我在 Facebook messenger 上看到了这种模式。聊天列表根据视口宽度改变。我们可以使用 CSS 容器查询来实现它。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/15.jpg",alt:""}})]),s._v(" "),a("p",[s._v("当有足够的空间时，清单将展开并显示每个用户的名称。聊天列表的父元素可以是动态调整大小的元素(例如:使用 CSS 视口单元，或 CSS 比较函数)。")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("//HTML\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("aside")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("shadeed.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("Ahmad Shadeed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("span")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Ahmad Shadeed"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("aside")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Main content"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("//CSS\n.content")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.4fr 1fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("aside")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("contain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" layout inline-sizes tyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@container")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("180px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[a("code",[s._v("aside")]),s._v(" 宽度是"),a("code",[s._v("0.4f")]),s._v("，所以它是动态宽度。另外，我添加了"),a("code",[s._v("contain")]),s._v("属性。然后，如果容器宽度大于 180px，将显示用户名。")]),s._v(" "),a("p",[s._v("另一个类似的用例是侧导航。我们可以切换导航项标签的位置，从在新行或旁边的图标。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/css-container-query/16.jpg",alt:""}})]),s._v(" "),a("p",[s._v("当容器很小时，导航项标签是如何从一个新行切换的，当有足够的空间时，导航项标签是如何靠近导航图标的。")]),s._v(" "),a("p",[s._v("转载自 "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI0NDQ0ODU3MA==&mid=2247500199&idx=1&sn=02e5db4527123433eb6de7da30b9a0e3&chksm=e95f2df2de28a4e44ecffc2efb8b82cd536286115cc2662d6baca5b1686f0c67c9c3af601fcc&mpshare=1&scene=1&srcid=0722zrWj52KPQLGJRTE15b2t&sharer_sharetime=1626939684396&sharer_shareid=9298e504632c196bd9806b0528a621c9&version=3.1.10.3010&platform=win#rd",target:"_blank",rel:"noopener noreferrer"}},[s._v("公众号-前端小智"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("来源自 "),a("a",{attrs:{href:"https://ishadeed.com/article/say-hello-to-css-container-queries/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ahmad Shadeed - Say Hello To CSS Container Queries"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);