import { getContrastRatio, deprecatedPropType, borders, hasPaletteColor } from 'pcln-types'
import theme from '../../core/src/theme.js'

getContrastRatio('a', 'b') // $ExpectType number

deprecatedPropType('myProp') // $ExpectType Error | undefined

// $ExpectType object
borders({
  color: 'primary.base',
  theme
})

hasPaletteColor({theme}) // $ExpectType boolean
