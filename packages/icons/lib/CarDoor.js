'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgCarDoor = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgCarDoor = function SvgCarDoor(_ref) {
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
        'M18 2h-6.9c-.7 0-1.3.3-1.7.9l-5 7.6c-.3.3-.4.7-.4 1.1V20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 9H6.7l4.7-7H18v7z'
    })
  )
}

exports.SvgCarDoor = SvgCarDoor
SvgCarDoor.isIcon = true
SvgCarDoor.defaultProps = {
  size: 24
}
var _default = SvgCarDoor
exports.default = _default
