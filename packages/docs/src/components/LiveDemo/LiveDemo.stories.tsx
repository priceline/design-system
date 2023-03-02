import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'pcln-design-system'
import React from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { Hero, LiveDemo, LiveDemoProps } from '..'

const exampleProps: LiveDemoProps = {
  code: reactElementToJSXString(
    <Hero img='https://source.unsplash.com/random/?superhero/' name='Hero'>
      Deleniti sit quos quo dolores fugiat in id officiis. Tenetur et non. Omnis nam illum repellendus nostrum
      rerum vitae. Omnis similique velit soluta. At veritatis quae dolores distinctio sit.
    </Hero>
  ),
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
