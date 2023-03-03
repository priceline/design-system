import { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeProvider } from 'pcln-design-system'
import React from 'react'
import { DoDont, DoDontProps } from '..'

const exampleProps: DoDontProps = {
  doExample: <Button width='100%'>placeat id suscipit</Button>,
  doText: 'Quas omnis corrupti illum ullam similique voluptatum at fugiat inventore.',
  dontExample: <Button width={150}>placeat id suscipit</Button>,
  dontText: 'Illo tempore tenetur adipisci beatae sint nulla veniam ducimus.',
}

type DoDontStory = StoryObj<typeof DoDont>
export const Usage: DoDontStory = {
  render: (args) => <DoDont {...exampleProps} {...args} />,
}

const meta: Meta<typeof DoDont> = {
  title: 'DoDont',
  component: DoDont,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <DoDont {...exampleProps} />
        </ThemeProvider>
      ),
    },
  },
}

export default meta
