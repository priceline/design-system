import { mapProps, deprecatedPropType, getTextColorOn } from '../src/utils'

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

  describe('getTextColorOn', () => {
    test('returns empty string if no palette', () => {
      expect(getTextColorOn('test')({ theme: {} })).toEqual('')
    })

    test('returns default if no color', () => {
      expect(
        getTextColorOn('test')({
          theme: { palette: { text: { base: 'base' } } }
        })
      ).toEqual('base')
    })
  })
})
