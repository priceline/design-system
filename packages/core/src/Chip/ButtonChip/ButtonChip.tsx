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
  &:focus-visible {
    box-shadow: none;
    outline-offset: 2px;
    outline: 3px solid ${getPaletteColor('base')};
  }
  &:focus-visible > ${ChipContentWrapper} {
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
  variation: PropTypes.oneOf(['outline', 'shadow']),
}

export type Variations = 'outline' | 'shadow'

export type ButtonChipProps = SpaceProps &
  FontSizeProps & {
    BridgeIcon?: React.ReactNode | string
    bridgeLabel?: string
    children?: React.ReactNode
    color?: string
    disabled?: boolean
    expanded?: boolean
    facet?: string
    Icon?: React.ReactNode | string
    id?: string
    label?: string
    selected?: boolean
    showActionIcon?: boolean
    onClick?: (unknown) => unknown
    width?: string
    variation?: Variations
  }

const ButtonChip: React.FC<ButtonChipProps> = React.forwardRef(
  (
    {
      color,
      width,
      id,
      m,
      disabled,
      expanded,
      children,
      onClick,
      label,
      showActionIcon,
      variation,
      ...props
    },
    ref
  ) => (
    <ChipButton
      color={color}
      width={width}
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
        variation={variation}
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
  variation: 'outline',
}

export default ButtonChip
