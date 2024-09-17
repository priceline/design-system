import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Card } from '../Card/Card'
import { Box } from '../Box/Box'
import { Link } from '../Link/Link'

const meta: Meta = {
  title: 'ThemingWorkshop/Theme Compositions/Components with Borders',
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <>
        <Box mb={5}>
          <Link
            href='https://www.figma.com/design/0gYJf7ifVf7xtulxfMU7DM/Design-Principles-Patterns-and-Language?node-id=133-40700&node-type=frame&t=hZPqwWJCTm4oaQbp-11'
            target='_blank'
          >
            See Figma for design specs
          </Link>
        </Box>
        <Story />
      </>
    ),
  ],
}

export default meta
type Story = StoryObj

export const BannerWithCallToAction: Story = {
  args: {
    borderRadius: 'xl',
  },
  render: (args) => (
    <>
      <Card
        bg='success.light'
        width='300px'
        height='300px'
        {...args}
        mb={3}
        borderColor='secondary.tint'
        boxShadowSize='md'
      />
      <Card bg='background.lightest' width='300px' height='300px' {...args} borderColor='secondary.tint' />
    </>
  ),
}
