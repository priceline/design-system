'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgGas = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgGas = function SvgGas(_ref) {
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
        'M19.8 7.2l-3.7-3.7L15 4.6l2.1 2.1c-.9.3-1.6 1.2-1.6 2.3 0 1.4 1.1 2.5 2.5 2.5.4 0 .7-.1 1-.2v7.2c0 .5-.4 1-1 1s-1-.5-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V9c0-.7-.3-1.3-.7-1.8zM12 10H6V5h6v5zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z'
    })
  )
}

exports.SvgGas = SvgGas
SvgGas.isIcon = true
SvgGas.defaultProps = {
  size: 24
}
var _default = SvgGas
exports.default = _default
