import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'pcln-design-system'
import React from 'react'
import { StoryHeading, StoryHeadingProps } from '..'

const exampleProps: StoryHeadingProps = {
  storyName: 'Usage',
  storyTitle: 'Usage',
}

type StoryHeadingStory = StoryObj<typeof StoryHeading>
export const Usage: StoryHeadingStory = {
  render: (args) => <StoryHeading {...exampleProps} {...args} />,
}

const meta: Meta<typeof StoryHeading> = {
  title: 'StoryHeading',
  component: StoryHeading,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <StoryHeading {...exampleProps} />
        </ThemeProvider>
      ),
    },
  },
}

export default meta
