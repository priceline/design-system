import React from 'react'
import { theme } from 'pcln-design-system'
import { render } from 'testing-library'

import PopoverContent from './PopoverContent'

describe('PopoverContent', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  it('shows the arrow', () => {
    const { queryByTestId } = render(<PopoverContent renderContent={() => 'Content'} />)
    expect(queryByTestId('popover-arrow')).toBeInTheDocument()
  })

  it('hides the arrow', () => {
    const { queryByTestId } = render(<PopoverContent hideArrow renderContent={() => 'Content'} />)
    expect(queryByTestId('popover-arrow')).not.toBeInTheDocument()
  })

  it('accepts border color', () => {
    const { queryByTestId } = render(<PopoverContent borderColor='primary' renderContent={() => 'Content'} />)
    expect(queryByTestId('dialog-content')).toHaveStyleRule('box-shadow', theme.shadows['overlay-md'])
  })

  it('has the correct z-index', () => {
    const zIndex = '123'
    const { getByRole } = render(<PopoverContent zIndex={zIndex} renderContent={() => 'Content'} />)
    expect(getByRole('dialog')).toHaveStyleRule('z-index', zIndex)
  })

  it('handles negative z-index by setting it to 1', () => {
    const zIndex = '-123'
    const { getByRole } = render(<PopoverContent zIndex={zIndex} renderContent={() => 'Content'} />)
    expect(getByRole('dialog')).toHaveStyleRule('z-index: 1')
  })

  it('handles max width as number', () => {
    const { getByRole } = render(<PopoverContent width={150} renderContent={() => 'Content'} />)
    expect(getByRole('dialog')).toHaveStyleRule('max-width', '150px')
  })

  it('handles max width as string', () => {
    const { getByRole } = render(<PopoverContent width='150px' renderContent={() => 'Content'} />)
    expect(getByRole('dialog')).toHaveStyleRule('max-width', '150px')
  })

  it('renders with overlay', () => {
    const { queryByTestId } = render(<PopoverContent renderContent={() => 'Content'} />)
    expect(queryByTestId('__pcln-popover_Overlay')).toBeInTheDocument()
  })

  it('does not render with overlay', () => {
    const { queryByTestId } = render(<PopoverContent hideOverlay renderContent={() => 'Content'} />)
    expect(queryByTestId('__pcln-popover_Overlay')).not.toBeInTheDocument()
  })
})
