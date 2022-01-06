import React from 'react'
import { render, fireEvent } from 'testing-library'
import ChoiceChip from './ChoiceChip'

const props = {
  id: 'testId',
  name: 'testName',
  expanded: false,
  disabled: false,
  onClick: jest.fn(),
}

describe('ChoiceChip', () => {
  test('Default', () => {
    const { getByTestId } = render(<ChoiceChip {...props} />)
    const choiceChip = getByTestId('testId')

    //id
    expect(choiceChip).toHaveAttribute('id', props.id)

    //name
    expect(choiceChip).toHaveAttribute('name', props.name)

    //type
    expect(choiceChip).toHaveAttribute('type', 'radio')

    //role
    expect(choiceChip).toHaveAttribute('role', 'radio')

    //onClick
    fireEvent.click(choiceChip)
    expect(props.onClick).toHaveBeenCalled()

    //(not) disabled
    expect(choiceChip).not.toHaveAttribute('disabled')

    //(not) checked
    expect(choiceChip).not.toHaveAttribute('checked')
  })

  test('Disabled', () => {
    const { getByTestId } = render(<ChoiceChip {...{ ...props, disabled: true }} />)

    expect(getByTestId('testId')).toHaveAttribute('disabled')
  })

  test('Checked', () => {
    const { getByTestId } = render(<ChoiceChip {...{ ...props, selected: true }} />)

    expect(getByTestId('testId')).toHaveAttribute('checked')
  })
})
