'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgSearchRecent = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgSearchRecent = function SvgSearchRecent(_ref) {
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
        'M17 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C17.5 5.9 14.6 3 11 3S4.5 6 4.5 9.5H2l3.8 4 4.2-4H6.5C6.5 7 8.5 5 11 5s4.5 2 4.5 4.5-2 4.5-4.5 4.5c-.7 0-1.3-.1-1.8-.4l-1.5 1.5c1 .6 2.1.9 3.3.9 1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5L22 19l-5-5z'
    })
  )
}

exports.SvgSearchRecent = SvgSearchRecent
SvgSearchRecent.isIcon = true
SvgSearchRecent.defaultProps = {
  size: 24
}
var _default = SvgSearchRecent
exports.default = _default
