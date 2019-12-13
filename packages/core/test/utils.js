import {
  deprecatedPropType,
  deprecatedColorValue,
  hexToRgb,
  decomposeColor,
  getLuminance,
  getContrastRatio,
  applyVariations,
  getPaletteColor,
  hasPaletteColor,
  getTextColorOn,
  getByPalette,
  color,
  borders
} from '../src/utils'
import createTheme from '../src/createTheme'

describe('utils', () => {
  describe('deprecatedPropType', () => {
    test('returns an error when using a deprecated prop', () => {
      const err = deprecatedPropType('newProp')(
        {
          oldProp: true
        },
        'oldProp',
        'Component'
      )
      expect(err).toBeTruthy()
    })

    test('returns undefined when using a valid prop', () => {
      const err = deprecatedPropType('newProp')(
        {
          newProp: true
        },
        'oldProp',
        'Component'
      )
      expect(err).toBe(undefined)
    })
  })

  describe('deprecatedColorValue', () => {
    test('returns an error when when using a deprecated color prop value', () => {
      expect(
        deprecatedColorValue()(
          {
            color: 'blue',
            theme: createTheme()
          },
          'color',
          'Component'
        )
      ).toBeTruthy()
    })

    test('returns undefined when using a valid palette color', () => {
      expect(
        deprecatedColorValue()(
          {
            color: 'primary',
            theme: createTheme()
          },
          'color',
          'Component'
        )
      ).toBeUndefined()
      expect(
        deprecatedColorValue()(
          {
            color: 'primary.base',
            theme: createTheme()
          },
          'color',
          'Component'
        )
      ).toBeUndefined()
    })
  })

  describe('hexToRgb', () => {
    test('converts hex to rgb', () => {
      expect(hexToRgb('#007aff')).toEqual('rgb(0, 122, 255)')
      expect(hexToRgb('#000')).toEqual('rgb(0, 0, 0)')
    })

    test('returns empty if invalid hex', () => {
      expect(hexToRgb('#00')).toEqual('')
    })
  })

  describe('decomposeColor', () => {
    test('decomposes a hex or rgb', () => {
      expect(decomposeColor('#007aff')).toEqual([0, 122, 255])
      expect(decomposeColor('#000')).toEqual([0, 0, 0])
      expect(decomposeColor('rgb(0, 122, 255)')).toEqual([0, 122, 255])
    })
  })

  describe('getLuminance', () => {
    test('returns the luminance of a color', () => {
      expect(getLuminance('#007aff')).toBeCloseTo(0.21)
      expect(getLuminance('#000')).toBeCloseTo(0)
      expect(getLuminance('#fff')).toBeCloseTo(1)
    })
  })

  describe('getContrastRatio', () => {
    test('returns the contrast ratio between two colors', () => {
      expect(getContrastRatio('#007aff', '#000000')).toBeCloseTo(5.23)
      expect(getContrastRatio('#007aff', '#ffffff')).toBeCloseTo(4.02)
    })
  })

  describe('applyVariations', () => {
    test('applies component style overrides', () => {
      const props = {
        theme: createTheme({
          componentStyles: { Button: { primary: 'color: red;' } }
        }),
        color: 'primary'
      }
      const override = applyVariations('Button')(props)
      expect(override[1](props)).toEqual(
        props.theme.componentStyles.Button.primary
      )
    })

    test('applies variations with component style overrides', () => {
      const props = {
        theme: createTheme({
          componentStyles: { Button: { outline: { primary: 'color: red;' } } }
        }),
        color: 'primary',
        variation: 'outline'
      }
      const variations = { outline: 'color: blue;' }
      const override = applyVariations('Button', variations)(props)
      expect(override[1]).toEqual(variations.outline)
      expect(override[3](props)).toEqual(
        props.theme.componentStyles.Button.outline.primary
      )
    })
  })

  describe('getPaletteColor', () => {
    const props = {
      theme: createTheme()
    }

    test('returns a palette shade', () => {
      expect(getPaletteColor('primary.base')(props)).toEqual(
        props.theme.palette.primary.base
      )
      expect(getPaletteColor('primary', 'base')(props)).toEqual(
        props.theme.palette.primary.base
      )
      expect(getPaletteColor('primary.dark', 'base')(props)).toEqual(
        props.theme.palette.primary.dark
      )

      // legacy support
      expect(getPaletteColor('orange', 'base')(props)).toEqual(
        props.theme.colors.orange
      )
      expect(getPaletteColor('#ffffff', 'base')(props)).toEqual('#ffffff')
    })

    test('returns a palette shade when provided a color prop', () => {
      expect(getPaletteColor('base')({ ...props, color: 'primary' })).toEqual(
        props.theme.palette.primary.base
      )
      expect(
        getPaletteColor('base')({ ...props, color: 'primary.dark' })
      ).toEqual(props.theme.palette.primary.dark)

      // legacy support
      expect(getPaletteColor('base')({ ...props, color: 'orange' })).toEqual(
        props.theme.colors.orange
      )
      expect(getPaletteColor('base')({ ...props, color: '#ffffff' })).toEqual(
        '#ffffff'
      )
    })
  })

  describe('hasPaletteColor', () => {
    test('returns true if palette color', () => {
      expect(
        hasPaletteColor({ theme: createTheme(), color: 'primary' })
      ).toBeTruthy()
      expect(
        hasPaletteColor({ theme: createTheme(), color: 'primary.dark' })
      ).toBeTruthy()
    })

    test('returns false if not a palette color', () => {
      expect(
        hasPaletteColor({ theme: createTheme(), color: 'orange' })
      ).toBeFalsy()
    })
  })

  describe('getTextColorOn', () => {
    const props = { theme: createTheme() }

    test('returns correct text color', () => {
      expect(getTextColorOn('test')({ theme: {} })).toEqual('')
      expect(getTextColorOn('abcde')(props)).toEqual(
        props.theme.palette.text.base
      )
      expect(getTextColorOn('primary.light')(props)).toEqual(
        props.theme.palette.text.base
      )
      expect(getTextColorOn('primary.base')(props)).toEqual(
        props.theme.palette.text.lightest
      )
    })

    test('returns correct text color with custom contrast ratio', () => {
      expect(
        getTextColorOn('primary.dark')({
          theme: { ...props.theme, contrastRatio: 9.2 }
        })
      ).toEqual(props.theme.palette.text.base)
    })

    test('can be driven by a color prop', () => {
      expect(getTextColorOn('light')({ ...props, color: 'primary' })).toEqual(
        props.theme.palette.text.base
      )
      expect(getTextColorOn('dark')({ ...props, color: 'primary' })).toEqual(
        props.theme.palette.text.lightest
      )
    })
  })

  describe('getByPalette', () => {
    test('returns the correct style', () => {
      const props = { theme: createTheme(), bg: 'background', color: 'primary' }
      expect(getByPalette(props)).toEqual(
        expect.arrayContaining([
          '\n  background-color: ',
          props.theme.palette.background.base,
          ';\n  color: ',
          props.theme.palette.primary.base
        ])
      )
    })
  })

  describe('color', () => {
    const props = { theme: createTheme() }

    test('returns empty string if missing props', () => {
      expect(color({})).toEqual('')
      expect(color({ color: 'primary', bg: 'background' })).toEqual('')
      expect(color({ bg: 'background' })).toEqual('')
    })

    test('returns the correct style', () => {
      expect(color({ ...props, bg: 'background' })).toEqual(
        expect.arrayContaining([
          '\n      background-color: ',
          props.theme.palette.background.base
        ])
      )
      expect(color({ ...props, color: 'primary' })).toEqual(
        expect.arrayContaining([
          '\n      background-color: ',
          props.theme.palette.primary.base,
          ';\n      color: ',
          props.theme.palette.text.lightest
        ])
      )
      expect(color({ ...props, color: 'notify' })).toEqual(
        expect.arrayContaining([
          '\n      background-color: ',
          props.theme.palette.notify.base,
          ';\n      color: ',
          props.theme.palette.text.base
        ])
      )
      expect(color({ ...props, bg: 'background', color: 'primary' })).toEqual(
        expect.arrayContaining([
          '\n  background-color: ',
          props.theme.palette.background.base,
          ';\n  color: ',
          props.theme.palette.primary.base
        ])
      )

      // legacy support
      expect(color({ ...props, color: 'text' })).toEqual(
        expect.arrayContaining(['\n          color: ', props.theme.colors.text])
      )
      expect(color({ ...props, color: 'blue' })).toEqual(
        expect.arrayContaining(['\n      color: ', props.theme.colors.blue])
      )
      expect(color({ ...props, color: 'blue', bg: 'green' })).toEqual(
        expect.arrayContaining([
          '\n  background-color: ',
          props.theme.colors.green,
          ';\n  color: ',
          props.theme.colors.blue
        ])
      )
    })
  })

  describe('borders', () => {
    test('returns the correct style', () => {
      const props = { theme: createTheme() }
      expect(borders(props)).toEqual({
        'border-color': props.theme.palette.border.base,
        ':focus': {
          outline: 0,
          'border-color': props.theme.palette.primary.base,
          'box-shadow': `0 0 0 2px ${props.theme.palette.primary.base}`
        }
      })
      expect(borders({ ...props, color: 'primary' })).toEqual({
        'border-color': props.theme.palette.primary.base,
        ':focus': {
          outline: 0,
          'border-color': props.theme.palette.primary.base,
          'box-shadow': `0 0 0 2px ${props.theme.palette.primary.base}`
        }
      })
    })
  })
})
