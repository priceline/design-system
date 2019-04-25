'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgInclusive = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgInclusive = function SvgInclusive(_ref) {
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
        'M7.8 13.1l2.8-2.8-7-7C2 4.9 2 7.4 3.6 9l4.2 4.1zm6.8-1.8c1.5.7 3.7.2 5.3-1.4 1.9-1.9 2.2-4.6.8-6.1-1.5-1.5-4.2-1.1-6.1.8-1.6 1.6-2.1 3.7-1.4 5.3l-9.8 9.8 1.4 1.4 6.9-6.9 6.9 6.9 1.4-1.4-6.9-6.9 1.5-1.5z'
    })
  )
}

exports.SvgInclusive = SvgInclusive
SvgInclusive.isIcon = true
SvgInclusive.defaultProps = {
  size: 24
}
var _default = SvgInclusive
exports.default = _default
