import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { RelatedComponent, RelatedComponentProps } from '.'
import { Button } from '../..'

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
  title: 'Docs Utils/RelatedComponent',
  component: RelatedComponent,
}

export default meta
