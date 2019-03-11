import React from 'react'
import { render } from 'react-testing-library'
import { ModalHeader, SmallModalHeader } from '../src/index'
import { ThemeProvider, theme } from 'pcln-design-system'

const customRender = (node, ...options) => {
  const rendered = render(
    <ThemeProvider theme={theme}>{node}</ThemeProvider>,
    options
  )

  return {
    ...rendered,
    rerender: (ui, options) =>
      customRender(ui, { container: rendered.container, ...options })
  }
}

describe('SmallModalHeader', () => {
  const { rerender } = customRender(<SmallModalHeader bg="green" />)

  test('render', () => {
    const { container } = rerender(<SmallModalHeader bg="green" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('ModalHeader', () => {
  const { rerender } = customRender(<ModalHeader bg="green" />)

  test('render', () => {
    const { container } = rerender(
      <ModalHeader
        bg="green"
        title="test"
        onClose={() => {
          console.log('close')
        }}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
