import React from 'react'
import { fireEvent, render, screen } from '../__test__/testing-library'
import { Label } from '..'

describe('Label', () => {
  test('it renders', () => {
    const json = rendererCreateWithTheme(<Label />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Label hidden renders', () => {
    const json = rendererCreateWithTheme(<Label hidden />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Label nowrap renders', () => {
    const json = rendererCreateWithTheme(<Label nowrap />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Label width renders', () => {
    const json = rendererCreateWithTheme(<Label width={1 / 2} nowrap />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Label clickable renders with cursor pointer', () => {
    const mockOnClick = jest.fn()
    render(<Label onClick={mockOnClick}>Clickable Label</Label>)

    const label = screen.getByText('Clickable Label')
    expect(label).toHaveStyleRule('cursor', 'pointer')

    expect(mockOnClick).toHaveBeenCalledTimes(0)
    fireEvent.click(label)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
