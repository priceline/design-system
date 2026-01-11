import React from 'react'
import { Box } from '../../Box/Box'
import { Flex } from '../../Flex/Flex'
import { Image } from '../../Image/Image'
import { Text } from '../../Text/Text'

/**
 * @public
 */
export type HeroProps = {
  name: string
  children: string
  img: string
}

/**
 * A documentation hero banner with title, description, and illustration.
 *
 * Displays a prominent header section with component name, description text,
 * and an image on a colored background. Use at the top of component documentation
 * pages to introduce the component visually.
 *
 * @public
 */
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
