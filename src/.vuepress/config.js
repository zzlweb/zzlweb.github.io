module.exports = {
  title: "Altq's blog",
  description: "山水一程,三生有幸.",
  theme: "reco",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/avatar.jpg",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    noFoundPageByTencent: false,
    nav: [
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "笔记",
        icon: "reco-message",
        items: [
          {
            text: "vuepress-reco",
            link: "/note/",
          },
        ],
      },
      {
        text: "联系",
        icon: "reco-message",
        items: [
          { text: "Github", icon: "reco-github", link: "https://github.com/AltQ1231" },
          { text: "Blog", icon: "reco-blog", link: "https://altq1231.github.io" },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    lang: "zh-CN",
    logo: "/avatar.jpg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "altq",
    authorAvatar: "/avatar.jpg",
    record: "ICP 备案文案",
  },
  pagination: {
    perPage: 10,
  },

  plugins: [
    // 开启 PWA
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    // 彩带背景
    [
      "ribbon",
      {
        size: 90,
        opacity: 0.8,
        zIndex: -5,
      },
    ],
    [
      "sakura",
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -4, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: "...", // 绝对路径
        },
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["blackCat"],
        clean: true,
        modelStyle: {
          position: "fixed",
          right: "65px",
          bottom: "0px",
          zIndex: 99999,
          pointerEvents: "none",
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
  },
};
