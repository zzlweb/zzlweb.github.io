---
title: 如何对图片主题色进行提取
date: 2022-01-13
tags:
  - note
categories:
  - note
---

::: tip

模仿网易云音乐对图片主题色进行提取

:::

<!-- more -->

## 可能的实现方式

- 机器学习对图片进行色彩分析
- 前端提取图片主色调，做渐变处理
- 封面背景图做高斯模糊

对于第一种，他不在我的知识范围内，这里就不展开说明了 。

第二种的话，一般都是利用`canvas`来实现。

第三种相对来说，从技术层面来看，实现上是最为简单的。看看网易云的例子

![](/img-bg/163.png)

现在来聊聊怎么用第二种方法来实现，具体有三步：

- 获取图片数据
- 对图片数据进行处理
- 对颜色列表排序

测试图片相对来说，主色调较为明显，也便于测试

![](/img-bg/bg.png)

## 获取图片数据

我们知道图片是由一个个像素点组成的。通过 `canvas` 的`getImageData()`方法恰好可以获取图片的像素数据：

```javascript
  handleGetImageData() {
    let imgObj = document.getElementById('test');

    // 创建画布
    let canvas = document.createElement('canvas');
    canvas.setAttribute('width', imgObj.width);
    canvas.setAttribute('height', imgObj.height);
    let context = canvas.getContext('2d');
    // 将图片画在画布上
    context.drawImage(imgObj, 0, 0);
    // // 获取像素数据
    // let imgData = context.getImageData(0, 0, imgObj.width, imgObj.height);
    // let pixelData = imgData.data;

    this.getImageColor(canvas, imgObj);

    // console.log(pixelData);
  }
```

![](/img-bg/code1.png)

## 对图片数据进行处理

展开上一步的数据

![](/img-bg/code2.png)

这里的数据其实就是`rgba`，分布代表`红色(Red)`，`绿色(Green)`，`蓝色(Blue)`和`透明度(Alpha)`。`rgba` 的图片每个像素点是由上面四个数值表示的。也就是说每四个为一组。

知道了规律，那就对数据做一下清洗：主要就是对颜色进行分组，并统计每种颜色分别出现的次数：

```javascript

  handleGetImageData() {
    let imgObj = document.getElementById('test');

    // 创建画布
    let canvas = document.createElement('canvas');
    canvas.setAttribute('width', imgObj.width);
    canvas.setAttribute('height', imgObj.height);
    let context = canvas.getContext('2d');
    // 将图片画在画布上
    context.drawImage(imgObj, 0, 0);
    // // 获取像素数据
    // let imgData = context.getImageData(0, 0, imgObj.width, imgObj.height);
    // let pixelData = imgData.data;

    this.getImageColor(canvas, imgObj);

    // console.log(pixelData);
  }

   getImageColor(canvas, img) {
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);

    // 获取像素数据
    let pixelData = context.getImageData(
      0,
      0,
      canvas.width,
      canvas.height,
    ).data;
    console.log('pixelData', pixelData);
    return this.getCountsArr(pixelData);
  }

  getCountsArr(pixelData) {
    let colorList = [];
    let rgba = [];
    let rgbaStr = '';
    // 分组循环
    for (let i = 0; i < pixelData.length; i += 4) {
      rgba[0] = pixelData[i];
      rgba[1] = pixelData[i + 1];
      rgba[2] = pixelData[i + 2];
      rgba[3] = pixelData[i + 3];

      if (rgba.indexOf(undefined) !== -1 || pixelData[i + 3] === 0) {
        continue;
      }
      // console.log("rgba", rgba);
      rgbaStr = rgba.join(',');
      if (rgbaStr in colorList) {
        ++colorList[rgbaStr];
      } else {
        colorList[rgbaStr] = 1;
      }
    }
    console.log('colorList', colorList);

    return colorList;
  }
```

然后走到这一步报错了

![](/img-bg/code3.png)

`source width is 0` 推测可能是没有加载完图片就开始获取图片数据然后就报错了

换一下异步获取图片数据：

```javascript
  componentDidMount() {
    this.getMainColor(require('../../../public/image/bg.png'));
  }

  getMainColor(image) {
    return new Promise((resolve, reject) => {
      try {
        const canvas = document.createElement('canvas');
        const img = new Image(); // 创建img元素
        img.src = image; // 设置图片源地址
        img.onload = () => {
          let color = this.getImageColor(canvas, img);
          resolve(color);
        };
      } catch (e) {
        reject(e);
      }
    });
  }

  getImageColor(canvas, img) {
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);

    // 获取像素数据
    let pixelData = context.getImageData(
      0,
      0,
      canvas.width,
      canvas.height,
    ).data;
    console.log('pixelData', pixelData);
    return this.getCountsArr(pixelData);
  }

  getCountsArr(pixelData) {
    let colorList = [];
    let rgba = [];
    let rgbaStr = '';
    // 分组循环
    for (let i = 0; i < pixelData.length; i += 4) {
      rgba[0] = pixelData[i];
      rgba[1] = pixelData[i + 1];
      rgba[2] = pixelData[i + 2];
      rgba[3] = pixelData[i + 3];

      if (rgba.indexOf(undefined) !== -1 || pixelData[i + 3] === 0) {
        continue;
      }
      // console.log("rgba", rgba);
      rgbaStr = rgba.join(',');
      if (rgbaStr in colorList) {
        ++colorList[rgbaStr];
      } else {
        colorList[rgbaStr] = 1;
      }
    }
    console.log('colorList', colorList);

    return colorList;
  }
```

然后就成功解决了报错拿到了数据

![](/img-bg/code4.png)

到这里，我们就得到了每种数据分别出现的次数。

## 对颜色列表排序

最后一步，对上面得到的色值对象做一个排序

```javascript
this.getMainColor(require("../../../public/image/bg.png")).then((colorList) => {
  let arr = [];

  for (let prop in colorList) {
    arr.push({
      // 如果只获取rgb,则为`rgb(${prop})`
      color: `rgba(${prop})`,
      count: colorList[prop],
    });
  }
  // 数组排序
  arr.sort((a, b) => {
    return b.count - a.count;
  });

  console.log("arr", arr);
});
```

排序后得到如下结果：

![](/img-bg/code5.png)

到这里我们就得到了图片色值出现次数从大到小的排序数组，我们来看排在第一位的`rgba(201,199,195,255)`：

然后我们再试一下色值(附源码)

```javascript
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }

  componentDidMount() {
    const that = this;
    this.getMainColor(require("../../../public/image/bg.png")).then((colorList) => {
      let arr = [];

      for (let prop in colorList) {
        arr.push({
          // 如果只获取rgb,则为`rgb(${prop})`
          color: `rgba(${prop})`,
          count: colorList[prop],
        });
      }
      // 数组排序
      arr.sort((a, b) => {
        return b.count - a.count;
      });

      console.log("arr", arr);
      that.setState({
        color: arr[0].color,
      });
    });
  }

  getMainColor(image) {
    return new Promise((resolve, reject) => {
      try {
        const canvas = document.createElement("canvas");
        const img = new Image(); // 创建img元素
        img.src = image; // 设置图片源地址
        img.onload = () => {
          let color = this.getImageColor(canvas, img);
          resolve(color);
        };
      } catch (e) {
        reject(e);
      }
    });
  }

  getImageColor(canvas, img) {
    const context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);

    // 获取像素数据
    let pixelData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    console.log("pixelData", pixelData);
    return this.getCountsArr(pixelData);
  }

  getCountsArr(pixelData) {
    let colorList = [];
    let rgba = [];
    let rgbaStr = "";
    // 分组循环
    for (let i = 0; i < pixelData.length; i += 4) {
      rgba[0] = pixelData[i];
      rgba[1] = pixelData[i + 1];
      rgba[2] = pixelData[i + 2];
      rgba[3] = pixelData[i + 3];

      if (rgba.indexOf(undefined) !== -1 || pixelData[i + 3] === 0) {
        continue;
      }
      // console.log("rgba", rgba);
      rgbaStr = rgba.join(",");
      if (rgbaStr in colorList) {
        ++colorList[rgbaStr];
      } else {
        colorList[rgbaStr] = 1;
      }
    }
    console.log("colorList", colorList);

    return colorList;
  }

  render() {
    const { color } = this.state;

    return (
      <div className="share-page">
        <div className="title">测试图片</div>
        <div className="flex-row img-wrapper">
          <img id="test" src={require("../../../public/image/bg.png")} />
          <div className="fill-flex right-code" style={{ backgroundColor: color }}></div>
        </div>
      </div>
    );
  }
}

export default Home;
```

![](/img-bg/code6.png)

结果显而易见，主题色已经被提取出来了
