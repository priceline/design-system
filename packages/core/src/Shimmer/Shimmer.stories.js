import React from 'react'
import styled from 'styled-components'
import { Shimmer, Flex } from "..";

const SkeletonBar = styled(Shimmer).attrs(() => ({
  mb: 2
}))``

export default {
  title: 'Shimmer',
  component: Shimmer
}

export const Default = () => (
  <Shimmer/>
)

export const ComposedAsSkeletonLoader= () => (
  <Flex flexDirection="column" maxWidth='700px'>
    <Flex>
      <SkeletonBar width={"100px"} height={"100px"} mr={2}/>
      <Flex flexDirection='column' width="calc(100% - 100px)">
        <SkeletonBar width={3/4}/>
        <SkeletonBar width={1/2}/>
      </Flex>
    </Flex>
    <SkeletonBar/>
    <SkeletonBar/>
  </Flex>
)
