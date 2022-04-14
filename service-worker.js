/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "360view/view6.gif",
    "revision": "7bea0a1354cbb76ae7c8d488c7e00170"
  },
  {
    "url": "404.html",
    "revision": "c43b6f4f8f370a87fdafd937774499f2"
  },
  {
    "url": "assets/css/0.styles.43230755.css",
    "revision": "433dad954502dd5416a0e46f02de0bf1"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/js/1.50553528.js",
    "revision": "3d3b17d08397ac4933a80493a8fe70fa"
  },
  {
    "url": "assets/js/10.d3412b7e.js",
    "revision": "60d54f307422ea405bdedc2427e9b566"
  },
  {
    "url": "assets/js/11.5d0e0b16.js",
    "revision": "b900c9ce447d20f1af98d35f6bdff1b9"
  },
  {
    "url": "assets/js/12.e8f285fd.js",
    "revision": "9e3ff83414a6bd5a178c6c8d8514445a"
  },
  {
    "url": "assets/js/13.033136a9.js",
    "revision": "ef86d52659d5090c78269922e6acf247"
  },
  {
    "url": "assets/js/14.7ad93bca.js",
    "revision": "6c9592374c1d091f1d63b359e73c021f"
  },
  {
    "url": "assets/js/15.e806ec75.js",
    "revision": "1f9c4636ec4715ca0a46eb348f3470d3"
  },
  {
    "url": "assets/js/16.8753878f.js",
    "revision": "6fbd7c52bed2762a0d95713c12e81b83"
  },
  {
    "url": "assets/js/17.15c02425.js",
    "revision": "968dcbcdbbaa09156f0f5580e1713c2f"
  },
  {
    "url": "assets/js/18.e8a07e3f.js",
    "revision": "4b9c88d1e89068118f53ed7b64700e78"
  },
  {
    "url": "assets/js/19.3e3991ed.js",
    "revision": "c6fbfea32cd2dffebc41ece61dc214a9"
  },
  {
    "url": "assets/js/20.1b7a1d92.js",
    "revision": "92b31d8a205e3ef7e1c584da4bd41f05"
  },
  {
    "url": "assets/js/21.3d29d1b3.js",
    "revision": "9343819346b9727b319ad3153324efe0"
  },
  {
    "url": "assets/js/22.3f7d1bb2.js",
    "revision": "e2eb27d3192a2d29ad04bc72fb154182"
  },
  {
    "url": "assets/js/23.701cbf81.js",
    "revision": "11a7c8b84a4d8da018f118d060f04847"
  },
  {
    "url": "assets/js/24.3cda2119.js",
    "revision": "0e954c95aba478c03380e11507671162"
  },
  {
    "url": "assets/js/25.9710ba4e.js",
    "revision": "85bd62eb528d8fcb25956457e9f3b698"
  },
  {
    "url": "assets/js/26.afd482eb.js",
    "revision": "17a72588ac02cbabb80316b8cfc88ba8"
  },
  {
    "url": "assets/js/27.3d75c8af.js",
    "revision": "ddd2a3fda8319abee05b7858cdc47121"
  },
  {
    "url": "assets/js/28.760985a6.js",
    "revision": "1c13ccc36898722a67818faa3af1db2d"
  },
  {
    "url": "assets/js/29.b668420c.js",
    "revision": "b039fdec0f3ed6b31747787279cf14d4"
  },
  {
    "url": "assets/js/3.02f2281c.js",
    "revision": "bc8b312b3be2372e1d578c3d526ad5ec"
  },
  {
    "url": "assets/js/30.7962223a.js",
    "revision": "2e799d87dbe0a93eace585b31a68a5d4"
  },
  {
    "url": "assets/js/31.68404559.js",
    "revision": "2352dbc54394f53c22731a3253b628c3"
  },
  {
    "url": "assets/js/32.d2dc7fa1.js",
    "revision": "57b66f1cfcc0b2820c94e31a1f5e4c7c"
  },
  {
    "url": "assets/js/33.69b17ec0.js",
    "revision": "92336164792feca9034860829c53f7bc"
  },
  {
    "url": "assets/js/34.8fca633b.js",
    "revision": "789c2d8be348a45dc42e011aed067e48"
  },
  {
    "url": "assets/js/35.d80ce6a3.js",
    "revision": "d2b6aba4826204f59d47d4169f7a62e7"
  },
  {
    "url": "assets/js/4.1ad16303.js",
    "revision": "63e7a749e4a0a5c94cb975562e7ff352"
  },
  {
    "url": "assets/js/5.8f5ce027.js",
    "revision": "e84e1eb73ddb78b9c73a0eca6a0362d7"
  },
  {
    "url": "assets/js/6.6ee1188f.js",
    "revision": "864e734f5f44cbc259e1ebcbeda96a0f"
  },
  {
    "url": "assets/js/7.bd0d004f.js",
    "revision": "b0c0642dca506db93defa7e2ffb8e69f"
  },
  {
    "url": "assets/js/8.25b0b224.js",
    "revision": "4239e07df9cc1d06c42dc478e95074b3"
  },
  {
    "url": "assets/js/9.13182fc4.js",
    "revision": "1bb2fa9a1f1e2ba1581f497ee6171c9b"
  },
  {
    "url": "assets/js/app.e0d9f260.js",
    "revision": "f16ee77ae6ab5553d1affb23cf13632f"
  },
  {
    "url": "avatar.jpg",
    "revision": "17e043aeeca00393248bb095b9772388"
  },
  {
    "url": "banner_2.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "banner.jpeg",
    "revision": "7f6079a09e888daae89de456e9d4a874"
  },
  {
    "url": "categories/index.html",
    "revision": "6979e63bc491060fffd1978f6c709be8"
  },
  {
    "url": "categories/note/index.html",
    "revision": "7513da57dbd6c708fd3c33d041246a7e"
  },
  {
    "url": "categories/note/page/2/index.html",
    "revision": "a1654ec0dc582a17a44dfc6e46b74a28"
  },
  {
    "url": "categories/note/page/3/index.html",
    "revision": "98a6f3af6ea41909cd5a2383edb8b76c"
  },
  {
    "url": "categories/three.js/index.html",
    "revision": "96023c7831ddef087e68c712f77b470d"
  },
  {
    "url": "css-container-query/1.jpg",
    "revision": "77a58f1f23c4ed4b6293f4858940f5bb"
  },
  {
    "url": "css-container-query/10.jpg",
    "revision": "cc1cffbd40f5d449cae5d0b1f78bbe5c"
  },
  {
    "url": "css-container-query/11.jpg",
    "revision": "6f29e6f25cb96bc93c4486af3515f218"
  },
  {
    "url": "css-container-query/12.jpg",
    "revision": "c56522952ae3cfbc7607669805305c12"
  },
  {
    "url": "css-container-query/13.jpg",
    "revision": "6e4379859f9fa316648ae20c6fd91e7b"
  },
  {
    "url": "css-container-query/14.jpg",
    "revision": "dbb7b9111e43d652bb734ca1b36cfa32"
  },
  {
    "url": "css-container-query/15.jpg",
    "revision": "b233450c4c61503b6572789f22b5f48d"
  },
  {
    "url": "css-container-query/16.jpg",
    "revision": "326d7dc851c5acc6dd0872d334c69a82"
  },
  {
    "url": "css-container-query/2.jpg",
    "revision": "bc487d58ea0a6dc48860af3dc36ad658"
  },
  {
    "url": "css-container-query/3.jpg",
    "revision": "bc487d58ea0a6dc48860af3dc36ad658"
  },
  {
    "url": "css-container-query/4.jpg",
    "revision": "eca5b4b9770027b32dd3dabe7decccf3"
  },
  {
    "url": "css-container-query/5.jpg",
    "revision": "e11a24d53259ff70a7a96fc380f28b15"
  },
  {
    "url": "css-container-query/6.jpg",
    "revision": "d052c1692db7b9feeec6d3a559e07872"
  },
  {
    "url": "css-container-query/7.jpg",
    "revision": "9820fbf9ca4f02527ec2f6b4b7b904d4"
  },
  {
    "url": "css-container-query/8.jpg",
    "revision": "a72749adb4fe3c2ea14d02bd97e490aa"
  },
  {
    "url": "css-container-query/9.jpg",
    "revision": "36d2da70698ca829e41f6f5303fd4c2c"
  },
  {
    "url": "digital-scrolling/case1.gif",
    "revision": "6aa73d978391813ec480094e3f476d60"
  },
  {
    "url": "digital-scrolling/case2.gif",
    "revision": "7a69840504e3c8ccc8d63acce6e02949"
  },
  {
    "url": "digital-scrolling/case3.gif",
    "revision": "94db6676d7666d08910e1805e6c0d78f"
  },
  {
    "url": "digital-scrolling/num.gif",
    "revision": "9a3f0cc28c3c057b460410e50050d71c"
  },
  {
    "url": "img-bg/163.png",
    "revision": "737c6e745c3cb5a564bf82177bb61945"
  },
  {
    "url": "img-bg/bg.png",
    "revision": "4c49da98fa67236ad328ae7fa37a2c3a"
  },
  {
    "url": "img-bg/code1.png",
    "revision": "a0b918fd0342f911d874e1b3d8d8b0fa"
  },
  {
    "url": "img-bg/code2.png",
    "revision": "d731b4165495b4a3d33ad56619c1a6d6"
  },
  {
    "url": "img-bg/code3.png",
    "revision": "4f775351b568e2fff9dcb26cc38399ef"
  },
  {
    "url": "img-bg/code4.png",
    "revision": "d02b34a602f3ffea4ae3cf49b67a89ac"
  },
  {
    "url": "img-bg/code5.png",
    "revision": "36e20df14e8803965aebea52d8313faa"
  },
  {
    "url": "img-bg/code6.png",
    "revision": "141efdb581c3298da279e76781678116"
  },
  {
    "url": "index.html",
    "revision": "66eeb2bef86301249ddbe35699d27f50"
  },
  {
    "url": "mongodb/home.png",
    "revision": "01880b6cc0fbba66756f7f5dafec546a"
  },
  {
    "url": "mongodb/objectid.jpeg",
    "revision": "c970d468dfac6f2cc7194e6c64413b37"
  },
  {
    "url": "mongodb/step1.png",
    "revision": "9645221d2a5eb4d8d406c6ac35c9b4c2"
  },
  {
    "url": "mongodb/step2.png",
    "revision": "e048a4a84cd1782d064f5f69508027c2"
  },
  {
    "url": "mongodb/step3.png",
    "revision": "b5bff5123f4397ffbbc6a787c3504f45"
  },
  {
    "url": "mongodb/step4.png",
    "revision": "e5b68e7a87a9413ee4262e791376a853"
  },
  {
    "url": "mongodb/step5.png",
    "revision": "4deaf6cdd99624d9be759bee2c76e732"
  },
  {
    "url": "mongodb/step6.png",
    "revision": "158e4b810c9a2dc764afa9d6e88f129c"
  },
  {
    "url": "mongodb/step7.png",
    "revision": "34768311b94b781dfb90e0e05c821306"
  },
  {
    "url": "mongodb/step8.png",
    "revision": "5fbfb006f9bb4f7aad2263f35a272620"
  },
  {
    "url": "mongodb/step9.png",
    "revision": "e723cef5740b541cad107f5135b9c09e"
  },
  {
    "url": "note/annotation-specification.html",
    "revision": "dd9c056ab23ad47d9b7539c1847ca6ef"
  },
  {
    "url": "note/auto-guideline.html",
    "revision": "82fe0d30662e31e7df619cb6bc419640"
  },
  {
    "url": "note/bootstrap-guideline.html",
    "revision": "91f4a97149be8cbe3c68617b9c1050aa"
  },
  {
    "url": "note/checked.html",
    "revision": "cb132daad72ef61b73d2a3f005dac7ba"
  },
  {
    "url": "note/create-360-views.html",
    "revision": "51477087254a10afbd9f64797958bc08"
  },
  {
    "url": "note/CSS-code-specification.html",
    "revision": "0d43ec58a579ac4db5712aaffcfece69"
  },
  {
    "url": "note/CSS-container-query.html",
    "revision": "9cbc688559e58affba778dd1b78871b7"
  },
  {
    "url": "note/device-width.html",
    "revision": "6a6aeecff75d187903c126187c93eb4a"
  },
  {
    "url": "note/digital-scrolling.html",
    "revision": "6d70c480e241c1214030374cee39f93b"
  },
  {
    "url": "note/directory-and-naming-conventions.html",
    "revision": "b53a01ceec61b167f2c895e30293d895"
  },
  {
    "url": "note/front-end-engineer-specification.html",
    "revision": "8dd30d3508a4fd63c2d7315dac15b8dc"
  },
  {
    "url": "note/git.html",
    "revision": "6ad3734af1c6cf899a6f411a39248639"
  },
  {
    "url": "note/HTML-code-specification.html",
    "revision": "186dca3a7addc6bb2f12df66579bcf40"
  },
  {
    "url": "note/image-extraction-background-color.html",
    "revision": "17ba5ea87c69e0848a450b8ee8f81b80"
  },
  {
    "url": "note/index.html",
    "revision": "4f1175cfefb8f1cd573c822d1454e960"
  },
  {
    "url": "note/JavaScript-code-specification.html",
    "revision": "915fd2ea94c377aca0b92956868e46f4"
  },
  {
    "url": "note/markdown-extended-syntax.html",
    "revision": "610df6cac7f5b8e64d94f52cd554b4de"
  },
  {
    "url": "note/media-screen-all.html",
    "revision": "4ce231267da3a7f82add7e41628cc59c"
  },
  {
    "url": "note/MongoDB-basic.html",
    "revision": "9410bf300d9ddc58b5a2e6b8a69e30fc"
  },
  {
    "url": "note/Nodejs-MongoDB.html",
    "revision": "62956cb83dd067f7b58dd8418d55a76c"
  },
  {
    "url": "note/study-list.html",
    "revision": "ca17ff87844a2a92b8c25c5cde6e9b1b"
  },
  {
    "url": "note/test.html",
    "revision": "11d81e4de64a71d509f28c9bbdc0609b"
  },
  {
    "url": "note/threejs-wave.html",
    "revision": "c2978b81176ea3285197d2a5d61702dd"
  },
  {
    "url": "tag/index.html",
    "revision": "bc386bac88931d4302bad620173c87d8"
  },
  {
    "url": "tag/note/index.html",
    "revision": "fd29aed55b7f5edeef59395f86917491"
  },
  {
    "url": "tag/note/page/2/index.html",
    "revision": "396af6e7013c991b25bd6997e447112a"
  },
  {
    "url": "tag/note/page/3/index.html",
    "revision": "d83dbac92293224dc923018e103eef78"
  },
  {
    "url": "tag/three.js/index.html",
    "revision": "d1ff420219a18d4f82dd39a393d6eaf2"
  },
  {
    "url": "threejs-wave/1.png",
    "revision": "07031a25c6290ce13eac0c62006b1c5a"
  },
  {
    "url": "threejs-wave/2.png",
    "revision": "dbd151322c3d895552c2229b8601eee1"
  },
  {
    "url": "timeline/index.html",
    "revision": "9f9621e499237ef2c4dcf317cfd7eba6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
