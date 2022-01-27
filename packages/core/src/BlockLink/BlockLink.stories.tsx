import React from 'react'

import { BackgroundImage, BlockLink, Box, Button, Flex, Text } from '..'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

const image =
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'

export default {
  title: 'BlockLink',
  component: BlockLink,
}

export const ContainingBackgroundImage = () => (
  <Flex justifyContent='center' alignItems='center' color='white'>
    <BlockLink href='https://www.priceline.com' target='_blank'>
      <BackgroundImage image={image} width='640px'>
        <Box p={4}>
          <Text textAlign='center'>Click to open priceline.com in new tab!</Text>
        </Box>
      </BackgroundImage>
    </BlockLink>
  </Flex>
)

ContainingBackgroundImage.story = {
  name: 'containing BackgroundImage',
}

export const ForwardRefs = () => {
  function refChild(dsRef) {
    function onClick() {
      return (dsRef.current.innerHTML = 'Bacon!')
    }
    return (
      <>
        <BlockLink color='text.dark' ref={dsRef}>
          I am a link!
        </BlockLink>
        <br />
        <Button color='error' onClick={onClick} mt={4}>
          Click to update link text via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}

ForwardRefs.story = {
  name: 'Forward refs',
}

export const CompositionWithoutContainer = () => (
  <Flex justifyContent='center' alignItems='center' color='purple'>
    <BlockLink href='https://www.google.com'>
      <Text fontSize={2} bold textAlign='center'>
        Click to go to google.com!
      </Text>
    </BlockLink>
  </Flex>
)

CompositionWithoutContainer.story = {
  name: 'composition without container',
}
