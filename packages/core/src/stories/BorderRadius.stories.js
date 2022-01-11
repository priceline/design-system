import React from 'react'
import { Box, Text } from '..'

import { argTypes, defaultArgs, borderRadiusArgType } from './BorderRadius.stories.args'
import { rounded } from '../../storybook/args'

export default {
  title: 'Design / Border Radius',
  component: Box,
  args: defaultArgs,
  argTypes,

  parameters: {
    docs: {
      description: {
        component: `Demonstration of the borderRadius and rounded props`,
      },
    },
  },
}

const Template = (args) => {
  return (
    <Box width='100%'>
      {['round', ...rounded].map((round) => {
        return round ? (
          <Box key={round} m={4} display='inline-block'>
            <Box {...args} size='200px' p={3} rounded={round}></Box>
            <Text my={3} textAlign='center'>
              {round}
            </Text>
          </Box>
        ) : null
      })}
    </Box>
  )
}

export const BorderRadiusDemo = Template.bind({})
BorderRadiusDemo.argTypes = {
  ...argTypes,
  borderRadius: borderRadiusArgType,
}

export const ResponsiveDemo = Template.bind({})
ResponsiveDemo.args = {
  ...defaultArgs,
  borderRadius: ['lg', 'xl', '2xl', '3xl', 'full'],
}
