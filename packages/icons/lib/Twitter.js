'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgTwitter = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgTwitter = function SvgTwitter(_ref) {
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
        'M8.3 19.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-1.3-1.4-3.3-1.7-4.9-.8s-2.5 2.7-2.1 4.5c-3.3-.1-6.3-1.7-8.4-4.3-1.1 1.9-.5 4.3 1.3 5.5-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.6.2-1.2.2-1.9.1.5 1.7 2.1 2.8 3.8 2.8C6.6 17.3 4.8 18 3 18c-.3 0-.7 0-1-.1 1.9 1.2 4.1 1.9 6.3 1.9'
    })
  )
}

exports.SvgTwitter = SvgTwitter
SvgTwitter.isIcon = true
SvgTwitter.defaultProps = {
  size: 24
}
var _default = SvgTwitter
exports.default = _default
