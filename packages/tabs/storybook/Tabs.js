import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex, Heading } from 'pcln-design-system'
import Tabs from '../src'

const props = {
  activeColor: 'darkBlue',
  defaultColor: 'blue',
  tabs: [
    {
      title: 'Tab 1'
    },
    {
      title: 'Tab 2'
    },
    {
      title: 'Tab 3'
    }
  ]
}

const childElements = [
  <Box>Child 1</Box>,
  <Box>Child 2</Box>,
  <Box>Child 3</Box>
]

const mappedProps = [
  {
    title: 'Mapped content 1',
    body: 'Body Text 1'
  },
  {
    title: 'Mapped content 2',
    body: 'Body Text 2'
  },
  {
    title: 'Mapped content 3',
    body: 'Body Text 3'
  }
]

const ExampleTab = props => (
  <Flex flexDirection="column">
    <Heading>{props.title}</Heading>
    <Box>{props.body}</Box>
  </Flex>
)

const mockHotelProps = {
  activeColor: 'darkBlue',
  defaultColor: 'blue',
  tabs: [
    {
      title: 'Tab 1',
      content: {
        confirmationNumber: '123-TEST'
      }
    },
    {
      title: 'Tab 2',
      content: {
        hotelName: 'Venetian Las Vegas'
      }
    },
    {
      title: 'Tab 3',
      content: {
        importantInfo: 'Free wifi'
      }
    }
  ]
}

const ManageTab = props => <Box>{props.confirmationNumber}</Box>

const RoomTab = props => <Box>{props.hotelName}</Box>

const ImportantInfoTab = props => <Box>{props.importantInfo}</Box>

storiesOf('Tabs', module)
  .add('with hardcoded elements', () => {
    return (
      <Tabs {...props}>
        <Box>Test 1</Box>
        <Box>Test 2</Box>
        <Box>Test 3</Box>
      </Tabs>
    )
  })
  .add('with mapped elements', () => {
    return <Tabs {...props}>{childElements.map(child => child)}</Tabs>
  })
  .add('with mapped props', () => {
    return (
      <Tabs {...props}>
        {mappedProps.map((content, i) => (
          <ExampleTab key={i} {...content} />
        ))}
      </Tabs>
    )
  })
  .add('with composite components consuming props', () => {
    return (
      <Tabs {...mockHotelProps}>
        <ManageTab {...mockHotelProps.tabs[0].content} />
        <RoomTab {...mockHotelProps.tabs[1].content} />
        <ImportantInfoTab {...mockHotelProps.tabs[2].content} />
      </Tabs>
    )
  })
