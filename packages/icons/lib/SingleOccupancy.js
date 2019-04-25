'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgSingleOccupancy = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgSingleOccupancy = function SvgSingleOccupancy(_ref) {
  var size = _ref.size,
    props = (0, _objectWithoutProperties2.default)(_ref, ['size'])
  return _react.default.createElement(
    _Svg.default,
    (0, _extends2.default)(
      {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'currentcolor'
      },
      props
    ),
    _react.default.createElement('path', {
      d:
        'M13.066 3.6a1.6 1.6 0 1 1-3.199 0 1.6 1.6 0 0 1 3.2 0zm.134 2.334c1 0 1.866.866 1.933 1.866v4.534l-1.667 1.6v6.8c0 .666-.533 1.266-1.2 1.266H10.8c-.667 0-1.2-.6-1.134-1.266v-6.667-.133L8 12.334V7.8c0-1 .8-1.866 1.8-1.866h3.4z'
    })
  )
}

exports.SvgSingleOccupancy = SvgSingleOccupancy
SvgSingleOccupancy.isIcon = true
SvgSingleOccupancy.defaultProps = {
  size: 24
}
var _default = SvgSingleOccupancy
exports.default = _default
