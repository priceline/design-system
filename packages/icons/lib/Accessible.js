'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgAccessible = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgAccessible = function SvgAccessible(_ref) {
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
        'M19 13v-2c-1.5 0-3.1-.8-4.1-1.8l-1.3-1.5c-.1-.1-.3-.3-.6-.4-.3-.2-.8-.3-1.2-.3-1 .1-1.8 1-1.8 2.1V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.4c1.3 1 3.2 1.9 5 1.9zm-6.2 5h2.1c-.5 2.3-2.5 4-4.9 4-2.8 0-5-2.2-5-5 0-2.4 1.7-4.4 4-4.9v2.1c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3 1.3 0 2.4-.8 2.8-2zM12 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'
    })
  )
}

exports.SvgAccessible = SvgAccessible
SvgAccessible.isIcon = true
SvgAccessible.defaultProps = {
  size: 24
}
var _default = SvgAccessible
exports.default = _default
