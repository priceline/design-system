'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgSteeringWheel = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgSteeringWheel = function SvgSteeringWheel(_ref) {
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
        'M11 19.9c0-4.6-.7-6.9-2-6.9H4.1c.4 3.6 3.3 6.5 6.9 6.9zM4.1 11C6.7 9.7 9.4 9 12 9s5.3.7 7.9 2c-.5-4-3.8-7-7.9-7s-7.4 3-7.9 7zm15.8 2H15c-1.3 0-2 2.3-2 6.9 3.6-.4 6.5-3.3 6.9-6.9zM12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z'
    })
  )
}

exports.SvgSteeringWheel = SvgSteeringWheel
SvgSteeringWheel.isIcon = true
SvgSteeringWheel.defaultProps = {
  size: 24
}
var _default = SvgSteeringWheel
exports.default = _default
