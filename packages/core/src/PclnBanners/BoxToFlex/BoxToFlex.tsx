import { Flex } from '../..'
import styled from 'styled-components'

const BoxToFlex = styled(Flex)`
  ${({ buttonRightBreakPoint, isButtonFullWidthAtBreakPoint, theme }) =>
    buttonRightBreakPoint
      ? `
        display: block;
        ${isButtonFullWidthAtBreakPoint ? '& button { display: none; }' : ''}
        > :last-child { margin-top: 8px; }
        ${theme.mediaQueries[buttonRightBreakPoint]} {
          display: flex;
          ${isButtonFullWidthAtBreakPoint ? '& button { display: block; }' : ''}
          > :last-child { margin-top: 0; }
        }
      `
      : ''}
`

export default BoxToFlex
