import React from 'react'
import { Avatar, Flex, Text } from '..'
import { colorSchemeNames } from '../storybook/args'

const elonJPG = 'https://pbs.twimg.com/media/DwSta0wUcAAQQR9.jpg'

export default {
  title: 'Avatar',
  component: Avatar,
}

export const Default = () => <Avatar />
export const Initials = () => <Avatar initials='WS' />

export const Elon = () => (
  <Avatar title='Not Elon Musk' subtitle='totally.not.elon@musk.com' src={elonJPG} altText='papa-elon' />
)

export const Responsive = () => (
  <Avatar
    title='Not Elon Musk'
    subtitle='totally.not.elon@musk.com'
    src={elonJPG}
    altText='papa-elon'
    size={[40, 50, 64, 85, 104, 130]}
  />
)

export const ColorScheme = () => {
  return (
    <Flex flexDirection='column'>
      <Text textStyle='heading1'>No initials</Text>
      <Flex flexWrap='wrap' mb={5}>
        {colorSchemeNames.map((colorScheme) => (
          <Flex m={2} alignItems='center' width={1 / 5} key={colorScheme}>
            <Avatar altText='Avatar' colorScheme={colorScheme} />
            <Text ml={2}>{colorScheme}</Text>
          </Flex>
        ))}
      </Flex>
      <Text textStyle='heading1'>Initials</Text>
      <Flex flexWrap='wrap'>
        {colorSchemeNames.map((colorScheme) => (
          <Flex m={2} alignItems='center' width={1 / 5} key={colorScheme}>
            <Avatar altText='Avatar' colorScheme={colorScheme} initials='AB' />
            <Text ml={2}>{colorScheme}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
