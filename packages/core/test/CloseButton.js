import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { CloseButton } from '../src'

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
