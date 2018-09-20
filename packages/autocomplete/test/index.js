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

  test('renders open', () => {
    const json = TestRenderer.create(
      <Autocomplete defaultIsOpen={true}>
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
    const [menu] = json.children
    expect(menu.children.length > 0).toBe(true)
  })

  test('renders with highlightedIndex', () => {
    const json = TestRenderer.create(
      <Autocomplete defaultIsOpen={true} defaultHighlightedIndex={0}>
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
    const [menu] = json.children
    const [firstItem] = menu.children
    expect(firstItem.props['data-highlighted']).toBe(true)
  })
})
