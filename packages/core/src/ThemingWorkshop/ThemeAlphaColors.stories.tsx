import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Card } from '../Card/Card'
import { Relative } from '../Relative/Relative'
import { Absolute } from '../Absolute/Absolute'
import { Grid } from '../Grid/Grid'
import { Flex } from '../Flex/Flex'
import { Box } from '../Box/Box'
import { Link } from '../Link/Link'
import { Drawer } from '../Drawer/Drawer'

const meta: Meta = {
  title: 'Theming Workshop/Theme Alpha Colors',
  parameters: {
    layout: 'centered',
  },

  tags: ['!autodocs'],
}

export default meta
type Story = StoryObj

export const BlackAndWhite: Story = {
  decorators: [
    (Story) => (
      <>
        <Box mb={5}>
          <Link
            href='https://www.figma.com/design/0gYJf7ifVf7xtulxfMU7DM/Design-Principles-Patterns-and-Language?node-id=121-22763&node-type=frame&t=hZPqwWJCTm4oaQbp-11'
            target='_blank'
          >
            See Figma for design specs
          </Link>
        </Box>
        <Story />
      </>
    ),
  ],
  args: {
    borderRadius: 'xl',
  },
  render: (args) => (
    <>
      <Relative>
        <Card bg='background.darkest' width='300px' height='300px' {...args} mb={3} boxShadowSize='md' />
        <Absolute top={75} left={-75}>
          <Card bg='background.lightest' width='150px' height='150px' {...args} />
        </Absolute>
      </Relative>
    </>
  ),
}

export const Colors: Story = {
  decorators: [
    (Story) => (
      <>
        <Box mb={5}>
          <Link
            href='https://www.figma.com/design/0gYJf7ifVf7xtulxfMU7DM/Design-Principles-Patterns-and-Language?node-id=121-34689&node-type=frame&t=hZPqwWJCTm4oaQbp-11'
            target='_blank'
          >
            See Figma for design specs
          </Link>
        </Box>
        <Story />
      </>
    ),
  ],
  args: {
    borderRadius: 'xl',
  },
  render: (args) => (
    <>
      <Relative>
        <Card bg='background.darkest' width='400px' height='400px' {...args} mb={3} boxShadowSize='md' />
        <Absolute top={0} left={-40}>
          <Grid
            gridTemplateRows='repeat(4, 1fr)'
            gridTemplateColumns='repeat(1, 1fr)'
            height='400px'
            alignItems='space-between'
            justifyContent='space-between'
          >
            {['primary', 'secondary', 'error', 'promoPrimary'].map((num) => (
              <Flex justifyContent='center' alignItems='center' key={num}>
                <Box width='80px' height='80px' {...args} bg={`${num}.base`} />
              </Flex>
            ))}
          </Grid>
        </Absolute>
      </Relative>
    </>
  ),
}

export const UsedOnDrawerComponent: Story = {
  decorators: [
    (Story) => (
      <>
        <Box mb={5}>
          <Link
            href='https://www.figma.com/design/0gYJf7ifVf7xtulxfMU7DM/Design-Principles-Patterns-and-Language?node-id=121-31858&node-type=frame&t=hZPqwWJCTm4oaQbp-11'
            target='_blank'
          >
            See Figma for design specs
          </Link>
        </Box>
        <Story />
      </>
    ),
  ],
  args: {
    borderRadius: 'xl',
  },
  render: (args) => (
    <>
      <Relative>
        <Card bg='background.darkest' width='400px' height='400px' {...args} mb={3} boxShadowSize='md' />
        <Drawer heading='drawer' isOpen isCollapsed={false} isFloating width='400px'>
          Drawer content
        </Drawer>
      </Relative>
    </>
  ),
}
