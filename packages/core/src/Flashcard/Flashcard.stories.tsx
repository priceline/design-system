import type { Meta, StoryObj } from '@storybook/react'
import { ArrowLeft } from 'pcln-icons'
import React, { useState } from 'react'

import type { IFlashcardProps, IGridProps } from '..'
import { Button, Flashcard, Grid, IconButton, Text } from '..'
import { argTypes, defaultArgs } from './Flashcard.stories.args'

type FlashcardStory = StoryObj<IFlashcardProps>

const ExampleImage = () => (
  <img
    src='https://s1.pclncdn.com/design-assets/hero/beach.jpg?opto&optimize=medium&auto=jpg&width=600&height=450&fit=crop'
    alt='an example'
    style={{ width: '100%', display: 'block' }}
  />
)

export const Playground: FlashcardStory = {
  render: (args) => (
    <Grid width='fit-content'>
      <Flashcard {...args} />,
    </Grid>
  ),
}

export const Multiple: FlashcardStory = {
  render: (args) => (
    <Grid gap={4} templateColumns='1fr 1fr' width='fit-content'>
      <Flashcard {...args} />
      <Flashcard {...args} />
      <Flashcard {...args} />
      <Flashcard {...args} />
    </Grid>
  ),
}

export const DifferentSizes: FlashcardStory = {
  render: (args) => (
    <Grid width={200} height={200} placeItems='center'>
      <Flashcard {...args} backside={<Grid p={4}>Back</Grid>}>
        <Grid p={5}>Front</Grid>
      </Flashcard>
    </Grid>
  ),
}

const GridCell = (props: IGridProps) => <Grid placeItems='center' p={3} background='white' {...props} />
export const ContentShift: FlashcardStory = {
  render: (args) => (
    <Grid templateColumns='repeat(3, auto)' gap={2} background='black' border='8px solid'>
      <GridCell>Top Left</GridCell>
      <GridCell>Top</GridCell>
      <GridCell>Top Right</GridCell>
      <GridCell>Left</GridCell>
      <Grid background='white'>
        <Flashcard
          {...args}
          backside={
            <Grid p={5} placeItems='center'>
              Back
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Grid>
          }
        >
          <Grid p={4} placeItems='center'>
            Front
          </Grid>
        </Flashcard>
      </Grid>
      <GridCell>Right</GridCell>
      <GridCell>Bottom Left</GridCell>
      <GridCell>Bottom</GridCell>
      <GridCell>Bottom Right</GridCell>
    </Grid>
  ),
}

export const OverflowContent: FlashcardStory = {
  ...Playground,
  args: {
    ...defaultArgs,
    children: (
      <Grid overflow='hidden' borderRadius={16}>
        <Grid p={4} gap={3} overflow='auto' maxHeight={200} maxWidth={300}>
          <Text textStyle='heading3'>Front</Text>
          <Text textStyle='paragraph'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore accusamus mollitia ipsa aliquid,
            placeat sint consequatur inventore doloribus in culpa dolorum excepturi possimus ab. Deleniti
            repellat quo aspernatur nihil. Maiores.
          </Text>
        </Grid>
      </Grid>
    ),
    backside: (
      <Grid overflow='hidden' borderRadius={16}>
        <Grid p={4} gap={3} overflow='auto' maxHeight={200} maxWidth={300}>
          <Text textStyle='heading3'>Back</Text>
          <Text textStyle='paragraph'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore accusamus mollitia ipsa aliquid,
            placeat sint consequatur inventore doloribus in culpa dolorum excepturi possimus ab. Deleniti
            repellat quo aspernatur nihil. Maiores.
          </Text>
        </Grid>
      </Grid>
    ),
  },
}

export const Image: FlashcardStory = {
  ...Playground,
  args: {
    ...defaultArgs,
    perspective: 400,
    children: (
      <Grid width={400} height={300} placeItems='center' overflow='hidden' borderRadius={16}>
        <ExampleImage />
      </Grid>
    ),
    backside: (
      <Grid position='relative' width={400} height={300} p={5} gap={3} overflow='hidden' borderRadius={16}>
        <Grid
          position='absolute'
          zIndex={-1}
          style={{ inset: 0, filter: 'blur(.5rem)', transform: 'rotateY(180deg)' }}
        >
          <ExampleImage />
        </Grid>
        <Grid position='absolute' zIndex={-1} style={{ inset: 0, opacity: 0.75 }} background='white' />
        <Text textStyle='heading3'>Beach</Text>
        <Text textStyle='paragraph'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore accusamus mollitia ipsa aliquid,
          placeat sint consequatur inventore doloribus in culpa dolorum excepturi possimus ab. Deleniti
          repellat quo aspernatur nihil. Maiores.
        </Text>
      </Grid>
    ),
  },
}

export const Controlled: FlashcardStory = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    const flipButton = (
      <IconButton
        icon={<ArrowLeft />}
        style={{ position: 'absolute', top: '1rem', left: '1rem', border: '2px solid currentcolor' }}
        onClick={() => setOpen(!open)}
        borderRadius='full'
      />
    )

    return (
      <Grid gap={5} placeItems='center'>
        <Button onClick={() => setOpen(!open)}>Toggle the Flashcard</Button>
        <Flashcard {...args} open={open} backside={<Grid p={6}> {flipButton} Back </Grid>}>
          <Grid p={6}> {flipButton} Front </Grid>
        </Flashcard>
      </Grid>
    )
  },
  argTypes: { open: { table: { disable: true } } },
  args: { perspective: 300 },
}

const insideProps = { width: 200, height: 200, placeItems: 'center', p: 3 }
const outsideProps = { width: 300, height: 300, placeItems: 'center', p: 3 }
export const Nested: FlashcardStory = {
  render: (args) => (
    <Grid width='fit-content'>
      <Flashcard {...args} backside={<Grid {...outsideProps}> Outside Back </Grid>}>
        <Grid gap={3} {...outsideProps}>
          <Text>Outside Front</Text>
          <Flashcard {...args} backside={<Grid {...insideProps}> Inside Back </Grid>}>
            <Grid {...insideProps}>Inside Front</Grid>
          </Flashcard>
        </Grid>
      </Flashcard>
    </Grid>
  ),
  args: {
    ...defaultArgs,
    boxShadowSize: 'md',
  },
}

const meta: Meta<typeof Flashcard> = {
  title: 'Flashcard',
  component: Flashcard,
  args: defaultArgs,
  argTypes: argTypes,
}

export default meta
