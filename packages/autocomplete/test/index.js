import React from 'react'
import TestRenderer from 'react-test-renderer'
import us from 'us'
import { Autocomplete } from '../src'

describe('Autocomplete', () => {
  test('renders', () => {
    const json = TestRenderer.create(
      <Autocomplete>
        <Autocomplete.Label>Test</Autocomplete.Label>
        <Autocomplete.Input />
        <Autocomplete.Menu>
          {us.STATES.map(state => (
            <Autocomplete.Item
              key={state.name}
              item={state}
              children={state.name}
            />
          ))}
        </Autocomplete.Menu>
      </Autocomplete>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
})
