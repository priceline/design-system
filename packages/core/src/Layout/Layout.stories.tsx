import React from 'react'
import styled from 'styled-components'
import { Absolute } from '../Absolute/Absolute'
import { Box } from '../Box/Box'
import { Container } from '../Container/Container'
import { Flex } from '../Flex/Flex'
import { Relative } from '../Relative/Relative'
import { Layout } from './Layout'

export default {
  title: 'Layout/Layout',
  component: Layout,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const LayoutDemoBox = styled(Box)`
  height: 100px;
`

const Template = (args) => (
  <Flex width='100%' color='primary.light'>
    {/*  @ts-ignore */}
    <Container size='xl' style={{ border: '1px solid' }}>
      <Layout {...args}>
        <LayoutDemoBox color='secondary.base' />
        <Box height='120px' color='warning.base' />
        <LayoutDemoBox color='alert' />
        <LayoutDemoBox color='primary' />
        <LayoutDemoBox color='promoPrimary' />
        <LayoutDemoBox color='promoSecondary' />
      </Layout>
    </Container>
  </Flex>
)

export const Basic = Template.bind({})
Basic.args = {
  variation: '33-33-33',
  gap: 'sm',
  rowGap: 'sm',
}

const responsiveArgs = {
  variation: ['100', '50-50', null, '60-40'],
  gap: ['sm', null, 'xl'],
  rowGap: ['sm', null, 'xl'],
  stretchHeight: true,
}

export const ResponsiveSmall = Template.bind({})
ResponsiveSmall.args = responsiveArgs
ResponsiveSmall.parameters = {
  viewport: {
    defaultViewport: 'designSystem_sm',
  },
}
ResponsiveSmall.storyName = 'Responsive (sm)'

export const ResponsiveLarge = Template.bind({})
ResponsiveLarge.args = responsiveArgs
ResponsiveLarge.parameters = {
  viewport: {
    defaultViewport: 'designSystem_lg',
  },
}
ResponsiveLarge.storyName = 'Responsive (lg)'

const OverlapTemplate = (args) => (
  <Flex width='100%' color='primary.light'>
    {/*  @ts-ignore */}
    <Container size='xl' style={{ border: '1px solid' }}>
      <Layout {...args}>
        <Relative color='secondary.base' zIndex={1} height='200px'>
          <Absolute height={100} width={200} color='notify' top='30px' right='-70px' />
        </Relative>
        <LayoutDemoBox color='primary.base' />
      </Layout>
    </Container>
  </Flex>
)

export const Overlap = OverlapTemplate.bind({})
Overlap.args = {
  variation: '60-40',
  gap: 'sm',
  rowGap: 'sm',
}

const LotsOfBoxesTemplate = (args) => (
  <Flex width='100%' color='primary.light'>
    {/*  @ts-ignore */}
    <Container size='xl' style={{ border: '1px solid' }}>
      <Layout {...args}>
        {Array.from({ length: 16 }).map((_, i) => (
          <LayoutDemoBox key={i} color='primary.base' />
        ))}
      </Layout>
    </Container>
  </Flex>
)

export const Quarters = LotsOfBoxesTemplate.bind({})
Quarters.args = {
  variation: '25-25-25-25',
  gap: 'sm',
  rowGap: 'sm',
}
Quarters.storyName = '25-25-25-25'

export const Thirds = LotsOfBoxesTemplate.bind({})
Thirds.args = {
  variation: '33-33-33',
  gap: 'sm',
  rowGap: 'sm',
}
Thirds.storyName = '33-33-33'

export const Halves = LotsOfBoxesTemplate.bind({})
Halves.args = {
  variation: '50-50',
  gap: 'sm',
  rowGap: 'sm',
}
Halves.storyName = '50-50'

export const Uneven = LotsOfBoxesTemplate.bind({})
Uneven.args = {
  variation: '60-40',
  gap: 'sm',
  rowGap: 'sm',
}
Uneven.storyName = '60-40'

export const FullWidth = LotsOfBoxesTemplate.bind({})
FullWidth.args = {
  variation: '100',
  gap: 'sm',
  rowGap: 'sm',
}
