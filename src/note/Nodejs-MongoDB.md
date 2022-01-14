---
title: Node.js MongoDB
date: 2022-01-13
tags:
  - note
categories:
  - note
---

::: tip

Node.js 连接 MongoDB 进行增删改查操作

:::

<!-- more -->

## Node.js 连接 MongoDB

安装驱动

```
npm install mongodb
```

## 新建 MongoClient & 设置连接的数据库地址

```
// MongoClient
const MongoClient = require("mongodb").MongoClient;

// 数据库地址
const url = "mongodb://localhost:27017/test";
```

## 连接/新建数据库

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  db.close();
});
```

## 创建集合

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  const dbo = db.db("test");

  // 创建集合
  dbo.createCollection("site", (err, res) => {
    if (err) throw err;
    console.log("创建集合！");
    db.close();
  });
});
```

## insertOne() 插入单挑数据

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  const dbo = db.db("test");

  // 插入单挑数据
  const myObj = { name: "altq", url: "10.8.104.7" };
  dbo.collection("site").insertOne(myObj, (err, res) => {
    if (err) throw err;
    console.log("文档插入成功！");
    db.close();
  });
});
```

## insertMany() 插入单挑数据

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  const dbo = db.db("test");

  // 插入多条数据
  const myArr = [
    { name: "菜鸟工具", url: "https://c.runoob.com", type: "cn" },
    { name: "Google", url: "https://www.google.com", type: "en" },
    { name: "Facebook", url: "https://www.google.com", type: "en" },
  ];
  dbo.collection("site").insertMany(myArr, (err, res) => {
    if (err) throw err;
    console.log("插入的文档数量为: " + res.insertedCount);
    db.close();
  });
});
```

## find() 查询数据

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  const dbo = db.db("test");

  //  find() 查询数据
  dbo
    .collection("site")
    .find({})
    .toArray(function (err, result) {
      // 返回集合中所有数据
      if (err) throw err;
      console.log(result);
      db.close();
    });

});
```

## 查询指定条件的数据 检索 name 为 "altq" 的实例

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  const dbo = db.db("test");

  // 查询指定条件的数据 检索 name 为 "altq" 的实例
  const whereStr = { name: "altq" };            // 查询条件
  dbo
    .collection("site")
    .find(whereStr)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
```

## updateOne() 更新一条数据

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  const dbo = db.db("test");

  // updateOne() 更新一条数据
  const whereStr = { name: "altq" }; // 查询条件
  const updateStr = { $set: { name: "菜鸟教程", url: "https://www.runoob.com" } };
  dbo.collection("site").updateOne(whereStr, updateStr, function (err, res) {
    if (err) throw err;
    console.log("文档更新成功");
    db.close();
  });
});
```

## updateMany() 更新多条数据

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  const dbo = db.db("test");

  // updateMany() 更新多条数据
  const whereStr = { type: "en" }; // 查询条件
  const updateStr = { $set: { url: "10.8.104.7" } };
  dbo.collection("site").updateMany(whereStr, updateStr, function (err, res) {
    if (err) throw err;
    // res: {"acknowledged":true,"modifiedCount":2,"upsertedId":null,"upsertedCount":0,"matchedCount":2}
    // modifiedCount 更新的条数
    // upsertedCount 增加的条数
    // matchedCount  匹配的条数
    console.log(res.modifiedCount + " 条文档被更新");
    db.close();
  });
});
```

## deleteOne() 删除一条数据

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  const dbo = db.db("test");

  // deleteOne() 删除一条数据
  const whereStr = { name: "菜鸟教程" }; // 查询条件
  dbo.collection("site").deleteOne(whereStr, function (err, res) {
    if (err) throw err;
    res {"acknowledged":true,"deletedCount":0}
    deletedCount 删除的条数
    console.log("文档删除成功", JSON.stringify(res));
    db.close();
  });
});
```

## deleteMany() 删除多条数据

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  const dbo = db.db("test");

  // deleteMany() 删除多条数据
  const whereStr = { type: "en" };  // 查询条件
  // const whereStr = { };             // 删除集合
  dbo.collection("site").deleteMany(whereStr, function (err, res) {
    if (err) throw err;
    // res {"acknowledged":true,"deletedCount":0}
    // deletedCount 删除的条数
    console.log(res.deletedCount + " 条文档被删除");
    db.close();
  });
});
```

## sort() 排序

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  const dbo = db.db("test");

  // sort() 排序
  // { type: 1 }   // 按 type 字段升序
  // { type: -1 }  // 按 type 字段降序
  const mySort = { type: 1 };
  dbo
    .collection("site")
    .find()
    .sort(mySort)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
```

## 查询分页 limit()：读取两条数据

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  const dbo = db.db("test");

  //  查询分页 limit()：读取两条数据
  dbo
    .collection("site")
    .find()
    .limit(2)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
```

## skip(): 跳过前面两条数据，读取两条数据

```
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("数据库已连接！");
  const dbo = db.db("test");

  // skip(): 跳过前面两条数据，读取两条数据
  dbo
    .collection("site")
    .find()
    .skip(2)
    .limit(2)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(1, result);
      db.close();
    });
});
```
