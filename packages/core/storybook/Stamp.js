import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Stamp, Icon, Text } from '../src'

storiesOf('Stamp', module)
  .add(
    'Default Stamp',
    withInfo({
      inline: true,
      text:
        'Use the <Stamp /> component to subtly display attributes alongside listing cells and on product detail pages. Use it in conjunction with an <Icon /> component to give it more context. An Icon placed within a Stamp will inherit the assigned Stamp color.'
    })(() => <Stamp>default stamp</Stamp>)
  )
  .add('All Colors', () => (
    <div>
      <Stamp color="gray" mr={2}>
        default stamp
      </Stamp>
      <Stamp color="blue" mr={2}>
        <Icon name="Pin" size={16} mr={1} /> top location
      </Stamp>
      <Stamp color="green" mr={2}>
        <Icon name="Discount" size={16} mr={1} /> lowest price
      </Stamp>
      <Stamp color="red" mr={2}>
        <Icon name="clock" size={16} mr={1} /> just booked
      </Stamp>
      <Stamp color="orange" mr={2}>
        <Icon name="EarlyBird" size={16} mr={1} /> early bird flight
      </Stamp>
      <Stamp color="purple" mr={2}>
        <Icon name="TrendingUp" size={16} mr={1} /> top booked hotel
      </Stamp>
    </div>
  ))
  .add('Custom Background and Border Color', () => (
    <div>
      <Stamp color="white" bg="blue" borderColor="blue" mr={2}>
        custom border and background
      </Stamp>
      <Stamp color="red" bg="white" borderColor="blue" mr={2}>
        custom border and background
      </Stamp>
    </div>
  ))
  .add('Custom Text Size', () => (
    <div>
      <Stamp color="white" bg="blue" borderColor="blue" mr={2}>
        <Text fontSize={0}>Yorkie</Text>
      </Stamp>
      <Stamp color="white" bg="blue" borderColor="blue" mr={2}>
        <Text fontSize={1}>Jack Russell</Text>
      </Stamp>
      <Stamp color="white" bg="blue" borderColor="blue" mr={2}>
        <Text fontSize={2}>Golden Retriever</Text>
      </Stamp>
      <Stamp color="white" bg="blue" borderColor="blue" mr={2}>
        <Text fontSize={3}>Doberman</Text>
      </Stamp>
      <Stamp color="white" bg="blue" borderColor="blue" mr={2}>
        <Text fontSize={4}>Malamute</Text>
      </Stamp>
    </div>
  ))
