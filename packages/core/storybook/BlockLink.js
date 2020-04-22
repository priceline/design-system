import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackgroundImage, BlockLink, Box, Button, Flex, Text } from '../src'
import ForwardRefDemo from './utils/ForwardRefsDemo'

const image =
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'

storiesOf('BlockLink', module)
  .add('containing BackgroundImage', () => (
    <Flex justifyContent="center" alignItems="center" color="white">
      <BlockLink href="https://www.priceline.com" target="_blank">
        <BackgroundImage image={image} width="640px">
          <Box p={4}>
            <Text textAlign="center">
              Click to open priceline.com in new tab!
            </Text>
          </Box>
        </BackgroundImage>
      </BlockLink>
    </Flex>
  ))
  .add('Forward refs', () => (
    <ForwardRefDemo
      refChild={dsRef => (
        <>
          <BlockLink color="darkGray" dsRef={dsRef}>
            I'm a link!
          </BlockLink>
          <br />
          <Button
            color="error"
            onClick={() => (dsRef.current.innerHTML = 'Bacon!')}
            mt={4}
          >
            Click to update link text via ref
          </Button>
        </>
      )}
    />
  ))
  .add('composition without container', () => (
    <Flex justifyContent="center" alignItems="center" color="purple">
      <BlockLink href="https://www.google.com">
        <Text fontSize={2} bold textAlign="center">
          Click to go to google.com!
        </Text>
      </BlockLink>
    </Flex>
  ))
