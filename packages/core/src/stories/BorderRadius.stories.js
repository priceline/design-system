import React from 'react'
import { Box, Text } from '..'

import { argTypes, defaultArgs } from './BorderRadius.stories.args'
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
      {rounded.map((round) => {
        return round ? (
          <Box key={round} m={3} display='inline-block'>
            <Box {...args} rounded={round}></Box>
            <Text lineHeight={args.height} verticalAlign='middle' textAlign='center'>
              {round}
            </Text>
          </Box>
        ) : null
      })}
    </Box>
  )
}

export const BorderRadiusDemo = Template.bind({})
