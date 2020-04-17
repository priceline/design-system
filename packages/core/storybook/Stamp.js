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
  .add('Small Stamp', () => (
    <Stamp color="primary" size="small">
      <Icon name="Pin" mr={1} />
      Stamp Text
    </Stamp>
  ))
  .add('Regular Stamp', () => (
    <Stamp color="primary">
      <Icon name="Pin" mr={1} />
      Stamp Text
    </Stamp>
  ))
  .add('Small Solid Stamp', () => (
    <Stamp color="primary" size="small" variation="solid">
      <Icon name="Pin" mr={1} />
      Stamp Text
    </Stamp>
  ))
  .add('Regular Solid Stamp', () => (
    <Stamp color="primary" variation="solid">
      <Icon name="Pin" mr={1} />
      Stamp Text
    </Stamp>
  ))
  .add('All Colors', () => (
    <div>
      <Stamp color="text.light" mr={2}>
        default stamp
      </Stamp>
      <Stamp color="primary" mr={2}>
        <Icon name="Pin" mr={1} /> top location
      </Stamp>
      <Stamp color="secondary" mr={2}>
        <Icon name="Discount" mr={1} /> lowest price
      </Stamp>
      <Stamp color="error" mr={2}>
        <Icon name="clock" mr={1} /> just booked
      </Stamp>
      <Stamp color="alert" mr={2}>
        <Icon name="EarlyBird" mr={1} /> early bird flight
      </Stamp>
      <Stamp color="promoPrimary" mr={2}>
        <Icon name="TrendingUp" mr={1} /> top booked hotel
      </Stamp>
    </div>
  ))
  .add('Custom Background and Border Color', () => (
    <div>
      <Stamp
        color="background.lightest"
        bg="primary"
        borderColor="primary"
        mr={2}
      >
        custom border and background
      </Stamp>
      <Stamp
        color="error"
        bg="background.lightest"
        borderColor="primary"
        mr={2}
      >
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
