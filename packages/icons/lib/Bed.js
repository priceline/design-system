'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgBed = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgBed = function SvgBed(_ref) {
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
        'M7.5 12.3c1.5 0 2.7-1.2 2.7-2.7S9 6.8 7.5 6.8 4.7 8 4.7 9.5s1.2 2.8 2.8 2.8zm10.9-5.5h-7.3v6.4H3.8V5H2v13.6h1.8v-2.7h16.4v2.7H22v-8.1c0-2-1.6-3.7-3.6-3.7z'
    })
  )
}

exports.SvgBed = SvgBed
SvgBed.isIcon = true
SvgBed.defaultProps = {
  size: 24
}
var _default = SvgBed
exports.default = _default
