import React from 'react'
import { Heading } from 'pcln-design-system'

const PageTitle = props => (
  <Heading.h1 fontSize={[3, 4, 5]} bold mt={[2, 4]} mb={2} {...props} />
)

export default PageTitle
