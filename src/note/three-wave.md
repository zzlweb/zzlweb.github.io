---
title: three.js - 波浪效果实现
date: 2022-04-14
tags:
  - three.js
categories:
  - three.js 
---

::: tip

three.js 系列 - 实现粒子效果波浪滚动

:::

首先展示的是全部的代码, 需要对three.js有一定的基础知识，使用的环境是vue3。


```html

<template>
  <canvas id="wave-container"></canvas>
</template>

<script>
import { reactive, onMounted, onUnmounted } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as THREE from 'three'
// 创建场景, 不能被代理,返回代理对象, three.js 无法识别
const scene = new THREE.Scene()
// 纹理加载器
const textureLoader = new THREE.TextureLoader()
// 控制粒子数量
const count = 20000
// x,y,z
const dimension = 3
const particleGeometry = new THREE.BufferGeometry()

export default {
  // 创建场景
  setup () {
    const geo = reactive({
      camera: '', // 创建相机
      renderer: '', // 创建渲染器
      geometry: '', // 创建展示对象
      material: '', // 创建材质
      canvas: null, // DOM
      controls: null
    })

    const sizes = reactive({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const init = () => {
      // 获取dom
      geo.canvas = document.querySelector('#wave-container')

      // 创建相机
      geo.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      )
      // 控制器
      geo.controls = new OrbitControls(geo.camera, geo.canvas)
      // 惯性
      geo.controls.enableDamping = true

      geo.camera.position.z = 5
      geo.camera.position.x = 1

      const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
      scene.add(ambientLight)
      createGeometry()
      createRender(geo.canvas)
      animate()
    }

    // 创建材质和对象
    const createGeometry = () => {
      // 加载贴图

      const particleTexture = textureLoader.load('/static/wave/4.png')
      // 6000
      const total = dimension * count
      // 三个数为一组 0,1,0; 1,1,1
      const positions = new Float32Array(total)
      // color : 0.5,0.5,1; 
      const colors = new Float32Array(total)

      for (let i = 0; i < total; i++) {
        positions[i] = (Math.random() - 0.5) * 12
        colors[i] = Math.random()
      }
      particleGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, dimension)
      )
      particleGeometry.setAttribute(
        'color',
        new THREE.BufferAttribute(colors, dimension)
      )

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.2,
        color: new THREE.Color('#00a971'), //设置个绿色材质
        alphaMap: particleTexture,//alpha贴图是一张灰度纹理，用于控制整个表面的不透明度。（黑色：完全透明；白色：完全不透明）。
        // 透明度没有完全奏效，有些圈子重叠罚款，但其他人表现得好像是坚实的。
        // 我在了解了 depthWrite：false 在 THREE.PointsMaterial 的表现 。
        depthWrite: false,
        // 
        blending: THREE.AdditiveBlending,
        // 颜色混合
        vertexColors: true
      })
      const particles = new THREE.Points(particleGeometry, particleMaterial)
      particles.rotation.y = -Math.PI * 0.2
      scene.add(particles)
    }

    // 创建场景
    const createRender = (canvas) => {
      geo.renderer = new THREE.WebGLRenderer({
        canvas: canvas
      })

      geo.renderer.setSize(sizes.width, sizes.height)
      geo.renderer.setClearColor('#262837')
      geo.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    const clock = new THREE.Clock()

    // 动画
    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      for (let i = 0; i < count; i++) {
        const group = i * dimension
        const yAxis = group + 1
        const xValue = particleGeometry.attributes.position.array[group]
        particleGeometry.attributes.position.array[yAxis] = Math.sin(
          elapsedTime * 0.6 + xValue
        )
      }

      particleGeometry.attributes.position.needsUpdate = true

      // update controls
      geo.controls.update()

      geo.renderer.render(scene, geo.camera)

      window.requestAnimationFrame(animate)
    }

    // DOM 挂载
    onMounted(() => {
      window.addEventListener('resize', () => resize())
      init()
      animate()
    })

    // 卸载
    onUnmounted(() => {
      window.removeEventListener('resize', () => resize())
      scene.dispose()
    })

    // resize
    const resize = () => {
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // update carame
      geo.carame.aspect = sizes.width / sizes.height
      geo.carame.updateProjectionMatrix()

      // uodate renderer
      geo.renderer.setSize(sizes.width, sizes.height)
      // dpi or 2
      geo.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
  }
}
</script>

<style lang="less" scoped>
#wave-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}
</style>

```