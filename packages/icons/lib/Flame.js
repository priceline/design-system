'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgFlame = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgFlame = function SvgFlame(_ref) {
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
        'M13.5 1s.7 2.7.7 4.8c0 2.1-1.3 3.7-3.4 3.7-2.1 0-3.6-1.7-3.6-3.7v-.4C5.2 7.8 4 10.9 4 14.3c0 4.4 3.6 8 8 8s8-3.6 8-8C20 8.9 17.4 4.1 13.5 1zm-1.8 18.3c-1.8 0-3.2-1.4-3.2-3.1 0-1.6 1.1-2.8 2.8-3.1 1.8-.4 3.6-1.2 4.6-2.6.4 1.3.6 2.7.6 4 0 2.7-2.1 4.8-4.8 4.8z'
    })
  )
}

exports.SvgFlame = SvgFlame
SvgFlame.isIcon = true
SvgFlame.defaultProps = {
  size: 24
}
var _default = SvgFlame
exports.default = _default
