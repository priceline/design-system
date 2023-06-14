import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { LiveDemo, LiveDemoProps } from '.'
import { Usage as HeroUsage } from '../Hero/Hero.stories'

const exampleProps: LiveDemoProps = {
  code: HeroUsage,
}

type LiveDemoStory = StoryObj<typeof LiveDemo>
export const Usage: LiveDemoStory = {
  render: (args) => <LiveDemo {...exampleProps} {...args} />,
}

const meta: Meta<typeof LiveDemo> = {
  title: 'Docs Utils/LiveDemo',
  component: LiveDemo,
}

export default meta
