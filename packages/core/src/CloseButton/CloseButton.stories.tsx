import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { userEvent, within } from 'storybook/test'
import { Flex } from '../Flex/Flex'
import { Grid } from '../Grid/Grid'
import { Text } from '../Text/Text'
import { paletteColors } from '../theme/theme'
import { CloseButton, type CloseButtonProps } from './CloseButton'
import { argTypes, defaultArgs } from './CloseButton.stories.args'

const meta: Meta<typeof CloseButton> = {
  title: 'CloseButton',
  component: CloseButton,
  args: defaultArgs,
  argTypes: argTypes,
}

export default meta

type Story = StoryObj<CloseButtonProps>

const templateColumns = Array.from(Array(6).keys()).map((x) => `repeat(${x + 1}, 1fr)`)

export const Playground: Story = {
  render: (args) => <CloseButton {...args} />,
}

const SizesTemplate = ({ bg, ...args }: CloseButtonProps & { bg?: string }) => (
  <Grid templateColumns={templateColumns} gap={3} overflow='hidden'>
    {(['sm', 'md', 'lg'] as const).map((size) => (
      <Flex key={size} alignItems='center' p={3} overflow='auto' style={{ gap: '.25rem' }} bg={bg}>
        <CloseButton {...args} size={size} />
        <Text>{size}</Text>
      </Flex>
    ))}
  </Grid>
)

export const NoVariant: Story = {
  render: (args) => <SizesTemplate {...(args as CloseButtonProps & { bg?: string })} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.tab()
    await userEvent.hover(canvas.queryAllByTitle('close')[2])
  },
  parameters: {
    chromatic: { delay: 300 },
  },
}

export const VariantFilled: Story = {
  render: (args) => <SizesTemplate {...(args as CloseButtonProps & { bg?: string })} />,
  args: {
    variant: 'filled',
  },
}

export const VariantWhite: Story = {
  render: (args) => <SizesTemplate {...(args as CloseButtonProps & { bg?: string })} />,
  args: {
    variant: 'white',
    bg: 'background.dark',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.hover(canvas.queryAllByTitle('close')[2])
  },
}

export const OnColors: Story = {
  render: (args) => (
    <Grid templateColumns={templateColumns} gap={3} overflow='hidden'>
      {paletteColors.map((color) => (
        <Flex key={color} alignItems='center' bg={color} p={3} overflow='auto' style={{ gap: '.25rem' }}>
          <CloseButton {...args} />
          <Text>{color}</Text>
        </Flex>
      ))}
    </Grid>
  ),
}
