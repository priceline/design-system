/* istanbul ignore file */

import styled from 'styled-components'
import { Flex } from '..'

const ScrollFlex = styled(Flex)`
  position: relative;
  overflow: auto;
  > * {
    flex-shrink: 0;
  }
`

export { ScrollFlex }
