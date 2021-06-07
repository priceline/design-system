import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import { getPaletteColor } from '../utils'

const backgroundTransition = css`
  transition: background-color 500ms ease;
`

const after = css`
  content: '';
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  left: -8px;

  background-color: ${getPaletteColor('background.lightest')};
  border: 1px solid ${getPaletteColor('border.base')};
  transition: background-color 500ms ease, left 500ms ease;
`

const Switch = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  display: flex;
  position: relative;
  align-items: center;

  appearance: none;
  cursor: pointer;

  background-color: ${getPaletteColor('background.base')};
  border: 1px solid ${getPaletteColor('border.base')};
  border-radius: 32px;

  width: 32px;
  height: 16px;

  ${backgroundTransition};

  &:after {
    ${after};
  }

  &:checked {
    background-color: ${getPaletteColor('primary.light')};
    border: 1px solid ${getPaletteColor('primary.base')};

    ${backgroundTransition};

    &:after {
      ${after};

      left: 17px;
      background-color: ${getPaletteColor('primary.base')};
      border: 1px solid ${getPaletteColor('primary.base')};
    }
  }

  ${space};
`

export default Switch
