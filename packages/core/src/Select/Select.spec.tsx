import { render, screen } from '../__test__/testing-library'
import { theme } from '../theme/theme'
import { createTheme } from '../utils/createTheme'
import { getPaletteColor } from '../utils/utils'
import { Select } from './Select'

describe('Select', () => {
  it('renders', () => {
    const { asFragment } = render(<Select />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders disabled', () => {
    const paletteTheme = createTheme(theme)
    render(
      <Select data-testId='disabled-select' defaultValue='Premium Economy' disabled>
        <option>Premium Economy</option>
      </Select>
    )

    const select = screen.getByTestId('disabled-select')
    expect(select).toBeDisabled()
    expect(select).toHaveStyleRule(
      'background-color',
      getPaletteColor('background.light')({ theme: paletteTheme }),
      { modifier: ':disabled' }
    )
    expect(select).toHaveStyleRule('color', getPaletteColor('text.light')({ theme: paletteTheme }), {
      modifier: ':disabled',
    })
    expect(select).toHaveStyleRule('cursor', 'not-allowed', { modifier: ':disabled' })
    expect(select).toHaveStyleRule('opacity', '1', { modifier: ':disabled' })
  })

  describe('variations', () => {
    describe('subtle variation', () => {
      it('should render correctly', () => {
        const paletteTheme = createTheme(theme)
        render(
          <Select data-testId='select' defaultValue='Premium Economy' variation='subtle' size='lg'>
            <option>Premium Economy</option>
          </Select>
        )

        const select = screen.getByTestId('select')
        expect(select).toHaveStyleRule(
          'background-color',
          getPaletteColor('background.base')({ theme: paletteTheme })
        )
        expect(select).toHaveStyleRule(
          'border-color',
          getPaletteColor('background.base')({ theme: paletteTheme })
        )
        expect(select).toHaveStyleRule('color', getPaletteColor('primary.base')({ theme: paletteTheme }))
        expect(select).toHaveStyleRule('font-weight', 'bold')
        expect(select).toHaveStyleRule('border-radius', '12px')
        expect(select).toHaveStyleRule(
          'background-color',
          getPaletteColor('background.tint')({ theme: paletteTheme }),
          {
            modifier: ':hover',
          }
        )
        expect(select).toHaveStyleRule(
          'border-color',
          getPaletteColor('background.tint')({ theme: paletteTheme }),
          {
            modifier: ':hover',
          }
        )
        expect(select).toHaveStyleRule('color', getPaletteColor('primary.dark')({ theme: paletteTheme }), {
          modifier: ':hover',
        })
        expect(select).toHaveStyleRule(
          'outline',
          `0px solid ${getPaletteColor('primary.dark')({ theme: paletteTheme })}`,
          {
            modifier: ':focus-visible',
          }
        )
        expect(select).toHaveStyleRule(
          'box-shadow',
          `0 0 0 2px ${getPaletteColor('primary.dark')({ theme: paletteTheme })}`,
          {
            modifier: ':focus-visible',
          }
        )
      })

      it('should render with round border in small or medium sizes', () => {
        render(
          <Select data-testId='select' defaultValue='Premium Economy' variation='subtle' size='md'>
            <option>Premium Economy</option>
          </Select>
        )

        const select = screen.getByTestId('select')
        expect(select).toHaveStyleRule('border-radius', '9999px')
      })

      it('should render correctly when disabled', () => {
        const paletteTheme = createTheme(theme)
        render(
          <Select data-testId='disabled-select' defaultValue='Premium Economy' disabled variation='subtle'>
            <option>Premium Economy</option>
          </Select>
        )

        const select = screen.getByTestId('disabled-select')
        expect(select).toBeDisabled()
        expect(select).toHaveStyleRule(
          'background-color',
          getPaletteColor('background.light')({ theme: paletteTheme }),
          { modifier: ':disabled' }
        )
        expect(select).toHaveStyleRule('color', getPaletteColor('text.light')({ theme: paletteTheme }), {
          modifier: ':disabled',
        })
        expect(select).toHaveStyleRule('cursor', 'not-allowed', { modifier: ':disabled' })
        expect(select).toHaveStyleRule('opacity', '1', { modifier: ':disabled' })
      })
    })
  })
})
