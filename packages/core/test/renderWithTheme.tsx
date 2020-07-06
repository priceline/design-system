import React from 'react'
import { ThemeProvider } from 'styled-components'

import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { createTheme } from '../src'
import { render, RenderResult } from '@testing-library/react'

const renderWithTheme = (Tree: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={createTheme()}>{Tree}</ThemeProvider>)
}

export default renderWithTheme
