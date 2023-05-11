import React from 'react'
import { ThemeProvider, Box, Text } from '..'

export default {
  title: 'ThemeProvider',
  component: ThemeProvider,
}

// We could create a function to generate these arrays dynamically
const mediaSizes = {
  xs: ['99999em', '99999em', '99999em', '99999em', '99999em'],
  sm: ['32em', '99999em', '99999em', '99999em', '99999em'],
  md: ['0em', '40em', '99999em', '99999em', '99999em'],
  lg: ['0em', '0em', '48em', '99999em', '99999em'],
  xl: ['0em', '0em', '0em', '64em', '99999em'],
  xxl: ['0em', '0em', '0em', '0em', '80em'],
}

/** @public */
const FixedThemeWrapper = ({ children, size }) => {
  const customBreakpoints = mediaSizes[size]
  if (!children) return null
  if (!customBreakpoints) return children
  return (
    <ThemeProvider customBreakpoints={customBreakpoints} data-testid='theme-provider'>
      {children}
    </ThemeProvider>
  )
}

export const CustomBreakpoints = () => {
  return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map((size) => (
    <FixedThemeWrapper size={size} key='size'>
      <Box my={2} key={size} color='white' bg='primary' width={[1, 1 / 2, 1 / 4]}>
        <Box width='350px' mr={3}>
          <Text fontSize={[3, null, null, 5]}>TEST - {size}</Text>
        </Box>
      </Box>
    </FixedThemeWrapper>
  ))
}
