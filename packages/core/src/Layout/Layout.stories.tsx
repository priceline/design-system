import React from 'react'
import styled from 'styled-components'
import { Flex, Container, Box, Layout } from '..'

export default {
  title: 'Layout',
  component: Layout,
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
      </Layout>
    </Container>
  </Flex>
)

export const LayoutInContainer = Template.bind({})
LayoutInContainer.args = {
  variation: '33-33-33',
  gap: 'sm',
}
