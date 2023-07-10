import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import { Section, SectionProps } from '.'

const exampleProps: SectionProps = {
  heading: 'Section',
  children: `Facilis sed itaque doloribus beatae aut. Molestiae velit autem aut maiores. Et qui tenetur et impedit facere numquam. Omnis voluptatem sit minus. Quia harum qui provident reprehenderit vero aut necessitatibus est. Nam expedita praesentium non quia aut.`,
}

type SectionStory = StoryObj<typeof Section>
export const Usage: SectionStory = {
  render: (args) => <Section {...exampleProps} {...args} />,
}

const meta: Meta<typeof Section> = {
  title: 'Docs Utils/Section',
  component: Section,
}

export default meta
