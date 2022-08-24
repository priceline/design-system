import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Check } from 'pcln-icons'

import { Button } from '../Button'
import { Text } from '../Text'
import { getPaletteColor } from '../utils'

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

const propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export interface IStepProps {
  className?: string
  active?: boolean
  completed?: boolean
  children?: React.ReactNode | string
  onClick?: (unknown) => unknown
}

const Step: React.FC<IStepProps> = ({ className, active, completed, children, onClick, ...props }) => {
  const color = active || completed ? 'primary' : 'text.light'

  return (
    <StepButton className={className} alignItems='center' onClick={onClick} mr={4} {...props}>
      {completed && (
        <Check color='primary' size={16} mr={1} aria-hidden={false} aria-label='Step Completed' />
      )}
      <Text color={color} bold={active} fontSize={1} aria-selected={active}>
        {children}
      </Text>
    </StepButton>
  )
}

Step.displayName = 'Step'

Step.propTypes = propTypes

Step.defaultProps = {
  className: '',
  active: false,
  completed: false,
}

export default Step
