'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgSeatEconomy = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgSeatEconomy = function SvgSeatEconomy(_ref) {
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
        'M7.6 5.4c-.8-.8-.8-2 0-2.8s2-.8 2.8 0c.8.8.8 2.1 0 2.8-.8.8-2 .8-2.8 0zM6 16V7H4v9c0 2.8 2.2 5 5 5h6v-2H9c-1.7 0-3-1.3-3-3zm14 4.1L14.9 15h-3.4v-3.7c1.4 1.2 3.6 2.2 5.5 2.2v-2.2c-1.7 0-3.6-.9-4.7-2l-1.4-1.6c-.2-.2-.4-.4-.7-.5-.3-.1-.6-.2-.9-.2C8 7 7 8 7 9.2V15c0 1.7 1.3 3 3 3h5.1l3.5 3.5 1.4-1.4z'
    })
  )
}

exports.SvgSeatEconomy = SvgSeatEconomy
SvgSeatEconomy.isIcon = true
SvgSeatEconomy.defaultProps = {
  size: 24
}
var _default = SvgSeatEconomy
exports.default = _default
