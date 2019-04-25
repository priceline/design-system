'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgSecurity = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgSecurity = function SvgSecurity(_ref) {
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
        'M12 2L4 5.6v5.5c0 5 3.4 9.8 8 10.9 4.6-1.1 8-5.9 8-10.9V5.6L12 2zm0 10h6.2c-.5 3.7-2.9 7.1-6.2 8.1V12H5.8V6.8L12 4v8z'
    })
  )
}

exports.SvgSecurity = SvgSecurity
SvgSecurity.isIcon = true
SvgSecurity.defaultProps = {
  size: 24
}
var _default = SvgSecurity
exports.default = _default
