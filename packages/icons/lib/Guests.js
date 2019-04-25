'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgGuests = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgGuests = function SvgGuests(_ref) {
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
        'M16.5 12c1.4 0 2.5-1.1 2.5-2.5S17.9 7 16.5 7 14 8.1 14 9.5s1.1 2.5 2.5 2.5zM9 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm7.5 3c-1.8 0-5.5.9-5.5 2.8V19h11v-2.2c0-1.9-3.7-2.8-5.5-2.8zM9 13c-2.3 0-7 1.2-7 3.5V19h7v-2.2c0-.9.3-2.3 2.4-3.5-.9-.2-1.7-.3-2.4-.3z'
    })
  )
}

exports.SvgGuests = SvgGuests
SvgGuests.isIcon = true
SvgGuests.defaultProps = {
  size: 24
}
var _default = SvgGuests
exports.default = _default
