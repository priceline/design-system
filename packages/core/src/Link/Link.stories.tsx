import React from 'react'
import { Button, Link, Text } from '..'
import { ILinkProps } from './Link'
import { argTypes, defaultArgs } from './Link.stories.args'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

export default {
  title: 'Link',
  component: Link,
  args: defaultArgs,
  argTypes,
}

const Template = (args: ILinkProps) => <Link {...args} />

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
