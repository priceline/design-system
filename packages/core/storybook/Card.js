import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Card } from '../src'

storiesOf('Card', module)
  .add('Box Shadows with default border', () => (
    <Box>
      <Card
        boxShadowSize="sm"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={1}
      >
        Small Shadow
      </Card>
      <Card
        boxShadowSize="md"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={1}
      >
        Medium Shadow
      </Card>
      <Card
        boxShadowSize="lg"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={1}
      >
        Large Shadow
      </Card>
      <Card
        boxShadowSize="xl"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={1}
      >
        XLarge Shadow
      </Card>
    </Box>
  ))
  .add('Box Shadows with focused 2px border', () => (
    <Box>
      <Card
        boxShadowSize="sm"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={2}
      >
        Small Shadow
      </Card>
      <Card
        boxShadowSize="md"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={2}
      >
        Medium Shadow
      </Card>
      <Card
        boxShadowSize="lg"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={2}
      >
        Large Shadow
      </Card>
      <Card
        boxShadowSize="xl"
        m={4}
        p={4}
        width={1 / 2}
        color="text"
        bg="white"
        borderWidth={2}
      >
        XLarge Shadow
      </Card>
    </Box>
  ))
  .add('Box Shadows with varying border radii', () => (
    <Box>
      <Card
        boxShadowSize="sm"
        m={4}
        p={4}
        width={1 / 2}
        color="black"
        bg="white"
        borderRadius={0}
      >
        Small Shadow - 0px
      </Card>
      <Card
        boxShadowSize="md"
        m={4}
        p={4}
        width={1 / 2}
        color="black"
        bg="white"
        borderRadius={10}
      >
        Medium Shadow - 10px
      </Card>
      <Card
        boxShadowSize="lg"
        m={4}
        p={4}
        width={1 / 2}
        color="black"
        bg="white"
        borderRadius={20}
      >
        Large Shadow - 20px
      </Card>
      <Card
        boxShadowSize="xl"
        m={4}
        p={4}
        width={1 / 2}
        color="black"
        bg="white"
        borderRadius="30px"
      >
        XLarge Shadow - 30px
      </Card>
    </Box>
  ))
