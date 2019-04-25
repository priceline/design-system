'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgInstagram = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgInstagram = function SvgInstagram(_ref) {
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
        'M21.9 7.9c0-1.1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.2-1.8s-1.1-.9-1.8-1.2c-.6-.2-1.4-.4-2.4-.5h-4c-2.7 0-3.1 0-4.1.1-1.1 0-1.8.2-2.4.5-.7.2-1.3.5-1.8 1.1s-.9 1.1-1.2 1.8c-.2.6-.4 1.3-.4 2.4C2 8.9 2 9.3 2 12s0 3.1.1 4.1c0 1.1.2 1.8.5 2.4.3.7.6 1.2 1.2 1.8s1.1.9 1.8 1.2c.6.2 1.4.4 2.4.5h4c2.7 0 3.1 0 4.1-.1 1.1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2s.9-1.1 1.2-1.8c.2-.6.4-1.4.5-2.4 0-1.1.1-1.4.1-4.1s-.1-3-.2-4zM20.1 16c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.6-1.1.7-.4.1-.9.3-1.9.3-1.1 0-1.4.1-4 .1-2.7 0-3 0-4-.1-1 0-1.5-.2-1.9-.3-.6-.1-.9-.3-1.2-.7-.3-.3-.6-.7-.7-1.1-.2-.4-.4-.9-.4-1.9 0-1.1-.1-1.4-.1-4s0-3 .1-4c0-1 .2-1.5.3-1.9.2-.5.4-.8.8-1.1.3-.3.7-.6 1.1-.7.4-.2.9-.4 1.9-.4 1.1 0 1.4-.1 4-.1s3 0 4 .1c1 0 1.5.2 1.9.3.5.2.8.4 1.1.8.3.3.6.7.7 1.1.2.4.4.9.4 1.9 0 1.1.1 1.4.1 4s0 3-.1 4zM12 6.9c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1-2.3-5.1-5.1-5.1zm0 8.4c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm6.5-8.6c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2.5-1.2 1.2-1.2 1.2.5 1.2 1.2z'
    })
  )
}

exports.SvgInstagram = SvgInstagram
SvgInstagram.isIcon = true
SvgInstagram.defaultProps = {
  size: 24
}
var _default = SvgInstagram
exports.default = _default
