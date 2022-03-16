const { createSideBarConfig } = require('./util')

const WEB_ENGINEERING_PATH = '/blogs/engineering'
const NETWORK_PATH = '/blogs/network'
const DESIGN_PATTERN_PATH = '/blogs/design-pattern'

module.exports = {
  [WEB_ENGINEERING_PATH]: [
    createSideBarConfig('前端工程化', WEB_ENGINEERING_PATH),
  ],
  [NETWORK_PATH]: [
    createSideBarConfig('计算机网络', NETWORK_PATH),
    createSideBarConfig('TCP/IP', NETWORK_PATH + '/TCP-IP'),
  ],
  [DESIGN_PATTERN_PATH]: [
    createSideBarConfig('设计模式', DESIGN_PATTERN_PATH),
  ],
}
