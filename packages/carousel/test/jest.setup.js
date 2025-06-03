import '@testing-library/jest-dom'
import 'jest-styled-components'
import { resetIntersectionMocking, setupIntersectionMocking } from 'react-intersection-observer/test-utils'

beforeEach(() => {
  setupIntersectionMocking(jest.fn)
})

afterEach(() => {
  resetIntersectionMocking()
})

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0)
  }
