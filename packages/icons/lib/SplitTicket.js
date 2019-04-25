'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgSplitTicket = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgSplitTicket = function SvgSplitTicket(_ref) {
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
        'M20 12c0 1.1.9 2 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4c1.1 0 2-.9 2-2s-.9-2-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v4c-1.1 0-2 .9-2 2zm-3 2.2v-1.1l-4.2-2.8v-3c0-.5-.4-.8-.8-.8s-.8.4-.8.8v3L7 13.1v1.1l4.2-1.4v3l-1.1.8v.8L12 17l1.8.5v-.8l-1.1-.8v-3l4.3 1.3z'
    })
  )
}

exports.SvgSplitTicket = SvgSplitTicket
SvgSplitTicket.isIcon = true
SvgSplitTicket.defaultProps = {
  size: 24
}
var _default = SvgSplitTicket
exports.default = _default
