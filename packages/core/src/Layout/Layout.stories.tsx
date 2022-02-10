import React from 'react'
import styled from 'styled-components'
import { Flex, Container, Box, Layout } from '..'

export default {
  title: 'Layout',
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
        <LayoutDemoBox color='warning.base' />
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
}
