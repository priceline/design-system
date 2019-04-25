'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgBeach = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgBeach = function SvgBeach(_ref) {
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
        'M13.2 14.6l1.4-1.4 6.4 6.4-1.3 1.4-6.5-6.4zm4.3-5.8L20.4 6c-4-4-10.4-4-14.3-.1 3.9-1.3 8.3-.2 11.4 2.9zM6 6c-3.9 3.9-3.9 10.3.1 14.3L9 17.4C5.8 14.3 4.7 9.9 6 6zm.1 0c-.4 3 1.1 6.8 4.3 10l5.7-5.7C13 7.1 9.1 5.6 6.1 6z'
    })
  )
}

exports.SvgBeach = SvgBeach
SvgBeach.isIcon = true
SvgBeach.defaultProps = {
  size: 24
}
var _default = SvgBeach
exports.default = _default
