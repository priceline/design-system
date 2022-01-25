import { DotGroup } from 'pure-react-carousel'
import styled from 'styled-components'
import { getPaletteColor } from 'pcln-design-system'

const StyledDotGroup = styled(DotGroup)`
  display: flex;
  max-width: 320px;
  min-width: 240px;
  & > button {
    flex: 1;
    height: 5px;
    border-width: 0px 1px 0px 1px;
    border-style: solid;
    border-color: ${(props) => getPaletteColor('border.tint')(props)};
    background: ${(props) => getPaletteColor('border.tint')(props)};
  }
  &>button: hover {
    border-color: ${(props) => getPaletteColor('background.lightest')(props)};
    background: ${(props) => getPaletteColor('primary.base')(props)};
  }
  & > button.carousel__dot--selected {
    background: ${(props) => getPaletteColor('border.shade')(props)};
    border-color: ${(props) => getPaletteColor('border.shade')(props)};
  }
  & > button.carousel__dot--selected:hover {
    background: ${(props) => getPaletteColor('border.shade')(props)};
    border-color: ${(props) => getPaletteColor('border.shade')(props)};
  }
`

export { StyledDotGroup }
