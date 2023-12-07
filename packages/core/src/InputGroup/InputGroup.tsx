import React from 'react'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { Box } from '../Box'
import { getPaletteColor } from '../utils'
import { PaletteFamilyName } from '../theme'

export type InputGroupProps = SpaceProps & {
  borderColor?: PaletteFamilyName
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

InputGroup.defaultProps = {
  borderColor: 'border',
}
