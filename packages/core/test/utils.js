import { mapProps, deprecatedPropType } from '../src/utils'

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
})
