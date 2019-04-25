'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgLocalBar = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgLocalBar = function SvgLocalBar(_ref) {
  var size = _ref.size,
    props = (0, _objectWithoutProperties2.default)(_ref, ['size'])
  return _react.default.createElement(
    _Svg.default,
    (0, _extends2.default)(
      {
        viewBox: '0 0 24 24',
        height: size,
        width: size,
        fill: 'currentcolor'
      },
      props
    ),
    _react.default.createElement('path', {
      d: 'M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.4 7L5.7 5h12.7l-1.8 2H7.4z'
    })
  )
}

exports.SvgLocalBar = SvgLocalBar
SvgLocalBar.isIcon = true
SvgLocalBar.defaultProps = {
  size: 24
}
var _default = SvgLocalBar
exports.default = _default
