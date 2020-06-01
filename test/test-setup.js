import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { createTheme } from '../packages/core/src'

global.renderWithTheme = (Tree) => {
  return render(<ThemeProvider theme={createTheme()}>{Tree} </ThemeProvider>)
}

global.rendererCreateWithTheme = (Tree) => {
  return renderer.create(
    <ThemeProvider theme={createTheme()}>{Tree}</ThemeProvider>
  )
}

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0)
  }

Enzyme.configure({ adapter: new Adapter() })
