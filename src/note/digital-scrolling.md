---
title: 使用`Vue`的`transition-group`实现一个简单的数字滚动
date: 2022-01-13
tags:
  - note
categories:
  - note
---

::: tip

模仿双十一天猫大屏，使用`Vue`的`transition-group`实现一个简单的数字滚动

:::

<!-- more -->

## 效果

双十一数字大屏展示有一个金额数字滚动的特效:.

![](/digital-scrolling/num.gif)

## 实现

`Vue` 提供了 `transition` 的封装组件，在下列情形中， 可以给任何元素和组件添加进入/离开过渡

- 条件渲染 (使用 `v-if`)
- 条件展示 (使用 `v-show`)
- 动态组件
- 组件根节点

## 简单的过度

先参照官网实现一个简单的效果:

![](/digital-scrolling/case1.gif)

```vue
<div class="flex-row num-container">
  <span>￥</span>
  <transition-group name="list" tag="p">
    <p style="display: inline-block" v-for="(item, index) in todayAmountComputed" :key="item + index">
      {{ item }}
    </p>
  </transition-group>
</div>
```

```
export default {
  name: "NumScrolling",
  data() {
    return {
      todayAmount: "0",
    };
  },
  computed: {
    todayAmountComputed() {
      return this.todayAmount.split("");
    },
  },
  mounted() {
    setInterval(() => {
      if (this.todayAmount === "0") {
        this.todayAmount = "1000";
      }
      this.todayAmount = "" + Math.floor(Math.random() * 10000);
    }, 2000);
  },
};
```

## 覆盖离开的数字

由于原来的数字会占用空间，所以导致离开的和进入的没有在同一直线上，所以，为每一个数字加上`position:absoulte`,
再使用`left`定位将它们固定在合理的位置上,代码如下:

```vue
<div class="flex-row num-container">
  <span>￥</span>
  <transition-group name="list" tag="div" class="transition-container flex-row">
    <div
      class="transition-item"
      v-for="(item, index) in todayAmountComputed"
      :style="{
        left: index * 53 + 'px',
      }"
      :key="item + index"
    >
      {{ item }}
    </div>
  </transition-group>
</div>


.num-container {
  font-size: 85px;
  display: flex;
  color: gold;
  .transition-container {
    position: relative;
  }
  .transition-item {
    flex: 0 0 53px;
    width: 53px;
    position: absolute;
  }
}
```

此时的效果：

![](/digital-scrolling/case2.gif)

## 最终实现-注入灵魂

最后就是注入灵魂,给每个数字添加一点点`延迟`:

```vue
<div class="flex-row num-container">
  <span>￥</span>
  <transition-group name="list" tag="div" class="transition-container flex-row">
    <div
      class="transition-item"
      v-for="(item, index) in todayAmountComputed"
      :style="{
        left: index * 53 + 'px',
        'transition-delay': 0.1 * index + 's',
      }"
      :key="item + index"
    >
      {{ item }}
    </div>
  </transition-group>
</div>
```

这样就达到了最终的效果:

![](/digital-scrolling/case3.gif)

## 最终代码

```vue
<template>
  <div class="num-scrolling-page">
    <div class="page-title">数字滚动</div>
    <div class="common-title">示例1 简单的过度</div>
    <div class="test-case">
      <div class="flex-row num-container">
        <span>￥</span>
        <transition-group name="list" tag="p">
          <p style="display: inline-block" v-for="(item, index) in todayAmountComputed" :key="item + index">
            {{ item }}
          </p>
        </transition-group>
      </div>
    </div>
    <div class="common-title">示例2 覆盖离开的数字</div>
    <div class="test-case">
      <div class="flex-row num-container">
        <span>￥</span>
        <transition-group name="list" tag="div" class="transition-container flex-row">
          <div
            class="transition-item"
            v-for="(item, index) in todayAmountComputed"
            :style="{
              left: index * 53 + 'px',
            }"
            :key="item + index"
          >
            {{ item }}
          </div>
        </transition-group>
      </div>
    </div>
    <div class="common-title">示例3 注入灵魂-添加延迟</div>
    <div class="test-case">
      <div class="flex-row num-container">
        <span>￥</span>
        <transition-group name="list" tag="div" class="transition-container flex-row">
          <div
            class="transition-item"
            v-for="(item, index) in todayAmountComputed"
            :style="{
              left: index * 53 + 'px',
              'transition-delay': 0.1 * index + 's',
            }"
            :key="item + index"
          >
            {{ item }}
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumScrolling",
  data() {
    return {
      todayAmount: "0",
    };
  },
  computed: {
    todayAmountComputed() {
      return this.todayAmount.split("");
    },
  },
  mounted() {
    setInterval(() => {
      if (this.todayAmount === "0") {
        this.todayAmount = "1000";
      }
      this.todayAmount = "" + Math.floor(Math.random() * 10000);
    }, 2000);
  },
};
</script>
<style scoped lang="less">
.num-scrolling-page {
  width: 100%;
  padding: 20px 40px;

  .page-title {
    height: 60px;
    font-size: 20px;
    color: @primary-color;
    line-height: 60px;
    font-weight: bold;
    border-bottom: 1px solid @border-color-base;
    margin-bottom: 20px;
  }
  .common-title {
    height: 50px;
    font-size: 18px;
    color: @primary-color;
    line-height: 50px;
    border-bottom: 1px solid @border-color-base;
    margin-bottom: 20px;
  }

  .test-case {
    padding-top: 20px;
    margin-bottom: 80px;
  }

  .num-container {
    font-size: 85px;
    display: flex;
    color: gold;
    .transition-container {
      position: relative;
    }
    .transition-item {
      flex: 0 0 53px;
      width: 53px;
      position: absolute;
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: transform 1s ease, opacity 1s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(50%);
}

.list-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}
</style>
```

## more

> react 版的 原理类似
