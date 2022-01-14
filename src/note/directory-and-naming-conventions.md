---
title: 前端开发规范 - 目录与命名规范
date: 2022-01-13
tags:
  - note
categories:
  - note
---

::: tip

前端开发规范系列 - 目录与命名规范

:::

<!-- more -->

**概述**

> 为提高团队协作效率，规范文件管理，方便项目后期维护，提高代码质量，特制订此文档，前端开发人员都应遵照本规范进行前台页面开发。本文档处于快速迭代阶段，如果你发现本规范中有任何错误，敬请指正，也请积极踊跃补充。

### 驼峰式命名法介绍

- Pascal Case 大驼峰式命名法：首字母大写。eg：StudentInfo、UserInfo、ProductInfo
- Camel Case 小驼峰式命名法：首字母小写。eg：studentInfo、userInfo、productInfo

## 一 目录规范

### 文件资源命名

- 文件名不得含有空格以及特殊字符
- 文件名建议使用小写字母，不使用大写字母。( 为了醒目，某些说明文件的文件名，可以使用大写字母，比如 README、LICENSE。 )
- 文件名包含多个单词时，单词之间建议使用半角的连词线 ( - ) 分隔。
- 首页命名为 index.html，有明显分类的，参考使用以下示例命名，无明确意义的，可用 page01.html、page02.html

| 专题名称   | 描述        |
| ---------- | ----------- |
| index.html | 引导页&首页 |
| main.html  | 首页        |

- 引入资源使用相对路径，不要指定资源所带的具体协议 ( http:,https: ) ，除非这两者协议都不可用。

不推荐：

```
<script src="http://cdn.com/foundation.min.js"></script>
```

推荐：

```
<script src="//cdn.com/foundation.min.js"></script>
```

### PC 端非框架新建项目文件结构

- 图片文件夹：img
- CSS 文件夹：css
- JS 文件夹：js
- ICON 文件夹： icon
- SVG 文件夹： svg
- 页面文件夹： view
- 其他类型文件新建文件夹并根据类型命名
- view 中的页面名称在 css js 中请使用相同名称命名
- 文件夹使用单数

例如：

```
|--3DPrint
    |--css
      |--init.css                    // 初始化样式
      |--model.css                   // model page css
      |--pa.css                      // pa page css
      |--pa-detail.css               // pa-detal page css
    |--icon
      |--iconfont.css                // 字体样式文件
      |--iconfont.ttf                // 字体ttf资源文件
      |--iconfont.woff               // 字体woff资源文件
      |--iconfont.woff2              // 字体woff2资源文件
    |--img
    |--js
      |--bootstrap.min.js            // Bootstrap 插件
      |--jquery.min.js               // jQuery 插件
      |--model.js                    // model page js
      |--pa.js                       // pa page js
      |--pa-detail.js                // pa-detal page js
    |--video                         // 如有视频资源，新增video文件夹存放视频
    |--svg
    |--view
      |--model.html                  // model page html
      |--pa.html                     // pa page html
      |--pa-detail.html              // pa-detal page html

    |--README.md                         //可以加也可以不加
```

### PC 端框架新建项目文件结构

> 框架文件结构以使用框架规则为准，命名以本规范为准

### 常用 JS CDN

> _以下资源版本以及 cdn 待定_  
> **JQuery**  
> **Bootstrap**  
> **jQuery.fullPage**  
> **Swiper**  
> **Echarts**  
> **Animate**  
> ...

## 二 命名规范

### 变量命名

**命名方式**: 小驼峰式命名方法  
**命名规范**: 类型+对象描述的方式，如果没有明确的类型，就可以使前缀为名词

| 类型     | 小写字母 |
| -------- | -------- |
| array    | a        |
| boolean  | b        |
| string   | s        |
| function | fn       |
| int      | i        |
| object   | o        |
| regular  | r        |

推荐

```
var tableTitle = "LoginTable"
```

不推荐

```
var getTitle = "LoginTable"
```

### 函数

**命名方式**: 小驼峰方式 ( 构造函数使用大驼峰命名法 )  
**命名规则**: 前缀为动词

| 动词 | 含义                            | 返回值                                                |
| ---- | ------------------------------- | ----------------------------------------------------- |
| can  | 判断是否可执行某个动作 ( 权限 ) | 函数返回一个布尔值。true：可执行；false：不可执行     |
| has  | 判断是否含有某个值              | 函数返回一个布尔值。true：含有此值；false：不含有此值 |
| is   | 判断是否为某个值                | 函数返回一个布尔值。true：为某个值；false：不为某个值 |
| get  | 获取某个值                      | 函数返回一个非布尔值                                  |
| set  | 设置某个值                      | 无返回值、返回是否设置成功或者返回链式对象            |

推荐：

```
//是否可阅读
function canRead(){
    return true;
}

//获取姓名
function getName{
    return this.name
}
```

### 常量

**命名方法**: 全部大写  
**命名规范**: 使用大写字母和下划线来组合命名，下划线用以分割单词。

推荐：

```
 const MAX_COUNT = 10;
 const URL = 'http://www.baidu.com';
```

### 类的成员

**公共属性和方法**: 同变量命名方式  
**私有属性和方法**: 前缀为下划线(\_)后面跟公共属性和方法一样的命名方式

推荐(将`name`换成`this`是不是更熟悉了呢)

```
function Student(name) {
    var _name = name; // 私有成员

    // 公共方法
    this.getName = function () {
        return _name;
    }

    // 公共方式
    this.setName = function (value) {
        _name = value;
    }
}
var st = new Student('tom');
st.setName('jerry');
console.log(st.getName()); // => jerry：输出_name私有变量的值
```

## 样式命名

- ClassName 的命名应该尽量精短、明确，必须以**字母开头命名**，且**全部字母为小写**，单词之间**统一使用半角的连词线“-”连接**
- class 都需小写
- 命名使用英文，禁止使用特殊字符
- id 使用小驼峰方法命名
- 样式名不能包含 ad、guanggao、ads、gg 是广告含义的关键词，避免元素被网页拓展、插件屏蔽
- 涉及数据、交互等需要联调的部分，禁止通过 id 选择器定义样式，以免开发过程中 id 名变化，引起页局错乱
- 类名命名需要语义化，参考下面的示例：

```
 .wrap{}                 //外层容器
 .mod-box{}              //模块容器
 .btn-start{}            //开始
 .btn-download-ios{}     //ios下载
 .btn-download-andriod{} //安卓下载
 .btn-head-nav1{}        //头部导航链接1
 .btn-news-more{}        //更多新闻
 .btn-play{}             //播放视频
 .btn-ico{}              //按钮ico
 .btn-lottery{}          //开始抽奖
 .side-nav{}             //侧栏导航
 .side-nav-btn1{}        //侧栏导航-链接1
 .btn-more{}             //更多
```

### 参考命名原则

_基于姓氏命名法（继承 + 外来）_
_基于方位语义化命名_

- 当子孙模块超过 4 级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块
- ID 和 class 的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称

推荐：

```
<div class="modulename">
	<div class="modulename-cover"></div>
	<div class="modulename-info">
    	<div class="modulename-info-user">
    		<div class="modulename-info-user-img">
    			<img src="" alt="">
    			<!-- 这个时候 miui 为 modulename-info-user-img 首字母缩写-->
    			<div class="miui-tit"></div>
    			<div class="miui-txt"></div>
    			...
    		</div>
    	</div>
    	<div class="modulename-info-list"></div>
	</div>
</div>
```

不推荐：

```
<div class="modulename">
	<div class="modulename-cover"></div>
	<div class="modulename-info">
    	<div class="modulename-info-user">
    		<div class="modulename-info-user-img">
    			<img src="" alt="">
    			<div class="modulename-info-user-img-tit"></div>
    			<div class="modulename-info-user-img-txt"></div>
    			...
    		</div>
    	</div>
    	<div class="modulename-info-list"></div>
	</div>
</div>
```

> 提示 命名词穷了怎么办？试下这个工具：[codelf](https://unbug.github.io/codelf/)

## 图片命名

- 图片名称必须小写，禁止使用特殊字符、中文
- 使用英文或拼音缩写，禁止特殊字符
- 名称间隔使用半角的连词线“-”符号
- 命名需要能体现图片的大概用途

常用示例：

```
 bg.jpg          //背景图片
 mod-bg.jpg      //模块背景
 sprites.png     //精灵图
 btn-start.png   //开始按钮
 ico-play.png    //修饰性图片
```

- 禁止文件名和实际图片内容不符。反面例子：图片名为'pa-qrcode'，图片内容却是头像。

## 参考命名顺序

图片命名建议以以下顺序命名：

**图片业务（可选） + 图片功能类别（必选）+ 图片模块名称（可选） + 图片精度（可选）**

- 图片业务：
  - main：主页
  - detail：详情页
  - pa：病人页
  - about：关于
  - …
- 图片功能类别：
  - mod：是否公共，可选
  - icon：模块类固化的图标
  - logo：LOGO 类
  - spr：单页面各种元素合并集合
  - btn：按钮
  - bg：可平铺或者大背景
  - …
- 图片模块名称：
  - goodslist：商品列表
  - goodsinfo：商品信息
  - userava tar：用户头像
  - …
- 图片精度：
  - 普清：@1x
  - Retina：@2x | @3x
  - …

### 模块命名 暂定不加 common 或 mod 前缀 但必须统一

全站公共模块：以 `mod- `开头

```
<div class="mod-yours"></div>
```

业务公共模块：以 `业务名-mod-` 开头

```
<div class="pa-mod-yours"></div>
```

### 常用命名推荐

注意：ad、banner、gg、guanggao 等有机会和广告挂勾的字眠不建议直接用来做 ClassName，因为有些浏览器插件（Chrome 的广告拦截插件等）会直接过滤这些类名，因此

```
<div class="ad"></div>
```

这种广告的英文或拼音类名不应该出现

另外，**敏感不和谐字眼**也不应该出现，如：

```
<div class="fuck"></div>
<div class="jer"></div>
<div class="sm"></div>
<div class="gcd"></div>
<div class="ass"></div>
<div class="KMT"></div>
...
```

| ClassName              | 含义                                     |
| ---------------------- | ---------------------------------------- |
| about                  | 关于                                     |
| account                | 账户                                     |
| arrow                  | 箭头图标                                 |
| article                | 文章                                     |
| aside                  | 边栏                                     |
| audio                  | 音频                                     |
| avatar                 | 头像                                     |
| bg,background          | 背景                                     |
| bar                    | 栏（工具类）                             |
| branding               | 品牌化                                   |
| crumb,breadcrumbs      | 面包屑                                   |
| btn,button             | 按钮                                     |
| caption                | 标题，说明                               |
| category               | 分类                                     |
| chart                  | 图表                                     |
| clearfix               | 清除浮动                                 |
| close                  | 关闭                                     |
| col,column             | 列                                       |
| comment                | 评论                                     |
| community              | 社区                                     |
| container              | 容器                                     |
| content                | 内容                                     |
| copyright              | 版权                                     |
| current                | 当前态，选中态                           |
| default                | 默认                                     |
| description            | 描述                                     |
| details                | 细节                                     |
| disabled               | 不可用                                   |
| entry                  | 文章，博文                               |
| error                  | 错误                                     |
| even                   | 偶数，常用于多行列表或表格中             |
| fail                   | 失败（提示）                             |
| feature                | 专题                                     |
| fewer                  | 收起                                     |
| field                  | 用于表单的输入区域                       |
| figure                 | 图                                       |
| filter                 | 筛选                                     |
| first                  | 第一个，常用于列表中                     |
| footer                 | 页脚                                     |
| forum                  | 论坛                                     |
| gallery                | 画廊                                     |
| group                  | 模块，清除浮动                           |
| header                 | 页头                                     |
| help                   | 帮助                                     |
| hide                   | 隐藏                                     |
| hightlight             | 高亮                                     |
| home                   | 主页                                     |
| icon                   | 图标                                     |
| info,information       | 信息                                     |
| last                   | 最后一个，常用于列表中                   |
| links                  | 链接                                     |
| login                  | 登录                                     |
| logout                 | 退出                                     |
| logo                   | 标志                                     |
| main                   | 主体                                     |
| menu                   | 菜单                                     |
| meta                   | 作者、更新时间等信息栏，一般位于标题之下 |
| module                 | 模块                                     |
| more                   | 更多（展开）                             |
| msg,message            | 消息                                     |
| nav,navigation         | 导航                                     |
| next                   | 下一页                                   |
| nub                    | 小块                                     |
| odd                    | 奇数，常用于多行列表或表格中             |
| off                    | 鼠标离开                                 |
| on                     | 鼠标移过                                 |
| output                 | 输出                                     |
| pagination             | 分页                                     |
| pop,popup              | 弹窗                                     |
| preview                | 预览                                     |
| previous               | 上一页                                   |
| primary                | 主要                                     |
| progress               | 进度条                                   |
| promotion              | 促销                                     |
| rcommd,recommendations | 推荐                                     |
| reg,register           | 注册                                     |
| save                   | 保存                                     |
| search                 | 搜索                                     |
| secondary              | 次要                                     |
| section                | 区块                                     |
| selected               | 已选                                     |
| share                  | 分享                                     |
| show                   | 显示                                     |
| sidebar                | 边栏，侧栏                               |
| slide                  | 幻灯片，图片切换                         |
| sort                   | 排序                                     |
| sub                    | 次级的，子级的                           |
| submit                 | 提交                                     |
| subscribe              | 订阅                                     |
| subtitle               | 副标题                                   |
| success                | 成功（提示）                             |
| summary                | 摘要                                     |
| tab                    | 标签页                                   |
| table                  | 表格                                     |
| txt,text               | 文本                                     |
| thumbnail              | 缩略图                                   |
| time                   | 时间                                     |
| tips                   | 提示                                     |
| title                  | 标题                                     |
| video                  | 视频                                     |
| wrap                   | 容器，包，一般用于最外层                 |
| wrapper                | 容器，包，一般用于最外层                 |
