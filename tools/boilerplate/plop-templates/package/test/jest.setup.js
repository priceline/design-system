import React from 'react'
import { ThemeProvider } from 'styled-components'

import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { createTheme } from '../src'


global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0)
  }
