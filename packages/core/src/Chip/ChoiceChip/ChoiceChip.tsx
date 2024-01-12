import React from 'react'
import { FontSizeProps, SpaceProps } from 'styled-system'
import { ChipContent } from '../ChipContent'
import { ChipInput } from '../ChipInput'
import { ChipLabel } from '../ChipLabel'

export type Variations = 'outline' | 'shadow'

export type ChoiceChipProps = SpaceProps &
  FontSizeProps &
  React.HTMLAttributes<HTMLElement> & {
    name?: string
    disabled?: boolean
    selected?: boolean
    label?: string
    value?: string | number
    variation?: Variations
    topLabel?: string
    borderRadius?: string
    width?: string
    justifyContent?: string
  }

export function ChoiceChip({
  id,
  name,
  disabled,
  selected,
  children,
  onClick,
  label,
  variation,
  width = 'auto',
  value,
  ...props
}: ChoiceChipProps): React.ReactElement {
  return (
    <ChipLabel htmlFor={id} width={width} {...props}>
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
      <ChipContent label={label} disabled={disabled} selected={selected} variation={variation} {...props}>
        {children}
      </ChipContent>
    </ChipLabel>
  )
}

ChoiceChip.displayName = 'Chip'

ChoiceChip.defaultProps = {
  color: 'primary',
  variation: 'outline',
}
