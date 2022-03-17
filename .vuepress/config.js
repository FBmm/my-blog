const siderbar = require("./config/siderbarConfig.js");
const nav = require("./config/navConfig.js");
const valineConfig = require("./config/valineConfig.js");
const blogConfig = require("./config/blogConfig.js");
const plugins = require("./config/pluginsConfig.js");
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
  plugins,
  theme: "reco",
  themeConfig: {
    type: "blog",
    mode: "light",
    subSidebar: "auto",
    nav,
    siderbar,
    valineConfig,
    blogConfig,
    logo: "/avatar.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "wuqian",
    authorAvatar: "/avatar.png",
    record: "",
    startYear: "2022",
  },
  markdown: {
    lineNumbers: true,
  },
};
