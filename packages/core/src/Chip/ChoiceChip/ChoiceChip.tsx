import React from 'react'
import { FontSizeProps, ResponsiveValue, SpaceProps } from 'styled-system'
import { ChipContent, IconComponent } from '../ChipContent/ChipContent'
import { ChipInput } from '../ChipInput'
import { ChipLabel } from '../ChipLabel'

/**
 * @public
 */
export type ChoiceChipVariations = 'outline' | 'shadow'

/**
 * @public
 */
export type ChoiceChipProps = SpaceProps &
  FontSizeProps &
  React.HTMLAttributes<HTMLElement> & {
    Icon?: IconComponent
    size?: ResponsiveValue<'sm' | 'md'>
    name?: string
    disabled?: boolean
    selected?: boolean
    label?: string
    value?: string | number
    variation?: ChoiceChipVariations
    topLabel?: string
    borderRadius?: string
    width?: string
    justifyContent?: string
  }

/**
 * @public
 */
export function ChoiceChip({
  id,
  name,
  color = 'primary',
  disabled,
  selected,
  children,
  onClick,
  label,
  variation = 'outline',
  width = 'auto',
  value,
  ...props
}: ChoiceChipProps): React.ReactElement {
  return (
    <ChipLabel htmlFor={id} width={width} color={color} {...props}>
      <ChipInput
        data-testid={id}
        name={name}
        value={value}
        type='radio'
        role='radio'
        id={id}
        disabled={disabled}
        checked={selected}
        onChange={onClick}
      />
      <ChipContent
        label={label}
        disabled={disabled}
        selected={selected}
        variation={variation}
        color={color}
        {...props}
      >
        {children}
      </ChipContent>
    </ChipLabel>
  )
}

ChoiceChip.displayName = 'Chip'
