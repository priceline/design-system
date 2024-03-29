import React, { useState } from 'react'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { DotLoader } from './DotLoader'
import { argTypes, defaultArgs } from './DotLoader.stories.args'

export default {
  title: 'core / DotLoader',
  component: DotLoader,
  args: defaultArgs,
  argTypes,
}

const Template = (args) => {
  const [isLoading, setLoading] = useState(false)

  function onClick() {
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
  }

  return (
    <Box width={[1, null, '500px']}>
      <Button size={args.size} width={1} onClick={onClick}>
        {isLoading ? <DotLoader {...args} /> : 'Click me to load nothing'}
      </Button>
    </Box>
  )
}

export const _DotLoader = Template.bind({})

export const Fast = Template.bind({})
Fast.args = { speed: 'fast' }

export const Responsive = Template.bind({})
Responsive.args = { size: ['small', null, 'medium', null, 'large'] }
Responsive.parameters = { viewport: { defaultViewport: 'designSystem_sm' } }
