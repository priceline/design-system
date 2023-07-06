import { describe, expect, it, vi } from 'vitest'
import { Swatch } from '.'
import { fireEvent, render } from '../__test__/testing-library'

const mockColors = ['red', 'green', 'blue']

describe.skip('Swatch UI tests should be managed by Chromatic snapshots', () => {
  it('should render correctly', () => {
    const { getByTestId, asFragment } = render(<Swatch colors={mockColors} />)

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="jsbXcv"
        >
          <div
            class="feVKeH fduOiX"
          >
            <div
              class="hhzXbp"
              color="red"
              data-testid="0-red"
            />
            <div
              class="kXAbiR"
              color="green"
              data-testid="1-green"
            />
            <div
              class="UvWeo"
              color="blue"
              data-testid="2-blue"
            />
          </div>
        </div>
      </DocumentFragment>
    `)

    mockColors.map((color, idx) => {
      expect(getByTestId(`${idx}-${color}`)).toHaveStyle(`background-color: ${color}`)
      expect(getByTestId(`${idx}-${color}`)).toHaveStyle(`border: 1px solid #c0cad5}`)
    })
  })
})

describe('Swatch', () => {
  it('should call onClick callback with selected color value', () => {
    const mockOnClick = vi.fn()

    const { getByTestId } = render(<Swatch colors={mockColors} onClick={mockOnClick} />)

    mockColors.map((color, idx) => {
      expect(getByTestId(`${idx}-${color}`)).toHaveStyle('cursor: pointer')

      fireEvent.click(getByTestId(`${idx}-${color}`))
      expect(mockOnClick).toHaveBeenLastCalledWith(color)
    })
  })

  it('does not crash when onClick callback is not provided', () => {
    const mockOnClick = vi.fn()

    const { getByTestId } = render(<Swatch colors={mockColors} />)

    mockColors.map((color, idx) => {
      expect(getByTestId(`${idx}-${color}`)).not.toHaveStyle('cursor: pointer')

      fireEvent.click(getByTestId(`${idx}-${color}`))
    })

    expect(mockOnClick).not.toHaveBeenCalled()
  })
})
