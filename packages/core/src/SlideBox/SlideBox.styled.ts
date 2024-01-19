import styled from 'styled-components'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'

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
