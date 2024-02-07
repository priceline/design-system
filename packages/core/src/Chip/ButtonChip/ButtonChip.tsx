import { ChevronDown } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import { FontSizeProps, SpaceProps } from 'styled-system'
import { Button } from '../../Button/Button'
import { getPaletteColor } from '../../utils/utils'
import { ChipContent, type IconComponent } from '../ChipContent/ChipContent'
import { ChipContentWrapper } from '../ChipContentWrapper'

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

/**
 * @public
 */
export type ButtonChipVariation = 'outline' | 'shadow'

/**
 * @public
 */
export type ButtonChipProps = SpaceProps &
  FontSizeProps & {
    BridgeIcon?: IconComponent
    bridgeLabel?: string
    children?: React.ReactNode
    color?: string
    disabled?: boolean
    expanded?: boolean
    facet?: string
    Icon?: IconComponent
    id?: string
    label?: string
    selected?: boolean
    showActionIcon?: boolean
    onClick?: (unknown) => unknown
    width?: string
    variation?: ButtonChipVariation
  }

/**
 * @public
 */
export const ButtonChip: React.FC<ButtonChipProps> = React.forwardRef(
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

ButtonChip.defaultProps = {
  color: 'primary',
  variation: 'outline',
}
