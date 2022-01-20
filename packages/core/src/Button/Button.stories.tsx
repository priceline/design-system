import React from 'react'
import styled from 'styled-components'

import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'
import { Box, Button, Text } from '..'
import { argTypes, defaultArgs } from './Button.stories.args'

export default {
  component: Button,
  title: 'core / Button',
  args: defaultArgs,
  argTypes,
}

const Template = (args) => <Button {...args}>I AM BUTTON</Button>

export const _Button = Template.bind({})

export const ResponsiveSize = Template.bind({})
ResponsiveSize.args = { size: ['small', null, 'medium', null, 'large'] }
ResponsiveSize.parameters = {
  viewport: { defaultViewport: 'designSystem_sm' },
}

export const ForwardRefs = () => {
  function refChild(dsRef) {
    function onClick() {
      dsRef.current.focus()
    }
    return (
      <>
        <Button ref={dsRef} color='error' size='large'>
          PANIC
        </Button>
        <br />
        <Button mt={4} onClick={onClick}>
          Click to focus PANIC button via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}

// styled(Button) should preserve variation styling
const StyledButton = styled(Button)`
  padding: 100px;
`
const StyledTemplate = (args) => <StyledButton {...args}>Button Text!</StyledButton>
export const StyledButtonStory = StyledTemplate.bind({})
StyledButtonStory.storyName = 'styled(Button) should preserve variation styling'
StyledButtonStory.decorators = [
  (story) => (
    <Box>
      <Text>Below is a styled(Button) with `padding: 100px;` applied.</Text>

      {story()}
    </Box>
  ),
]
