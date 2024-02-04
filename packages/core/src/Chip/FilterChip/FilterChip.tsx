import { Close } from 'pcln-icons'
import React from 'react'
import { FontSizeProps, SpaceProps } from 'styled-system'
import { ChipContent } from '../ChipContent/ChipContent'
import { ChipInput } from '../ChipInput'
import { ChipLabel } from '../ChipLabel'

const getTitle = ({ disabled, actionTitle }) => `${actionTitle}${disabled ? ' disabled' : ''}`

/**
 * @public
 */
export type FilterChipVariation = 'outline' | 'shadow'

/**
 * @public
 */
export type FilterChipProps = SpaceProps &
  FontSizeProps & {
    id?: string
    name?: string
    disabled?: boolean
    selected?: boolean
    onClick?: (unknown) => void
    label?: string
    showActionIcon?: boolean
    actionTitle?: string
    value?: string | number
    color?: string
    children?: React.ReactNode
    variation?: FilterChipVariation
  }

/**
 * @public
 */
export function FilterChip({
  id,
  name,
  disabled,
  selected,
  children,
  onClick,
  label,
  showActionIcon,
  actionTitle,
  value,
  variation,
  ...props
}: FilterChipProps): React.ReactElement {
  return (
    <ChipLabel htmlFor={id} width='auto' {...props}>
      <ChipInput
        type='checkbox'
        role='checkbox'
        id={id}
        name={name}
        data-testid={id}
        disabled={disabled}
        checked={selected}
        onChange={onClick}
        value={value}
      />
      <ChipContent
        label={label}
        disabled={disabled}
        selected={selected}
        action={
          showActionIcon && {
            Icon: Close,
            title: getTitle({ disabled, actionTitle }),
          }
        }
        variation={variation}
        {...props}
      >
        {children}
      </ChipContent>
    </ChipLabel>
  )
}

FilterChip.displayName = 'FilterChip'

FilterChip.defaultProps = {
  color: 'primary',
  actionTitle: 'Close',
  variation: 'outline',
}
