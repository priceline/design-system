/* istanbul ignore file */

import styled from 'styled-components'
import { Flex, Box } from '..'

const SlideWrapper = styled(Box)``

const ScrollFlex = styled(Flex)`
  position: relative;
  overflow: auto;
  scroll-behavior: smooth;
  & > ${SlideWrapper} {
    flex-shrink: 0;
  }
`

export { ScrollFlex, SlideWrapper }
