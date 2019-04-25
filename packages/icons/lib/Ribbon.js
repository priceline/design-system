'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgRibbon = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgRibbon = function SvgRibbon(_ref) {
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
        'M11 17.5c.1 0 .1 0 .2-.1L9 22l-1.5-2-2.5.2 2.1-4.4h.1c.2.2.4.4.6.7.4.5.8 1 1.4 1.2.2.1.4.1.5.1.5 0 .9-.1 1.3-.3zm5.8-1.7c-.2.2-.4.4-.6.7-.4.5-.8 1-1.4 1.2-.6.2-1.2 0-1.8-.2-.1 0-.1 0-.2-.1L15 22l1.5-2 2.5.2-2.2-4.4zM20 9.4c0 .3-.3.7-.6 1.1-.2.3-.5.7-.6 1-.1.4-.1.8-.1 1.2 0 .5 0 .9-.2 1.2s-.6.4-1.1.6c-.4.1-.8.3-1.2.5-.3.2-.6.6-.8.9-.3.4-.6.7-.9.8-.3.1-.7 0-1.2-.2-.4-.1-.8-.2-1.3-.2-.4 0-.9.1-1.3.2-.5.1-.9.3-1.2.2-.3-.1-.6-.5-.9-.8-.3-.3-.5-.7-.8-.9s-.8-.4-1.2-.5c-.5-.2-.9-.3-1.1-.6s-.2-.7-.2-1.2c0-.4 0-.8-.1-1.2s-.4-.7-.6-1c-.3-.4-.6-.7-.6-1.1s.3-.7.6-1.1c.2-.3.4-.6.6-1 .1-.4.1-.9.1-1.3 0-.5 0-.9.2-1.2.2-.3.6-.4 1.1-.6.4 0 .8-.2 1.2-.4.3-.2.6-.6.8-.9.3-.4.6-.8.9-.9h.2c.3 0 .6.1.9.2.4.1.8.2 1.3.2.4 0 .9-.1 1.3-.2.5-.1.9-.3 1.2-.2s.6.5.9.8c.3.3.5.7.8.9.5.3.9.5 1.3.6.5.2.9.3 1.1.6.2.3.2.7.2 1.2 0 .4 0 .8.1 1.2.1.4.4.7.6 1 .3.4.6.8.6 1.1zm-3.5-1.8l-.9-.9-4.9 4.9-2.3-2.3-.9.9 3.2 3.2 5.8-5.8z'
    })
  )
}

exports.SvgRibbon = SvgRibbon
SvgRibbon.isIcon = true
SvgRibbon.defaultProps = {
  size: 24
}
var _default = SvgRibbon
exports.default = _default
