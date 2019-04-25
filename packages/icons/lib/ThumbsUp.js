'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgThumbsUp = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgThumbsUp = function SvgThumbsUp(_ref) {
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
        'M3 20h3.3v-9.6H3V20zm18-8.8c0-.9-.7-1.6-1.6-1.6h-5.2l.8-3.7v-.2c0-.3-.2-.6-.3-.9l-.9-.8-5.4 5.3c-.3.2-.5.6-.5 1.1v8c0 .9.7 1.6 1.6 1.6h7.4c.7 0 1.2-.4 1.5-1l2.5-5.7c.1-.1.1-.3.1-.5v-1.6z'
    })
  )
}

exports.SvgThumbsUp = SvgThumbsUp
SvgThumbsUp.isIcon = true
SvgThumbsUp.defaultProps = {
  size: 24
}
var _default = SvgThumbsUp
exports.default = _default
