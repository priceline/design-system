'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgFreeCancellation = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgFreeCancellation = function SvgFreeCancellation(_ref) {
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
      d:
        'M23 12h-3c0 4.4-3.6 8-8 8-1.6 0-3-.5-4.3-1.2l1.5-1.5c.8.5 1.8.7 2.8.7 3.3 0 6-2.7 6-6h-3l4-4 4 4zM6 12c0-3.3 2.7-6 6-6 1 0 2 .2 2.8.7l1.5-1.5C15 4.5 13.6 4 12 4c-4.4 0-8 3.6-8 8H1l4 4 4-4H6z'
    })
  )
}

exports.SvgFreeCancellation = SvgFreeCancellation
SvgFreeCancellation.isIcon = true
SvgFreeCancellation.defaultProps = {
  size: 24
}
var _default = SvgFreeCancellation
exports.default = _default
