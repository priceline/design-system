'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgEarlyBird = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgEarlyBird = function SvgEarlyBird(_ref) {
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
        'M19.1 14.9L22 12l-2.9-2.9V4.9H15L12 2 9.1 4.9H4.9V9L2 12l2.9 2.9V19H9l3 3 2.9-2.9H19v-4.2zM12 17.3c-2.9 0-5.3-2.4-5.3-5.3S9.1 6.7 12 6.7s5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z'
    })
  )
}

exports.SvgEarlyBird = SvgEarlyBird
SvgEarlyBird.isIcon = true
SvgEarlyBird.defaultProps = {
  size: 24
}
var _default = SvgEarlyBird
exports.default = _default
