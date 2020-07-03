import styled from 'styled-components'
import {
  space,
  fontSize,
  themeGet,
  SpaceProps,
  FontSizeProps,
  BordersProps,
} from 'styled-system'
import {
  applyVariations,
  getPaletteColor,
  borders,
  deprecatedColorValue,
  mapProps,
  getSCMigrationRef,
} from '../utils'
import { ColorProps } from '../@types/colorProps'

interface InputProps
  extends SpaceProps,
    FontSizeProps,
    BordersProps,
    RefProps,
    ColorProps,
    React.HTMLProps<HTMLInputElement> {}

interface InputComponent<T> extends React.FC<T> {
  isField?: boolean
}

export const Input: InputComponent<InputProps> = mapProps(
  ({ dsRef, ...props }) => ({
    [getSCMigrationRef()]: dsRef,
    ...props,
  })
)(
  styled.input<InputProps>`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: ${themeGet('radius')};
  border-width: 1px;
  border-style: solid;

  padding: 14px 12px;

  margin: 0;

  ::placeholder {
    color: ${getPaletteColor('text.light')};
  }

  ::-ms-clear {
    display: none;
  }

  ${borders} ${space} ${fontSize};
  ${applyVariations('Input')}
`
)

Input.displayName = 'Input'
Input.isField = true
Input.defaultProps = {
  fontSize: [2, null, 1],
}
Input.propTypes = {
  color: deprecatedColorValue(),
}

export default Input
