import React from 'react'
import styled from 'styled-components'
import { Flex, Container, Box, Layout, Relative, Absolute } from '..'

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
    <Container size='xl' style={{ border: `1px solid` }}>
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

export const Responsive = Template.bind({})
Responsive.args = {
  variation: ['100', '50-50', null, '60-40'],
  gap: 'sm',
  rowGap: ['sm', 'md'],
  stretchHeight: true,
}

const OverlapTemplate = (args) => (
  <Flex width='100%' color='primary.light'>
    <Container size='xl' style={{ border: `1px solid` }}>
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
