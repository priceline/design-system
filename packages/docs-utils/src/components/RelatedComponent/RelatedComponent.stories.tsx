import { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeProvider } from 'pcln-design-system'
import React from 'react'
import { RelatedComponent, RelatedComponentProps } from '..'

const exampleProps: RelatedComponentProps = {
  name: 'Button',
  desc: 'This is a Button',
  children: <Button>Button</Button>,
}

type RelatedComponentStory = StoryObj<typeof RelatedComponent>
export const Usage: RelatedComponentStory = {
  render: (args) => <RelatedComponent {...exampleProps} {...args} />,
}

const meta: Meta<typeof RelatedComponent> = {
  title: 'RelatedComponent',
  component: RelatedComponent,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <RelatedComponent {...exampleProps} />
        </ThemeProvider>
      ),
    },
  },
}

export default meta
