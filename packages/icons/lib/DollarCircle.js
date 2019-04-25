'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgDollarCircle = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgDollarCircle = function SvgDollarCircle(_ref) {
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
        'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1.4 16.1V20h-2.7v-1.9c-1.7-.4-3.2-1.5-3.3-3.4h2c.1 1.1.8 1.9 2.6 1.9 2 0 2.4-1 2.4-1.6 0-.8-.4-1.6-2.7-2.1-2.5-.6-4.2-1.6-4.2-3.7 0-1.7 1.4-2.8 3.1-3.2V4h2.7v1.9c1.9.5 2.8 1.9 2.9 3.4h-2c-.1-1.1-.6-1.9-2.2-1.9-1.5 0-2.4.7-2.4 1.6 0 .8.6 1.4 2.7 1.9 2 .5 4.2 1.4 4.2 3.9 0 2-1.4 3-3.1 3.3z'
    })
  )
}

exports.SvgDollarCircle = SvgDollarCircle
SvgDollarCircle.isIcon = true
SvgDollarCircle.defaultProps = {
  size: 24
}
var _default = SvgDollarCircle
exports.default = _default
