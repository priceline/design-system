'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgArrival = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgArrival = function SvgArrival(_ref) {
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
        'M2.5 19.5h19v2h-19v-2zm7.2-5.7L14 15l5.3 1.4c.8.2 1.6-.3 1.8-1.1.2-.8-.3-1.6-1.1-1.8l-5.3-1.4-2.8-9-1.8-.6v8.3l-5-1.3-.9-2.4-1.4-.4v5.2l1.6.4 5.3 1.5z'
    })
  )
}

exports.SvgArrival = SvgArrival
SvgArrival.isIcon = true
SvgArrival.defaultProps = {
  size: 24
}
var _default = SvgArrival
exports.default = _default
