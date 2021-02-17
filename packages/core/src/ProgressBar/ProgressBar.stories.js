import React from 'react'
import { ProgressBar } from '.'
import { Flex, Divider } from '../../src/'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
}

const weakProps = {
  stateText: 'WEAK',
  stateColor: 'lightRed',
  firstBarColor: 'red',
  secondBarColor: 'lightGray',
  thirdBarColor: 'lightGray',
  fourthBarColor: 'lightGray',
}

const fairProps = {
  stateText: 'FAIR',
  stateColor: 'lightYellow',
  firstBarColor: 'yellow',
  secondBarColor: 'yellow',
  thirdBarColor: 'lightGray',
  fourthBarColor: 'lightGray',
}

const goodProps = {
  stateText: 'GOOD',
  stateColor: 'lightBlue',
  firstBarColor: 'blue',
  secondBarColor: 'blue',
  thirdBarColor: 'blue',
  fourthBarColor: 'lightGray',
}

const strongProps = {
  stateText: 'STRONG',
  stateColor: 'lightGreen',
  firstBarColor: 'green',
  secondBarColor: 'green',
  thirdBarColor: 'green',
  fourthBarColor: 'green',
}

export const passwordProgressBar = () => (
  <Flex flexDirection='column'>
    <ProgressBar {...weakProps} />
    <Divider m={4}></Divider>
    <ProgressBar {...fairProps} />
    <Divider m={4}></Divider>
    <ProgressBar {...goodProps} />
    <Divider m={4}></Divider>
    <ProgressBar {...strongProps} />
  </Flex>
)

passwordProgressBar.story = {
  name: 'All',
}
