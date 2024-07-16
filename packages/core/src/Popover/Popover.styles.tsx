import styled from 'styled-components'
import { getPaletteColor } from '../utils'

export const FixedCloseButton = styled.div`
  position: fixed;
  top: 4px;
  right: 4px;
`

export const StyledArrow = styled.div`
  fill: ${({ color }) => getPaletteColor(color)};
`
