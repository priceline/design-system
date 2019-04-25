'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgFlightCircle = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgFlightCircle = function SvgFlightCircle(_ref) {
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
        'M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm5 12.2v-1.1l-4.2-2.8v-3c0-.5-.4-.8-.8-.8s-.8.4-.8.8v3L7 13.1v1.1l4.2-1.4v3l-1.1.8v.8L12 17l1.8.5v-.8l-1.1-.8v-3l4.3 1.3z'
    })
  )
}

exports.SvgFlightCircle = SvgFlightCircle
SvgFlightCircle.isIcon = true
SvgFlightCircle.defaultProps = {
  size: 24
}
var _default = SvgFlightCircle
exports.default = _default
