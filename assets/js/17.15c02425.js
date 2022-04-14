(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{580:function(s,n,e){"use strict";e.r(n);var a=e(10),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("Node.js 连接 MongoDB 进行增删改查操作")])]),s._v(" "),e("h2",{attrs:{id:"node-js-连接-mongodb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-连接-mongodb"}},[s._v("#")]),s._v(" Node.js 连接 MongoDB")]),s._v(" "),e("p",[s._v("安装驱动")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm install mongodb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"新建-mongoclient-设置连接的数据库地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建-mongoclient-设置连接的数据库地址"}},[s._v("#")]),s._v(" 新建 MongoClient & 设置连接的数据库地址")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('// MongoClient\nconst MongoClient = require("mongodb").MongoClient;\n\n// 数据库地址\nconst url = "mongodb://localhost:27017/test";\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"连接-新建数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接-新建数据库"}},[s._v("#")]),s._v(" 连接/新建数据库")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  db.close();\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"创建集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建集合"}},[s._v("#")]),s._v(" 创建集合")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  const dbo = db.db("test");\n\n  // 创建集合\n  dbo.createCollection("site", (err, res) => {\n    if (err) throw err;\n    console.log("创建集合！");\n    db.close();\n  });\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h2",{attrs:{id:"insertone-插入单挑数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insertone-插入单挑数据"}},[s._v("#")]),s._v(" insertOne() 插入单挑数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  const dbo = db.db("test");\n\n  // 插入单挑数据\n  const myObj = { name: "zzl", url: "10.8.104.7" };\n  dbo.collection("site").insertOne(myObj, (err, res) => {\n    if (err) throw err;\n    console.log("文档插入成功！");\n    db.close();\n  });\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h2",{attrs:{id:"insertmany-插入单挑数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insertmany-插入单挑数据"}},[s._v("#")]),s._v(" insertMany() 插入单挑数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  const dbo = db.db("test");\n\n  // 插入多条数据\n  const myArr = [\n    { name: "菜鸟工具", url: "https://c.runoob.com", type: "cn" },\n    { name: "Google", url: "https://www.google.com", type: "en" },\n    { name: "Facebook", url: "https://www.google.com", type: "en" },\n  ];\n  dbo.collection("site").insertMany(myArr, (err, res) => {\n    if (err) throw err;\n    console.log("插入的文档数量为: " + res.insertedCount);\n    db.close();\n  });\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("h2",{attrs:{id:"find-查询数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#find-查询数据"}},[s._v("#")]),s._v(" find() 查询数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  const dbo = db.db("test");\n\n  //  find() 查询数据\n  dbo\n    .collection("site")\n    .find({})\n    .toArray(function (err, result) {\n      // 返回集合中所有数据\n      if (err) throw err;\n      console.log(result);\n      db.close();\n    });\n\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("h2",{attrs:{id:"查询指定条件的数据-检索-name-为-zzl-的实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询指定条件的数据-检索-name-为-zzl-的实例"}},[s._v("#")]),s._v(' 查询指定条件的数据 检索 name 为 "zzl" 的实例')]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  const dbo = db.db("test");\n\n  // 查询指定条件的数据 检索 name 为 "zzl" 的实例\n  const whereStr = { name: "zzl" };            // 查询条件\n  dbo\n    .collection("site")\n    .find(whereStr)\n    .toArray(function (err, result) {\n      if (err) throw err;\n      console.log(result);\n      db.close();\n    });\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h2",{attrs:{id:"updateone-更新一条数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updateone-更新一条数据"}},[s._v("#")]),s._v(" updateOne() 更新一条数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  const dbo = db.db("test");\n\n  // updateOne() 更新一条数据\n  const whereStr = { name: "zzl" }; // 查询条件\n  const updateStr = { $set: { name: "菜鸟教程", url: "https://www.runoob.com" } };\n  dbo.collection("site").updateOne(whereStr, updateStr, function (err, res) {\n    if (err) throw err;\n    console.log("文档更新成功");\n    db.close();\n  });\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h2",{attrs:{id:"updatemany-更新多条数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updatemany-更新多条数据"}},[s._v("#")]),s._v(" updateMany() 更新多条数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  const dbo = db.db("test");\n\n  // updateMany() 更新多条数据\n  const whereStr = { type: "en" }; // 查询条件\n  const updateStr = { $set: { url: "10.8.104.7" } };\n  dbo.collection("site").updateMany(whereStr, updateStr, function (err, res) {\n    if (err) throw err;\n    // res: {"acknowledged":true,"modifiedCount":2,"upsertedId":null,"upsertedCount":0,"matchedCount":2}\n    // modifiedCount 更新的条数\n    // upsertedCount 增加的条数\n    // matchedCount  匹配的条数\n    console.log(res.modifiedCount + " 条文档被更新");\n    db.close();\n  });\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h2",{attrs:{id:"deleteone-删除一条数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deleteone-删除一条数据"}},[s._v("#")]),s._v(" deleteOne() 删除一条数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  const dbo = db.db("test");\n\n  // deleteOne() 删除一条数据\n  const whereStr = { name: "菜鸟教程" }; // 查询条件\n  dbo.collection("site").deleteOne(whereStr, function (err, res) {\n    if (err) throw err;\n    res {"acknowledged":true,"deletedCount":0}\n    deletedCount 删除的条数\n    console.log("文档删除成功", JSON.stringify(res));\n    db.close();\n  });\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h2",{attrs:{id:"deletemany-删除多条数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deletemany-删除多条数据"}},[s._v("#")]),s._v(" deleteMany() 删除多条数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  const dbo = db.db("test");\n\n  // deleteMany() 删除多条数据\n  const whereStr = { type: "en" };  // 查询条件\n  // const whereStr = { };             // 删除集合\n  dbo.collection("site").deleteMany(whereStr, function (err, res) {\n    if (err) throw err;\n    // res {"acknowledged":true,"deletedCount":0}\n    // deletedCount 删除的条数\n    console.log(res.deletedCount + " 条文档被删除");\n    db.close();\n  });\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h2",{attrs:{id:"sort-排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sort-排序"}},[s._v("#")]),s._v(" sort() 排序")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  const dbo = db.db("test");\n\n  // sort() 排序\n  // { type: 1 }   // 按 type 字段升序\n  // { type: -1 }  // 按 type 字段降序\n  const mySort = { type: 1 };\n  dbo\n    .collection("site")\n    .find()\n    .sort(mySort)\n    .toArray(function (err, result) {\n      if (err) throw err;\n      console.log(result);\n      db.close();\n    });\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("h2",{attrs:{id:"查询分页-limit-读取两条数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询分页-limit-读取两条数据"}},[s._v("#")]),s._v(" 查询分页 limit()：读取两条数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  const dbo = db.db("test");\n\n  //  查询分页 limit()：读取两条数据\n  dbo\n    .collection("site")\n    .find()\n    .limit(2)\n    .toArray(function (err, result) {\n      if (err) throw err;\n      console.log(result);\n      db.close();\n    });\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h2",{attrs:{id:"skip-跳过前面两条数据-读取两条数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#skip-跳过前面两条数据-读取两条数据"}},[s._v("#")]),s._v(" skip(): 跳过前面两条数据，读取两条数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('MongoClient.connect(url, (err, db) => {\n  if (err) throw err;\n  console.log("数据库已连接！");\n  const dbo = db.db("test");\n\n  // skip(): 跳过前面两条数据，读取两条数据\n  dbo\n    .collection("site")\n    .find()\n    .skip(2)\n    .limit(2)\n    .toArray(function (err, result) {\n      if (err) throw err;\n      console.log(1, result);\n      db.close();\n    });\n});\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);