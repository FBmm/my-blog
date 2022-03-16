const { createSideBarConfig } = require('./util')
const DESIGN_PATTERN = '/blogs/design-pattern'
module.exports = {
  [DESIGN_PATTERN]: [
    createSideBarConfig('设计模式', DESIGN_PATTERN),
  ],
}
