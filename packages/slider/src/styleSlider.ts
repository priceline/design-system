import styled from 'styled-components'
import { space } from 'styled-system'
import { getPaletteColor } from 'pcln-design-system'

const styleSlider = (component) => styled(component)`
  position: relative;
  height: 32px;
  padding-top: 12px;
  border-radius: 9999px;
  touch-action: none;

  ${space} & .rc-slider-rail, & .rc-slider-track {
    height: 8px;
  }
  & .rc-slider-handle {
    width: 32px;
    height: 32px;
    margin-top: -12px;
  }

  & .rc-slider-rail {
    position: absolute;
    width: 100%;
    background-color: ${getPaletteColor('background.light')};
    border-radius: 9999px;
  }

  & .rc-slider-track {
    position: absolute;
    left: 0;
    border-radius: 9999px;
    background-color: ${getPaletteColor('base')};
  }

  & .rc-slider-handle {
    position: absolute;
    cursor: pointer;
    cursor: grab;
    border-radius: 9999px;
    border: solid 4px ${getPaletteColor('base')};
    background-color: ${getPaletteColor('background.lightest')};
    touch-action: pan-x;

    &:hover {
    }
    &:active {
    }
    &:focus {
      box-shadow: 0 0 0 2px ${getPaletteColor('light')};
    }
  }

  &.rc-slider-disabled {
    color: ${getPaletteColor('border.base')};
    .rc-slider-track {
    }
    .rc-slider-handle {
      box-shadow: none;
      cursor: default;
    }
  }
`

export default styleSlider
