import React from 'react'
import { action } from '@storybook/addon-actions'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { FloatingActionButtonProvider } from './FloatingActionButtonProvider'
import { ArrowUp, ArrowDown } from 'pcln-icons'
import { Box } from '../Box/Box'
import { animateArgs } from '../Animate/Animate.args'

export default {
  title: 'Core / FloatingActionButtonProvider',
  component: FloatingActionButtonProvider,
  argTypes: {
    animationVariant: {
      name: 'animationVariant',
      options: animateArgs,
      control: 'select',
    },
    position: {
      name: 'position',
      options: ['topRight', 'centerRight', 'bottomRight'],
      control: 'select',
    },
  },
  args: {
    position: 'bottomRight',
    animationVariant: 'slideInBottom',
    floatingActionButtons: [
      {
        tooltip: 'Tooltip Text',
        onClick: action('Clicked FAB'),
        icon: ArrowUp,
        key: 'up_arrow',
      },
    ],
  },
}

export const Default = {
  render: (args) => (
    <Box height='200px'>
      <FloatingActionButtonProvider {...args} />
    </Box>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('button')).toBeInTheDocument()
  },
}

export const DelayDisplay = {
  render: (args) => (
    <Box height='200px'>
      <FloatingActionButtonProvider {...args} delayDisplayMs={2000} />
    </Box>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument()
    setTimeout(async () => {
      await expect(canvas.queryByRole('button')).toBeInTheDocument()
    }, 2100)
  },
}

export const HideUntilScroll = {
  render: (args) => (
    <Box height='4000px'>
      <Box>Scroll down to see FAB </Box>
      <ArrowDown />
      <FloatingActionButtonProvider {...args} hideUntilScrollPercent={10} />
    </Box>
  ),
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument()
    window.scrollTo({ top: 500 })
    setTimeout(async () => {
      await expect(canvas.getByRole('button')).toBeInTheDocument()
    }, 2000)
  },
}

export const MultipleSamePosition = {
  render: (args) => (
    <Box height='400px'>
      <FloatingActionButtonProvider
        {...args}
        floatingActionButtons={[
          {
            tooltip: 'Tooltip Text',
            onClick: action('Clicked FAB'),
            icon: ArrowUp,
            key: 'up_arrow',
          },
          {
            tooltip: 'Tooltip Text',
            onClick: action('Clicked FAB'),
            icon: ArrowDown,
            mt: 2,
            key: 'down_arrow',
          },
        ]}
      />
    </Box>
  ),
}

export const MultiplePositions = {
  render: (args) => (
    <Box height='400px'>
      <FloatingActionButtonProvider {...args} position='topRight' animationVariant='slideInTop' />
      <FloatingActionButtonProvider
        {...args}
        position='centerRight'
        animationVariant='slideInRight'
        delayDisplayMs={300}
      />
      <FloatingActionButtonProvider {...args} delayDisplayMs={600} />
    </Box>
  ),
}

export const CustomPositionUsingMargin = {
  render: (args) => (
    <Box height='400px'>
      <FloatingActionButtonProvider
        {...args}
        position='topRight'
        animationVariant='slideInTop'
        mt={6}
        mr={6}
      />
    </Box>
  ),
}
