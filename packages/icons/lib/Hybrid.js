'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgHybrid = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgHybrid = function SvgHybrid(_ref) {
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
        'M17 7.5c-9 2-11.1 8.2-13.2 13.3l1.9.7.9-2.3c.5.2 1 .3 1.4.3 11 0 14-17 14-17-1 2-8 2.2-13 3.2s-7 5.2-7 7.2 1.8 3.8 1.8 3.8C7 7.5 17 7.5 17 7.5z'
    })
  )
}

exports.SvgHybrid = SvgHybrid
SvgHybrid.isIcon = true
SvgHybrid.defaultProps = {
  size: 24
}
var _default = SvgHybrid
exports.default = _default
