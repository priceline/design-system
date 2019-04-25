'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgGlobe = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgGlobe = function SvgGlobe(_ref) {
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
        'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm6.9 6H16c-.3-1.2-.8-2.5-1.4-3.6 1.8.7 3.4 1.9 4.3 3.6zM12 4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.4 1.1-2.8 1.9-4zM4.3 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2h3.4c-.1.7-.1 1.3-.1 2s.1 1.3.1 2H4.3zm.8 2h3c.3 1.2.8 2.5 1.4 3.6-1.9-.7-3.5-1.9-4.4-3.6zM8 8H5c1-1.7 2.5-2.9 4.3-3.6C8.8 5.5 8.3 6.8 8 8zm4 12c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.4-1.1 2.8-1.9 4zm2.3-6H9.7c-.1-.7-.2-1.3-.2-2s.1-1.4.2-2h4.7c.1.6.2 1.3.2 2s-.2 1.3-.3 2zm.3 5.6c.6-1.1 1.1-2.3 1.4-3.6h2.9c-.9 1.6-2.5 2.9-4.3 3.6zm1.8-5.6c.1-.7.1-1.3.1-2s-.1-1.3-.1-2h3.4c.2.6.3 1.3.3 2s-.1 1.4-.3 2h-3.4z'
    })
  )
}

exports.SvgGlobe = SvgGlobe
SvgGlobe.isIcon = true
SvgGlobe.defaultProps = {
  size: 24
}
var _default = SvgGlobe
exports.default = _default
