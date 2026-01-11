import type { Meta } from '@storybook/react-vite'
import { Cars, Chat } from 'pcln-icons'
import React from 'react'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Relative } from '../Relative/Relative'
import { FloatingActionButton } from './FloatingActionButton'

const meta: Meta<typeof FloatingActionButton> = {
  title: 'FloatingActionButton',
  component: FloatingActionButton,
  args: {
    hasNotification: false,
    icon: Chat,
    tooltip: 'Tooltip text',
    onClick: fn(),
  },
  decorators: [
    (Story) => (
      <Relative width='100%' height='25vh'>
        <Story />
      </Relative>
    ),
  ],
}

export default meta

export const _FloatingActionButton = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByRole('button'))
    await expect(args.onClick).toHaveBeenCalled()
  },
  render: (args) => <FloatingActionButton {...args} />,
}

export const WithNotification = {
  render: (args) => <FloatingActionButton {...args} hasNotification />,
}

export const WithCarsIcon = {
  render: (args) => <FloatingActionButton {...args} icon={Cars} />,
}

export const BottomRight = {
  render: (args) => (
    <Relative width='100%' height='10vh'>
      <FloatingActionButton {...args} bottom={0} right={0} />
    </Relative>
  ),
}
