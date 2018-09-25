'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.Slider = void 0

var _react = _interopRequireDefault(require('react'))

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _rcSlider = require('rc-slider')

var _styledSystem = require('styled-system')

var _pclnDesignSystem = require('pcln-design-system')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}
    var ownKeys = Object.keys(source)
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable
        })
      )
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key])
    })
  }
  return target
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    obj[key] = value
  }
  return obj
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  position: relative;\n  height: 32px;\n  padding-top: 12px;\n  border-radius: 9999px;\n  touch-action: none;\n\n  ',
    ' ',
    ' & .rc-slider-rail, & .rc-slider-track {\n    height: 8px;\n  }\n  & .rc-slider-handle {\n    width: 32px;\n    height: 32px;\n    margin-left: -16px;\n    margin-top: -12px;\n  }\n\n  & .rc-slider-rail {\n    position: absolute;\n    width: 100%;\n    background-color: ',
    ';\n    border-radius: 9999px;\n  }\n\n  & .rc-slider-track {\n    position: absolute;\n    left: 0;\n    border-radius: 9999px;\n    background-color: currentcolor;\n  }\n\n  & .rc-slider-handle {\n    position: absolute;\n    cursor: pointer;\n    cursor: grab;\n    border-radius: 9999px;\n    border: solid 4px currentcolor;\n    background-color: #fff;\n    touch-action: pan-x;\n\n    &:hover {\n    }\n    &:active {\n    }\n    &:focus {\n      box-shadow: 0 0 0 2px ',
    ';\n    }\n  }\n\n  &.rc-slider-disabled {\n    color: ',
    ';\n    .rc-slider-track {\n    }\n    .rc-slider-handle {\n      box-shadow: none;\n      cursor: default;\n    }\n  }\n'
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  )
}

var Slider = (0, _styledComponents.default)(_rcSlider.Range)(
  _templateObject(),
  _styledSystem.space,
  _styledSystem.color,
  (0, _styledSystem.themeGet)('colors.lightGray'),
  (0, _styledSystem.themeGet)('colors.alphablue'),
  (0, _styledSystem.themeGet)('colors.borderGray')
)
exports.Slider = Slider
Slider.defaultProps = {
  allowCross: false,
  color: 'blue',
  theme: _pclnDesignSystem.theme
}
Slider.propTypes = _objectSpread(
  {},
  _styledSystem.space.propTypes,
  _styledSystem.color.propTypes
)
var _default = Slider
exports.default = _default
