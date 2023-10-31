import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'

import type { ICloseButtonProps } from '..'
import { CloseButton, Flex, Grid, Text, paletteColors } from '..'
import { argTypes, defaultArgs } from './CloseButton.stories.args'
import { CloseButtonSize } from './CloseButton.styled'
import { userEvent, within } from '@storybook/testing-library'

type CloseButtonStory = StoryObj<ICloseButtonProps>

const meta: Meta<typeof CloseButton> = {
  title: 'CloseButton',
  component: CloseButton,
  args: defaultArgs,
  argTypes: argTypes,
}

export default meta

const templateColumns = Array.from(Array(6).keys()).map((x) => `repeat(${x + 1}, 1fr)`)

const BasicTemplate = (args) => <CloseButton {...args} />
export const Playground = BasicTemplate.bind({})

const SizesTemplate = (args) => (
  <Grid templateColumns={templateColumns} gap={3} overflow='hidden'>
    {['sm', 'md', 'lg'].map((x) => (
      <Flex key={x} alignItems='center' p={3} overflow='auto' style={{ gap: '.25rem' }} bg={args.bg}>
        <CloseButton key={x} {...args} size={x as CloseButtonSize} />
        <Text>{x}</Text>
      </Flex>
    ))}
  </Grid>
)

export const NoVariant: CloseButtonStory = {
  render: SizesTemplate.bind({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.queryAllByTitle('close')[2])
  },
}

export const VariantFilled: CloseButtonStory = {
  render: SizesTemplate.bind({}),
}
VariantFilled.args = {
  variant: 'filled',
}

export const VariantWhite: CloseButtonStory = {
  render: SizesTemplate.bind({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.hover(canvas.queryAllByTitle('close')[2])
  },
}
VariantWhite.args = {
  variant: 'white',
  bg: 'background.dark',
}

export const OnColors: CloseButtonStory = {
  render: (args) => (
    <Grid templateColumns={templateColumns} gap={3} overflow='hidden'>
      {paletteColors.map((x) => (
        <Flex key={x} alignItems='center' bg={x} p={3} overflow='auto' style={{ gap: '.25rem' }}>
          <CloseButton key={x} {...args} />
          <Text>{x}</Text>
        </Flex>
      ))}
    </Grid>
  ),
}
