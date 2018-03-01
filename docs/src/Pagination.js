import React from 'react'
import {
  Flex,
  Box,
  Button,
  Card,
  OutlineButton,
  Icon,
  Text,
  colors
} from 'pcln-design-system'
import Link from './Link'

const Pagination = ({ index, pages }) => {
  const previous = pages[index - 1]
  const next = pages[index + 1]

  return (
    <Flex
      p={3}
      my={5}
      bg="lightGray"
      style={{
        borderRadius: '2px'
      }}
    >
      {previous && (
        <Link to={'/' + previous.name}>
          <Icon
            name="chevronLeft"
            size={48}
            color="blue"
            legacy={false}
            mr={2}
            style={{
              verticalAlign: 'middle'
            }}
          />
          <Text
            fontSize={3}
            color="blue"
            style={{
              display: 'inline-block',
              verticalAlign: 'middle'
            }}
          >
            <b>Previous:</b> {previous.name}
          </Text>
        </Link>
      )}
      <Box ml="auto" />
      {next && (
        <Link to={'/' + next.name}>
          <Text
            fontSize={3}
            color="blue"
            style={{
              display: 'inline-block',
              verticalAlign: 'middle'
            }}
          >
            <b>Next:</b> {next.name}
          </Text>
          <Icon
            name="chevronRight"
            size={48}
            color="blue"
            legacy={false}
            ml={2}
            style={{
              verticalAlign: 'middle'
            }}
          />
        </Link>
      )}
    </Flex>
  )
}

export default Pagination
