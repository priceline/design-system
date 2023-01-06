/* istanbul ignore file */

import styled from 'styled-components'
import { Flex, Box } from '..'

const SlideWrapper = styled(Box)``

const ScrollFlex = styled(Flex)`
  position: relative;
  overflow: auto;
  & > ${SlideWrapper} {
    flex-shrink: 0;
  }
`

export { ScrollFlex, SlideWrapper }
