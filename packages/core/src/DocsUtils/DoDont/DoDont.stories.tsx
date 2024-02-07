import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button } from '../../Button/Button'
import { DoDont, type DoDontProps } from './DoDont'

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
  title: 'Docs Utils/DoDont',
  component: DoDont,
}

export default meta
