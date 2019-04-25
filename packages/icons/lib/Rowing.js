'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgRowing = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgRowing = function SvgRowing(_ref) {
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
        'M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20l-3 3-3-3v-1.5l-7.1-7.1c-.3.1-.6.1-.9.1v-2.2c1.7 0 3.6-.9 4.7-2l1.4-1.6c.2-.2.4-.4.7-.5.2-.1.6-.2.9-.2C16 6 17 7 17 8.3V14c0 .8-.4 1.6-.9 2.2l-3.6-3.6v-2.3c-.6.5-1.4 1-2.3 1.4l6.3 6.3H18l3 3z'
    })
  )
}

exports.SvgRowing = SvgRowing
SvgRowing.isIcon = true
SvgRowing.defaultProps = {
  size: 24
}
var _default = SvgRowing
exports.default = _default
