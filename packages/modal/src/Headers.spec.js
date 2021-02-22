import React from 'react'
import { render } from 'testing-library'
import { ModalHeader, SmallModalHeader } from './index'

describe('SmallModalHeader', () => {
  test('render', () => {
    const { container } = render(<SmallModalHeader bg='secondary' />)
    expect(container).toMatchSnapshot()
  })
})

describe('ModalHeader', () => {
  test('render', () => {
    const { container } = render(
      <ModalHeader
        bg='secondary'
        title='test'
        onClose={() => {
          console.log('close')
        }}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
