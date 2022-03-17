const { createSideBarConfig } = require('../util')

const JS_PATH = '/blogs/javascript'
const CSS_PATH = '/blogs/css'
const WEB_ENGINEERING_PATH = '/blogs/engineering'
const NETWORK_PATH = '/blogs/network'
const DESIGN_PATTERN_PATH = '/blogs/design-pattern'
const DATA_STRUCTURE_PATH = '/blogs/data-structure'

module.exports = {
  [JS_PATH]: [
    createSideBarConfig('ES6', JS_PATH + '/es6'),
    createSideBarConfig('JS工具函数', JS_PATH + '/js-utils'),
  ],
  [CSS_PATH]: [
    createSideBarConfig('CSS', CSS_PATH),
  ],
  [WEB_ENGINEERING_PATH]: [
    createSideBarConfig('前端工程化', WEB_ENGINEERING_PATH),
  ],
  [NETWORK_PATH]: [
    createSideBarConfig('计算机网络', NETWORK_PATH + '/base'),
    createSideBarConfig('TCP/IP协议', NETWORK_PATH + '/TCP-IP'),
  ],
  [DESIGN_PATTERN_PATH]: [
    createSideBarConfig('设计模式', DESIGN_PATTERN_PATH),
  ],
  [DATA_STRUCTURE_PATH]: [
    createSideBarConfig('数据结构', DATA_STRUCTURE_PATH),
  ],
}
