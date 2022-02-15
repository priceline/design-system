import React from 'react'
import { ThemeProvider } from 'styled-components'

import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import renderer from 'react-test-renderer'

import { createTheme } from '..'

global.rendererCreateWithTheme = (tree) =>
  renderer.create(<ThemeProvider theme={createTheme()}>{tree}</ThemeProvider>)

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0)
  }
