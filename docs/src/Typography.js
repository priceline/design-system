import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Truncate,
  Divider,
  theme
} from 'pcln-design-system'
import PageTitle from './PageTitle'
import Description from './Description'
import Pagination from './Pagination'

const Typography = props => (
  <Box>
    <PageTitle>Typography</PageTitle>
    <Description>
      The design system includes base styles for typography and a typographic
      scale for determining font sizes.
    </Description>
    <Box pt={4}>
      {[...theme.fontSizes].reverse().map((fontSize, i) => (
        <Heading key={fontSize} fontSize={fontSize} mb={4} bold>
          <Truncate>
            {fontSize}px ({theme.fontSizes.length - i - 1}) Discover new deals
            every day.
          </Truncate>
        </Heading>
      ))}
    </Box>
    <Pagination {...props} />
  </Box>
)

export default Typography
