'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgMicrowave = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgMicrowave = function SvgMicrowave(_ref) {
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
        'M21 5.5H3c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h1v1h2v-1h12v1h2v-1h1c.6 0 1-.4 1-1v-10c0-.6-.4-1-1-1zm-6 10H4v-8h11v8zm2 0c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm0-3c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm0-3c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1zm3 6h-1v-8h1v8z'
    })
  )
}

exports.SvgMicrowave = SvgMicrowave
SvgMicrowave.isIcon = true
SvgMicrowave.defaultProps = {
  size: 24
}
var _default = SvgMicrowave
exports.default = _default
