---
title: MongoDB 基础教程
date: 2022-01-13
tags:
  - note
categories:
  - note
---

::: tip

MongoDB 基础教程以及进阶使用

:::

<!-- more -->

## MongoDB 安装教程

[MongoDB 官网](https://www.mongodb.com/try/download/community)

> 一般下载的为社区版 社区版为个人学习使用，免费。

![](/mongodb/home.png)

下载完之后 双击 msi 文件开始安装

> 下一步

![](/mongodb/step1.png)

> 勾选协议

![](/mongodb/step2.png)

> 选择安装方式

![](/mongodb/step3.png)

> 选择安装地址

![](/mongodb/step4.png)

> 选择数据库以及日志存放地址

![](/mongodb/step5.png)

> 选择是否安装图形可视化工具

![](/mongodb/step6.png)

## 配置环境变量

进入 MongoDB 文件夹的 bin 文件夹 并复制其路径

![](/mongodb/step7.png)

在系统 Path 中添加路径

![](/mongodb/step8.png)

> 配置完成后，重启电脑，环境变量才会生效。

> 打开 CMD 命令页面，直接输入 mongo 可进入客户端
> ![](/mongodb/step9.png)

## 什么是 MongoDB ?

MongoDB 是由 C++语言编写的，是一个基于分布式文件存储的开源数据库系统。

在高负载的情况下，添加更多的节点，可以保证服务器性能。

MongoDB 旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。

MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。

## MongoDB 概念

| SQL 术语/概念 | MongoDB 术语/概念 | 解释/说明                              |
| ------------- | ----------------- | -------------------------------------- |
| database      | database          | 数据库                                 |
| table         | collection        | 数据库表/集合                          |
| row           | document          | 数据记录行/文档                        |
| column        | field             | 数据字段/域                            |
| index         | index             | 索引                                   |
| table         | joins             | 表连接,MongoDB 不支持                  |
| primary key   | primary key       | 主键,MongoDB 自动将\_id 字段设置为主键 |

在向 mongodb 的同一个表中插入数据的时候，插入的数据字段类型可以不一样，即使是相同的字段数据类型也可以不一样。但是不建议这样做，应该提前考虑好数据库应有的字段，同事每一个字段应该使用同一种数据类型。

## MongoDB 后台管理 Shell

如果你需要进入 MongoDB 后台管理，你需要先打开 mongodb 装目录的下的 bin 目录，然后执行 mongo.exe 文件，MongoDB Shell 是 MongoDB 自带的交互式 Javascript shell,用来对 MongoDB 进行操作和管理的交互式环境。

当你进入 mongoDB 后台后，它默认会链接到 test 文档（数据库）：

## 数据库

- 一个 mongodb 中可以建立多个数据库。

- MongoDB 的默认数据库为"db"，该数据库存储在 data 目录中。

- MongoDB 的单个实例可以容纳多个独立的数据库，每一个都有自己的集合和权限，不同的数据库也放置在不同的文件中。

- **show dbs** 命令可以显示所有数据的列表。

```
 > show dbs
  admin   0.000GB
  config  0.000GB
  local   0.000GB
  test    0.000GB
```

执行 **db** 命令可以显示当前数据库对象或集合。

```
 > db
test
```

数据库也通过名字来标识。数据库名可以是满足以下条件的任意 UTF-8 字符串。

- 不能是空字符串（"")。
- 不得含有' '（空格)、.、$、/、\和\0 (空字符)。
- 应全部小写。
- 最多 64 字节。

有一些数据库名是保留的，可以直接访问这些有特殊作用的数据库。

- **admin**： 从权限的角度来看，这是"root"数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。
- **local**: 这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合
- **config**: 当 Mongo 用于分片设置时，config 数据库在内部使用，用于保存分片的相关信息。

## 文档(Document)

文档是一组键值(key-value)对(即 BSON)。MongoDB 的文档不需要设置相同的字段，并且相同的字段不需要相同的数据类型，这与关系型数据库有很大的区别，也是 MongoDB 非常突出的特点。

一个简单的文档例子如下：

```
{"site":"10.8.104.7", "name":"altq"}
```

下表列出了 RDBMS 与 MongoDB 对应的术语：

| RDBMS  | MongoDB                            |
| ------ | ---------------------------------- |
| 数据库 | 数据库                             |
| 表格   | 集合                               |
| 行     | 文档                               |
| 列     | 字段                               |
| 表联合 | 嵌入文档                           |
| 主键   | 主键 (MongoDB 提供了 key 为 \_id ) |

<table>
	<tr>
	    <th colspan="2">数据库服务和客户端</th> 
	</tr >
	<tr >
	    <td>Mysqld/Oracle</td>
	    <td>mongod</td>
	</tr>
	<tr>
	    <td>mysql/sqlplus</td>
	    <td>mongo</td>
	</tr>
</table>

需要注意的是：

1. 文档中的键/值对是有序的。
2. 文档中的值不仅可以是在双引号里面的字符串，还可以是其他几种数据类型（甚至可以是整个嵌入的文档)。
3. MongoDB 区分类型和大小写。
4. MongoDB 的文档不能有重复的键。 5.文档的键是字符串。除了少数例外情况，键可以使用任意 UTF-8 字符。
   文档键命名规范：

- 键不能含有\0 (空字符)。这个字符用来表示键的结尾。
- .和$有特别的意义，只有在特定环境下才能使用。
- 以下划线"\_"开头的键是保留的(不是严格要求的)。

## 集合

集合就是 MongoDB 文档组，类似于 RDBMS （关系数据库管理系统：Relational Database Management System)中的表格。

集合存在于数据库中，集合没有固定的结构，这意味着你在对集合可以插入不同格式和类型的数据，但通常情况下我们插入集合的数据都会有一定的关联性。

比如，我们可以将以下不同数据结构的文档插入到集合中：

```
{"site":"www.baidu.com"}
{"site":"www.google.com","name":"Google"}
{"site":"www.runoob.com","name":"菜鸟教程","num":5}
```

当第一个文档插入时，集合就会被创建。

## 合法的集合名

- 集合名不能是空字符串""。
- 集合名不能含有\0 字符（空字符)，这个字符表示集合名的结尾。
- 集合名不能以"system."开头，这是为系统集合保留的前缀。
- 用户创建的集合名字不能含有保留字符。有些驱动程序的确支持在集合名里面包含，这是因为某些系统生成的集合中包含该字符。除非你要访问这种系统创建的集合，否则千万不要在名字里出现$。

## 元数据

数据库的信息是存储在集合中。它们使用了系统的命名空间：

```
dbname.system.*
```

在 MongoDB 数据库中名字空间 `<dbname>.system.*` 是包含多种系统信息的特殊集合(Collection)，如下:

| 集合命名空间               | 描述                                        |
| -------------------------- | ------------------------------------------- |
| `dbname.system.namespaces` | 列出所有名字空间。                          |
| `dbname.system.indexes`    | 列出所有索引。                              |
| `dbname.system.profile`    | 包含数据库概要(`profile`)信息。             |
| `dbname.system.users`      | 列出所有可访问数据库的用户。                |
| `dbname.local.sources`     | `包含复制对端（slave）的服务器信息和状态。` |

对于修改系统集合中的对象有如下限制。

在`system.indexes`插入数据，可以创建索引。但除此之外该表信息是不可变的(特殊的 drop index 命令将自动更新相关信息)。

`system.users`是可修改的。 `system.profile`是可删除的。

## MongoDB 数据类型

下表为 MongoDB 中常用的几种数据类型。

| 数据类型           | 描述                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| String             | 字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。                              |
| Integer            | 整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64 位。                                       |
| Boolean            | 布尔值。用于存储布尔值（真/假）。                                                                          |
| Double             | 双精度浮点值。用于存储浮点值。                                                                             |
| Min/Max keys       | 将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。                                               |
| Array              | 用于将数组或列表或多个值存储为一个键。                                                                     |
| Timestamp          | 时间戳。记录文档修改或添加的具体时间。                                                                     |
| Object             | 用于内嵌文档。                                                                                             |
| Null               | 用于创建空值。                                                                                             |
| Symbol             | 符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。                     |
| Date               | 日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。 |
| Object ID          | 对象 ID。用于创建文档的 ID。                                                                               |
| Binary Data        | 二进制数据。用于存储二进制数据。                                                                           |
| Code               | 代码类型。用于在文档中存储 JavaScript 代码。                                                               |
| Regular expression | 正则表达式类型。用于存储正则表达式。                                                                       |

下面说明下几种重要的数据类型。

## ObjectId

ObjectId 类似唯一主键，可以很快的去生成和排序，包含 12 bytes，含义是：

- 前 4 个字节表示创建 unix 时间戳,格林尼治时间 UTC 时间，比北京时间晚了 8 个小时
- 接下来的 3 个字节是机器标识码
- 紧接的两个字节由进程 id 组成 PID
- 最后三个字节是随机数

![](/mongodb/objectid.jpeg)

MongoDB 中存储的文档必须有一个 \_id 键。这个键的值可以是任何类型的，默认是个 ObjectId 对象

由于 ObjectId 中保存了创建的时间戳，所以你不需要为你的文档保存时间戳字段，你可以通过 getTimestamp 函数来获取文档的创建时间:

```
> var newObject = ObjectId()
> newObject.getTimestamp()
ISODate("2017-11-25T07:21:10Z")
```

ObjectId 转为字符串

```
> newObject.str
5a1919e63df83ce79df8b38f
```

## 字符串

**BSON 字符串都是 UTF-8 编码。**

## 时间戳

BSON 有一个特殊的时间戳类型用于 MongoDB 内部使用，与普通的 日期 类型不相关。 时间戳值是一个 64 位的值。其中：

- 前 32 位是一个 time_t 值（与 Unix 新纪元相差的秒数）
- 后 32 位是在某秒中操作的一个递增的序数
  在单个 mongod 实例中，时间戳值通常是唯一的。

在复制集中， oplog 有一个 ts 字段。这个字段中的值使用 BSON 时间戳表示了操作时间。

> _BSON 时间戳类型主要用于 MongoDB 内部使用。在大多数情况下的应用开发中，你可以使用 BSON 日期类型。_

## 日期

表示当前距离 Unix 新纪元（1970 年 1 月 1 日）的毫秒数。日期类型是有符号的, 负数表示 1970 年之前的日期。

```
> var mydate1 = new Date()     //格林尼治时间
> mydate1
ISODate("2018-03-04T14:58:51.233Z")
> typeof mydate1
object
> var mydate2 = ISODate() //格林尼治时间
> mydate2
ISODate("2018-03-04T15:00:45.479Z")
> typeof mydate2
object
```

这样创建的时间是日期类型，可以使用 JS 中的 Date 类型的方法。

返回一个时间类型的字符串：

```
> var mydate1str = mydate1.toString()
> mydate1str
Sun Mar 04 2018 14:58:51 GMT+0000 (UTC)
> typeof mydate1str
string
```

或者

```
> Date()
Sun Mar 04 2018 15:02:59 GMT+0000 (UTC)
```

## 默认端口上的本地 MongoDB 实例

您可以在不使用任何命令行选项的情况下运行 MongoShell，以连接到本地主机上运行的 MongoDB 实例（默认端口为 27017）:

```
mongo
```

## 非默认端口上的本地 MongoDB 实例

要显式指定端口，请包括--port 命令行选项。例如，使用非默认端口 28015 连接到本地主机上运行的 MongoDB 实例:

```
mongo --port 28015
```

## 远程主机上的 MongoDB 实例

要明确指定主机名和/或端口，

- 可以指定连接字符串。例如，要连接到在远程主机上运行的 MongoDB 实例：

```
mongo "mongodb://mongodb0.example.com:28015"
```

- 可以使用命令行选项--host `<host>:<port>`。例如，要连接到在远程主机上运行的 MongoDB 实例：

```
mongo --host mongodb0.example.com:28015
```

- 可以使用--host `<host>`和 --port `<port>`命令行选项。例如，要连接到在远程主机上运行的 MongoDB 实例：

```
mongo --host mongodb0.example.com --port 28015
```

- 远程主机上默认端口的 MongoDB 实例

```
mongo 10.8.104.7
```

连接本地数据库服务器，端口是默认的。

```
mongodb://localhost
// 或者

mongo
```

使用用户名 fred，密码 foobar 登录 localhost 的 admin 数据库。

```
mongodb://fred:foobar@localhost
```

使用用户名 fred，密码 foobar 登录 localhost 的 baz 数据库。

```
mongodb://fred:foobar@localhost/baz
```

连接 replica pair, 服务器 1 为 example1.com 服务器 2 为 example2。

```
mongodb://example1.com:27017,example2.com:27017
```

连接 replica set 三台服务器 (端口 27017, 27018, 和 27019):

```
mongodb://localhost,localhost:27018,localhost:27019
```

连接 replica set 三台服务器, 写入操作应用在主服务器 并且分布查询到从服务器。

```
mongodb://host1,host2,host3/?slaveOk=true
```

直接连接第一个服务器，无论是 replica set 一部分或者主服务器或者从服务器。

```
mongodb://host1,host2,host3/?connect=direct;slaveOk=true
```

当你的连接服务器有优先级，还需要列出所有服务器，你可以使用上述连接方式。

安全模式连接到 localhost:

```
mongodb://localhost/?safe=true
```

以安全模式连接到 replica set，并且等待至少两个复制服务器成功写入，超时时间设置为 2 秒。

```
mongodb://host1,host2,host3/?safe=true;w=2;wtimeoutMS=2000
```

## MongoDB 后台管理 Shell

如果你需要进入 MongoDB 后台管理，你需要先打开 mongodb 装目录的下的 bin 目录，然后执行 mongo.exe 文件，MongoDB Shell 是 MongoDB 自带的交互式 Javascript shell,用来对 MongoDB 进行操作和管理的交互式环境。

当你进入 mongoDB 后台后，它默认会链接到 test 文档（数据库）：

```
> mongo
MongoDB shell version: 3.0.6
connecting to: test
……
```

由于它是一个 JavaScript shell，您可以运行一些简单的算术运算:

```
> 2 + 2
4

```

## 创建数据库

use DATABASE_NAME

如果没有数据库则会创建数据库

### 示例

如果想创建一个数据库名称 `<mydb>`, 那么 use DATABASE 语句如下：

```
 > use mydb
switched to db mydb
 > db
mydb
```

## 显示所有数据库

show dbs

```
 > show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
test    0.000GB
```

可以看到，我们刚创建的数据库 mydb 并不在数据库的列表中， 要显示它，我们需要向 mydb 数据库插入一些数据。

```
> db.mydb.insert({"name":"菜鸟教程"})
WriteResult({ "nInserted" : 1 })
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
mydb    0.000GB
```

## 显示当前数据库

show db

```
 > db
 mydb

 或者
 > show db  //4.0版本以下
 mydb
```

## 删除数据库

语法 MongoDB 删除数据库的语法格式如下：

```
> db.dropDatabase()
```

## 实例

以下实例我们删除了数据库 tempdb。

首先，查看所有数据库：

```
> show dbs
admin   0.000GB
config  0.000GB
tempdb  0.000GB
local   0.000GB
```

接下来我们切换到数据库 tempdb：

```
> use tempdb
switched to db tempdb
>
```

执行删除命令：

```
> db.dropDatabase()
{ "dropped" : "tempdb", "ok" : 1 }
```

最后，我们再通过 show dbs 命令数据库是否删除成功：

```
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
test    0.000GB
```

## 显示合集

show collections

```
 > show collections
 test1
```

## 创建集合

如果该集合当前不存在，则插入操作将创建该集合。

或者 使用 `db.createCollection(name, options)`方法

参数说明：

- name: 要创建的集合名称
- options: 可选参数, 指定有关内存大小及索引的选项

options 可以是如下参数：

| 字段        | 类型 | 描述                                                                                                                                                |
| ----------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| capped      | 布尔 | （可选）如果为 true，则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。当该值为 true 时，必须指定 size 参数。 |
| autoIndexId | 布尔 | 3.2 之后不再支持该参数。（可选）如为 true，自动在 \_id 字段创建索引。默认为 false。                                                                 |
| size        | 数值 | （可选）为固定集合指定一个最大值，即字节数。如果 capped 为 true，也需要指定该字段。                                                                 |
| max         | 数值 | （可选）指定固定集合中包含文档的最大数量。 在插入文档时，MongoDB 首先检查固定集合的 size 字段，然后检查 max 字段。                                  |

## 示例

在 test 数据库中创建 site 集合：

```
> use test
switched to db test
> db.createCollection("site")
{ "ok" : 1 }
```

如果要查看已有集合，可以使用 `show collections` 或 `show tables` 命令：

```
> show collections
site
> show tables
site
```

下面是带有几个关键参数的 `createCollection()` 的用法：

创建固定集合 mycol，整个集合空间大小 6142800 B, 文档最大个数为 10000 个。

```
> db.createCollection("mycol", { capped : true, autoIndexId : true, size :
   6142800, max : 10000 } )
{ "ok" : 1 }
```

在 MongoDB 中，你不需要创建集合。当你插入一些文档时，MongoDB 会自动创建集合。

```
> db.mycol2.insert({"name" : "Tony"})
WriteResult({ "nInserted" : 1 })
> show collections
mycol2
site
```

## 选中集合

一般是使用 db.collection 代表选中了集合，但是，如果 mongoshell 不接受集合的名称，您可以使用替代`db.getCollection()`语法。例如，如果集合名称包含空格或连字符、以数字开头或与内置函数冲突：

```
db.getCollection("3 test").find()
db.getCollection("3-test").find()
db.getCollection("stats").find()
```

## 删除集合

集合删除语法格式如下：

```
db.collection.drop()
```

以下实例删除了 tempdb 数据库中的集合 site：

```
> use tempdb
switched to db tempdb
> db.createCollection("site")     # 先创建集合，类似数据库中的表
> show collections             # show collections 命令会更加准确点
site
> db.site.drop()
true
> show collections

```

### `_id`字段

在 MongoDB 中，存储在集合中的每个文档都需要一个唯一的 [`_id`](https://docs.mongodb.com/v4.4/reference/glossary/#std-term-_id) 字段作为[主键](https://docs.mongodb.com/v4.4/reference/glossary/#std-term-primary-key)。如果插入的文档省略了该`_id` 字段，MongoDB 驱动程序会自动为该字段生成一个 [ObjectId](https://docs.mongodb.com/v4.4/reference/bson-types/#std-label-objectid)`_id`。

这也适用于通过 [upsert: true](https://docs.mongodb.com/v4.4/reference/method/db.collection.update/#std-label-upsert-parameter) 更新操作插入的文档。

## 插入方法

MongoDB 提供了以下方法将文档插入到集合中：

| 方法                         | 作用                                                                                                            |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `db.collection.insertOne()`  | 将单个文档插入到集合中。                                                                                        |
| `db.collection.insertMany()` | 将多个 文档插入到一个集合中。                                                                                   |
| `db.collection.insert()`     | 将单个文档或多个文档插入到集合中。                                                                              |
| `db.collection.save()`       | 将单个文档或多个文档插入到集合中。如果 \_id 主键存在则更新数据，如果不存在就插入数据。(从 MongoDB 4.2 开始弃用) |

```
db.collection.insertOne(
   <document>,
   {
      writeConcern: <document>
   }
)

db.collection.insertMany(
   [ <document 1> , <document 2>, ... ],
   {
      writeConcern: <document>,
      ordered: <boolean>
   }
)
```

参数说明：

- document：要写入的文档。
- writeConcern：写入策略，默认为 1，即要求确认写操作，0 是不要求。
- ordered：指定是否按顺序写入，默认 true，按顺序写入。

### 示例 插入单个文档

```
> db.inventory.insertOne(
   { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)
{ "_id" : ObjectId("61272e30adc0bcb6d3c1d9b3"), "item" : "canvas", "qty" : 100, "tags" : [ "cotton" ], "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" } }
```

要检索您刚刚插入的文档，请[查询集合](https://docs.mongodb.com/v4.4/core/document/#std-label-document-query-filter)：

```
> db.inventory.find( { item: "canvas" } )
{ "_id" : ObjectId("61272e30adc0bcb6d3c1d9b3"), "item" : "canvas", "qty" : 100, "tags" : [ "cotton" ], "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" } }
```

### 示例 插入多个文档

```
> db.inventory.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
   { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
   { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("61272f16adc0bcb6d3c1d9b4"),
                ObjectId("61272f16adc0bcb6d3c1d9b5"),
                ObjectId("61272f16adc0bcb6d3c1d9b6")
        ]
}
```

要检索您刚刚插入的文档，请[查询集合](https://docs.mongodb.com/v4.4/core/document/#std-label-document-query-filter)：

```
> db.inventory.find( {} )
{ "_id" : ObjectId("61272e30adc0bcb6d3c1d9b3"), "item" : "canvas", "qty" : 100, "tags" : [ "cotton" ], "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" } }
{ "_id" : ObjectId("61272f16adc0bcb6d3c1d9b4"), "item" : "journal", "qty" : 25, "tags" : [ "blank", "red" ], "size" : { "h" : 14, "w" : 21, "uom" : "cm" } }
{ "_id" : ObjectId("61272f16adc0bcb6d3c1d9b5"), "item" : "mat", "qty" : 85, "tags" : [ "gray" ], "size" : { "h" : 27.9, "w" : 35.5, "uom" : "cm" } }
{ "_id" : ObjectId("61272f16adc0bcb6d3c1d9b6"), "item" : "mousepad", "qty" : 25, "tags" : [ "gel", "blue" ], "size" : { "h" : 19, "w" : 22.85, "uom" : "cm" } }
```

### 使用 insert

```
> db.inventory.insert([
... ...   { item: "journal2", qty: 26, tags: ["pink", "red"], size: { h: 20, w: 21, uom: "cm" } },
... ...   { item: "mat2", qty: 84, tags: ["gray"], size: { h: 27, w: 32, uom: "cm" } },
... ... ])
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 2,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
> db.inventory.find( {} )
{ "_id" : ObjectId("61272e30adc0bcb6d3c1d9b3"), "item" : "canvas", "qty" : 100, "tags" : [ "cotton" ], "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" } }
{ "_id" : ObjectId("61272f16adc0bcb6d3c1d9b4"), "item" : "journal", "qty" : 25, "tags" : [ "blank", "red" ], "size" : { "h" : 14, "w" : 21, "uom" : "cm" } }
{ "_id" : ObjectId("61272f16adc0bcb6d3c1d9b5"), "item" : "mat", "qty" : 85, "tags" : [ "gray" ], "size" : { "h" : 27.9, "w" : 35.5, "uom" : "cm" } }
{ "_id" : ObjectId("61272f16adc0bcb6d3c1d9b6"), "item" : "mousepad", "qty" : 25, "tags" : [ "gel", "blue" ], "size" : { "h" : 19, "w" : 22.85, "uom" : "cm" } }
{ "_id" : ObjectId("612732ecadc0bcb6d3c1d9b7"), "item" : "journal1", "qty" : 26, "tags" : [ "pink", "red" ], "size" : { "h" : 20, "w" : 21, "uom" : "cm" } }
{ "_id" : ObjectId("612732ecadc0bcb6d3c1d9b8"), "item" : "mat1", "qty" : 84, "tags" : [ "gray" ], "size" : { "h" : 27, "w" : 32, "uom" : "cm" } }
{ "_id" : ObjectId("61273322adc0bcb6d3c1d9b9"), "item" : "journal2", "qty" : 26, "tags" : [ "pink", "red" ], "size" : { "h" : 20, "w" : 21, "uom" : "cm" } }
{ "_id" : ObjectId("61273322adc0bcb6d3c1d9ba"), "item" : "mat2", "qty" : 84, "tags" : [ "gray" ], "size" : { "h" : 27, "w" : 32, "uom" : "cm" } }
```

## 插入数据变量

```
> document=({title: 'MongoDB 教程'});
```

执行后显示结果如下：

```
> document=({title: 'MongoDB 教程'});
{ "title" : "MongoDB 教程" }
```

执行插入操作：

```
> db.col.insert(document)
WriteResult({ "nInserted" : 1 })
> db.col.find()
{ "_id" : ObjectId("612756f8adc0bcb6d3c1d9c8"), "title" : "MongoDB 教程" }
```

## 原子性

MongoDB 中的所有写操作在单个文档的级别上都是原子的。有关 MongoDB 和原子性的更多信息，请参阅 [原子性和事务](https://docs.mongodb.com/v4.4/core/write-operations-atomicity/)

## 查询文档

语法

MongoDB 查询数据的语法格式如下：

```
>db.COLLECTION_NAME.find(query, projection)
```

- query ：可选，使用查询操作符指定查询条件
- projection ：可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）。

find() 方法以非结构化的方式来显示所有文档。

如果你需要以易读的方式来读取数据，可以使用 pretty() 方法，语法格式如下：

```
>db.myCollection.find().pretty()
```

pretty() 方法以格式化的方式来显示所有文档。

除了 `find()` 方法之外，还有一个 `findOne()` 方法，它只返回一个文档。

## MongoDB 与 RDBMS Where 语句比较

如果你熟悉常规的 SQL 数据，通过下表可以更好的理解 MongoDB 的条件语句查询：

| 操作       | 格式                       | 范例                                                          | RDBMS 中的类似语句 |
| ---------- | -------------------------- | ------------------------------------------------------------- | ------------------ |
| 等于       | {`<key>`:`<value>`}        | db.col.find({"by":"菜鸟教程"}).pretty() where by = '菜鸟教程' |
| 小于       | {`<key>`:{$lt:`<value>`}}  | db.col.find({"likes":{$lt:50}}).pretty()                      | where likes < 50   |
| 小于或等于 | {`<key>`:{$lte:`<value>`}} | db.col.find({"likes":{$lte:50}}).pretty()                     | where likes <= 50  |
| 大于       | {`<key>`:{$gt:`<value>`}}  | db.col.find({"likes":{$gt:50}}).pretty()                      | where likes > 50   |
| 大于或等于 | {`<key>`:{$gte:`<value>`}} | db.col.find({"likes":{$gte:50}}).pretty()                     | where likes >= 50  |
| 不等于     | {`<key>`:{$ne:`<value>`}}  | db.col.find({"likes":{$ne:50}}).pretty()                      | where likes != 50  |

### MongoDB AND 条件

MongoDB 的 find() 方法可以传入多个键(key)，每个键(key)以逗号隔开，即常规 SQL 的 AND 条件。

语法格式如下：

```
>db.col.find({key1:value1, key2:value2}).pretty()
```

## 实例

以下实例通过 by 和 title 键来查询 altq 中 MongoDB 教程 的数据

```
> db.col.find({"by":"altq", "title":"MongoDB 教程"}).pretty()
{
        "_id" : ObjectId("612f493a220ce5ce5c2b4cce"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "altq",
        "url" : "http://10.8.103.47:9000",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
>
```

以上实例中类似于 WHERE 语句：`WHERE by='菜鸟教程' AND title='MongoDB 教程'`

## MongoDB OR 条件

MongoDB OR 条件语句使用了关键字 `$or`,语法格式如下：

```
>db.col.find(
   {
      $or: [
         {key1: value1}, {key2:value2}
      ]
   }
).pretty()
```

## 实例

以下实例中，我们演示了查询键 by 值为 altq 或键 title 值为 MongoDB 教程 的文档。

```
> db.col.find({$or:[{"by":"altq"},{"title": "MongoDB 教程"}]}).pretty()
{
        "_id" : ObjectId("612f493a220ce5ce5c2b4cce"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "altq",
        "url" : "http://10.8.103.47:9000",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
{
        "_id" : ObjectId("612f493d220ce5ce5c2b4ccf"),
        "title" : "MongoDB",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "altq",
        "url" : "http://10.8.103.47:9000",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
>
```

## AND 和 OR 联合使用

以下实例演示了 AND 和 OR 联合使用，类似常规 SQL 语句为： `'where likes>50 AND (by = 'altq' OR title = 'MongoDB 教程')'`

```
> db.col.find({"likes": {$gt:50}, $or: [{"by": "altq"},{"title": "MongoDB 教程"}]}).pretty()
{
        "_id" : ObjectId("612f493a220ce5ce5c2b4cce"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "altq",
        "url" : "http://10.8.103.47:9000",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
{
        "_id" : ObjectId("612f493d220ce5ce5c2b4ccf"),
        "title" : "MongoDB",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "altq",
        "url" : "http://10.8.103.47:9000",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
>
```

## 查询嵌套/嵌入文档

示例:
有以下数据：

```
> db.col.find().pretty()
{
        "_id" : ObjectId("613066ed61e58538d1d25a86"),
        "item" : "notebook",
        "qty" : 50,
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "umo" : "in"
        },
        "status" : "A"
}
{
        "_id" : ObjectId("613066ff61e58538d1d25a87"),
        "item" : "paper",
        "qty" : 100,
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "umo" : "cm"
        },
        "status" : "D"
}
```

## 匹配嵌入/嵌套文档

选择字段中 uom 嵌套的 size 字段等于 的所有文档"in"：
整个嵌入文档的相等匹配需要 指定文档的精确匹配`<value>`，包括字段顺序

例如，以下查询{w:8.5,h:11,umo:"in" }不匹配 inventory 集合中的任何文档 ：``：

```
> db.col.find({size:{w:8.5,h:11,umo:"in"}})
           // 查询为空 因为顺序不对
```

以下查询选择字段 size 等于 document 的所有 文档`{h:8.5,w:11,umo:"in"}`：

```
> db.col.find({size:{h:8.5,w:11,umo:"in"}}).pretty()
{
        "_id" : ObjectId("613066ed61e58538d1d25a86"),
        "item" : "notebook",
        "qty" : 50,
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "umo" : "in"
        },
        "status" : "A"
}
>
```

## 在嵌套字段上指定相等匹配：

```
> db.col.find( { "size.umo": "in"} ).pretty()
{
        "_id" : ObjectId("613066ed61e58538d1d25a86"),
        "item" : "notebook",
        "qty" : 50,
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "umo" : "in"
        },
        "status" : "A"
}
>

```

## 查询一个元素的数组

插入数据

```
db.inventory.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
   { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
   { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
   { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
   { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] }
]);
```

## 匹配一个数组

要在数组上指定相等条件，请使用查询文档{`<field>`：`<value>`}，其中`<value>`是要匹配的精确数组，包括元素的顺序。

以下示例查询所有文档，其中字段 tags 值是正好包含两个元素的数组，"red"并且"blank", 按指定的顺序：

```
> db.inventory.find( { tags: ["red", "blank"] } ).pretty()
{
        "_id" : ObjectId("61306adb61e58538d1d25a89"),
        "item" : "notebook",
        "qty" : 50,
        "tags" : [
                "red",
                "blank"
        ],
        "dim_cm" : [
                14,
                21
        ]
}
>
```

相反，如果希望查找同时包含元素“red”和“blank”的数组，而不考虑数组中的顺序或其他元素，请使用$all 运算符：

```
> db.inventory.find( { tags: { $all: ["red", "blank"] } } ).pretty()
{
        "_id" : ObjectId("61306adb61e58538d1d25a88"),
        "item" : "journal",
        "qty" : 25,
        "tags" : [
                "blank",
                "red"
        ],
        "dim_cm" : [
                14,
                21
        ]
}
{
        "_id" : ObjectId("61306adb61e58538d1d25a89"),
        "item" : "notebook",
        "qty" : 50,
        "tags" : [
                "red",
                "blank"
        ],
        "dim_cm" : [
                14,
                21
        ]
}
{
        "_id" : ObjectId("61306adb61e58538d1d25a8a"),
        "item" : "paper",
        "qty" : 100,
        "tags" : [
                "red",
                "blank",
                "plain"
        ],
        "dim_cm" : [
                14,
                21
        ]
}
{
        "_id" : ObjectId("61306adb61e58538d1d25a8b"),
        "item" : "planner",
        "qty" : 75,
        "tags" : [
                "blank",
                "red"
        ],
        "dim_cm" : [
                22.85,
                30
        ]
}
>
```

## 查询数组中的元素

要查询数组字段是否包含至少一个具有指定值的元素，请使用过滤器{`<field>`：`<value>`}，其中`<value>`是元素值。

以下示例查询所有文档，其中 tags 是一个包含字符串"red"作为其元素之一的数组：

```
> db.inventory.find( { tags: "red" } ).pretty()
{
        "_id" : ObjectId("61306adb61e58538d1d25a88"),
        "item" : "journal",
        "qty" : 25,
        "tags" : [
                "blank",
                "red"
        ],
        "dim_cm" : [
                14,
                21
        ]
}
{
        "_id" : ObjectId("61306adb61e58538d1d25a89"),
        "item" : "notebook",
        "qty" : 50,
        "tags" : [
                "red",
                "blank"
        ],
        "dim_cm" : [
                14,
                21
        ]
}
{
        "_id" : ObjectId("61306adb61e58538d1d25a8a"),
        "item" : "paper",
        "qty" : 100,
        "tags" : [
                "red",
                "blank",
                "plain"
        ],
        "dim_cm" : [
                14,
                21
        ]
}
{
        "_id" : ObjectId("61306adb61e58538d1d25a8b"),
        "item" : "planner",
        "qty" : 75,
        "tags" : [
                "blank",
                "red"
        ],
        "dim_cm" : [
                22.85,
                30
        ]
}
>
```

要对数组字段中的元素指定条件，请在 查询过滤器文档中使用查询运算符：

```
{ <array field>: { <operator1>: <value1>, ... } }
```

例如，以下操作查询数组 dim_cm 中至少包含一个值大于 的 所有文档 25。

```
> db.inventory.find( { dim_cm: { $gt: 25 } } ).pretty()
{
        "_id" : ObjectId("61306adb61e58538d1d25a8b"),
        "item" : "planner",
        "qty" : 75,
        "tags" : [
                "blank",
                "red"
        ],
        "dim_cm" : [
                22.85,
                30
        ]
}
>
```

## 为数组元素指定多个条件

在数组元素上指定复合条件时，可以指定查询，以便单个数组元素满足这些条件，或者数组元素的任意组合满足这些条件。

## 在数组元素上查询具有复合筛选条件的数组

下面的示例查询文档，其中 dim_cm 数组包含在某种组合中满足查询条件的元素；e、 例如，一个元素可以满足大于 15 的条件，另一个元素可以满足小于 20 的条件，或者一个元素可以同时满足这两个条件：

```
> db.inventory.find( { dim_cm: { $gt: 15, $lt: 20 } } ).pretty()
{
        "_id" : ObjectId("61306adb61e58538d1d25a88"),
        "item" : "journal",
        "qty" : 25,
        "tags" : [
                "blank",
                "red"
        ],
        "dim_cm" : [
                14,
                21
        ]
}
{
        "_id" : ObjectId("61306adb61e58538d1d25a89"),
        "item" : "notebook",
        "qty" : 50,
        "tags" : [
                "red",
                "blank"
        ],
        "dim_cm" : [
                14,
                21
        ]
}
{
        "_id" : ObjectId("61306adb61e58538d1d25a8a"),
        "item" : "paper",
        "qty" : 100,
        "tags" : [
                "red",
                "blank",
                "plain"
        ],
        "dim_cm" : [
                14,
                21
        ]
}
{
        "_id" : ObjectId("61306adb61e58538d1d25a8c"),
        "item" : "postcard",
        "qty" : 45,
        "tags" : [
                "blue"
        ],
        "dim_cm" : [
                10,
                15.25
        ]
}
>
```

## 按数组索引位置查询元素

使用点表示法，可以在数组的特定索引或位置为元素指定查询条件。该数组使用基于零的索引。

> 使用点表示法查询时，字段和嵌套字段必须位于引号内。

以下示例查询数组 dim_cm 中第二个元素大于 25 的所有文档：

```
> db.inventory.find( { "dim_cm.1": { $gt: 25 } } ).pretty()
{
        "_id" : ObjectId("61306adb61e58538d1d25a8b"),
        "item" : "planner",
        "qty" : 75,
        "tags" : [
                "blank",
                "red"
        ],
        "dim_cm" : [
                22.85,
                30
        ]
}
>
```

## 按数组长度查询数组

使用`$size`运算符按元素数查询数组。例如，下面选择数组标记有 3 个元素的文档。

```
> db.inventory.find( { "tags": { $size: 3 } } ).pretty()
{
        "_id" : ObjectId("61306adb61e58538d1d25a8a"),
        "item" : "paper",
        "qty" : 100,
        "tags" : [
                "red",
                "blank",
                "plain"
        ],
        "dim_cm" : [
                14,
                21
        ]
}
>
```

## 查询嵌入文档的数组

插入数据

```
db.inventory.insertMany( [
   { item: "journal", instock: [ { warehouse: "A", qty: 5 }, { warehouse: "C", qty: 15 } ] },
   { item: "notebook", instock: [ { warehouse: "C", qty: 5 } ] },
   { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 15 } ] },
   { item: "planner", instock: [ { warehouse: "A", qty: 40 }, { warehouse: "B", qty: 5 } ] },
   { item: "postcard", instock: [ { warehouse: "B", qty: 15 }, { warehouse: "C", qty: 35 } ] }
]);
```

整个嵌入/嵌套文档的相等匹配要求与指定文档（包括字段顺序）完全匹配。例如，以下查询与库存集合中的任何文档都不匹配：

## 查询嵌套在数组中的文档

以下示例选择 instock 数组中的元素与指定文档匹配的所有文档：

```
> db.inventory.find( { "instock": { warehouse: "A", qty: 5 } } ).pretty()
{
        "_id" : ObjectId("61306dee61e58538d1d25a8d"),
        "item" : "journal",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 5
                },
                {
                        "warehouse" : "C",
                        "qty" : 15
                }
        ]
}
>
```

整个嵌入/嵌套文档的相等匹配要求与指定文档（包括字段顺序）完全匹配。例如，以下查询与库存集合中的任何文档都不匹配：

```
> db.inventory.find( { "instock": { qty: 5, warehouse: "A" } } )
>
```

## 在文档数组中的字段上指定查询条件

如果不知道嵌套在数组中的文档的索引位置，请将数组字段的名称与点（.）和嵌套文档中的字段名称连接起来。

以下示例选择 instock 数组中至少有一个嵌入文档的所有文档，其中包含值小于或等于 20 的字段 qty：

```
> db.inventory.find( { 'instock.qty': { $lte: 20 } } ).pretty()
{
        "_id" : ObjectId("61306dee61e58538d1d25a8d"),
        "item" : "journal",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 5
                },
                {
                        "warehouse" : "C",
                        "qty" : 15
                }
        ]
}
{
        "_id" : ObjectId("61306dee61e58538d1d25a8e"),
        "item" : "notebook",
        "instock" : [
                {
                        "warehouse" : "C",
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("61306dee61e58538d1d25a8f"),
        "item" : "paper",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 60
                },
                {
                        "warehouse" : "B",
                        "qty" : 15
                }
        ]
}
{
        "_id" : ObjectId("61306dee61e58538d1d25a90"),
        "item" : "planner",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 40
                },
                {
                        "warehouse" : "B",
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("61306dee61e58538d1d25a91"),
        "item" : "postcard",
        "instock" : [
                {
                        "warehouse" : "B",
                        "qty" : 15
                },
                {
                        "warehouse" : "C",
                        "qty" : 35
                }
        ]
}
>
```

## 使用数组索引查询嵌入文档中的字段

使用点表示法，可以为文档中特定索引或数组位置的字段指定查询条件。该数组使用基于零的索引。

> 使用点表示法进行查询时，字段和索引必须位于引号内。

以下示例选择 instock 数组的第一个元素为包含字段 qty（其值小于或等于 20）的文档的所有文档：

```
> db.inventory.find( { 'instock.0.qty': { $lte: 20 } } ).pretty()
{
        "_id" : ObjectId("61306dee61e58538d1d25a8d"),
        "item" : "journal",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 5
                },
                {
                        "warehouse" : "C",
                        "qty" : 15
                }
        ]
}
{
        "_id" : ObjectId("61306dee61e58538d1d25a8e"),
        "item" : "notebook",
        "instock" : [
                {
                        "warehouse" : "C",
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("61306dee61e58538d1d25a91"),
        "item" : "postcard",
        "instock" : [
                {
                        "warehouse" : "B",
                        "qty" : 15
                },
                {
                        "warehouse" : "C",
                        "qty" : 35
                }
        ]
}
>
```

## 为文档数组指定多个条件

在对嵌套在文档数组中的多个字段指定条件时，可以指定查询，以便单个文档满足这些条件，或者数组中的任何文档组合（包括单个文档）满足这些条件。

## 单个嵌套文档满足嵌套字段的多个查询条件

使用`$elemMatch`运算符在嵌入文档数组上指定多个条件，以便至少一个嵌入文档满足所有指定条件。

以下示例查询 instock 数组中至少有一个包含字段数量等于 5 和字段仓库数量等于 A 的嵌入文档的文档：

```
> db.inventory.find( { "instock": { $elemMatch: { qty: 5, warehouse: "A" } } } ).pretty()
{
        "_id" : ObjectId("61306dee61e58538d1d25a8d"),
        "item" : "journal",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 5
                },
                {
                        "warehouse" : "C",
                        "qty" : 15
                }
        ]
}
>
```

以下示例查询 instock 数组中至少有一个嵌入文档包含大于 10 且小于或等于 20 的字段数量的文档：

```
> db.inventory.find( { "instock": { $elemMatch: { qty: { $gt: 10, $lte: 20 } } } } ).pretty()
{
        "_id" : ObjectId("61306dee61e58538d1d25a8d"),
        "item" : "journal",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 5
                },
                {
                        "warehouse" : "C",
                        "qty" : 15
                }
        ]
}
{
        "_id" : ObjectId("61306dee61e58538d1d25a8f"),
        "item" : "paper",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 60
                },
                {
                        "warehouse" : "B",
                        "qty" : 15
                }
        ]
}
{
        "_id" : ObjectId("61306dee61e58538d1d25a91"),
        "item" : "postcard",
        "instock" : [
                {
                        "warehouse" : "B",
                        "qty" : 15
                },
                {
                        "warehouse" : "C",
                        "qty" : 35
                }
        ]
}
>
```

## 元素的组合满足标准

如果数组字段上的复合查询条件不使用`$elemMatch` 运算符，则查询将选择其数组包含满足条件的任何元素组合的文档。

例如，以下查询匹配 instock 数组中嵌套的任何文档的数量字段大于 10 且数组中的任何文档（但不一定是同一嵌入文档）的数量字段小于或等于 20 的文档：

```
> db.inventory.find( { "instock.qty": { $gt: 10,  $lte: 20 } } ).pretty()
{
        "_id" : ObjectId("61306dee61e58538d1d25a8d"),
        "item" : "journal",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 5
                },
                {
                        "warehouse" : "C",
                        "qty" : 15
                }
        ]
}
{
        "_id" : ObjectId("61306dee61e58538d1d25a8f"),
        "item" : "paper",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 60
                },
                {
                        "warehouse" : "B",
                        "qty" : 15
                }
        ]
}
{
        "_id" : ObjectId("61306dee61e58538d1d25a90"),
        "item" : "planner",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 40
                },
                {
                        "warehouse" : "B",
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("61306dee61e58538d1d25a91"),
        "item" : "postcard",
        "instock" : [
                {
                        "warehouse" : "B",
                        "qty" : 15
                },
                {
                        "warehouse" : "C",
                        "qty" : 35
                }
        ]
}
>
```

以下示例查询 instock 数组中 qty 数量等于 5 并且字段 warehouse 为 A 的嵌入文档（但不一定是同一个嵌入文档）的文档

```
> db.inventory.find( { "instock.qty": 5, "instock.warehouse": "A" } ).pretty()
{
        "_id" : ObjectId("61306dee61e58538d1d25a8d"),
        "item" : "journal",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 5
                },
                {
                        "warehouse" : "C",
                        "qty" : 15
                }
        ]
}
{
        "_id" : ObjectId("61306dee61e58538d1d25a90"),
        "item" : "planner",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 40
                },
                {
                        "warehouse" : "B",
                        "qty" : 5
                }
        ]
}
>
```

## 从查询返回的项目字段

默认情况下，MongoDB 中的查询返回匹配文档中的所有字段。要限制 MongoDB 发送到应用程序的数据量，您可以包含一个投影文档来指定或限制要返回的字段。

插入数据：

```
db.inventory.insertMany( [
  { item: "journal", status: "A", size: { h: 14, w: 21, uom: "cm" }, instock: [ { warehouse: "A", qty: 5 } ] },
  { item: "notebook", status: "A",  size: { h: 8.5, w: 11, uom: "in" }, instock: [ { warehouse: "C", qty: 5 } ] },
  { item: "paper", status: "D", size: { h: 8.5, w: 11, uom: "in" }, instock: [ { warehouse: "A", qty: 60 } ] },
  { item: "planner", status: "D", size: { h: 22.85, w: 30, uom: "cm" }, instock: [ { warehouse: "A", qty: 40 } ] },
  { item: "postcard", status: "A", size: { h: 10, w: 15.25, uom: "cm" }, instock: [ { warehouse: "B", qty: 15 }, { warehouse: "C", qty: 35 } ] }
]);
```

## 返回匹配文档中的所有字段

如果未指定投影文档，db.collection.find（）方法将返回匹配文档中的所有字段。

```
> db.inventory.find( { status: "A" } ).pretty()
{
        "_id" : ObjectId("6130721a61e58538d1d25a92"),
        "item" : "journal",
        "status" : "A",
        "size" : {
                "h" : 14,
                "w" : 21,
                "uom" : "cm"
        },
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a93"),
        "item" : "notebook",
        "status" : "A",
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "uom" : "in"
        },
        "instock" : [
                {
                        "warehouse" : "C",
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a96"),
        "item" : "postcard",
        "status" : "A",
        "size" : {
                "h" : 10,
                "w" : 15.25,
                "uom" : "cm"
        },
        "instock" : [
                {
                        "warehouse" : "B",
                        "qty" : 15
                },
                {
                        "warehouse" : "C",
                        "qty" : 35
                }
        ]
}
>
```

该操作对应于以下 SQL 语句：

```
SELECT * from inventory WHERE status = "A"

```

以下示例返回库存集合中状态为“A”的所有文档中的所有字段：

## 仅返回指定字段和\_id 字段

通过在投影文档中将`<field>`设置为 1，投影可以显式包括多个字段。以下操作返回与查询匹配的所有文档。在结果集中，匹配文档中仅返回项目、状态以及默认情况下的\_id 字段。

```
> db.inventory.find( { status: "A" }, { item: 1, status: 1 } ).pretty()
{
        "_id" : ObjectId("6130721a61e58538d1d25a92"),
        "item" : "journal",
        "status" : "A"
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a93"),
        "item" : "notebook",
        "status" : "A"
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a96"),
        "item" : "postcard",
        "status" : "A"
}
>
```

该操作对应于以下 SQL 语句：

```
SELECT _id, item, status from inventory WHERE status = "A"

```

## 隐藏 id 字段

通过在投影中将\_id 字段设置为 0，可以从结果中删除该字段，如下例所示：

```
> db.inventory.find( { status: "A" }, { item: 1, status: 1, _id: 0 } ).pretty()
{ "item" : "journal", "status" : "A" }
{ "item" : "notebook", "status" : "A" }
{ "item" : "postcard", "status" : "A" }
>
```

该操作对应于以下 SQL 语句：

```
ELECT item, status from inventory WHERE status = "A"

```

> 除了\_id 字段之外，您不能在投影文档中组合包含和排除语句。

## 返回除排除字段外的所有字段

您可以使用投影排除特定字段，而不是在匹配文档中列出要返回的字段。以下示例返回匹配文档中除 status 和 instock 字段外的所有字段：

```
> db.inventory.find( { status: "A" }, { status: 0, instock: 0 } ).pretty()
{
        "_id" : ObjectId("6130721a61e58538d1d25a92"),
        "item" : "journal",
        "size" : {
                "h" : 14,
                "w" : 21,
                "uom" : "cm"
        }
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a93"),
        "item" : "notebook",
        "size" : {
                "h" : 8.5,
                "w" : 11,
                "uom" : "in"
        }
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a96"),
        "item" : "postcard",
        "size" : {
                "h" : 10,
                "w" : 15.25,
                "uom" : "cm"
        }
}
>
```

## 返回嵌入文档中的特定字段

可以在嵌入文档中返回特定字段。使用点表示法引用嵌入字段，并在投影文档中设置为 1。

以下示例返回：

- \_id 字段（默认返回）
- item 字段
- status 字段
- size.umo 字段。

umo 字段仍嵌入在 size 文档中。

```
> db.inventory.find(
    { status: "A" },
    { item: 1, status: 1, "size.uom": 1 }
 ).pretty()
{
        "_id" : ObjectId("6130721a61e58538d1d25a92"),
        "item" : "journal",
        "status" : "A",
        "size" : {
                "uom" : "cm"
        }
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a93"),
        "item" : "notebook",
        "status" : "A",
        "size" : {
                "uom" : "in"
        }
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a96"),
        "item" : "postcard",
        "status" : "A",
        "size" : {
                "uom" : "cm"
        }
}
>
```

从 MongoDB 4.4 开始，您还可以使用嵌套表单指定嵌入式字段，例如:

```
> db.inventory.find(
     { status: "A" },
     { item: 1, status: 1, size: { uom: 1 } }
  ).pretty()
{
        "_id" : ObjectId("6130721a61e58538d1d25a92"),
        "item" : "journal",
        "status" : "A",
        "size" : {
                "uom" : "cm"
        }
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a93"),
        "item" : "notebook",
        "status" : "A",
        "size" : {
                "uom" : "in"
        }
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a96"),
        "item" : "postcard",
        "status" : "A",
        "size" : {
                "uom" : "cm"
        }
}
>
```

## 抑制嵌入文档中的特定字段

可以抑制嵌入文档中的特定字段。使用点表示法引用投影文档中的嵌入字段，并设置为 0。

以下示例指定一个投影，以排除尺寸文档中的计量单位字段。所有其他字段将在匹配文档中返回：

```
> db.inventory.find(
...    { status: "A" },
...    { "size.uom": 0 }
... ).pretty()
{
        "_id" : ObjectId("6130721a61e58538d1d25a92"),
        "item" : "journal",
        "status" : "A",
        "size" : {
                "h" : 14,
                "w" : 21
        },
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a93"),
        "item" : "notebook",
        "status" : "A",
        "size" : {
                "h" : 8.5,
                "w" : 11
        },
        "instock" : [
                {
                        "warehouse" : "C",
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a96"),
        "item" : "postcard",
        "status" : "A",
        "size" : {
                "h" : 10,
                "w" : 15.25
        },
        "instock" : [
                {
                        "warehouse" : "B",
                        "qty" : 15
                },
                {
                        "warehouse" : "C",
                        "qty" : 35
                }
        ]
}
>
```

从 MongoDB 4.4 开始，还可以使用嵌套形式指定嵌入字段，例如：

```
> db.inventory.find(
...    { status: "A" },
...    { size: { uom: 0 } }
... ).pretty()
{
        "_id" : ObjectId("6130721a61e58538d1d25a92"),
        "item" : "journal",
        "status" : "A",
        "size" : {
                "h" : 14,
                "w" : 21
        },
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a93"),
        "item" : "notebook",
        "status" : "A",
        "size" : {
                "h" : 8.5,
                "w" : 11
        },
        "instock" : [
                {
                        "warehouse" : "C",
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a96"),
        "item" : "postcard",
        "status" : "A",
        "size" : {
                "h" : 10,
                "w" : 15.25
        },
        "instock" : [
                {
                        "warehouse" : "B",
                        "qty" : 15
                },
                {
                        "warehouse" : "C",
                        "qty" : 35
                }
        ]
}
>
```

## 数组中嵌入文档的投影

使用点表示法在嵌入数组的文档中投影特定字段。

以下示例指定要返回的投影：

- \_id 字段（默认返回）
- item 字段
- status 字段
- instock.qty 字段。

```
> db.inventory.find( { status: "A" }, { item: 1, status: 1, "instock.qty": 1 } ).pretty()
{
        "_id" : ObjectId("6130721a61e58538d1d25a92"),
        "item" : "journal",
        "status" : "A",
        "instock" : [
                {
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a93"),
        "item" : "notebook",
        "status" : "A",
        "instock" : [
                {
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a96"),
        "item" : "postcard",
        "status" : "A",
        "instock" : [
                {
                        "qty" : 15
                },
                {
                        "qty" : 35
                }
        ]
}
>
```

## 返回数组中特定于项目的数组元素

对于包含数组的字段，MongoDB 提供以下用于操作数组的投影操作符：`$elemMatch`、`$slice`和`$`。
以下示例使用`$slice` 投影操作符返回 instock 数组中的最后一个元素：

```
> db.inventory.find( { status: "A" }, { item: 1, status: 1, instock: { $slice: -1 } } ).pretty()
{
        "_id" : ObjectId("6130721a61e58538d1d25a92"),
        "item" : "journal",
        "status" : "A",
        "instock" : [
                {
                        "warehouse" : "A",
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a93"),
        "item" : "notebook",
        "status" : "A",
        "instock" : [
                {
                        "warehouse" : "C",
                        "qty" : 5
                }
        ]
}
{
        "_id" : ObjectId("6130721a61e58538d1d25a96"),
        "item" : "postcard",
        "status" : "A",
        "instock" : [
                {
                        "warehouse" : "C",
                        "qty" : 35
                }
        ]
}
>
```

`$elemMatch`、`$slice`和`$`是将特定元素投影到返回数组中的唯一方法。例如，不能使用数组索引投影特定数组元素；例如：{“instock.0”：1}投影将不会投影具有第一个元素的数组。

## 其他考虑事项

从 MongoDB 4.4 开始，MongoDB 对投影实施额外的限制。有关详细信息，请参见[投影限制](https://docs.mongodb.com/v4.4/reference/limits/#mongodb-limit-Projection-Restrictions)。

## 查询空字段或缺少字段

MongoDB 中的不同查询运算符对空值的处理方式不同。

插入数据

```
db.inventory.insertMany([
   { _id: 1, item: null },
   { _id: 2 }
])
```

## 相等过滤器

{item:null}查询匹配包含值为 null 的 item 字段或不包含 item 字段的文档。

查询将返回集合中的两个文档。

```
> db.inventory.find( { item: null } )
{ "_id" : 1, "item" : null }
{ "_id" : 2 }
>
```

## 类型检查

{item:{$type:10}}}查询只匹配包含值为 null 的 item 字段的文档；.项目字段的值为 BSON 类型 Null（类型编号 10）：

查询仅返回项目字段值为 null 的文档。

```
> db.inventory.find( { item : { $type: 10 } } )
{ "_id" : 1, "item" : null }
```

从 MongoDB 4.2 开始，用户不能再将查询筛选器`$type:0`用作`$exists:false`的同义词。要查询空字段或缺少的字段，请参阅[查询空字段或缺少的字段](https://docs.mongodb.com/v4.4/tutorial/query-for-null-fields/)。

## 存在性检查

以下示例查询不包含字段的文档

{item:{$exists:false}}查询匹配不包含 item 字段的文档：
查询只返回不包含项目字段的文档。

```
> db.inventory.find( { item : { $exists: false } } )
{ "_id" : 2 }
```

> [`$type`](https://docs.mongodb.com/v4.4/reference/operator/query/type/#mongodb-query-op.-type)和[`$exists`](https://docs.mongodb.com/v4.4/reference/operator/query/exists/#mongodb-query-op.-exists)运算符的参考文档。

## 更新文档 update() 方法

`update()` 方法用于更新已存在的文档。语法格式如下：

```
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)

```

参数说明：

- `query` : update 的查询条件，类似 sql update 查询内 where 后面的。
- `update` : update 的对象和一些更新的操作符（如$,$inc...）等，也可以理解为 sql update 查询内 set 后面的
- `upsert` : 可选，这个参数的意思是，如果不存在 update 的记录，是否插入 objNew,true 为插入，默认是 false，不插入。
- `multi` : 可选，mongodb 默认是 false,只更新找到的第一条记录，如果这个参数为 true,就把按条件查出来多条记录全部更新。
- `writeConcern` :可选，抛出异常的级别。

## 实例

在集合中插入如下数据：

```
> db.col.insert({title:'MongoDB 教程',description:'MongoDB 是一个Nosql 数据库',by:'altq',url:'http://10.8.103.47:9000',tags:['mongodb','database','NoSQL'],likes:100})
WriteResult({ "nInserted" : 1 })
```

接着我们通过 update() 方法来更新标题(title):

```
> db.col.update({title:'MongoDB 教程'},{$set:{title:'MongoDB'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.col.find().pretty()
{
        "_id" : ObjectId("612f3c85220ce5ce5c2b4cc5"),
        "title" : "MongoDB",
        "description" : "MongoDB 是一个Nosql 数据库",
        "by" : "altq",
        "url" : "http://10.8.103.47:9000",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
>
```

可以看到标题(title)由原来的 "MongoDB 教程" 更新为了 "MongoDB"。

以上语句只会修改第一条发现的文档，如果你要修改多条相同的文档，则需要设置 multi 参数为 true。

```
>db.col.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}},{multi:true})
```

## save() 方法

`save()` 方法通过传入的文档来替换已有文档，`_id` 主键存在就更新，不存在就插入。语法格式如下：

```
db.collection.save(
   <document>,
   {
     writeConcern: <document>
   }
)
```

参数说明：

- `document` : 文档数据。
- `writeConcern` :可选，抛出异常的级别。

## 实例

以下实例中我们替换了 `_id` 为 612f428a220ce5ce5c2b4cc7 的文档数据：

```
>db.col.save({
        "_id" : ObjectId("612f428a220ce5ce5c2b4cc7"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个Nosql 数据库",
        "by" : "altq",
        "url" : "http://10.8.103.47:9000",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 102
})
```

替换成功后，我们可以通过 `find()` 命令来查看替换后的数据

```
> db.col.save({
...         "_id" : ObjectId("612f428a220ce5ce5c2b4cc7"),
...         "title" : "MongoDB 教程",
...         "description" : "MongoDB 是一个Nosql 数据库",
...         "by" : "altq",
...         "url" : "http://10.8.103.47:9000",
...         "tags" : [
...                 "mongodb",
...                 "database",
...                 "NoSQL"
...         ],
...         "likes" : 102
... })
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.col.find().pretty()
{
        "_id" : ObjectId("612f3c85220ce5ce5c2b4cc5"),                                                        : 102 })
        "title" : "MongoDB",
        "description" : "MongoDB 是一个Nosql 数据库",
        "by" : "altq",
        "url" : "http://10.8.103.47:9000",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
{
        "_id" : ObjectId("612f4283220ce5ce5c2b4cc6"),
        "title" : "MongoDB",
        "description" : "MongoDB 是一个Nosql 数据库",
        "by" : "altq",
        "url" : "http://10.8.103.47:9000",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 101
}
{
        "_id" : ObjectId("612f428a220ce5ce5c2b4cc7"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个Nosql 数据库",
        "by" : "altq",
        "url" : "http://10.8.103.47:9000",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 102
}
```

## 更多实例

只更新第一条记录：

```
db.col.update( { "count" : { $gt : 1 } } , { $set : { "test2" : "OK"} } );
```

全部更新：

```
db.col.update( { "count" : { $gt : 3 } } , { $set : { "test2" : "OK"} },false,true );
```

只添加第一条：

```
db.col.update( { "count" : { $gt : 4 } } , { $set : { "test5" : "OK"} },true,false );
```

全部添加进去:

```
db.col.update( { "count" : { $gt : 5 } } , { $set : { "test5" : "OK"} },true,true );
```

全部更新：

```
db.col.update( { "count" : { $gt : 15 } } , { $inc : { "count" : 1} },false,true );
```

只更新第一条记录：

```
db.col.update( { "count" : { $gt : 10 } } , { $inc : { "count" : 1} },false,false );
```

## 删除文档

`remove()` 方法的基本语法格式如下所示：

```
db.collection.remove(
   <query>,
   <justOne>
)
```

如果你的 MongoDB 是 2.6 版本以后的，语法格式如下：

```
db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>
   }
)
```

参数说明：

- `query` :（可选）删除的文档的条件。
- `justOne` : （可选）如果设为 true 或 1，则只删除一个文档，如果不设置该参数，或使用默认值 false，则删除所有匹配条件的文档。
- `writeConcern` :（可选）抛出异常的级别。

## 实例

以下文档我们执行两次插入操作：

```
>db.col.insert({title: 'MongoDB 教程',
    description: 'MongoDB 是一个 Nosql 数据库',
    by: 'altq',
    url: 'http://10.8.103.47:9000',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
```

使用 find() 函数查询数据：

```
> db.col.find().pretty()
{                                                                        : 100 })
        "_id" : ObjectId("612f4627220ce5ce5c2b4cca"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "altq",
        "url" : "http://10.8.103.47:9000",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
{
        "_id" : ObjectId("612f4628220ce5ce5c2b4ccb"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "altq",
        "url" : "http://10.8.103.47:9000",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
>

```

接下来我们移除 title 为 'MongoDB 教程' 的文档：

```
> db.col.remove({'title':'MongoDB 教程'})
WriteResult({ "nRemoved" : 2 })                 # 删除了两条数据
> db.col.find().pretty()               })
>                                               # 没有数据

```

如果你只想删除第一条找到的记录可以设置 justOne 为 1，如下所示：

```
>db.COLLECTION_NAME.remove(DELETION_CRITERIA,1)
```

如果你想删除所有数据，可以使用以下方式（类似常规 SQL 的 truncate 命令）：

```
>db.col.remove({})
>db.col.find()
>
```

## remove() 方法已经过时了，现在官方推荐使用 deleteOne() 和 deleteMany() 方法。 但是 remove()也可以用

如删除集合下全部文档：

```
db.inventory.deleteMany({})
```

删除 status 等于 A 的全部文档：

```
db.inventory.deleteMany({ status : "A" })
```

删除 status 等于 D 的一个文档：

```
db.inventory.deleteOne( { status: "D" } )
```

## MongoDB 条件操作符

条件操作符用于比较两个表达式并从 mongoDB 集合中获取数据。

在本章节中，我们将讨论如何在 MongoDB 中使用条件操作符。

MongoDB 中条件操作符有：

- (>) 大于 - $gt
- (<) 小于 - $lt
- (>=) 大于等于 - $gte
- (<= ) 小于等于 - $lte
- (!= ) 不等于 - $ne
  **我们使用的数据库名称为"test" 我们的集合名称为"col"，以下为我们插入的数据。**

为了方便测试，我们可以先使用以下命令清空集合 "col" 的数据：

```
db.col.remove({})
```

插入以下数据

```
>db.col.insert({
    title: 'PHP 教程',
    description: 'PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['php'],
    likes: 200
})
```

```
>db.col.insert({title: 'Java 教程',
    description: 'Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['java'],
    likes: 150
})
```

```
>db.col.insert({title: 'MongoDB 教程',
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['mongodb'],
    likes: 100
})
```

使用 find()命令查看数据：

```
> db.col.find().pretty()
{
        "_id" : ObjectId("613034ccca9da47b9eb3a80a"),
        "title" : "PHP 教程",
        "description" : "PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "php"
        ],
        "likes" : 200
}
{
        "_id" : ObjectId("613034e4ca9da47b9eb3a80b"),
        "title" : "Java 教程",
        "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "java"
        ],
        "likes" : 150
}
{
        "_id" : ObjectId("613034ebca9da47b9eb3a80c"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb"
        ],
        "likes" : 100
}
```

## MongoDB (>) 大于操作符 - $gt

如果你想获取 "col" 集合中 "likes" 大于 100 的数据，你可以使用以下命令：

```
db.col.find({likes : {$gt : 100}})
```

类似于 SQL 语句：

```
Select * from col where likes > 100;
```

输出结果：

```
> db.col.find({likes : {$gt : 100}}).pretty()
{
        "_id" : ObjectId("613034ccca9da47b9eb3a80a"),
        "title" : "PHP 教程",
        "description" : "PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "php"
        ],
        "likes" : 200
}
{
        "_id" : ObjectId("613034e4ca9da47b9eb3a80b"),
        "title" : "Java 教程",
        "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "java"
        ],
        "likes" : 150
}
```

### MongoDB（>=）大于等于操作符 - $gte

如果你想获取"col"集合中 "likes" 大于等于 100 的数据，你可以使用以下命令：

```
db.col.find({likes : {$gte : 100}})
```

类似于 SQL 语句：

```
Select * from col where likes >=100;
```

输出结果：

```
> db.col.find({likes : {$gte : 100}}).pretty()
{
        "_id" : ObjectId("613034ccca9da47b9eb3a80a"),
        "title" : "PHP 教程",
        "description" : "PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "php"
        ],
        "likes" : 200
}
{
        "_id" : ObjectId("613034e4ca9da47b9eb3a80b"),
        "title" : "Java 教程",
        "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "java"
        ],
        "likes" : 150
}
{
        "_id" : ObjectId("613034ebca9da47b9eb3a80c"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb"
        ],
        "likes" : 100
}
```

## MongoDB (<) 小于操作符 - $lt

如果你想获取"col"集合中 "likes" 小于 150 的数据，你可以使用以下命令：

```
db.col.find({likes : {$lt : 150}})
```

类似于 SQL 语句：

```
Select * from col where likes < 150;
```

输出结果：

```
> db.col.find({likes : {$lt : 150}}).pretty()
{
        "_id" : ObjectId("613034ebca9da47b9eb3a80c"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb"
        ],
        "likes" : 100
}
>
```

## MongoDB (<=) 小于等于操作符 - $lte

如果你想获取"col"集合中 "likes" 小于等于 150 的数据，你可以使用以下命令：

```
db.col.find({likes : {$lte : 150}})
```

类似于 SQL 语句：

```
Select * from col where likes <= 150;
```

输出结果：

```
> db.col.find({likes : {$lte : 150}}).pretty()
{
        "_id" : ObjectId("613034e4ca9da47b9eb3a80b"),
        "title" : "Java 教程",
        "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "java"
        ],
        "likes" : 150
}
{
        "_id" : ObjectId("613034ebca9da47b9eb3a80c"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb"
        ],
        "likes" : 100
}
```

## MongoDB 使用 (<) 和 (>) 查询 - $lt 和 $gt

如果你想获取"col"集合中 "likes" 大于 100，小于 200 的数据，你可以使用以下命令：

```
db.col.find({likes : {$lt :200, $gt : 100}})
```

类似于 SQL 语句：

```
Select * from col where likes>100 AND  likes<200;
```

输出结果：

```
> db.col.find({likes : {$lt :200, $gt : 100}}).pretty()
{
        "_id" : ObjectId("613034e4ca9da47b9eb3a80b"),
        "title" : "Java 教程",
        "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "java"
        ],
        "likes" : 150
}
```

## MongoDB `$type` 操作符

在本章节中，我们将继续讨论 MongoDB 中条件操作符 `$type`。

`$type`操作符是基于 BSON 类型来检索集合中匹配的数据类型，并返回结果。

MongoDB 中可以使用的类型如下表所示：

| 类型                    | 数字 | 备注           |
| ----------------------- | ---- | -------------- |
| Double                  | 1    |                |
| String                  | 2    |                |
| Object                  | 3    |                |
| Array                   | 4    |                |
| Binary data             | 5    |                |
| Undefined               | 6    | 已废弃。       |
| Object id               | 7    |                |
| Boolean                 | 8    |                |
| Date                    | 9    |                |
| Null                    | 10   |                |
| Regular Expression      | 11   |                |
| JavaScript              | 13   |                |
| Symbol                  | 14   |                |
| JavaScript (with scope) | 15   |                |
| 32-bit integer          | 16   |                |
| Timestamp               | 17   |                |
| 64-bit integer          | 18   |                |
| Min key                 | 255  | Query with -1. |
| Max key                 | 127  |                |

### MongoDB 操作符 - $type 实例

如果想获取 "col" 集合中 title 为 String 的数据，你可以使用以下命令：

```
db.col.find({"title" : {$type : 2}})
```

或

```
db.col.find({"title" : {$type : 'string'}})
```

输出结果为：

```
> db.col.find({"title" : {$type : 2}}).pretty()
{
        "_id" : ObjectId("613034ccca9da47b9eb3a80a"),
        "title" : "PHP 教程",
        "description" : "PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "php"
        ],
        "likes" : 200
}
{
        "_id" : ObjectId("613034e4ca9da47b9eb3a80b"),
        "title" : "Java 教程",
        "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "java"
        ],
        "likes" : 150
}
{
        "_id" : ObjectId("613034ebca9da47b9eb3a80c"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb"
        ],
        "likes" : 100
}
>
```

## MongoDB Limit 与 Skip 方法

### MongoDB Limit() 方法

如果你需要在 MongoDB 中读取指定数量的数据记录，可以使用 MongoDB 的 Limit 方法，limit()方法接受一个数字参数，该参数指定从 MongoDB 中读取的记录条数。

### 语法

limit()方法基本语法如下所示：

```
>db.COLLECTION_NAME.find().limit(NUMBER)
```

示例：

```
> db.col.find({},{"title":1,_id:0}).limit(2).pretty()
{ "title" : "PHP 教程" }
{ "title" : "Java 教程" }
```

### MongoDB Skip() 方法

我们除了可以使用 limit()方法来读取指定数量的数据外，还可以使用 skip()方法来跳过指定数量的数据，skip 方法同样接受一个数字参数作为跳过的记录条数。
语法
skip() 方法脚本语法格式如下：

```
> db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)
```

实例
以下实例只会显示第二条文档数据

```
> db.col.find({},{"title":1,_id:0}).limit(1).skip(1).pretty()
{ "title" : "Java 教程" }
```

## MongoDB 排序 sort() 方法

在 MongoDB 中使用 sort() 方法对数据进行排序，sort() 方法可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，其中 1 为升序排列，而 -1 是用于降序排列。

语法
sort()方法基本语法如下所示：

```
>db.COLLECTION_NAME.find().sort({KEY:1})
```

以下实例演示了 col 集合中的数据按字段 likes 的降序排列：

```
> db.col.find({},{"title":1,_id:0}).sort({"likes":-1})
{ "title" : "PHP 教程" }
{ "title" : "Java 教程" }
{ "title" : "MongoDB 教程" }
```

**skip(), limilt(), sort()三个放在一起执行的时候，执行的顺序是先 sort(), 然后是 skip()，最后是显示的 limit()。**

## MongoDB 索引

索引通常能够极大的提高查询的效率，如果没有索引，MongoDB 在读取数据时必须扫描集合中的每个文件并选取那些符合查询条件的记录。

这种扫描全集合的查询效率是非常低的，特别在处理大量的数据时，查询可以要花费几十秒甚至几分钟，这对网站的性能是非常致命的。

索引是特殊的数据结构，索引存储在一个易于遍历读取的数据集合中，索引是对数据库表中一列或多列的值进行排序的一种结构

## createIndex() 方法

MongoDB 使用 createIndex() 方法来创建索引。

> 注意在 3.0.0 版本前创建索引方法为 db.collection.ensureIndex()，之后的版本使用了 db.collection.createIndex() 方法，ensureIndex() 还能用，但只是 createIndex() 的别名。

### 语法

createIndex()方法基本语法格式如下所示：

```
>db.collection.createIndex(keys, options)
```

语法中 Key 值为你要创建的索引字段，1 为指定按升序创建索引，如果你想按降序来创建索引指定为 -1 即可。

实例

```
>db.col.createIndex({"title":1})
>
```

createIndex() 方法中你也可以设置使用多个字段创建索引（关系型数据库中称作复合索引）。

```
>db.col.createIndex({"title":1,"description":-1})
>
```

createIndex() 接收可选参数，可选参数列表如下：

| Parameter          | Type          | Description                                                                                                                                  |
| ------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| background         | Boolean       | 建索引过程会阻塞其它数据库操作，background 可指定以后台方式创建索引，即增加 "background" 可选参数。 "background" 默认值为 false。            |
| unique             | Boolean       | 建立的索引是否唯一。指定为 true 创建唯一索引。默认值为 false.                                                                                |
| name               | string        | 索引的名称。如果未指定，MongoDB 的通过连接索引的字段名和排序顺序生成一个索引名称。                                                           |
| dropDups           | Boolean       | 3.0+版本已废弃。在建立唯一索引时是否删除重复记录,指定 true 创建唯一索引。默认值为 false.                                                     |
| sparse             | Boolean       | 对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为 true 的话，在索引字段中不会查询出不包含对应字段的文档.。默认值为 false. |
| expireAfterSeconds | integer       | 指定一个以秒为单位的数值，完成 TTL 设定，设定集合的生存时间。                                                                                |
| v                  | index version | 索引的版本号。默认的索引版本取决于 mongod 创建索引时运行的版本。                                                                             |
| weights            | document      | 索引权重值，数值在 1 到 99,999 之间，表示该索引相对于其他索引字段的得分权重。                                                                |
| default_language   | string        | 对于文本索引，该参数决定了停用词及词干和词器的规则的列表。 默认为英语                                                                        |
| language_override  | string        | 对于文本索引，该参数指定了包含在文档中的字段名，语言覆盖默认的 language，默认值为 language.                                                  |

实例
在后台创建索引：

```
db.values.createIndex({open: 1, close: 1}, {background: true})
```

通过在创建索引时加 background:true 的选项，让创建工作在后台执行

### 1、查看集合索引

```
db.col.getIndexes()
```

### 2、查看集合索引大小

```
db.col.totalIndexSize()
```

### 3、删除集合所有索引

```
db.col.dropIndexes()
```

### 4、删除集合指定索引

```
db.col.dropIndex("索引名称")
```

## MongoDB 聚合

MongoDB 中聚合(aggregate)主要用于处理数据(诸如统计平均值，求和等)，并返回计算后的数据结果。

有点类似 SQL 语句中的 `count(*)`。

## aggregate() 方法

MongoDB 中聚合的方法使用 aggregate()。

语法
aggregate() 方法的基本语法格式如下所示：

```
>db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
```

## 实例

集合中的数据如下：

```
{
        "_id" : ObjectId("613034ccca9da47b9eb3a80a"),
        "title" : "PHP 教程",
        "description" : "PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "php"
        ],
        "likes" : 200
}
{
        "_id" : ObjectId("613034e4ca9da47b9eb3a80b"),
        "title" : "Java 教程",
        "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "java"
        ],
        "likes" : 150
}
{
        "_id" : ObjectId("613034ebca9da47b9eb3a80c"),
        "title" : "MongoDB 教程",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "菜鸟教程",
        "url" : "http://www.runoob.com",
        "tags" : [
                "mongodb"
        ],
        "likes" : 100
}
```

现在我们通过以上集合计算每个作者所写的文章数，使用 aggregate()计算结果如下：

```
> db.col.aggregate([{$group : {_id : "$by", num_tutorial : {$sum : 1}}}]).pretty()
{ "_id" : "菜鸟教程", "num_tutorial" : 3 }
```

以上实例类似 sql 语句：

```
 select by, count(*) from col group by by
```

在上面的例子中，我们通过字段 by_user 字段对数据进行分组，并计算 by_user 字段相同值的总和。

下表展示了一些聚合的表达式:

| 表达式    | 描述                                           | 实例                                                                                  |
| --------- | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| $sum      | 计算总和。                                     | db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}]) |
| $avg      | 计算平均值                                     | db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$avg : "$likes"}}}]) |
| $min      | 获取集合中所有文档对应值得最小值。             | db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$min : "$likes"}}}]) |
| $max      | 获取集合中所有文档对应值得最大值。             | db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$max : "$likes"}}}]) |
| $push     | 在结果文档中插入值到一个数组中。               | db.mycol.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}])            |
| $addToSet | 在结果文档中插入值到一个数组中，但不创建副本。 | db.mycol.aggregate([{$group : {_id : "$by_user", url : {$addToSet : "$url"}}}])       |
| $first    | 根据资源文档的排序获取第一个文档数据。         | db.mycol.aggregate([{$group : {_id : "$by_user", first_url : {$first : "$url"}}}])    |
| $last     | 根据资源文档的排序获取最后一个文档数据         | db.mycol.aggregate([{$group : {_id : "$by_user", last_url : {$last : "$url"}}}])      |

## 管道的概念

管道在 Unix 和 Linux 中一般用于将当前命令的输出结果作为下一个命令的参数。

MongoDB 的聚合管道将 MongoDB 文档在一个管道处理完毕后将结果传递给下一个管道处理。管道操作是可以重复的。

表达式：处理输入文档并输出。表达式是无状态的，只能用于计算当前聚合管道的文档，不能处理其它的文档。

这里我们介绍一下聚合框架中常用的几个操作：

- $project：修改输入文档的结构。可以用来重命名、增加或删除域，也可以用于创建计算结果以及嵌套文档。
- $match：用于过滤数据，只输出符合条件的文档。$match 使用 MongoDB 的标准查询操作。
- $limit：用来限制 MongoDB 聚合管道返回的文档数。
- $skip：在聚合管道中跳过指定数量的文档，并返回余下的文档。
- $unwind：将文档中的某一个数组类型字段拆分成多条，每条包含数组中的一个值。
- $group：将集合中的文档分组，可用于统计结果。
- $sort：将输入文档排序后输出。
- $geoNear：输出接近某一地理位置的有序文档。

## 管道操作符实例

1、$project 实例

```
db.article.aggregate(
    { $project : {
        title : 1 ,
        author : 1 ,
    }}
 );
```

这样的话结果中就只还有\_id,tilte 和 author 三个字段了，默认情况下\_id 字段是被包含的，如果要想不包含\_id 话可以这样:

```
db.article.aggregate(
    { $project : {
        _id : 0 ,
        title : 1 ,
        author : 1
    }});
```

2.$match 实例

```
db.articles.aggregate( [
                        { $match : { score : { $gt : 70, $lte : 90 } } },
                        { $group: { _id: null, count: { $sum: 1 } } }
                       ] );
```

$match用于获取分数大于70小于或等于90记录，然后将符合条件的记录送到下一阶段$group 管道操作符进行处理。

3.$skip 实例

```
db.article.aggregate(
    { $skip : 5 });
```

经过$skip 管道操作符处理后，前五个文档被"过滤"掉。
