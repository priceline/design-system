import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Truncate,
  Divider,
  theme
} from 'pcln-design-system'
import { PageTitle, Description } from '../src/components'

const Typography = props => (
  <Box>
    <PageTitle>Typography</PageTitle>
    <Description>
      The design system includes base styles for typography and a typographic
      scale for determining font sizes.
    </Description>
    <Box py={4}>
      {[...theme.fontSizes].reverse().map((fontSize, i) => (
        <Heading key={fontSize} fontSize={fontSize} mb={4} bold>
          <Truncate>
            {fontSize}
            px ({theme.fontSizes.length - i - 1}) Discover new deals every day.
          </Truncate>
        </Heading>
      ))}
    </Box>
    <Box py={4}>
      <Heading mb={4}>Font Weight Regular</Heading>
      <Heading bold mb={4}>
        Font Weight Bold
      </Heading>
    </Box>
  </Box>
)

export default Typography
