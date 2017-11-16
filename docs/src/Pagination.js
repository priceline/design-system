import React from 'react'
import { Flex, Box } from 'pcln-design-system'
import Link from './Link'

const Pagination = ({ index, pages }) => {
  const previous = pages[index - 1]
  const next = pages[index + 1]

  return (
    <Flex>
      {previous && <Link to={'/' + previous.name}>{previous.name}</Link>}
      <Box ml="auto" />
      {next && <Link to={'/' + next.name}>{next.name}</Link>}
    </Flex>
  )
}

export default Pagination
