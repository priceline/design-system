import { Box, Flex, Image, Text } from 'pcln-design-system'
import React from 'react'

export type HeroProps = {
  name: string
  children: string
  img: string
}

export const Hero = ({ name, children, img }: HeroProps) => (
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
      <Text>{children}</Text>
    </Flex>
    <Box bg='primary.tint' borderRadius='xl' style={{ flex: '1 100%' }}>
      <Image src={img} />
    </Box>
  </Flex>
)
