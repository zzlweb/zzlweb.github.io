---
title: 前端开发规范 - 注释规范
date: 2022-01-13
tags:
  - note
categories:
  - note
---

::: tip

前端开发规范系列 - 注释规范，包含 CSS、JS、HTML 的注释规范。

:::

<!-- more -->

## JS 单行注释 ( // )

- 单独一行：//(双斜线)与注释文字之间保留一个空格
- 在代码后面添加注释：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格。
- 注释代码：//(双斜线)与代码之间保留一个空格。

推荐 :

```
// 调用了一个函数；1)单独在一行
setTitle();

var maxCount = 10; // 设置最大量；2)在代码后面注释

// setName(); // 3)注释代码
```

## JS 多行注释 ( / 注释说明 / )

- 若开始(/_和结束(_/)都在一行，推荐采用单行注释
- 若至少三行注释时，第一行为/_，最后行为_/，其他行以*开始，并且注释文字与*保留一个空格。

推荐 :

```
/*
* 代码执行到这里后会调用setTitle()函数
* setTitle()：设置title的值
*/
setTitle();
```

## JSDoc 注释

JSDoc 注释一般应该放置在方法或函数声明之前，它必须以`/**`开始，以便由 JSDoc 解析器识别。其他任何以`/*`，`/***`或者超过 3 个星号的注释，都将被 JSDoc 解析器忽略。更多查看[JSDoc](https://www.shouce.ren/api/view/a/13232)

语法：

```
/**
* 函数说明
* @关键字
*/
```

常用注释关键字

| 注释名   | 语法                                      | 含义                      | 示例                                         |
| -------- | ----------------------------------------- | ------------------------- | -------------------------------------------- |
| @param   | @param 参数名 {参数类型} 描述信息         | 描述参数的信息            | @param name {String} 传入名称                |
| @return  | @return {返回类型} 描述信息               | 描述返回值的信息          | @return {Boolean} true:可执行;false:不可执行 |
| @author  | @author 作者信息 [附属信息：如邮箱、日期] | 描述此函数作者的信息      | @author 张三 2015/07/21                      |
| @version | @version XX.XX.XX                         | 描述此函数的版本号        | @version 1.0.3                               |
| @example | @example 示例代码                         | @example setTitle('测试') | 如下                                         |

推荐 :

```
/**
 * 合并Grid的行
 * @param grid {Ext.Grid.Panel} 需要合并的Grid
 * @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
 * @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
 * @return void
 * @author polk6 2015/07/21
 * @example
 * _________________                             _________________
 * |  年龄 |  姓名 |                             |  年龄 |  姓名 |
 * -----------------      mergeCells(grid,[0])   -----------------
 * |  18   |  张三 |              =>             |       |  张三 |
 * -----------------                             -  18   ---------
 * |  18   |  王五 |                             |       |  王五 |
 * -----------------                             -----------------
*/
function mergeCells(grid, cols, isAllSome) {
    // Do Something
}
```

## HTML 注释遵循标准

HTML 注释规范写法应该遵循以下标准：

> Comments must start with the four character sequence U+003C LESS-THAN SIGN, U+0021 EXCLAMATION MARK, U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS (<!–). Following this sequence, the comment may have text, with the additional restriction that the text must not start with a single “>” (U+003E) character, nor start with a U+002D HYPHEN-MINUS character (-) followed by a “>” (U+003E) character, nor contain two consecutive U+002D HYPHEN-MINUS characters (–), nor end with a U+002D HYPHEN-MINUS character (-). Finally, the comment must be ended by the three character sequence U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN (–>).

- 必须以 4 个有序字符开始：编码为 U+003C LESS-THAN SIGN 的小于号, 编码为 U+0021 EXCLAMATION MARK 的感叹号, 编码为 U+002D HYPHEN-MINUS 横线, 编码为 U+002D HYPHEN-MINUS 横线 ，即 “<!–”
- 在此之后是注释内容，注释的内容有以下限制：
- 不能以单个 “>” (U+003E) 字符开始
- 不能以由 “-“（U+002D HYPHEN-MINUS）和 ”>” (U+003E) 组合的字符开始，即 “->”
- 不能包含两个连续的 U+002D HYPHEN-MINUS 字符，即 “–”
- 不能以一个 U+002D HYPHEN-MINUS 字符结束，即 “-”
- 必须以 3 个有序字符结束：U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN，即 “–>”

标准写法：

```
<!--Comment Text-->
```

错误的写法：

```
<!-->The Wrong Comment Text-->

<!--->The Wrong Comment Text-->

<!--The--Wrong--Comment Text-->

<!--The Wrong Comment Text--->
```

## HTML 单行注释

一般用于简单的描述，如某些状态描述、属性描述等

注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行

推荐：

```
<!-- Comment Text -->
<div>...</div>
```

不推荐：

```
<div>...</div><!-- Comment Text -->

<div><!-- Comment Text -->
    ...
</div>
```

## HTML 模块注释

一般用于描述模块的名称以及模块开始与结束的位置, 注释内容前后各一个空格字符

- `<!-- S Comment Text -->` 表示模块开始
- `<!-- E Comment Text -->` 表示模块结束，模块与模块之间相隔一行

推荐写法：

```
<!-- S Comment Text A -->
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->

<!-- S Comment Text B -->
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```

不推荐写法：

```
<!-- S Comment Text A -->
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
<!-- S Comment Text B -->
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```

## HTML 嵌套模块注释

当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用

```
<!-- S Comment Text -->
<!-- E Comment Text -->
```

而改用

```
<!-- /Comment Text -->
```

注释写在模块结尾标签底部，单独一行。

```
<!-- S Comment Text A -->
<div class="mod_a">

    <div class="mod_b">
        ...
    </div>
    <!-- /mod_b -->

    <div class="mod_c">
    	...
    </div>
    <!-- /mod_c -->

</div>
<!-- E Comment Text A -->
```

## CSS 注释规范

- 注释以字符 `/*` 开始，以字符 `*/` 结束
- 注释不能嵌套

```
/* Comment Text */
```

## CSS 单行注释

注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行

推荐：

```
/* Comment Text */
.jdc{}

/* Comment Text */
.jdc{}
```

不推荐：

```
/*Comment Text*/
.jdc{
	display: block;
}
.jdc{
	display: block;/*Comment Text*/
}
```

## CSS 模块注释

注释内容第一个字符和最后一个字符都是一个空格字符，`/*` 与 `-`用空格分开，模块信息描述在相同的多个横线分隔符`-`之间，模块信息描述 与横线分隔符用空格分开， 左右两边横线分隔符至少要 3 个以上且两边数量相等，行与行之间相隔一行

推荐：

```
/* ---------------------------- Module A ---------------------------- */
.mod_a {}

/* ---------------------------- Module B ---------------------------- */
.mod_b {}
```

不推荐：

```
/* Module A ---------------------------------------------------- */
.mod_a {}
/* Module B ---------------------------------------------------- */
.mod_b {}
```

## CSS 文件信息注释

在样式文件编码声明 @charset 语句下面注明页面名称、作者、创建日期等信息

```
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
```
