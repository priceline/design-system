'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgLoyalty = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgLoyalty = function SvgLoyalty(_ref) {
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
        'M21.4 11.6l-9-9c-.3-.4-.8-.6-1.4-.6H4c-1.1 0-2 .9-2 2v7c0 .6.2 1.1.6 1.4l9 9c.4.4.9.6 1.4.6s1.1-.2 1.4-.6l7-7c.4-.4.6-.9.6-1.4s-.2-1.1-.6-1.4zM5.5 7C4.7 7 4 6.3 4 5.5S4.7 4 5.5 4 7 4.7 7 5.5 6.3 7 5.5 7zm11.8 8.3L13 19.5l-4.3-4.3c-.4-.4-.7-1-.7-1.7 0-1.4 1.1-2.5 2.5-2.5.7 0 1.3.3 1.8.7l.7.7.7-.7c.5-.4 1.1-.7 1.8-.7 1.4 0 2.5 1.1 2.5 2.5 0 .7-.3 1.3-.7 1.8z'
    })
  )
}

exports.SvgLoyalty = SvgLoyalty
SvgLoyalty.isIcon = true
SvgLoyalty.defaultProps = {
  size: 24
}
var _default = SvgLoyalty
exports.default = _default
