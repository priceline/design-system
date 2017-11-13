import React from 'react'
import { Box, Flex, Heading, Truncate, theme } from 'pcln-design-system'
import PageTitle from './PageTitle'
import Description from './Description'

const Typography = props => (
  <Box px={3} py={4}>
    <PageTitle>Typography</PageTitle>
    <Description>
      The design system includes base styles for typography and a typographic
      scale for determining font sizes.
    </Description>
    <Box py={4}>
      {[...theme.fontSizes].reverse().map((fontSize, i) => (
        <Heading key={fontSize} fontSize={fontSize} mb={3} bold>
          <Truncate>
            {fontSize}px ({theme.fontSizes.length - i - 1}) Aa Hello
          </Truncate>
        </Heading>
      ))}
    </Box>
  </Box>
)

export default Typography
