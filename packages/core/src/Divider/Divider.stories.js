import React from 'react'
import { Divider, Flex } from '..'
import styled from 'styled-components'

const description =
  'Horizontal rule with settings for padding, margin, width, and borderColor'
const ColumnFlex = styled(Flex)`
  flex-direction: column;
`

export default {
  title: 'Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export const Default = () => <Divider />
export const Margin = () => <Divider m={3} />
export const Width = () => <Divider p={3} width={1 / 2} />
export const PixelWidth = () => <Divider width={256} />
export const VWWidth = () => <Divider width='50vw' />
export const BorderColor = () => <Divider m={3} borderColor='blue' />
export const DirectionalMargin = () => (
  <div>
    <Divider mt={3} />
    <Divider mr={3} />
    <Divider mb={3} />
    <Divider ml={3} />
    <Divider mx={3} />
    <Divider my={3} />
  </div>
)
export const InsideColumnFlex = () => (
  <ColumnFlex>
    <Divider />
    <Divider ml={4} mr={4} />
    <Divider ml={4} />
    <Divider ml={4} mr={5} />
    <Divider mx={2} />
  </ColumnFlex>
)
