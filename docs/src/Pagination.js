import React from 'react'
import {
  Flex,
  Box,
  Button,
  Card,
  OutlineButton,
  Icon,
  colors
} from 'pcln-design-system'
import Link from './Link'

const Pagination = ({ index, pages }) => {
  const previous = pages[index - 1]
  const next = pages[index + 1]

  return (
    <Flex py={5}>
      {previous && (
        <Link to={'/' + previous.name}>
          <Icon
            name="arrowLeft"
            size={24}
            color="blue"
            mr={2}
            style={{
              verticalAlign: 'bottom'
            }}
          />
          {previous.name}
        </Link>
      )}
      <Box ml="auto" />
      {next && (
        <Link to={'/' + next.name}>
          {next.name}
          <Icon
            name="arrowRight"
            size={24}
            color="blue"
            ml={2}
            style={{
              verticalAlign: 'bottom'
            }}
          />
        </Link>
      )}
    </Flex>
  )
}

export default Pagination
