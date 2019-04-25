'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgFridge = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgFridge = function SvgFridge(_ref) {
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
        'M6 21c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v17c0 .6-.4 1-1 1v1h-2v-1H8v1H6v-1zM19 9V8H5v1h14zM7 4v2h2V4H7zm0 7v6h2v-6H7z'
    })
  )
}

exports.SvgFridge = SvgFridge
SvgFridge.isIcon = true
SvgFridge.defaultProps = {
  size: 24
}
var _default = SvgFridge
exports.default = _default
