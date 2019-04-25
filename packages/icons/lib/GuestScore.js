'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgGuestScore = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgGuestScore = function SvgGuestScore(_ref) {
  var size = _ref.size,
    props = (0, _objectWithoutProperties2.default)(_ref, ['size'])
  return _react.default.createElement(
    _Svg.default,
    (0, _extends2.default)(
      {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'currentcolor'
      },
      props
    ),
    _react.default.createElement('path', {
      d:
        'M20 2H4c-1.105 0-2 .895-2 2v18l4-4h14c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2zm-4.898 12.398L12 12.602 8.898 14.5 9.7 11 7 8.602l3.602-.301L12 5l1.398 3.3L17 8.603 14.3 11z'
    })
  )
}

exports.SvgGuestScore = SvgGuestScore
SvgGuestScore.isIcon = true
SvgGuestScore.defaultProps = {
  size: 24
}
var _default = SvgGuestScore
exports.default = _default
