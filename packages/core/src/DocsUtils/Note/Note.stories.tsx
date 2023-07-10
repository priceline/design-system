import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { Note, NoteProps } from '.'

const exampleProps: NoteProps = {
  children: 'Ratione repellat aut saepe maiores autem.',
}

type NoteStory = StoryObj<typeof Note>
export const Usage: NoteStory = {
  render: (args) => <Note {...exampleProps} {...args} />,
}

const meta: Meta<typeof Note> = {
  title: 'Docs Utils/Note',
  component: Note,
}

export default meta
