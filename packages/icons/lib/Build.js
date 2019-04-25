'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgBuild = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgBuild = function SvgBuild(_ref) {
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
        'M21.7 18.3L13.5 10c.8-2.1.4-4.6-1.4-6.3-1.8-1.8-4.5-2.2-6.7-1.2l3.9 3.9-2.7 2.8-4-3.9c-1.1 2.2-.7 4.9 1.2 6.7 1.7 1.7 4.2 2.2 6.3 1.4l8.3 8.3c.4.4.9.4 1.3 0l2.1-2.1c.3-.3.3-1-.1-1.3z'
    })
  )
}

exports.SvgBuild = SvgBuild
SvgBuild.isIcon = true
SvgBuild.defaultProps = {
  size: 24
}
var _default = SvgBuild
exports.default = _default
