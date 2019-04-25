'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgSeatBusiness = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgSeatBusiness = function SvgSeatBusiness(_ref) {
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
        'M5.3 6.1c-.8-.6-1.1-1.8-.4-2.7.6-.9 1.9-1.1 2.8-.5.9.6 1.1 1.8.4 2.8-.6.9-1.8 1.1-2.8.4zM16 19.5H8.9c-1.5 0-2.7-1.1-3-2.5L4 7.5H2l2 9.8c.4 2.4 2.5 4.2 4.9 4.2H16v-2zm.2-4h-4.8l-1-4.1c1.6.9 3.3 1.5 5.2 1.2v-2.1c-1.8.3-3.6-.3-4.8-1.3L9.1 8c-.2-.2-.4-.3-.7-.4-.3-.1-.7-.1-1-.1-1.2.2-2 1.4-1.8 2.6L7 16c.2 1.5 1.4 2.5 2.8 2.5h6.9l3.8 3L22 20l-5.8-4.5z'
    })
  )
}

exports.SvgSeatBusiness = SvgSeatBusiness
SvgSeatBusiness.isIcon = true
SvgSeatBusiness.defaultProps = {
  size: 24
}
var _default = SvgSeatBusiness
exports.default = _default
