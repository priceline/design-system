import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { TableOfContents, TableOfContentsProps } from '.'

const exampleProps: TableOfContentsProps = {
  links: [
    'Impedit Sunt Perspiciatis',
    'Quod Et Officia',
    'Necessitatibus Ducimus Enim',
    'Ut Aspernatur Illo',
    'Recusandae Recusandae Reprehenderit',
  ],
}

type TableOfContentsStory = StoryObj<typeof TableOfContents>
export const Usage: TableOfContentsStory = {
  render: (args) => <TableOfContents {...exampleProps} {...args} />,
}

const meta: Meta<typeof TableOfContents> = {
  title: 'Docs Utils/TableOfContents',
  component: TableOfContents,
}

export default meta
