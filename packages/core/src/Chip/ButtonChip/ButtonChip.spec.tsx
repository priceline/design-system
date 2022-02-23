import React from 'react'
import { render, fireEvent } from '../../__test__/testing-library'
import ButtonChip from './ButtonChip'

const props = {
  id: 'testId',
  m: 2,
  expanded: false,
  disabled: false,
  onClick: jest.fn(),
}

describe('ButtonChip', () => {
  test('Default', () => {
    const { getByTestId } = render(<ButtonChip {...props} />)
    const buttonChip = getByTestId('testId')

    //onClick
    fireEvent.click(buttonChip)
    expect(props.onClick).toHaveBeenCalled()

    //aria-expanded
    expect(buttonChip).toHaveAttribute('aria-expanded', 'false')

    //(not) disabled
    expect(getByTestId('testId')).not.toHaveAttribute('disabled')

    //style
    expect(buttonChip).toHaveStyleRule('margin', '8px')
  })

  test('Disabled', () => {
    const { getByTestId } = render(<ButtonChip {...{ ...props, disabled: true }} />)

    expect(getByTestId('testId')).toHaveAttribute('disabled')
  })

  test('Expanded', () => {
    const { getByTestId } = render(<ButtonChip {...{ ...props, expanded: true }} />)

    expect(getByTestId('testId')).toHaveAttribute('aria-expanded', 'true')
  })
})
