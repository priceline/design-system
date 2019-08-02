import React from 'react'
import renderer from 'react-test-renderer'
import { createTheme } from './packages/core/src'
import 'jest-styled-components'

global.renderWithTheme = Tree => {
  return renderer.create(React.cloneElement(Tree, { theme: createTheme() }))
}
