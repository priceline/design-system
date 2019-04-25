'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgLateNight = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgLateNight = function SvgLateNight(_ref) {
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
        'M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm.8 5c-2.9 0-5.3 2.2-5.3 5s2.4 5 5.3 5c1 0 1.9-.2 2.7-.7-1.6-.9-2.7-2.5-2.7-4.3s1.1-3.5 2.7-4.3c-.8-.5-1.7-.7-2.7-.7z'
    })
  )
}

exports.SvgLateNight = SvgLateNight
SvgLateNight.isIcon = true
SvgLateNight.defaultProps = {
  size: 24
}
var _default = SvgLateNight
exports.default = _default
