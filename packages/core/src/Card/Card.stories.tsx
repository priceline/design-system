import type { Meta, StoryObj } from '@storybook/react'
import type { ICardProps } from './Card'

import { ArgsTable, Canvas, PRIMARY_STORY, Primary } from '@storybook/addon-docs'
import { userEvent, within } from '@storybook/testing-library'
import React from 'react'
import styled from 'styled-components'
import { Box, Button, Card, Flex, Image, Text, ThemeProvider } from '..'
import { Hero, Note, Section, StoryHeading, TableOfContents } from '../DocsUtils'
import heroImage from './Card.Image.Hero.png'
import cardWithLinks from './Card.Image.Links.png'
import cardStates from './Card.Image.States.png'
import * as CardStories from './Card.stories'
import { argTypes } from './Card.stories.args'

type CardStory = StoryObj<ICardProps>

export default {
  title: 'Card',
  component: Card,
}

export const Playground: CardStory = {
  render: (args) => (
    <Card {...args} m={4} p={4} width={1 / 2}>
      Card
    </Card>
  ),
  argTypes,
}

export const ShowcaseCard = () => (
  <>
    <Flex height='120px'>
      <Card
        as='button'
        width='100%'
        bg='white'
        borderWidth={0}
        boxShadowSize='sm'
        borderRadius='xl'
        display='inline-flex'
        p={3}
        m={2}
      >
        sm
      </Card>
      <Card
        as='button'
        width='100%'
        bg='white'
        borderWidth={0}
        boxShadowSize='sm'
        borderRadius='xl'
        display='inline-flex'
        p={3}
        m={2}
      >
        sm
      </Card>
      <Card
        as='button'
        width='100%'
        bg='white'
        borderWidth={0}
        boxShadowSize='sm'
        borderRadius='xl'
        display='inline-flex'
        p={3}
        m={2}
      >
        sm
      </Card>
    </Flex>
    <Flex height='200px'>
      <Card
        as='button'
        width='100%'
        bg='white'
        borderWidth={0}
        boxShadowSize='md'
        borderRadius='xl'
        display='inline-flex'
        p={3}
        m={2}
      >
        md
      </Card>
      <Card
        as='button'
        width='100%'
        bg='white'
        borderWidth={0}
        boxShadowSize='md'
        borderRadius='xl'
        display='inline-flex'
        p={3}
        m={2}
      >
        md
      </Card>
    </Flex>
    <Flex height='200px'>
      <Card
        as='button'
        width='100%'
        bg='background.base'
        borderWidth={0}
        borderRadius='xl'
        display='inline-flex'
        p={3}
        m={2}
      >
        flat
      </Card>
      <Card
        as='button'
        width='100%'
        bg='background.base'
        borderWidth={0}
        borderRadius='xl'
        display='inline-flex'
        p={3}
        m={2}
      >
        flat
      </Card>
      <Card
        as='button'
        width='100%'
        bg='background.base'
        borderWidth={0}
        borderRadius='xl'
        display='inline-flex'
        p={3}
        m={2}
      >
        flat
      </Card>
    </Flex>
  </>
)

ShowcaseCard.story = {
  name: 'Showcase Card',
}

const StyledCard = styled(Card)`
  font-family: inherit;
  &:hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`

export const CardHousingButton = () => (
  <Flex>
    <StyledCard
      boxShadowSize='sm'
      m={2}
      p={3}
      height='160px'
      width='240px'
      bg='white'
      borderRadius='xl'
      borderWidth={0}
    >
      <Text textStyle='paragraph' mb='68px'>
        text
      </Text>
      <Button width='100%'>My action is the same</Button>
    </StyledCard>
    <StyledCard
      boxShadowSize='sm'
      m={2}
      p={3}
      height='160px'
      width='240px'
      bg='white'
      borderRadius='xl'
      borderWidth={0}
    >
      <Text textStyle='paragraph' mb='20px'>
        text
      </Text>
      <Button width='100%' mb={2} variation='lightFill'>
        My action is different
      </Button>
      <Button width='100%'>My action is the same</Button>
    </StyledCard>
    <Card
      boxShadowSize='sm'
      m={2}
      p={3}
      height='160px'
      width='240px'
      bg='white'
      borderRadius='xl'
      borderWidth={0}
    >
      <Text textStyle='paragraph' mb='20px'>
        text
      </Text>
      <Button width='100%' mb={2} variation='lightFill'>
        My action is different
      </Button>
      <Button width='100%'>My action is the same</Button>
    </Card>
  </Flex>
)

CardHousingButton.story = {
  name: 'Card Housing Button',
}

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <Hero name='Card' img={heroImage}>
            Cards allow developers to house related elements. Cards are actionable Box components that come in
            elevated, filled, or outlined. Contents inside card can include inputs, buttons, toggles, or
            general actionable text.
          </Hero>

          <TableOfContents
            links={[
              'Overview',
              'Props',
              'Support for focus and hover states',
              'States',
              'Accessibility Guidelines',
            ]}
          />

          <Section heading='Overview'>
            <Text textStyle='paragraph'>
              Each Card should contain content of the same subject. For example, one card should house one
              hotel or one ad. Use Cards to bring user&apos;s attention to clickable elements such as the Card
              itself.
            </Text>
          </Section>

          <Section heading='Props'>
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
          </Section>

          <Section heading='Variatons'>
            <StoryHeading storyName='Support for focus and hover states' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              The easiest way to make a card focusable and have a hover state is by passing the prop as =
              button. This renders the Card on the DOM as html native element button. Try this in the
              playground above or look at the examples below. In the example below you can easily tab between
              each Card!
            </Text>
            <Canvas of={CardStories.ShowcaseCard} />

            <StoryHeading storyName='States' storyTitle={meta.title} />
            <Flex my={4} borderRadius='xl' bg='primary.light'>
              <Image src={cardStates} />
            </Flex>
          </Section>

          <Section heading='Accessibility Guidelines'>
            <StoryHeading
              storyName='Support for using Button or Link inside a Card'
              storyTitle={meta.title}
            />
            <Text mb={4} textStyle='paragraph'>
              When a Card has an anchor tag or link, the card does not have a focus state only the children.
            </Text>
            <Flex my={4} borderRadius='xl' bg='primary.light'>
              <Image src={cardWithLinks} />
            </Flex>
            <Note>
              Adding a nested action with the same behavior of the parent card is fully accessible. However,
              adding an action with a different action will be accessible if implemented correctly, it is
              recommended you avoid doing so. This could add strain on users as they may not be sure of the
              expected outcome when clicking anywhere else on the parent card.
            </Note>
            <Canvas of={CardStories.CardHousingButton} />
          </Section>
        </ThemeProvider>
      ),
    },
  },
}

export const BoxShadowsWithDefaultBorder = () => (
  <Box>
    <Card
      borderRadius={6}
      boxShadowSize='sm'
      m={4}
      p={4}
      width={1 / 2}
      color='black'
      bg='white'
      borderWidth={1}
    >
      Small Shadow
    </Card>
    <Card boxShadowSize='md' m={4} p={4} width={1 / 2} color='text' bg='white' borderWidth={1}>
      Medium Shadow
    </Card>
    <Card boxShadowSize='lg' m={4} p={4} width={1 / 2} color='text' bg='white' borderWidth={1}>
      Large Shadow
    </Card>
    <Card boxShadowSize='xl' m={4} p={4} width={1 / 2} color='text' bg='white' borderWidth={1}>
      XLarge Shadow
    </Card>
  </Box>
)

BoxShadowsWithDefaultBorder.story = {
  name: 'Box Shadows with default border',
}

export const BoxShadowsWithCustomBorderSize = () => (
  <Box>
    <Card
      boxShadowSize='md'
      borderRadius='xl'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      bg='white'
      borderWidth={0}
    >
      0px border
    </Card>
    <Card
      boxShadowSize='md'
      borderRadius='xl'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      bg='white'
      borderWidth={1}
    >
      1px border
    </Card>
    <Card
      boxShadowSize='md'
      borderRadius='xl'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      bg='white'
      borderWidth={2}
    >
      2px border
    </Card>
    <Card
      boxShadowSize='md'
      borderRadius='xl'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      bg='white'
      borderWidth='4'
    >
      4px border
    </Card>
  </Box>
)

export const BoxShadowsWithVaryingBorderRadii = () => (
  <Box>
    <Card boxShadowSize='sm' m={4} p={4} width={1 / 2} color='black' bg='white' borderRadius='xsm'>
      xsm (2px)
    </Card>
    <Card boxShadowSize='md' m={4} p={4} width={1 / 2} color='black' bg='white' borderRadius='md'>
      md (8px)
    </Card>
    <Card boxShadowSize='lg' m={4} p={4} width={1 / 2} color='black' bg='white' borderRadius='xl'>
      xl (16px)
    </Card>
    <Card boxShadowSize='xl' m={4} p={4} width={1 / 2} color='black' bg='white' borderRadius='3xl'>
      3xl (32px)
    </Card>
  </Box>
)

BoxShadowsWithVaryingBorderRadii.story = {
  name: 'Box Shadows with varying border radii',
}

const asButtonText = 'This card should look like a button'
export const AsButton = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const card = canvas.getByText(asButtonText)
    await userEvent.hover(card)
  },
  render: () => (
    <Card as='button' bg='white' height='200px' width='200px'>
      {asButtonText}
    </Card>
  ),
}
