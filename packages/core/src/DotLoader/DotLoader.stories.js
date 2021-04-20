import React, { useState } from 'react'
import { Box, Button } from '..'
import DotLoader from './DotLoader'
import { argTypes, defaultArgs } from './DotLoader.stories.args'

export default {
  title: 'core / DotLoader',
  component: DotLoader,
  args: defaultArgs,
  argTypes,
}

const Template = (args) => {
  const [isLoading, setLoading] = useState(false)

  const onClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
  }

  return (
    <Box width='500px'>
      <Button size={args.size} width={1} onClick={onClick}>
        {isLoading ? <DotLoader {...args} /> : 'Click me to load nothing'}
      </Button>
    </Box>
  )
}

export const _DotLoader = Template.bind({})

export const Fast = Template.bind({})
Fast.args = { speed: 'fast' }
