import { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeProvider } from 'pcln-design-system'
import React from 'react'
import { StoryStage, StoryStageProps } from '..'

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
  title: 'StoryStage',
  component: StoryStage,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <StoryStage {...exampleProps} />
        </ThemeProvider>
      ),
    },
  },
}

export default meta
