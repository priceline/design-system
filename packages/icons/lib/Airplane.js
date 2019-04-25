'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgAirplane = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgAirplane = function SvgAirplane(_ref) {
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
        'M6.568 4.675l6.302 2.76-2.228 2.326-4.78-4.224a.25.25 0 0 1-.042-.387l.44-.44a.251.251 0 0 1 .308-.035zm10.403 6.847l2.76 6.315a.252.252 0 0 1-.036.309l-.44.439a.25.25 0 0 1-.387-.042l-4.23-4.8 2.333-2.221zM6.84 15.22l-2.692-2.262a.25.25 0 0 1-.074-.404l.56-.56a.25.25 0 0 1 .31-.034l3.147.82-1.16 2.249c-.028.056-.064.12-.091.19zm4.794 1.102l.894 3.183c.024.087 0 .18-.064.245l-.598.596a.25.25 0 0 1-.404-.072l-2.275-2.707.17-.085 2.277-1.16zm8.426-12.025l.041.044.017.02c.22.273.25.64.266.864.074 1.216-.075 2.074-.47 2.698l-.036.06a1.713 1.713 0 0 1-.327.407l-7.48 7.127-.054.051-.065.033-2.817 1.437c-.346.188-1.266.442-1.737-.03-.51-.509-.192-1.438-.028-1.748l1.435-2.807.033-.065.05-.052 7.125-7.479c.303-.322.633-.48.951-.606.637-.24 1.447-.307 2.566-.205a.898.898 0 0 1 .53.251zm-1.172 7.585a.248.248 0 0 1 .354 0l1.06 1.061a.247.247 0 0 1 0 .353l-1.385 1.386-.87-1.959.841-.84zM11.11 4.104a.248.248 0 0 1 .354 0l1.06 1.061a.247.247 0 0 1 0 .353l-.842.841-1.958-.869 1.386-1.386z'
    })
  )
}

exports.SvgAirplane = SvgAirplane
SvgAirplane.isIcon = true
SvgAirplane.defaultProps = {
  size: 24
}
var _default = SvgAirplane
exports.default = _default
