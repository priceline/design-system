import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0)
  }
