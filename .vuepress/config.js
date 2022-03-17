const sidebar = require("./siderbar.js");
module.exports = {
  title: "熊猫的胸毛叫熊毛",
  dest: "html",
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
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
  plugins: [
    "@vuepress-reco/vuepress-plugin-comments",
    "vuepress-plugin-meting",
  ],
  theme: "reco",
  themeConfig: {
    mode: "light",
    subSidebar: "auto",
    valineConfig: {
      appId: "3SwyMpr58ul4tFlTcSWVUCF1-gzGzoHsz",
      appKey: "HawyXTEslOECnAYBcQIQhSG1",
    },
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/FBmm",
            icon: "reco-github",
          },
          {
            text: "CSDN",
            link: "https://blog.csdn.net/wq18512847606",
            icon: "reco-csdn",
          },
          {
            text: "掘金",
            link: "https://juejin.cn/user/4336129591490551",
            icon: "reco-juejin",
          },
        ],
      },
    ],
    sidebar,
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "目录索引",
      },
      tag: {
        location: 3,
        text: "标签索引",
      },
    },
    logo: "/avatar.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "wuqian",
    authorAvatar: "/avatar.png",
    record: "",
    startYear: "2022.3.16",
  },
  markdown: {
    lineNumbers: true,
  },
};
