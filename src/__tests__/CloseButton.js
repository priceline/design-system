/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import { CloseButton } from '..'

describe('CloseButton', () => {
  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(<CloseButton onClick={handleClick} />)
    wrapper.simulate('click')
    expect(handleClick).toBeCalled()
  })

  test('renders without props', () => {
    const json = renderer.create(<CloseButton />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
