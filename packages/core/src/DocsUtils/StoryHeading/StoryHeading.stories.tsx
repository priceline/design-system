import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { StoryHeading, StoryHeadingProps } from '.'

const exampleProps: StoryHeadingProps = {
  storyName: 'Usage',
  storyTitle: 'Usage',
}

type StoryHeadingStory = StoryObj<typeof StoryHeading>
export const Usage: StoryHeadingStory = {
  render: (args) => <StoryHeading {...exampleProps} {...args} />,
}

const meta: Meta<typeof StoryHeading> = {
  title: 'Docs Utils/StoryHeading',
  component: StoryHeading,
}

export default meta
