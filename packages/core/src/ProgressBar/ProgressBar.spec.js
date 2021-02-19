import React from 'react'
import { render, screen } from 'testing-library'
import ProgressBar from './ProgressBar'
import renderer from 'react-test-renderer'

const testProps = [
  { color: 'warning' },
  { color: 'caution' },
  { color: 'primary' },
  { color: 'success' },
]
const testStepIndex = 3

describe('ProgressBar', () => {
  it('Basic progress bar', () => {
    render(<ProgressBar steps={testProps} stepIndex={testStepIndex} />)
    const firstBar = screen.getByTestId('test-id-0')
    const secondBar = screen.getByTestId('test-id-1')
    const thirdBar = screen.getByTestId('test-id-2')
    const fourthBar = screen.getByTestId('test-id-3')
    expect(firstBar).toHaveStyleRule('background-color', '#007aff')
    expect(secondBar).toHaveStyleRule('background-color', '#007aff')
    expect(thirdBar).toHaveStyleRule('background-color', '#007aff')
    expect(fourthBar).toHaveStyleRule('background-color', '#f4f6f8')
  })

  it('renders correctly', () => {
    const tree = renderer
      .create(<ProgressBar steps={testProps} stepIndex={testStepIndex} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
