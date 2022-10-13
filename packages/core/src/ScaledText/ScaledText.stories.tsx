import React from 'react'
import { Box, ScaledText } from '..'
import { IScaledTextProps } from './ScaledText'

export default {
  component: ScaledText,
}
const today = new Date().toLocaleString('en-us', { weekday: 'long' })

const props: IScaledTextProps = {
  values: [
    { value: 'Hello', props: { fontWeight: 'bold' } },
    { value: 'World', props: { fill: 'deepskyblue' } },
    { value: 'Today Is', props: { fontStyle: 'italic' } },
    { value: today, props: { fontFamily: 'courier' } },
    { value: '🏨 🛫 🚙', props: { rotate: 10 } },
  ],
  color: 'midnightblue',
}

export const Example = () => (
  <Box
    borderRadius='2xl'
    width='200px'
    boxShadowSize='xl'
    p={3}
    style={{ border: 'thin solid black', resize: 'horizontal', overflow: 'auto' }}
  >
    <ScaledText {...props} />
  </Box>
)
