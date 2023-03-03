import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'pcln-design-system'
import React from 'react'
import { Note, NoteProps } from '..'

const exampleProps: NoteProps = {
  children: 'Ratione repellat aut saepe maiores autem.',
}

type NoteStory = StoryObj<typeof Note>
export const Usage: NoteStory = {
  render: (args) => <Note {...exampleProps} {...args} />,
}

const meta: Meta<typeof Note> = {
  title: 'Note',
  component: Note,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <Note {...exampleProps} />
        </ThemeProvider>
      ),
    },
  },
}

export default meta
