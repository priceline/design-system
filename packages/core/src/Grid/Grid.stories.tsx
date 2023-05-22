import { ArgsTable, PRIMARY_STORY, Primary } from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import {
  Hero,
  LiveDemo,
  RelatedComponent,
  RelatedComponentContainer,
  Section,
  StoryHeading,
  TableOfContents,
} from 'pcln-docs-utils'
import React from 'react'
import { Box, Flex, Grid, IGridProps, Text, ThemeProvider } from '..'

type GridStory = StoryObj<IGridProps>

const GridItem = (props: IGridProps) => <Grid p={4} width={1} placeItems='center' {...props} />

export const Playground: GridStory = {
  render: () => (
    <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']} placeItems={'center'} gap={2}>
      <GridItem style={{ background: '#00f8' }}>A</GridItem>
      <GridItem style={{ background: '#0f08' }}>B</GridItem>
      <GridItem style={{ background: '#0ff8' }}>C</GridItem>
      <GridItem style={{ background: '#f008' }}>D</GridItem>
      <GridItem style={{ background: '#f0f8' }}>E</GridItem>
      <GridItem style={{ background: '#ff08' }}>F</GridItem>
    </Grid>
  ),
}

export const TemplateAreas: GridStory = {
  render: () => (
    <Grid
      templateAreas={`
        'header header' 
        'sidebar content'
        'footer footer'
      `}
      placeItems={'center'}
      minHeight={'calc(100vh - 5rem)'}
      templateRows={'auto 1fr auto'}
      templateColumns={'15em 1fr'}
      gap={2}
    >
      <GridItem gridArea='header' style={{ background: '#00f8' }}>
        Header
      </GridItem>
      <GridItem gridArea='sidebar' height='100%' style={{ background: '#0f08' }}>
        Sidebar
      </GridItem>
      <GridItem gridArea='content' height='100%' style={{ background: '#0ff8' }}>
        Content
      </GridItem>
      <GridItem gridArea='footer' mt='auto' style={{ background: '#f008' }}>
        Footer
      </GridItem>
    </Grid>
  ),
}

export const NestedGrids: GridStory = {
  render: () => (
    <Grid templateColumns='1fr 1fr' placeItems='center' gap={2}>
      <GridItem style={{ background: '#00f8' }}>A</GridItem>
      <GridItem style={{ background: '#0f08' }}>B</GridItem>
      <GridItem style={{ background: '#0ff8' }}>C</GridItem>
      <Grid width={1} templateColumns='1fr 1fr 1fr' placeItems='center' gap={2}>
        <GridItem style={{ background: '#f008' }}>D</GridItem>
        <GridItem style={{ background: '#f0f8' }}>E</GridItem>
        <GridItem style={{ background: '#ff08' }}>F</GridItem>
      </Grid>
    </Grid>
  ),
}

export const ResponsiveLayout: GridStory = {
  render: () => (
    <Grid
      templateColumns={[
        '1fr',
        '1fr 1fr',
        '1fr 1fr 1fr',
        '1fr 1fr 1fr 1fr',
        '1fr 1fr 1fr 1fr 1fr',
        '1fr 1fr 1fr 1fr 1fr 1fr',
      ]}
      placeItems='center'
      gap={2}
    >
      <GridItem style={{ background: '#00f8' }}>A</GridItem>
      <GridItem style={{ background: '#0f08' }}>B</GridItem>
      <GridItem style={{ background: '#0ff8' }}>C</GridItem>
      <GridItem style={{ background: '#f008' }}>D</GridItem>
      <GridItem style={{ background: '#f0f8' }}>E</GridItem>
      <GridItem style={{ background: '#ff08' }}>F</GridItem>
    </Grid>
  ),
}

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      page: () => (
        <ThemeProvider>
          <Hero name='Grid' img={''}>
            Grids divide a web page into rows and columns and offer comprehensive features for controlling the
            sizing and positioning of grid items, including the ability to define grid areas, set grid gaps,
            and control the alignment and distribution of grid items
          </Hero>

          <TableOfContents links={['Overview', 'Props', 'Examples', 'Related Components']} />

          <Section heading='Overview'>
            <Text textStyle='paragraph'>
              Grid is based on the CSS Grid Layout Module, which provides a two-dimensional grid-based layout
              system, with rows and columns, making it easier to design web pages and components.
            </Text>
          </Section>

          <Section heading='Props'>
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
          </Section>

          <Section heading='Examples'>
            <StoryHeading storyName='Template Areas' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Using the <code>gridTemplateAreas</code> prop, you can define grid areas and assign grid items
              to them. The grid areas are defined by using the <code>grid-area</code> property on the grid
              items. The <code>grid-area</code> property can be used to assign a name to a grid item, which
              can then be used as a value of the <code>grid-template-areas</code> property.
            </Text>
            <LiveDemo code={TemplateAreas} />

            <StoryHeading storyName='Nested Grids' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Grids can be nested inside other grids. This allows you to create more complex layouts.
            </Text>
            <LiveDemo code={NestedGrids} />

            <StoryHeading storyName='Responsive Layout' storyTitle={meta.title} />
            <Text textStyle='paragraph'>
              Grids can be responsive. You can define the number of columns for each breakpoint using the
              <code>templateColumns</code> prop.
            </Text>
            <LiveDemo code={ResponsiveLayout} />
          </Section>

          <Section heading='Related Components'>
            <RelatedComponentContainer>
              <RelatedComponent name='Box'>
                <Box width='75%' height='75%' bg='background.lightest'>
                  Box
                </Box>
              </RelatedComponent>
              <RelatedComponent name='Flex'>
                <Flex
                  justifyContent='center'
                  alignItems='center'
                  width='75%'
                  height='75%'
                  bg='background.lightest'
                >
                  Flex
                </Flex>
              </RelatedComponent>
            </RelatedComponentContainer>
          </Section>
        </ThemeProvider>
      ),
    },
  },
}
export default meta
