import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { Popover } from '..'

const noop = () => {}

describe('Popover', () => {
  test('renders', () => {
    const json = renderer
      .create(<Popover open={false} onDismiss={noop} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders open', () => {
    const json = renderer
      .create(<Popover open={true} onDismiss={noop} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Popover.Body renders', () => {
    const json = renderer.create(<Popover.Body />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('calls onDismiss callback on body click', () => {
    const onDismiss = jest.fn()
    const map = {}
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb
    })
    const wrapper = mount(
      <div id="root">
        <Popover open={true} onDismiss={onDismiss} />
      </div>
    )
    map.click({})
    expect(onDismiss.mock.calls.length).toBe(1)
  })

  test('removes event listener on unmount', () => {
    const onDismiss = jest.fn()
    const map = {}
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb
    })
    const wrapper = mount(
      <div id="root">
        <Popover open={true} onDismiss={onDismiss} />
      </div>
    )
    wrapper.unmount()
    map.click({})
    expect(onDismiss.mock.calls.length).toBe(0)
  })
})
