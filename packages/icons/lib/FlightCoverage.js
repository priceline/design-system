'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgFlightCoverage = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgFlightCoverage = function SvgFlightCoverage(_ref) {
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
        'M12 1l9 4v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4zm5 12.7v-1.1l-4.2-2.8v-3c0-.4-.4-.8-.8-.8s-.8.4-.8.8v3L7 12.6v1.1l4.2-1.4v3l-1.1.8v.9l1.8-.5 1.8.5v-.8l-1.1-.8v-3l4.4 1.3z'
    })
  )
}

exports.SvgFlightCoverage = SvgFlightCoverage
SvgFlightCoverage.isIcon = true
SvgFlightCoverage.defaultProps = {
  size: 24
}
var _default = SvgFlightCoverage
exports.default = _default
