jest.mock('@floating-ui/react-dom-interactions', () => ({
  ...jest.requireActual('@floating-ui/react-dom-interactions'),
  useFloating: () => ({}),
  useFocus: () => ({}),
  useHover: () => ({}),
}))

import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import renderer from 'react-test-renderer'

import { ThemeProvider } from '../ThemeProvider'

global.rendererCreateWithTheme = (tree) => renderer.create(<ThemeProvider>{tree}</ThemeProvider>)

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0)
  }
