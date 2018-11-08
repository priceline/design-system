/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Calendar from 'pcln-icons/lib/Calendar'
import { IconButton } from '../src'

describe('IconButton', () => {
  test('renders', () => {
    const json = renderer.create(<IconButton />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(
      <IconButton onClick={handleClick}>
        <Calendar />
      </IconButton>
    )
    wrapper.simulate('click')
    expect(handleClick).toBeCalled()
  })
})
