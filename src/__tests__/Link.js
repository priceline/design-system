import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, Link } from '..'

describe('Link', () => {
  test('renders', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <Link>Dummy</Link>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
