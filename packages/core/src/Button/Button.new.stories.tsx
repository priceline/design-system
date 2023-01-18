import { ArgsTable, Canvas, Story } from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Button, Text, ThemeProvider } from '..'
import { Hero, TableOfContents } from '../storybook/components'
import heroImage from './Button.Hero.png'

type ButtonStory = StoryObj<typeof Button>

export const Default: ButtonStory = { render: () => <Button>Hello World</Button> }

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <Hero
            name='Button'
            desc='Buttons allow users to trigger an action or event with a single click. For example, you can use a button for allowing the functionality of submitting a form, opening a dialog, canceling an action, or performing a delete operation.'
            img={heroImage}
          />
          <TableOfContents
            links={{
              overview: 'Overview',
              props: 'Props',
              usage: 'Usage',
            }}
          />
          <Box height='100rem'>Hello</Box>
          <hr />
          <Box py={5}>
            <Text id='overview' textStyle='title3' pb={4}>
              Overview
            </Text>
            <Text>
              Buttons allow users to trigger an action or event with a single click. For example, you can use
              a button for allowing the functionality of submitting a form, opening a dialog, canceling an
              action, or performing a delete operation.
            </Text>
          </Box>
          <hr />
          <Box py={5}>
            <Text id='props' textStyle='title3' pb={4}>
              Props
            </Text>
            <ArgsTable />
          </Box>
          <hr />
          <Canvas>
            <Story id='components-button--default' />
          </Canvas>
        </ThemeProvider>
      ),
    },
  },
}
export default meta
