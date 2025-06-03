import React from 'react'
import { fireEvent, render } from '../../__test__/testing-library'
import { FilterChip } from './FilterChip'

const props = {
  id: 'testId',
  name: 'testFilterChipName',
  expanded: false,
  disabled: false,
  onClick: jest.fn(),
}

describe('FilterChip', () => {
  test('Default', () => {
    const { getByTestId } = render(<FilterChip {...props} />)
    const filterChip = getByTestId('testId')

    //id
    expect(filterChip).toHaveAttribute('id', props.id)

    //name
    expect(filterChip).toHaveAttribute('name', props.name)

    //type
    expect(filterChip).toHaveAttribute('type', 'checkbox')

    //onClick
    fireEvent.click(filterChip)
    expect(props.onClick).toHaveBeenCalled()

    //(not) disabled
    expect(filterChip).not.toHaveAttribute('disabled')

    //(not) checked
    expect(filterChip).not.toHaveAttribute('checked')
  })

  test('Disabled', () => {
    const { getByTestId } = render(<FilterChip {...{ ...props, disabled: true }} />)

    expect(getByTestId('testId')).toHaveAttribute('disabled')
  })

  test('Checked', () => {
    const { getByTestId } = render(<FilterChip {...{ ...props, selected: true }} />)

    expect(getByTestId('testId')).toHaveAttribute('checked')
  })
})
