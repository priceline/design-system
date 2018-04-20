import React from 'react'
import Markdown from './Markdown'
import Pagination from './Pagination'

const Detail = ({ index, pages, content }) => {
  return (
    <React.Fragment>
      <Markdown children={content} />
      <Pagination index={index} pages={pages} />
    </React.Fragment>
  )
}

export default Detail
