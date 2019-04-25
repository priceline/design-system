'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgTrophy = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgTrophy = function SvgTrophy(_ref) {
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
        'M19.4 3h-2c-.8 0-1.8.9-1.8 1.8H8.4c0-.9-1-1.8-1.8-1.8H3v8.1c0 .9.9 1.8 1.8 1.8h2c.4 1.8 1.5 3.3 4.3 3.6v1.9c-2 .2-2.7 1.2-2.7 2.3v.3h7.2v-.3c0-1.2-.7-2.2-2.7-2.3v-1.9c2.8-.3 4-1.8 4.3-3.6h2c.9 0 1.8-.9 1.8-1.8V3h-1.6zM4.8 11.1V4.8h1.8v6.3H4.8zm14.4 0h-1.8V4.8h1.8v6.3z'
    })
  )
}

exports.SvgTrophy = SvgTrophy
SvgTrophy.isIcon = true
SvgTrophy.defaultProps = {
  size: 24
}
var _default = SvgTrophy
exports.default = _default
