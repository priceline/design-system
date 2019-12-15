import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hide, Box, Flex } from '../src'

storiesOf('Hide', module).add('Hide', () => (
  <Flex justifyContent="space-between">
    <Hide xs sm md lg xl xxl>
      <Box p={2} bg="warning">
        Hide xs
      </Box>
    </Hide>
    <Hide sm md lg xl xxl>
      <Box p={2} bg="alert">
        Hide sm
      </Box>
    </Hide>
    <Hide md lg xl xxl>
      <Box p={2} bg="success">
        Hide md
      </Box>
    </Hide>
    <Hide lg xl xxl>
      <Box p={2} bg="primary">
        Hide lg
      </Box>
    </Hide>
    <Hide xl xxl>
      <Box p={2} bg="promoPrimary">
        Hide xl
      </Box>
    </Hide>
    <Hide xxl>
      <Box p={2} bg="promoSecondary">
        Hide xxl
      </Box>
    </Hide>
    <Hide print>
      <Box p={2} bg="caution">
        Hide print
      </Box>
    </Hide>
    <Hide.text sm>Hide.text (inline)</Hide.text>
  </Flex>
))
