import type { IButtonProps } from '../Button'

import React from 'react'
import styled from 'styled-components'
import { StoryObj } from '@storybook/react'
import { Box, Button, getLinkStylesOn, Layout, Link, Text } from '..'
import { ILinkProps } from './Link'
import { argTypes, defaultArgs } from './Link.stories.args'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'
import { colors } from '../storybook/args'

const sizeOptions = ['small', 'medium', 'large', 'extraLarge']

export default {
  title: 'Link',
  component: Link,
  args: defaultArgs,
  argTypes,
}

const Template = (args: ILinkProps) => <Link {...args} />

export const _Link = Template.bind({})

type ButtonStory = StoryObj<IButtonProps>

export const Playground: ButtonStory = {
  render: (args) => <Button {...args}>Button</Button>,
  argTypes: {
    color: {
      control: 'select',
      options: colors,
      defaultValue: Button.defaultProps.color,
    },
    size: {
      control: 'select',
      options: sizeOptions,
      defaultValue: Button.defaultProps.size,
    },
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
  },
}

export function AllLinkExamples(args) {
  return (
    <>
      <Text textStyle='heading3' mb={2}>
        Link Variations
      </Text>
      <Layout variation='100' gap={1} rowGap={2} bg='background.tone' p={4}>
        <Link {...args} variation='fill' mb={4}>
          fill
        </Link>
        <Link {...args} variation='subtle' mb={4}>
          subtle
        </Link>
        <Link {...args} variation='link'>
          link
        </Link>
        <Link {...args} variation='outline' my={4}>
          outline
        </Link>
        <Link {...args} variation='plain' mb={4}>
          plain
        </Link>
        <Link {...args} variation='white'>
          white
        </Link>
      </Layout>
    </>
  )
}

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

const ReactiveLink = styled(Link)`
  ${(props) =>
    getLinkStylesOn(
      props.backgroundColor,
      props.linkLightColor,
      props.linkDarkColor,
      props.isLinkBold
    )(props)};
`

const ReactiveLinkTemplate = (args) => (
  <>
    <Text mb={2}>
      Uses the <code>getLinkStylesOn</code> utility
    </Text>
    <Box color={args.backgroundColor} p={2} width={300}>
      <ReactiveLink {...args}>{args.children}</ReactiveLink>
    </Box>
    <Box color='background.lightest' p={2} width={300}>
      <ReactiveLink {...args} backgroundColor='background.lightest'>
        {args.children}
      </ReactiveLink>
    </Box>
    <Box color='highlight.tone' p={2} width={300}>
      <ReactiveLink {...args} backgroundColor='highlight.tone'>
        {args.children}
      </ReactiveLink>
    </Box>
    <Box color='background.darkest' p={2} width={300}>
      <ReactiveLink {...args} backgroundColor='background.darkest'>
        {args.children}
      </ReactiveLink>
    </Box>
  </>
)

export const ReactiveStyling = ReactiveLinkTemplate.bind({})
ReactiveStyling.args = {
  backgroundColor: 'primary.base',
  linkLightColor: 'text.lightest',
  linkDarkColor: 'text.base',
  isLinkBold: false,
}
