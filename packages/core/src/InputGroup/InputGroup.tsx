import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'
import { space } from 'styled-system'
import themeGet from '@styled-system/theme-get'

import { Box } from '../Box'
import { getPaletteColor } from '../utils'

const propTypes = {
  ...space.propTypes,
  borderColor: PropTypes.string,
}

const InputGroup: React.FC<InferProps<typeof propTypes>> = styled.div`
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

InputGroup.propTypes = propTypes

InputGroup.defaultProps = {
  borderColor: 'border',
}

export default InputGroup
