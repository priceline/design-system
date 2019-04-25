'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgTimer = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgTimer = function SvgTimer(_ref) {
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
        'M15 1.5H9v2h6v-2zm-4 13h2v-6h-2v6zm8-6.6l1.4-1.4c-.4-.5-.9-1-1.4-1.4l-1.4 1.4c-1.6-1.2-3.5-2-5.6-2-5 0-9 4-9 9s4 9 9 9 9-4 9-9c0-2.1-.7-4.1-2-5.6zm-7 12.6c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z'
    })
  )
}

exports.SvgTimer = SvgTimer
SvgTimer.isIcon = true
SvgTimer.defaultProps = {
  size: 24
}
var _default = SvgTimer
exports.default = _default
