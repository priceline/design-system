'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgWifi = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgWifi = function SvgWifi(_ref) {
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
        'M2 9.1l1.8 1.8c4.5-4.5 11.8-4.5 16.4 0L22 9.1c-5.5-5.5-14.5-5.5-20 0zm7.3 7.2L12 19l2.7-2.7c-1.4-1.5-3.9-1.5-5.4 0zm-3.7-3.6l1.8 1.8c2.5-2.5 6.5-2.5 9.1 0l1.8-1.8c-3.5-3.5-9.1-3.5-12.7 0z'
    })
  )
}

exports.SvgWifi = SvgWifi
SvgWifi.isIcon = true
SvgWifi.defaultProps = {
  size: 24
}
var _default = SvgWifi
exports.default = _default
