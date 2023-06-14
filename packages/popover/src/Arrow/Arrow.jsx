import styled from 'styled-components'
import { getPaletteColor } from 'pcln-design-system'

const PopoverArrow = styled.div.attrs(({ borderColor, color, placement }) => ({
  bgColor: getPaletteColor(color, 'base'),
  brColor: getPaletteColor(borderColor, 'base'),
  'data-placement': placement,
  'data-testid': 'popover-arrow',
}))`
  &[data-placement*='left'] {
    border-color: transparent ${(props) => props.brColor} ${(props) => props.brColor} transparent;
  }
  &[data-placement*='right'] {
    border-color: ${(props) => props.brColor} transparent transparent ${(props) => props.brColor};
  }
  &[data-placement*='top'] {
    border-color: transparent transparent ${(props) => props.brColor} ${(props) => props.brColor};
  }
  &[data-placement*='bottom'] {
    border-color: ${(props) => props.brColor} ${(props) => props.brColor} transparent transparent;
  }

  position: absolute;
  background-color: ${(props) => props.bgColor};
  border-style: solid;
  border-width: 1px;
  width: 8px;
  height: 8px;
  transform: rotate(-45deg);
`

export default PopoverArrow
