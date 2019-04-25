'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgPool = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgPool = function SvgPool(_ref) {
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
        'M22 21c-1.1 0-1.7-.4-2.2-.6-.4-.2-.6-.4-1.1-.4-.6 0-.8.1-1.1.4-.5.3-1.1.6-2.2.6s-1.7-.4-2.2-.6c-.4-.3-.6-.4-1.2-.4s-.8.1-1.2.4c-.4.2-1 .6-2.1.6s-1.7-.4-2.2-.6c-.4-.3-.6-.4-1.2-.4s-.8.1-1.1.4c-.5.2-1.1.6-2.2.6v-2c.6 0 .8-.1 1.1-.4.5-.2 1.1-.6 2.2-.6s1.7.4 2.2.6c.4.3.6.4 1.2.4s.8-.1 1.2-.4c.4-.2 1-.6 2.1-.6s1.7.4 2.2.6c.4.2.6.4 1.2.4s.8-.1 1.1-.4c.4-.3 1.1-.6 2.2-.6s1.7.4 2.2.6c.4.2.6.4 1.1.4v2zm0-4.5c-1.1 0-1.7-.4-2.2-.6-.4-.2-.6-.4-1.1-.4-.6 0-.8.1-1.1.4-.5.3-1.1.6-2.2.6s-1.7-.4-2.2-.6c-.4-.2-.6-.4-1.1-.4-.6 0-.8.1-1.2.4-.4.3-1.1.6-2.2.6s-1.7-.4-2.2-.6c-.4-.2-.6-.4-1.2-.4s-.8.1-1.1.4c-.5.3-1.1.6-2.2.6v-2c.6 0 .8-.1 1.1-.4.5-.3 1.1-.6 2.2-.6s1.7.4 2.2.6c.4.2.6.4 1.1.4.6 0 .8-.1 1.2-.4.5-.3 1.1-.6 2.2-.6s1.7.4 2.2.6c.4.2.6.4 1.1.4.6 0 .8-.1 1.2-.4.4-.3 1.1-.6 2.2-.6s1.7.4 2.2.6c.4.2.6.4 1.1.4v2zM8.7 12c-.6 0-.8-.1-1.2-.4-.2-.1-.4-.2-.7-.4L10 8 9 7C7.9 5.9 6.8 5.5 5 5.5V3c2.5 0 3.9.4 5.5 2l6.4 6.4c-.1.1-.3.2-.4.2-.4.3-.6.4-1.2.4s-.8-.1-1.2-.4c-.4-.2-1-.6-2.1-.6s-1.7.4-2.2.6c-.4.3-.6.4-1.1.4zm7.8-4C15.1 8 14 6.9 14 5.5S15.1 3 16.5 3 19 4.1 19 5.5 17.9 8 16.5 8z'
    })
  )
}

exports.SvgPool = SvgPool
SvgPool.isIcon = true
SvgPool.defaultProps = {
  size: 24
}
var _default = SvgPool
exports.default = _default
