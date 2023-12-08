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

export type InputGroupProps = SpaceProps & {
  borderColor?: string
  children?: React.ReactNode
}

export const InputGroup: React.FC<InputGroupProps> = styled.div`
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
