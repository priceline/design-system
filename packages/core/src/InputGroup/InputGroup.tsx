import propTypes from '@styled-system/prop-types'
import { themeGet } from '@styled-system/theme-get'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

import { Box } from '../Box'
import { getPaletteColor } from '../utils'

const inputGroupPropTypes = {
  ...propTypes.space,
  borderColor: PropTypes.string,
}

export interface IInputGroupProps extends SpaceProps {
  borderColor?: string
}

const InputGroup = styled.div<IInputGroupProps>`
  display: flex;
  align-items: center;
  border-radius: ${themeGet('borderRadii.xl')};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => getPaletteColor(props.borderColor, 'base')(props)};

  & > ${Box} {
    width: 100%;
    flex: 1 1 auto;
  }

  & input {
    border: 0;
    box-shadow: none;
  }

  ${space}
`

InputGroup.propTypes = inputGroupPropTypes

InputGroup.defaultProps = {
  borderColor: 'border',
}

export default InputGroup
