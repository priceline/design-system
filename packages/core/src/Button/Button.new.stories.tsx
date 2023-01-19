import { ArgsTable } from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Box, Button, Text, ThemeProvider } from '..'
import { Hero, LiveDemo, Section, TableOfContents } from '../storybook/components'

import heroImage from './Button.Hero.png'

type ButtonStory = StoryObj<typeof Button>

export const Default: ButtonStory = { render: () => <Button>Hello World</Button> }

export const Sizes: ButtonStory = {
  render: () => (
    <Box>
      <Button m={2} size='small'>
        Small
      </Button>
      <Button m={2} size='medium'>
        Large
      </Button>
      <Button m={2} size='large'>
        Medium
      </Button>
      <Button m={2} size='extraLarge'>
        Extra Large
      </Button>
    </Box>
  ),
}

export const CoreVariations: ButtonStory = {
  render: () => (
    <Box>
      <Button m={2} px={100} variation='fill'>
        Fill
      </Button>
      <Button m={2} px={100} variation='outline'>
        Outline
      </Button>
    </Box>
  ),
}

export const TonalVariations: ButtonStory = {
  render: () => (
    <Box bg='background.tint'>
      <Button m={2} px={100} variation='plain'>
        Fill
      </Button>
      <Button m={2} px={100} variation='white'>
        Outline
      </Button>
    </Box>
  ),
}

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

          <TableOfContents links={['Overview', 'Props', 'Examples & Variations']} />

          <Section heading='Overview'>
            <Text>
              Buttons allow users to trigger an action or event with a single click. For example, you can use
              a button for allowing the functionality of submitting a form, opening a dialog, canceling an
              action, or performing a delete operation.
            </Text>
          </Section>

          <Section heading='Props'>
            <ArgsTable />
          </Section>

          <Section heading='Examples & Variations'>
            <Text>
              Each button variation and property has set functions that provide patterns and signals to the
              user their function and the desired actions on a per page and per component basis. Because of
              this it is very important that the different variants are implemented consistently across
              products, so that they message the correct actions.
            </Text>

            <Text textStyle='subheading3' py={4}>
              Sizes
            </Text>
            <Text>
              Our design system supports a default button size as well as a extraLarge, large and small size.
              If a large or small button is desired, set the size property to either extraLarge, large or
              small. These sizes allow for hierarchy, emphasis, larger/smaller touch targets, and flexibility.
            </Text>
            <LiveDemo
              storyTitle={meta.title}
              storyName='Sizes'
              code={`
<Box>
  <Button m={2} size='small'>
    Small
  </Button>
  <Button m={2} size='medium'>
    Large
  </Button>
  <Button m={2} size='large'>
    Medium
  </Button>
  <Button m={2} size='extraLarge'>
    Extra Large
  </Button>
</Box>
`}
            />

            <Text textStyle='subheading3' py={4}>
              Core Variations
            </Text>
            <Text>
              Our core button variations use fill and subtle properties. These buttons make up the majority of
              our
            </Text>
            <LiveDemo
              storyTitle={meta.title}
              storyName='CoreVariations'
              code={`
<Box>
  <Button m={2} px={100} variation='fill'>
    Fill
  </Button>
  <Button m={2} px={100} variation='outline'>
    Outline
  </Button>
</Box>
`}
            />

            <Text textStyle='subheading3' py={4}>
              Tonal Variations
            </Text>
            <Text>
              Tonal variations can be used on their own to reduce hierarchy or paired with primary buttons for
              supporting actions.
            </Text>
            <LiveDemo
              storyTitle={meta.title}
              storyName='TonalVariations'
              code={`
<Box bg='background.tint'>
  <Button m={2} px={100} variation='plain'>
    Fill
  </Button>
  <Button m={2} px={100} variation='white'>
    Outline
  </Button>
</Box>
`}
            />
          </Section>
        </ThemeProvider>
      ),
    },
  },
}
export default meta
