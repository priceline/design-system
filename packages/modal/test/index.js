import React from 'react'
import renderer from 'react-test-renderer'
import Modal from '../src'

describe('Modal', () => {
  test('renders', () => {
    const json = renderer.create(<Modal />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
