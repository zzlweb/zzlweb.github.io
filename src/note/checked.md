---
title: checked
date: 2022-01-13
tags:
  - note
categories:
  - note
---
::: tip

Disabled/Checked/Selected的默认值以及传值介绍

:::

<!-- more -->

> ### [17.12.1]() [Disabled controls]()
>
> _Attribute definitions_
>
> [disabled]() [[CI]](https://www.w3.org/TR/html401/types.html#case-insensitive)When set for a form > control, this boolean attribute disables the control for user input.
>
> When set, the [disabled](https://www.w3.org/TR/html401/interact/forms.html#adef-disabled) attribute > has the following effects on an element:
>
> - Disabled controls do not receive [focus](https://www.w3.org/TR/html401/interact/forms.html#focus).
> - Disabled controls are skipped in [tabbing navigation](https://www.w3.org/TR/html401/interact/forms.html#tabbing-navigation).
> - Disabled controls cannot be [successful](https://www.w3.org/TR/html401/interact/forms.html#successful-controls).
>
> The following elements support the [disabled](https://www.w3.org/TR/html401/interact/forms.html#adef-disabled) attribute: [BUTTON](https://www.w3.org/TR/html401/interact/forms.html#edef-BUTTON), [INPUT](https://www.w3.org/TR/html401/interact/forms.html#edef-INPUT), [OPTGROUP](https://www.w3.org/TR/html401/interact/forms.html#edef-OPTGROUP), [OPTION](https://www.w3.org/TR/html401/interact/forms.html#edef-OPTION), [SELECT](https://www.w3.org/TR/html401/interact/forms.html#edef-SELECT), and [TEXTAREA](https://www.w3.org/TR/html401/interact/forms.html#edef-TEXTAREA).
>
> This attribute is inherited but local declarations override the inherited value.
>
> How disabled elements are rendered depends on the user agent. For example, some user agents "gray out" disabled menu items, button labels, etc.
>
> In this example, the [INPUT](https://www.w3.org/TR/html401/interact/forms.html#edef-INPUT) element is disabled. Therefore, it cannot receive user input nor will its value be submitted with the form.
>
> ```
> <INPUT disabled name="fred" value="stone">
> ```
>
> **\*Note.** The only way to modify dynamically the value of the [disabled](https://www.w3.org/TR/html401/interact/forms.html#adef-disabled) attribute is through a [script.](https://www.w3.org/TR/html401/interact/scripts.html)\*

## 17.12.1disabled 的控件属性定义

disabled[CI]当为窗体>控件设置时，此**布尔属性** disabled 用户输入控件。

> CI
> The value is case-insensitive (i.e., user agents interpret "a" and "A" as the same).

> CI 该值不区分大小写（即，用户代理将“a”和“A”解释为相同）。

设置后，disabled 的属性>对元素具有以下效果：

- disabled 的控件不接收焦点。
- 在选项卡导航中跳过 disabled 的控件。
- disabled 的控件无法[successful](https://www.w3.org/TR/html401/interact/forms.html#successful-controls)。

以下元素支持 disabled 属性：按钮、输入、OPTGROUP、选项、选择和文本区域。

此属性是继承的，但本地声明会覆盖继承的值。

disabled 元素的呈现方式取决于用户代理。例如，某些用户代理“变灰”disabled 的菜单项、按钮标签等。

在本例中，输入元素被 disabled。因此，它不能接收用户输入，其值也不会随表单一起提交。

```


<input disabled name="fred" value="stone">
```

_注意。动态修改 disabled 属性值的唯一方法是通过脚本_

## Checked [CI]

- checked 属性是一个布尔属性。
- checked 属性规定在页面加载时应该被预先选定的 `<input>` 元素。
- checked 属性适用于 `<input type="checkbox">` 和 `<input type="radio">`。
- checked 属性也可以在页面加载后，通过 JavaScript 代码进行设置。

## Selected

- selected 属性是一个布尔属性。
- selected 属性规定在页面加载时预先选定该选项。
- 被预选的选项会显示在下拉列表最前面的位置。

## 其他

```
autofocus

multiple

required

autoplay

controls

loop

muted

等 属性是一个布尔属性 且该值不区分大小写
```

## 注意

**只要有 checked、disabled、、、 属性，不管是否为其赋值，结果为空或 true 或 false 或任意值，均为选中状态**
利用 javascript 操作 checked、disabled、、、 来控制复选框是否选中。

```
<!-- 以下结果是 都被选中 -->
<input type="checkbox" checked>
<input type="checkbox" checked="">
<input type="checkbox" checked="true">
<input type="checkbox" checked="false">

<!-- 以下结果是 都被选中 都被disabled -->
<input type="radio" checked disabled />
<input type="radio" checked="" disabled="" />
<input type="radio" checked="true" disabled="true" />
<input type="radio" checked="false" disabled="false" />

<!-- 以下结果是 显示最后一个出现selected项 -->
<select>
  <option selected>111</option>
  <option selected="">222</option>
  <option selected="">333</option>
  <option selected="false">444</option>
</select>
```
