import { Check } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button/Button'
import { Text } from '../Text/Text'
import { getPaletteColor } from '../utils/utils'

const StepButton = styled(Button)`
  display: flex;
  background-color: ${getPaletteColor('background.lightest')};
  color: ${getPaletteColor('base')};
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  padding: 0;
  font-weight: unset;

  &:hover {
    background-color: ${getPaletteColor('background.lightest')};
  }
`

/**
 * @public
 */
export type StepProps = {
  className?: string
  active?: boolean
  completed?: boolean
  children?: React.ReactNode | string
  onClick?: (unknown) => unknown
}

/**
 * @public
 */
export function Step({
  className,
  active,
  completed,
  children,
  onClick,
  ...props
}: StepProps): React.ReactElement {
  const color = active || completed ? 'primary' : 'text.light'

  return (
    <StepButton className={className} alignItems='center' onClick={onClick} mr={4} {...props}>
      {completed && (
        <Check color='primary' size={16} mr={1} aria-hidden={false} aria-label='Step Completed' />
      )}
      <Text color={color} fontWeight={active ? 'bold' : 'normal'} fontSize={1} aria-selected={active}>
        {children}
      </Text>
    </StepButton>
  )
}

Step.displayName = 'Step'

Step.defaultProps = {
  className: '',
  active: false,
  completed: false,
}
