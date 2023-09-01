import type { IShimmerProps } from './Shimmer'

import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from '..'

import { Shimmer } from '.'

const SkeletonBar = styled(Shimmer)<IShimmerProps>`
  margin-bottom: 8px;
`

export default {
  title: 'Shimmer',
  component: Shimmer,
}

export const Default = () => <Shimmer />

export const ComposedAsSkeletonLoader = () => (
  <Flex flexDirection='column' maxWidth='700px'>
    <Flex>
      <SkeletonBar width='100px' height='100px' mr={2} />
      <Flex flexDirection='column' width='calc(100% - 100px)'>
        <SkeletonBar width={3 / 4} />
        <SkeletonBar width={1 / 2} />
      </Flex>
    </Flex>
    <SkeletonBar />
    <SkeletonBar />
  </Flex>
)

export const LightSkeletonLoader = () => (
  <Flex flexDirection='column' maxWidth='700px'>
    <Flex>
      <SkeletonBar width='100px' height='100px' mr={2} variation='light' />
      <Flex flexDirection='column' width='calc(100% - 100px)'>
        <SkeletonBar width={3 / 4} variation='light' />
        <SkeletonBar width={1 / 2} variation='light' />
      </Flex>
    </Flex>
    <SkeletonBar variation='light' />
    <SkeletonBar variation='light' />
  </Flex>
)

export const DarkSkeletonLoader = () => (
  <Box color='background.darkest'>
    <Flex flexDirection='column' maxWidth='700px'>
      <Flex>
        <SkeletonBar width='100px' height='100px' mr={2} variation='dark' />
        <Flex flexDirection='column' width='calc(100% - 100px)'>
          <SkeletonBar width={3 / 4} variation='dark' />
          <SkeletonBar width={1 / 2} variation='dark' />
        </Flex>
      </Flex>
      <SkeletonBar animationWidth={700} variation='dark' />
      <SkeletonBar animationWidth={700} variation='dark' />
    </Flex>
  </Box>
)
