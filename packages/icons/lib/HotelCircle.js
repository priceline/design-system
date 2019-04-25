'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgHotelCircle = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgHotelCircle = function SvgHotelCircle(_ref) {
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
        'M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zM9.7 12.2c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4c-.8 0-1.4.6-1.4 1.4s.7 1.4 1.4 1.4zm5.5-2.8h-3.6v3.3H7.9V8.5H7v7h.9v-1.4h8.2v1.4h.9v-4.2c0-1-.8-1.9-1.8-1.9z'
    })
  )
}

exports.SvgHotelCircle = SvgHotelCircle
SvgHotelCircle.isIcon = true
SvgHotelCircle.defaultProps = {
  size: 24
}
var _default = SvgHotelCircle
exports.default = _default
