import React from 'react'
import renderer from 'react-test-renderer'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'
import { createTheme } from './packages/core/src'
import 'jest-styled-components'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

global.renderWithTheme = Tree => {
  return render(<ThemeProvider theme={createTheme()} children={Tree} />)
}

global.rendererCreateWithTheme = Tree => {
  return renderer.create(
    <ThemeProvider theme={createTheme()} children={Tree} />
  )
}

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0)
  }

Enzyme.configure({ adapter: new Adapter() })
