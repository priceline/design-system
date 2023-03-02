import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'pcln-design-system'
import React from 'react'
import { DocTable, DocTableProps } from '..'

const exampleProps: DocTableProps<{ left: string; right: string }> = {
  columns: [
    { field: 'left', heading: 'Left' },
    { field: 'right', heading: 'Right' },
  ],
  data: [
    { left: 'dolores', right: 'Consequatur ducimus mollitia incidunt.' },
    { left: 'culpa', right: 'At rerum cumque omnis quo voluptatibus.' },
    { left: 'voluptas', right: 'Quam sint sed et eius et est voluptates hic.' },
  ],
}

type DocTableStory = StoryObj<typeof DocTable>
export const Usage: DocTableStory = {
  render: (args) => <DocTable {...exampleProps} {...args} />,
}

const meta: Meta<typeof DocTable> = {
  title: 'DocTable',
  component: DocTable,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <DocTable {...exampleProps} />
        </ThemeProvider>
      ),
    },
  },
}

export default meta
