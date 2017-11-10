import React from 'react'
import * as DS from 'pcln-design-system'
import { Flex, Box, Divider } from 'pcln-design-system'
import { Link } from 'react-router-dom'
import Markdown from './Markdown'

const PageLink = DS.Link.withComponent(Link)

const Detail = ({ index, pages, content }) => {
  const previous = pages[index - 1]
  const next = pages[index + 1]

  return (
    <Box p={[2, 4]}>
      <Markdown children={content} />
      <Divider my={4} />
      <Flex>
        {previous && (
          <PageLink to={'/' + previous.name}>
            <span children={previous.name} />
          </PageLink>
        )}
        <Box ml="auto" />
        {next && (
          <PageLink to={'/' + next.name}>
            <span children={next.name} />
          </PageLink>
        )}
      </Flex>
    </Box>
  )
}

export default Detail
