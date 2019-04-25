'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgQuilt = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgQuilt = function SvgQuilt(_ref) {
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
        'M9.4 19h5.3v-6.5H9.4V19zM3 19h5.3V5H3v14zm12.7 0H21v-6.5h-5.3V19zM9.4 5v6.5H21V5H9.4z'
    })
  )
}

exports.SvgQuilt = SvgQuilt
SvgQuilt.isIcon = true
SvgQuilt.defaultProps = {
  size: 24
}
var _default = SvgQuilt
exports.default = _default
