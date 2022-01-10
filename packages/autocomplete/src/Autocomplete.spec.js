import React from 'react'
import { render } from 'testing-library'
import us from 'us'
import { Autocomplete } from '.'

const usStates = us.STATES.map((state) => (
  <Autocomplete.Item key={state.name} item={state}>
    {state.name}
  </Autocomplete.Item>
))

describe('pcln-autocomplete', () => {
  it('should render correctly', () => {
    const { getByText, queryByText } = render(
      <Autocomplete>
        <Autocomplete.Label>Test</Autocomplete.Label>
        <Autocomplete.Input />
        <Autocomplete.Menu>{usStates}</Autocomplete.Menu>
      </Autocomplete>
    )

    getByText('Test')

    expect(queryByText('Alabama')).not.toBeInTheDocument()
    expect(queryByText('Wyoming')).not.toBeInTheDocument()
  })

  it('should render the "open" state correctly', () => {
    const { getByText } = render(
      <Autocomplete defaultIsOpen={true}>
        <Autocomplete.Menu>{usStates}</Autocomplete.Menu>
      </Autocomplete>
    )

    getByText('Alabama')
    getByText('Wyoming')
  })

  it('should highlight the correct list item', () => {
    const { getByText } = render(
      <Autocomplete defaultIsOpen={true} defaultHighlightedIndex={0}>
        <Autocomplete.Menu>{usStates}</Autocomplete.Menu>
      </Autocomplete>
    )

    expect(getByText('Alabama')).toHaveAttribute('data-highlighted', 'true')
  })
})
