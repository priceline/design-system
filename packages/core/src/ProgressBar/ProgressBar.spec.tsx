import React from 'react'
import { render, screen } from '../__test__/testing-library'
import ProgressBar from './ProgressBar'

const testProps = [{ color: 'warning' }, { color: 'caution' }, { color: 'primary' }, { color: 'success' }]

describe('ProgressBar', () => {
  it('Default progress bar (no colors)', () => {
    render(<ProgressBar steps={testProps} currentStep={0} />)
    const firstBar = screen.getByTestId('test-id-0')
    const secondBar = screen.getByTestId('test-id-1')
    const thirdBar = screen.getByTestId('test-id-2')
    const fourthBar = screen.getByTestId('test-id-3')
    expect(firstBar).toHaveStyleRule('background-color', '#f4f6f8')
    expect(secondBar).toHaveStyleRule('background-color', '#f4f6f8')
    expect(thirdBar).toHaveStyleRule('background-color', '#f4f6f8')
    expect(fourthBar).toHaveStyleRule('background-color', '#f4f6f8')
  })

  it('Basic progress bar with step level 3', () => {
    render(<ProgressBar steps={testProps} currentStep={3} />)
    const firstBar = screen.getByTestId('test-id-0')
    const secondBar = screen.getByTestId('test-id-1')
    const thirdBar = screen.getByTestId('test-id-2')
    const fourthBar = screen.getByTestId('test-id-3')
    expect(firstBar).toHaveStyleRule('background-color', '#0068ef')
    expect(secondBar).toHaveStyleRule('background-color', '#0068ef')
    expect(thirdBar).toHaveStyleRule('background-color', '#0068ef')
    expect(fourthBar).toHaveStyleRule('background-color', '#f4f6f8')
  })

  it('Basic progress bar with step level 4', () => {
    render(<ProgressBar steps={testProps} currentStep={4} />)
    const firstBar = screen.getByTestId('test-id-0')
    const secondBar = screen.getByTestId('test-id-1')
    const thirdBar = screen.getByTestId('test-id-2')
    const fourthBar = screen.getByTestId('test-id-3')
    expect(firstBar).toHaveStyleRule('background-color', '#0a0')
    expect(secondBar).toHaveStyleRule('background-color', '#0a0')
    expect(thirdBar).toHaveStyleRule('background-color', '#0a0')
    expect(fourthBar).toHaveStyleRule('background-color', '#0a0')
  })
})
