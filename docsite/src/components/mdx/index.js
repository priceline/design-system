import Table from './Table'

import styled from 'styled-components'
import { Heading } from 'pcln-design-system'

const H2 = styled(Heading.h2)`
  :not(:first-of-type) {
    margin-top: ${props => props.theme.space[5]}px;
  }
`

export default {
  table: Table,
  h2: H2,
}
