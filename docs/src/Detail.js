import React from 'react'
import { Box, Divider } from 'pcln-design-system'
import Markdown from './Markdown'
import Pagination from './Pagination'

const Detail = ({ index, pages, content }) => {
  return (
    <Box px={3}>
      <Pagination index={index} pages={pages} />
      <Markdown children={content} />
      <Pagination index={index} pages={pages} />
    </Box>
  )
}

export default Detail
