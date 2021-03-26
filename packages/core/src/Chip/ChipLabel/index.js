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
    box-shadow: 0 0 0 1px ${getPaletteColor('base')};
    border-color: ${getPaletteColor('base')};
  }
`

export { ChipLabel }
