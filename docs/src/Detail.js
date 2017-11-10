import React from 'react'
import * as P1 from 'pcln-design-system'
import { Flex, Box, Divider } from 'pcln-design-system'
import { Link } from 'react-router-dom'
import Markdown from './Markdown'

const Detail = ({ index, sections, content }) => {
  const previous = sections[index - 1]
  const next = sections[index + 1]

  return (
    <Box p={[2, 4]}>
      <Markdown children={content} />
      <Divider my={4} />
      <Flex>
        {previous && (
          <Link to={'/' + previous.name}>
            <P1.Link children={previous.name} />
          </Link>
        )}
        <Box ml="auto" />
        {next && (
          <Link to={'/' + next.name}>
            <P1.Link children={next.name} />
          </Link>
        )}
      </Flex>
    </Box>
  )
}

export default Detail
