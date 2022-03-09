import styled from 'styled-components'
import { ChipContentWrapper } from '../ChipContentWrapper'
import { getPaletteColor } from '../../utils'
import { Label } from '../../Label'

const ChipLabel = styled(Label)`
  display: inline-flex;
  width: auto;
  user-select: none;
  padding: 0;
  margin: 0;
  > input:focus ~ ${ChipContentWrapper} {
    border-color: ${getPaletteColor('base')};
    outline-offset: 2px;
    outline: 3px solid ${getPaletteColor('base')};
  }
`

export { ChipLabel }
