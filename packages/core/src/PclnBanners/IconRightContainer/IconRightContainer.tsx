import { Absolute } from '../..'
import styled from 'styled-components'

const IconRightContainer = styled(Absolute)`
  ${({ theme }) => `
    right: ${theme.space[2]};
    top: ${theme.space[2]};
  `}
`

export default IconRightContainer
