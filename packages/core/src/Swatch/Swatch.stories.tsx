import React, { useState } from 'react'
import Swatch from './Swatch'
import { Box, Flex, Text } from '../'

export default {
  title: 'Swatch',
  component: Swatch,
}

export const SingleColor = () => <Swatch colors={['#0033A0']} />

export const MultipleColors = () => <Swatch colors={['#D50032', '#1B7742', '#0033A0']} />

export const Wrap = () => (
  <Box width='100px'>
    <Swatch
      colors={[
        '#D50032',
        '#1B7742',
        '#0033A0',
        '#002244',
        '#6244BB',
        '#31225D',
        '#31225D',
        '#FFC658',
        '#4F6F8F',
      ]}
    />
  </Box>
)

export const SelectColor = () => {
  const [color, setColor] = useState('#D50032')
  return (
    <>
      <Swatch colors={['#D50032', '#1B7742', '#0033A0']} onClick={(color) => setColor(color)} />
      <Flex mt='3' flexDirection='row' alignItems='center'>
        <Text mr={2}>Color:</Text>
        <Text>{color}</Text>
      </Flex>
    </>
  )
}
