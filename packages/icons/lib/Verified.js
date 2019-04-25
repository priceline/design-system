'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgVerified = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgVerified = function SvgVerified(_ref) {
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
        'M12 2L4 5.6v5.5c0 5 3.4 9.8 8 10.9 4.6-1.1 8-5.9 8-10.9V5.6L12 2zm-1.8 14.5l-3.6-3.6 1.3-1.3 2.3 2.3 5.9-6 1.3 1.3-7.2 7.3z'
    })
  )
}

exports.SvgVerified = SvgVerified
SvgVerified.isIcon = true
SvgVerified.defaultProps = {
  size: 24
}
var _default = SvgVerified
exports.default = _default
