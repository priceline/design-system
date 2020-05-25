import {getContrastRatio, deprecatedPropType, borders, hasPaletteColor, Box, Card, Text} from 'pcln-types'
import theme from '../../core/src/theme.js'
import * as React from "react";

//
// Design System Utility Functions
// =============================================================================================

getContrastRatio('a', 'b') // $ExpectType number

deprecatedPropType('myProp') // $ExpectType Error | undefined

// $ExpectType object
borders({
  theme
})

hasPaletteColor({theme}) // $ExpectType boolean

//
// Design System Core Components
// =============================================================================================

const myBox = <Box width={'1'} bg={'primary'} /> // $ExpectType Element
const myCard = <Card width={'1'} bg={'primary'} borderRadius={'md'} /> // $ExpectType Element
const myText = <Text regular /> // $ExpectType Element
const mySpan = <Text.span regular /> // $ExpectType Element
