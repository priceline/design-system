import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, SpaceProps } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { themeGet } from '@styled-system/theme-get'

import { Box } from '../Box'
import { getPaletteColor } from '../utils'

const inputGroupPropTypes = {
  ...propTypes.space,
  borderColor: PropTypes.string,
}

export interface IInputGroupProps extends SpaceProps {
  borderColor?: string
}

const InputGroup: React.FC<IInputGroupProps> = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${themeGet('radius')};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => getPaletteColor(props.borderColor, 'base')(props)} ${space} & > ${Box} {
    width: 100%;
    flex: 1 1 auto;
  }

  & input {
    border: 0;
    box-shadow: none;
  }
`

InputGroup.propTypes = inputGroupPropTypes

InputGroup.defaultProps = {
  borderColor: 'border',
}

export default InputGroup
