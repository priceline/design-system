/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { IconButton } from '..'

describe('IconButton', () => {
  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(<IconButton onClick={handleClick} />)
    wrapper.simulate('click')
    expect(handleClick).toBeCalled()
  })

  test('renders without props', () => {
    const json = renderer.create(<IconButton />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
