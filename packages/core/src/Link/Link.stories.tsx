import { StoryObj } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box/Box'
import { Button, type ButtonProps } from '../Button/Button'
import { Container } from '../Container/Container'
import { Grid } from '../Grid/Grid'
import { Link } from '../Link/Link'
import { Text } from '../Text/Text'
import { colors } from '../storybook/args'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'
import { getLinkStylesOn } from '../utils/utils'
import { LinkProps } from './Link'
import { argTypes, defaultArgs, sizeOptions, variationOptions } from './Link.stories.args'

export default {
  title: 'Link',
  component: Link,
  args: defaultArgs,
  argTypes,
}

const Template = (args: LinkProps) => <Link {...args} />

export const _Link = Template.bind({})

type ButtonStory = StoryObj<ButtonProps>

export const Playground: ButtonStory = {
  render: (args) => <Button {...args}>Button</Button>,
  argTypes: {
    color: {
      control: 'select',
      options: colors,
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: sizeOptions,
      defaultValue: 'primary',
    },
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
  },
}

export function Variations(args) {
  return (
    <>
      <Text textStyle='heading3' mb={2}>
        Link Variations
      </Text>
      <Grid gap={4} templateColumns={['1fr']} background='primary'>
        {variationOptions.map((variation) => (
          <Link {...args} key={variation} variation={variation} m={1}>
            {variation} link
          </Link>
        ))}
      </Grid>
    </>
  )
}

export function Sizes(args) {
  return (
    <>
      <Text textStyle='heading3' mb={2}>
        Link Sizes
      </Text>
      <Container>
        {sizeOptions.map((size) => (
          <Link {...args} key={size} size={size} variation='fill' m={3}>
            {size}
          </Link>
        ))}
      </Container>
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
