import React from 'react'
import { ThemeProvider } from 'styled-components'

import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import renderer, { ReactTestRenderer } from 'react-test-renderer'

import { createTheme } from '../src'

const rendererCreateWithTheme = (Tree: React.ReactNode): ReactTestRenderer => {
  return renderer.create(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
    <ThemeProvider theme={createTheme()}>{Tree}</ThemeProvider>
  )
}

export default rendererCreateWithTheme
