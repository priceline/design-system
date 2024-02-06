import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../../Button/Button'
import { StoryStage, StoryStageProps } from './StoryStage'

const exampleProps: StoryStageProps = {
  children: (
    <>
      <Button size='small'>Button</Button>
      <Button size='medium'>Button</Button>
      <Button size='large'>Button</Button>
      <Button size='extraLarge'>Button</Button>
    </>
  ),
}

type StoryStageStory = StoryObj<typeof StoryStage>
export const Usage: StoryStageStory = {
  render: (args) => <StoryStage {...exampleProps} {...args} />,
}

const meta: Meta<typeof StoryStage> = {
  title: 'Docs Utils/StoryStage',
  component: StoryStage,
}

export default meta
