import React from 'react'
import PopoverContent from './PopoverContent'

describe('PopoverContent', () => {
  it('shows the arrow', () => {
    const { queryByTestId } = renderWithTheme(
      <PopoverContent renderContent={() => 'Content'} />
    )
    expect(queryByTestId('popover-arrow')).toBeInTheDocument()
  })

  it('hides the arrow', () => {
    const { queryByTestId } = renderWithTheme(
      <PopoverContent hideArrow renderContent={() => 'Content'} />
    )
    expect(queryByTestId('popover-arrow')).not.toBeInTheDocument()
  })
})
