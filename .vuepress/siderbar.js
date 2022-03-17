const { createSideBarConfig } = require('./util')

const CSS_PATH = '/blogs/css'
const WEB_ENGINEERING_PATH = '/blogs/engineering'
const NETWORK_PATH = '/blogs/network'
const DESIGN_PATTERN_PATH = '/blogs/design-pattern'

module.exports = {
  [CSS_PATH]: [
    createSideBarConfig('CSS', CSS_PATH),
  ],
  [WEB_ENGINEERING_PATH]: [
    createSideBarConfig('前端工程化', WEB_ENGINEERING_PATH),
  ],
  [NETWORK_PATH]: [
    createSideBarConfig('计算机网络', NETWORK_PATH + '/main'),
    createSideBarConfig('TCP/IP 协议', NETWORK_PATH + '/TCP-IP'),
  ],
  [DESIGN_PATTERN_PATH]: [
    createSideBarConfig('设计模式', DESIGN_PATTERN_PATH),
  ],
}
