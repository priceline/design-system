/* eslint-disable react/no-unescaped-entities */
import { ArgsTable, Primary, PRIMARY_STORY } from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { Hero, Section, StoryStage, TableOfContents, Flex, Swatch, Text, ThemeProvider } from '..'
import type { ISwatchProps } from './Swatch'
import React, { useState } from 'react'

type SwatchStory = StoryObj<ISwatchProps>

export const Playground: SwatchStory = {
  render: (args) => <Swatch {...args} />,
  args: {
    colors: [
      '#D50032',
      '#1B7742',
      '#0033A0',
      '#002244',
      '#6244BB',
      '#31225D',
      '#31225D',
      '#FFC658',
      '#4F6F8F',
    ],
  },
  argTypes: {
    onClick: () => null,
  },
}

export const SingleColor: SwatchStory = {
  render: () => (
    <StoryStage>
      <Swatch colors={['#0033A0']} />
    </StoryStage>
  ),
}

export const MultipleColors: SwatchStory = {
  render: () => (
    <StoryStage>
      <Swatch colors={['#D50032', '#1B7742', '#0033A0']} />
    </StoryStage>
  ),
}

const SwatchWithState = () => {
  const [color, setColor] = useState('#D50032')
  return (
    <StoryStage>
      <Swatch
        colors={['#FFFFFF', '#D50032', '#1B7742', '#0033A0']}
        onClick={(color) => (typeof color === 'string' ? setColor(color) : undefined)}
      />
      <Flex flexDirection='row' alignItems='center'>
        <Text mr={2}>Color:</Text>
        <Text>{color}</Text>
      </Flex>
    </StoryStage>
  )
}

export const SelectColor: SwatchStory = {
  render: () => <SwatchWithState />,
}

const meta: Meta<typeof Swatch> = {
  title: 'Swatch',
  component: Swatch,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <Hero name='Swatch' img={null}>
            Use the Swatch component to render a group of colors. Clicking one of the colors will execute
            onClick callback, that can be passed as a prop.
          </Hero>

          <TableOfContents links={['Overview', 'Props']} />

          <Section heading='Overview'>
            <Text textStyle='paragraph'>
              Use the Swatch component to render a group of colors. Clicking one of the colors will execute
              onClick callback, that can be passed as a prop.
            </Text>
          </Section>

          <Section heading='Props'>
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
          </Section>
        </ThemeProvider>
      ),
    },
  },
}

export default meta
