'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgZoomOut = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgZoomOut = function SvgZoomOut(_ref) {
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
        'M15 3l2.3 2.3-2.9 2.9 1.4 1.4 2.9-2.9L21 9V3h-6zM3 9l2.3-2.3 2.9 2.9 1.4-1.4-2.9-2.9L9 3H3v6zm6 12l-2.3-2.3 2.9-2.9-1.4-1.4-2.9 2.9L3 15v6h6zm12-6l-2.3 2.3-2.9-2.9-1.4 1.4 2.9 2.9L15 21h6v-6z'
    })
  )
}

exports.SvgZoomOut = SvgZoomOut
SvgZoomOut.isIcon = true
SvgZoomOut.defaultProps = {
  size: 24
}
var _default = SvgZoomOut
exports.default = _default
