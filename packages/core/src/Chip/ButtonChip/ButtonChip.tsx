import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SpaceProps, FontSizeProps } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import { ChevronDown } from 'pcln-icons'

import { ChipContent } from '../ChipContent'
import { ChipContentWrapper } from '../ChipContentWrapper'
import { Button } from '../../Button'
import { getPaletteColor } from '../../utils'

const ChipButton = styled(Button)`
  background-color: transparent;
  border: none;
  padding: 0;
  &:hover {
    background-color: transparent;
  }
  &:focus {
    box-shadow: none;
    outline-offset: 2px;
    outline: 3px solid ${getPaletteColor('base')};
  }
  &:focus > ${ChipContentWrapper} {
    border-color: ${getPaletteColor('base')};
  }
`

const getTitle = ({ disabled, expanded }) => (disabled ? 'Disabled' : expanded ? 'Collapse' : 'Expand')

const buttonChipPropTypes = {
  ...propTypes.space,
  ...propTypes.fontSize,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  facet: PropTypes.string,
  label: PropTypes.string,
  bridgeLabel: PropTypes.string,
  BridgeIcon: PropTypes.node,
  Icon: PropTypes.node,
  showActionIcon: PropTypes.bool,
  Image: PropTypes.object,
}

export interface IButtonChipProps extends SpaceProps, FontSizeProps {
  Icon?: React.ReactNode | string
  BridgeIcon?: React.ReactNode | string
  selected?: boolean
  disabled?: boolean
  showActionIcon?: boolean
  facet?: string
  label?: string
  bridgeLabel?: string
  onClick?: (unknown) => unknown
  expanded?: boolean
  id?: string
  color?: string
}

const ButtonChip: React.FC<IButtonChipProps> = React.forwardRef(
  ({ id, m, disabled, expanded, children, onClick, label, showActionIcon, ...props }, ref) => (
    <ChipButton
      id={id}
      data-testid={id}
      ref={ref}
      disabled={disabled}
      onClick={onClick}
      aria-expanded={expanded}
      m={m}
    >
      <ChipContent
        label={label}
        disabled={disabled}
        selected={expanded}
        action={
          showActionIcon && {
            Icon: ChevronDown,
            title: getTitle({ disabled, expanded }),
          }
        }
        {...props}
      >
        {children}
      </ChipContent>
    </ChipButton>
  )
)

ButtonChip.displayName = 'ButtonChip'

ButtonChip.propTypes = buttonChipPropTypes

ButtonChip.defaultProps = {
  color: 'primary',
}

export default ButtonChip
