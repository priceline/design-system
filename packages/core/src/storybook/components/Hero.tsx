import React from 'react'
import { Box, Flex, Image, Text } from '../..'

export type HeroProps = {
  name: string
  desc: string
  img: string
}

export const Hero = ({ name, desc, img }: HeroProps) => (
  <Flex
    alignItems='center'
    flexDirection='row'
    bg='primary.light'
    borderRadius={24}
    p={4}
    style={{ gap: 32 }}
  >
    <Flex flexDirection='column' style={{ flex: '1 100%', gap: 8 }}>
      <Text textStyle='title3' color='text.heading'>
        {name}
      </Text>
      <Text>{desc}</Text>
    </Flex>
    <Box bg='primary.tint' borderRadius='xl' style={{ flex: '1 100%' }}>
      <Image src={img} />
    </Box>
  </Flex>
)
