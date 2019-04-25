'use strict'

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _lodash = _interopRequireDefault(require('lodash.upperfirst'))

var icons = _interopRequireWildcard(require('./index'))

var Icon = function Icon(_ref) {
  var name = _ref.name,
    props = (0, _objectWithoutProperties2.default)(_ref, ['name'])
  var Component = icons[name] || icons[(0, _lodash.default)(name)]
  if (!Component) return false
  return _react.default.createElement(Component, props)
}

Icon.defaultProps = {
  size: 24
}
Icon.displayName = 'Icon'
Icon.propTypes = {
  name: function name(props, key, componentName) {
    var name = props[key]

    if (!icons[name] && !icons[(0, _lodash.default)(name)]) {
      return new Error(
        'Unknown name prop `'
          .concat(name, '` supplied to `')
          .concat(componentName, '`')
      )
    } else if (!icons[name]) {
      return new Error(
        'Icon name prop should be uppercase.\n' +
          'Use `'
            .concat((0, _lodash.default)(name), '` instead of ')
            .concat(name, '.')
      )
    }
  }
}
var _default = Icon
exports.default = _default
