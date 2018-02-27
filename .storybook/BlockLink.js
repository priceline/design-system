import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { BackgroundImage, BlockLink, Box, Flex, Text } from '../src'

const image =
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'

const FlexHoverUnderline = styled(Flex)`
  &:hover {
    text-decoration: underline;
  }
`

storiesOf('BlockLink', module)
  .add('containing BackgroundImage', () => (
    <Flex justify="center" align="center" color="white">
      <BlockLink href="https://www.priceline.com" target="_blank">
        <BackgroundImage image={image} width="640px">
          <Box p={4}>
            <Text align="center">Click to open priceline.com in new tab!</Text>
          </Box>
        </BackgroundImage>
      </BlockLink>
    </Flex>
  ))
  .add('composition without container', () => (
    <FlexHoverUnderline justify="center" align="center" color="purple">
      <BlockLink href="https://www.google.com">
        <Text fontSize={2} bold align="center">
          Hover to see underline! Click to go to google.com!
        </Text>
      </BlockLink>
    </FlexHoverUnderline>
  ))
