import styled from 'styled-components'
import { Label } from '../../Label/Label'
import { getPaletteColor } from '../../utils/utils'
import { ChipContentWrapper } from '../ChipContentWrapper'

export const ChipLabel = styled(Label)`
  display: inline-flex;
  user-select: none;
  padding: 0;
  margin: 0;
  > input:focus-visible ~ ${ChipContentWrapper} {
    border-color: ${getPaletteColor('base')};
    outline-offset: 2px;
    outline: 3px solid ${getPaletteColor('base')};
  }
`
