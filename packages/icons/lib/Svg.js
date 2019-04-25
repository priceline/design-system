'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _objectSpread2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectSpread')
)

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _styledSystem = require('styled-system')

var Svg = (0, _styledComponents.default)('svg')(
  {
    flex: 'none'
  },
  _styledSystem.space,
  _styledSystem.color
)
Svg.propTypes = (0, _objectSpread2.default)(
  {},
  _styledSystem.space.propTypes,
  _styledSystem.color.propTypes
)
var _default = Svg
exports.default = _default
