import {
  getContrastRatio,
  deprecatedPropType,
  borders,
  hasPaletteColor,
  Box,
  Card,
  Text,
  Absolute,
  Flex,
  Hide,
  ThemeProvider,
} from 'pcln-types'
import theme from '../../core/src/theme'
import * as React from 'react'

//
// Design System Utility Functions
// =============================================================================================

getContrastRatio('a', 'b') // $ExpectType number

deprecatedPropType('myProp') // $ExpectType Error | undefined

// $ExpectType object
borders({
  theme,
})

hasPaletteColor({ theme }) // $ExpectType boolean

//
// Design System Core Components
// =============================================================================================

// $ExpectType Element
const myThemeProvider = (
  <ThemeProvider theme={theme} customBreakpoints={['100px', '500px']} />
)

const myBox = <Box width={'1'} bg={'primary'} /> // $ExpectType Element
const myCard = <Card width={'1'} bg={'primary'} borderRadius={'md'} /> // $ExpectType Element
const myText = <Text regular /> // $ExpectType Element
const mySpan = <Text.span regular /> // $ExpectType Element
const myAbsolute = <Absolute bottom={1} top={1} left={1} right={1} /> // $ExpectType Element
const myFlex = <Flex flexDirection={['row', null, 'column']} m={3} /> // $ExpectType Element
const myHide = <Hide xs sm md lg xl xxl m={3} /> // $ExpectType Element
