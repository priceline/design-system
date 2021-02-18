import React from 'react'
import { ProgressBar } from '.'
import { Flex, Divider } from '../../src/'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
}

export const passwordProgressBar = () => (
  <Flex flexDirection='column'>
    <ProgressBar numberOfSteps={0} />
    <Divider m={4}></Divider>
    <ProgressBar numberOfSteps={1} />
    <Divider m={4}></Divider>
    <ProgressBar numberOfSteps={2} />
    <Divider m={4}></Divider>
    <ProgressBar numberOfSteps={3} />
    <Divider m={4}></Divider>
    <ProgressBar numberOfSteps={4} />
  </Flex>
)

passwordProgressBar.story = {
  name: 'All',
}
