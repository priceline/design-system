import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './Button'
import Text from './Text'
import CheckIcon from 'pcln-icons/lib/Check'
import { getPaletteColor } from './utils'

const StyledFlex = styled(Button)`
  display: flex;
  background-color: ${getPaletteColor('background.lightest')};
  color: ${getPaletteColor('base')};
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  padding: 0;
  font-weight: unset;

  &:hover {
    background-color: ${getPaletteColor('background.lightest')};
  }
`

function Step({ className, active, completed, children, onClick }) {
  const color = active || completed ? 'primary' : 'text.light'

  return (
    <StyledFlex
      className={className}
      disabled={!onClick}
      alignItems="center"
      aria-selected={active}
      onClick={onClick}
    >
      {completed && (
        <CheckIcon
          color="primary"
          size={16}
          mr={1}
          legacy={false}
          aria-label="Step Completed"
        />
      )}
      <Text color={color} bold={active} fontSize={1}>
        {children}
      </Text>
    </StyledFlex>
  )
}

Step.displayName = 'Step'

Step.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  completed: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

Step.defaultProps = {
  className: '',
  active: false,
  completed: false
}

export default Step
