'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgKey = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgKey = function SvgKey(_ref) {
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
        'M12.6 10.1C11.8 8 9.8 6.5 7.5 6.5 4.4 6.5 2 8.9 2 12s2.4 5.5 5.5 5.5c2.4 0 4.4-1.5 5.1-3.6h4v3.6h3.6v-3.7H22v-3.7h-9.4zm-5.1 3.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z'
    })
  )
}

exports.SvgKey = SvgKey
SvgKey.isIcon = true
SvgKey.defaultProps = {
  size: 24
}
var _default = SvgKey
exports.default = _default
