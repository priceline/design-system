'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgCake = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgCake = function SvgCake(_ref) {
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
        'M12 6a2 2 0 0 0 2-2 1.69 1.69 0 0 0-.3-1L12 0l-1.7 3a1.69 1.69 0 0 0-.3 1 2 2 0 0 0 2 2zm4.6 10l-1.1-1.1-1 1.1a3.57 3.57 0 0 1-4.9 0l-1.1-1.1L7.4 16A3.49 3.49 0 0 1 5 17a3.61 3.61 0 0 1-2-.6V21a1.08 1.08 0 0 0 1 1h16a1.08 1.08 0 0 0 1-1v-4.6a3.38 3.38 0 0 1-2 .6 3.5 3.5 0 0 1-2.4-1zM18 9h-5V7h-2v2H6a3 3 0 0 0-3 3v1.5a2 2 0 0 0 2 2 2 2 0 0 0 1.4-.6l2.1-2.1 2.1 2.1a2.13 2.13 0 0 0 2.8 0l2.1-2.1 2.1 2.1a2 2 0 0 0 1.4.6 2 2 0 0 0 2-2V12a3 3 0 0 0-3-3z'
    })
  )
}

exports.SvgCake = SvgCake
SvgCake.isIcon = true
SvgCake.defaultProps = {
  size: 24
}
var _default = SvgCake
exports.default = _default
