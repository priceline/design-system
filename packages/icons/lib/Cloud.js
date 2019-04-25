'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgCloud = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgCloud = function SvgCloud(_ref) {
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
        'M18.1 10C17.6 7.2 15 5 12 5 9.6 5 7.5 6.4 6.5 8.4 4 8.6 2 10.8 2 13.3c0 2.8 2.2 5 5 5h10.8c2.3 0 4.2-1.9 4.2-4.2 0-2.1-1.7-3.9-3.9-4.1zm-.3 6.7H7c-1.8 0-3.3-1.5-3.3-3.3S5.2 10 7 10h.6c.5-1.9 2.3-3.3 4.4-3.3 2.5 0 4.6 2.1 4.6 4.6v.4h1.2c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z'
    })
  )
}

exports.SvgCloud = SvgCloud
SvgCloud.isIcon = true
SvgCloud.defaultProps = {
  size: 24
}
var _default = SvgCloud
exports.default = _default
