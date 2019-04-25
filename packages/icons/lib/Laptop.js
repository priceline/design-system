'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgLaptop = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgLaptop = function SvgLaptop(_ref) {
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
        'M18.6 17.2c.9 0 1.6-.8 1.6-1.8V6.8c0-1-.7-1.8-1.6-1.8H5.4c-.9 0-1.7.8-1.7 1.8v8.8c0 1 .7 1.8 1.6 1.8H2V19h20v-1.8h-3.4zM5.4 6.8h13.4v8.8H5.4V6.8z'
    })
  )
}

exports.SvgLaptop = SvgLaptop
SvgLaptop.isIcon = true
SvgLaptop.defaultProps = {
  size: 24
}
var _default = SvgLaptop
exports.default = _default
