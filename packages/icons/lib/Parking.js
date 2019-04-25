'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgParking = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgParking = function SvgParking(_ref) {
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
        'M12.5 3h-7v18h4v-6h3c3.3 0 6-2.7 6-6s-2.7-6-6-6zm.2 8H9.5V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z'
    })
  )
}

exports.SvgParking = SvgParking
SvgParking.isIcon = true
SvgParking.defaultProps = {
  size: 24
}
var _default = SvgParking
exports.default = _default
