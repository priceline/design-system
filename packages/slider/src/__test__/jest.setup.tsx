import React from 'react'
import { ThemeProvider } from 'pcln-design-system'

import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import renderer from 'react-test-renderer'

global.rendererCreateWithTheme = (tree) => renderer.create(<ThemeProvider>{tree}</ThemeProvider>)

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0)
  }
