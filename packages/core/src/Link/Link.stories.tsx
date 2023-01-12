import React from 'react'
import styled from 'styled-components'
import { Box, Button, Link, Text, getLinkStylesOn } from '..'
import { argTypes, defaultArgs } from './Link.stories.args'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

export default {
  title: 'Link',
  component: Link,
  args: defaultArgs,
  argTypes,
}

const Template = (args: object) => <Link {...args} />

export const _Link = Template.bind({})

export function ForwardRefs() {
  function refChild(dsRef) {
    function onClick() {
      return (dsRef.current.innerHTML = 'Bacon!')
    }
    return (
      <>
        <Link color='text.dark' ref={dsRef}>
          I am a link!
        </Link>
        <br />
        <Button color='error' onClick={onClick} mt={4}>
          Click to update link text via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}

ForwardRefs.story = {
  name: 'Forward refs',
}

export const LargeText = () => (
  <Link color='text.light'>
    <Text textStyle='heading2'>I am a link with text styles</Text>
  </Link>
)

const ResponsiveLink = styled(Link)`
  ${(props) => getLinkStylesOn(props.backgroundColor, props.linkLightColor, props.linkDarkColor)(props)};
`

const ResponsiveLinkTemplate = (args) => (
  <Box color={args.backgroundColor} p={2} width={300}>
    <ResponsiveLink {...args}>Hello there.</ResponsiveLink>
  </Box>
)

export const ResponsiveStyling = ResponsiveLinkTemplate.bind({})
ResponsiveStyling.args = {
  backgroundColor: 'primary.base',
  linkLightColor: 'text.lightest',
  linkDarkColor: 'text.base',
}
