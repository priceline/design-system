import { ChevronDown } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import { Button, type ButtonProps } from '../../Button/Button'
import { getPaletteColor } from '../../utils/utils'
import { ChipContent, type ChipContentProps } from '../ChipContent/ChipContent'
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
export type ButtonChipProps = Omit<ChipContentProps, 'action' | 'ref'> & {
  expanded?: boolean
  id?: string
  showActionIcon?: boolean
  onClick?: ButtonProps['onClick']
  variation?: ButtonChipVariation
}

/**
 * @public
 */
export const ButtonChip = React.forwardRef<HTMLButtonElement, ButtonChipProps>(
  (
    {
      color = 'primary',
      width,
      id,
      m,
      disabled,
      expanded,
      children,
      onClick,
      label,
      showActionIcon,
      variation = 'outline',
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
