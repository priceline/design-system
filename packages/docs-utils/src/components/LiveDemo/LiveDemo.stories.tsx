import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'pcln-design-system'
import React from 'react'
import { LiveDemo, LiveDemoProps } from '..'
import { Usage as HeroUsage } from '../Hero/Hero.stories'

const exampleProps: LiveDemoProps = {
  code: HeroUsage,
}

type LiveDemoStory = StoryObj<typeof LiveDemo>
export const Usage: LiveDemoStory = {
  render: (args) => <LiveDemo {...exampleProps} {...args} />,
}

const meta: Meta<typeof LiveDemo> = {
  title: 'LiveDemo',
  component: LiveDemo,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <LiveDemo {...exampleProps} />
        </ThemeProvider>
      ),
    },
  },
}

export default meta
