import { Cars } from 'pcln-icons'
import React from 'react'
import { render } from '../__test__/testing-library'
import { FloatingActionButton } from './FloatingActionButton'

describe('FloatingActionButton', () => {
  test('it renders', () => {
    const { asFragment } = render(<FloatingActionButton icon={Cars} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
