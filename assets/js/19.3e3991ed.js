(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{582:function(s,a,e){"use strict";e.r(a);var n=e(10),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("前端开发规范系列 - 注释规范，包含 CSS、JS、HTML 的注释规范。")])]),s._v(" "),e("h2",{attrs:{id:"js-单行注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-单行注释"}},[s._v("#")]),s._v(" JS 单行注释 ( // )")]),s._v(" "),e("ul",[e("li",[s._v("单独一行：//(双斜线)与注释文字之间保留一个空格")]),s._v(" "),e("li",[s._v("在代码后面添加注释：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格。")]),s._v(" "),e("li",[s._v("注释代码：//(双斜线)与代码之间保留一个空格。")])]),s._v(" "),e("p",[s._v("推荐 :")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 调用了一个函数；1)单独在一行\nsetTitle();\n\nvar maxCount = 10; // 设置最大量；2)在代码后面注释\n\n// setName(); // 3)注释代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"js-多行注释-注释说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-多行注释-注释说明"}},[s._v("#")]),s._v(" JS 多行注释 ( / 注释说明 / )")]),s._v(" "),e("ul",[e("li",[s._v("若开始(/"),e("em",[s._v("和结束(")]),s._v("/)都在一行，推荐采用单行注释")]),s._v(" "),e("li",[s._v("若至少三行注释时，第一行为/"),e("em",[s._v("，最后行为")]),s._v("/，其他行以"),e("em",[s._v("开始，并且注释文字与")]),s._v("保留一个空格。")])]),s._v(" "),e("p",[s._v("推荐 :")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/*\n* 代码执行到这里后会调用setTitle()函数\n* setTitle()：设置title的值\n*/\nsetTitle();\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"jsdoc-注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsdoc-注释"}},[s._v("#")]),s._v(" JSDoc 注释")]),s._v(" "),e("p",[s._v("JSDoc 注释一般应该放置在方法或函数声明之前，它必须以"),e("code",[s._v("/**")]),s._v("开始，以便由 JSDoc 解析器识别。其他任何以"),e("code",[s._v("/*")]),s._v("，"),e("code",[s._v("/***")]),s._v("或者超过 3 个星号的注释，都将被 JSDoc 解析器忽略。更多查看"),e("a",{attrs:{href:"https://www.shouce.ren/api/view/a/13232",target:"_blank",rel:"noopener noreferrer"}},[s._v("JSDoc"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("语法：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/**\n* 函数说明\n* @关键字\n*/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("常用注释关键字")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("注释名")]),s._v(" "),e("th",[s._v("语法")]),s._v(" "),e("th",[s._v("含义")]),s._v(" "),e("th",[s._v("示例")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("@param")]),s._v(" "),e("td",[s._v("@param 参数名 {参数类型} 描述信息")]),s._v(" "),e("td",[s._v("描述参数的信息")]),s._v(" "),e("td",[s._v("@param name {String} 传入名称")])]),s._v(" "),e("tr",[e("td",[s._v("@return")]),s._v(" "),e("td",[s._v("@return {返回类型} 描述信息")]),s._v(" "),e("td",[s._v("描述返回值的信息")]),s._v(" "),e("td",[s._v("@return {Boolean} true:可执行;false:不可执行")])]),s._v(" "),e("tr",[e("td",[s._v("@author")]),s._v(" "),e("td",[s._v("@author 作者信息 [附属信息：如邮箱、日期]")]),s._v(" "),e("td",[s._v("描述此函数作者的信息")]),s._v(" "),e("td",[s._v("@author 张三 2015/07/21")])]),s._v(" "),e("tr",[e("td",[s._v("@version")]),s._v(" "),e("td",[s._v("@version XX.XX.XX")]),s._v(" "),e("td",[s._v("描述此函数的版本号")]),s._v(" "),e("td",[s._v("@version 1.0.3")])]),s._v(" "),e("tr",[e("td",[s._v("@example")]),s._v(" "),e("td",[s._v("@example 示例代码")]),s._v(" "),e("td",[s._v("@example setTitle('测试')")]),s._v(" "),e("td",[s._v("如下")])])])]),s._v(" "),e("p",[s._v("推荐 :")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/**\n * 合并Grid的行\n * @param grid {Ext.Grid.Panel} 需要合并的Grid\n * @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。\n * @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样\n * @return void\n * @author polk6 2015/07/21\n * @example\n * _________________                             _________________\n * |  年龄 |  姓名 |                             |  年龄 |  姓名 |\n * -----------------      mergeCells(grid,[0])   -----------------\n * |  18   |  张三 |              =>             |       |  张三 |\n * -----------------                             -  18   ---------\n * |  18   |  王五 |                             |       |  王五 |\n * -----------------                             -----------------\n*/\nfunction mergeCells(grid, cols, isAllSome) {\n    // Do Something\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("h2",{attrs:{id:"html-注释遵循标准"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-注释遵循标准"}},[s._v("#")]),s._v(" HTML 注释遵循标准")]),s._v(" "),e("p",[s._v("HTML 注释规范写法应该遵循以下标准：")]),s._v(" "),e("blockquote",[e("p",[s._v("Comments must start with the four character sequence U+003C LESS-THAN SIGN, U+0021 EXCLAMATION MARK, U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS (<!–). Following this sequence, the comment may have text, with the additional restriction that the text must not start with a single “>” (U+003E) character, nor start with a U+002D HYPHEN-MINUS character (-) followed by a “>” (U+003E) character, nor contain two consecutive U+002D HYPHEN-MINUS characters (–), nor end with a U+002D HYPHEN-MINUS character (-). Finally, the comment must be ended by the three character sequence U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN (–>).")])]),s._v(" "),e("ul",[e("li",[s._v("必须以 4 个有序字符开始：编码为 U+003C LESS-THAN SIGN 的小于号, 编码为 U+0021 EXCLAMATION MARK 的感叹号, 编码为 U+002D HYPHEN-MINUS 横线, 编码为 U+002D HYPHEN-MINUS 横线 ，即 “<!–”")]),s._v(" "),e("li",[s._v("在此之后是注释内容，注释的内容有以下限制：")]),s._v(" "),e("li",[s._v("不能以单个 “>” (U+003E) 字符开始")]),s._v(" "),e("li",[s._v("不能以由 “-“（U+002D HYPHEN-MINUS）和 ”>” (U+003E) 组合的字符开始，即 “->”")]),s._v(" "),e("li",[s._v("不能包含两个连续的 U+002D HYPHEN-MINUS 字符，即 “–”")]),s._v(" "),e("li",[s._v("不能以一个 U+002D HYPHEN-MINUS 字符结束，即 “-”")]),s._v(" "),e("li",[s._v("必须以 3 个有序字符结束：U+002D HYPHEN-MINUS, U+002D HYPHEN-MINUS, U+003E GREATER-THAN SIGN，即 “–>”")])]),s._v(" "),e("p",[s._v("标准写法：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\x3c!--Comment Text--\x3e\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("错误的写法：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\x3c!--\x3eThe Wrong Comment Text--\x3e\n\n\x3c!---\x3eThe Wrong Comment Text--\x3e\n\n\x3c!--The--Wrong--Comment Text--\x3e\n\n\x3c!--The Wrong Comment Text---\x3e\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"html-单行注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-单行注释"}},[s._v("#")]),s._v(" HTML 单行注释")]),s._v(" "),e("p",[s._v("一般用于简单的描述，如某些状态描述、属性描述等")]),s._v(" "),e("p",[s._v("注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行")]),s._v(" "),e("p",[s._v("推荐：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\x3c!-- Comment Text --\x3e\n<div>...</div>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("不推荐：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<div>...</div>\x3c!-- Comment Text --\x3e\n\n<div>\x3c!-- Comment Text --\x3e\n    ...\n</div>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"html-模块注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-模块注释"}},[s._v("#")]),s._v(" HTML 模块注释")]),s._v(" "),e("p",[s._v("一般用于描述模块的名称以及模块开始与结束的位置, 注释内容前后各一个空格字符")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("\x3c!-- S Comment Text --\x3e")]),s._v(" 表示模块开始")]),s._v(" "),e("li",[e("code",[s._v("\x3c!-- E Comment Text --\x3e")]),s._v(" 表示模块结束，模块与模块之间相隔一行")])]),s._v(" "),e("p",[s._v("推荐写法：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\x3c!-- S Comment Text A --\x3e\n<div class="mod_a">\n    ...\n</div>\n\x3c!-- E Comment Text A --\x3e\n\n\x3c!-- S Comment Text B --\x3e\n<div class="mod_b">\n    ...\n</div>\n\x3c!-- E Comment Text B --\x3e\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("不推荐写法：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\x3c!-- S Comment Text A --\x3e\n<div class="mod_a">\n    ...\n</div>\n\x3c!-- E Comment Text A --\x3e\n\x3c!-- S Comment Text B --\x3e\n<div class="mod_b">\n    ...\n</div>\n\x3c!-- E Comment Text B --\x3e\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"html-嵌套模块注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-嵌套模块注释"}},[s._v("#")]),s._v(" HTML 嵌套模块注释")]),s._v(" "),e("p",[s._v("当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\x3c!-- S Comment Text --\x3e\n\x3c!-- E Comment Text --\x3e\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("而改用")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\x3c!-- /Comment Text --\x3e\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("注释写在模块结尾标签底部，单独一行。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\x3c!-- S Comment Text A --\x3e\n<div class="mod_a">\n\n    <div class="mod_b">\n        ...\n    </div>\n    \x3c!-- /mod_b --\x3e\n\n    <div class="mod_c">\n    \t...\n    </div>\n    \x3c!-- /mod_c --\x3e\n\n</div>\n\x3c!-- E Comment Text A --\x3e\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h2",{attrs:{id:"css-注释规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-注释规范"}},[s._v("#")]),s._v(" CSS 注释规范")]),s._v(" "),e("ul",[e("li",[s._v("注释以字符 "),e("code",[s._v("/*")]),s._v(" 开始，以字符 "),e("code",[s._v("*/")]),s._v(" 结束")]),s._v(" "),e("li",[s._v("注释不能嵌套")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/* Comment Text */\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"css-单行注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-单行注释"}},[s._v("#")]),s._v(" CSS 单行注释")]),s._v(" "),e("p",[s._v("注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行")]),s._v(" "),e("p",[s._v("推荐：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/* Comment Text */\n.jdc{}\n\n/* Comment Text */\n.jdc{}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("不推荐：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/*Comment Text*/\n.jdc{\n\tdisplay: block;\n}\n.jdc{\n\tdisplay: block;/*Comment Text*/\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"css-模块注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-模块注释"}},[s._v("#")]),s._v(" CSS 模块注释")]),s._v(" "),e("p",[s._v("注释内容第一个字符和最后一个字符都是一个空格字符，"),e("code",[s._v("/*")]),s._v(" 与 "),e("code",[s._v("-")]),s._v("用空格分开，模块信息描述在相同的多个横线分隔符"),e("code",[s._v("-")]),s._v("之间，模块信息描述 与横线分隔符用空格分开， 左右两边横线分隔符至少要 3 个以上且两边数量相等，行与行之间相隔一行")]),s._v(" "),e("p",[s._v("推荐：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/* ---------------------------- Module A ---------------------------- */\n.mod_a {}\n\n/* ---------------------------- Module B ---------------------------- */\n.mod_b {}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("不推荐：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/* Module A ---------------------------------------------------- */\n.mod_a {}\n/* Module B ---------------------------------------------------- */\n.mod_b {}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"css-文件信息注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-文件信息注释"}},[s._v("#")]),s._v(" CSS 文件信息注释")]),s._v(" "),e("p",[s._v("在样式文件编码声明 @charset 语句下面注明页面名称、作者、创建日期等信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@charset "UTF-8";\n/**\n * @desc File Info\n * @author Author Name\n * @date 2015-10-10\n */\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);