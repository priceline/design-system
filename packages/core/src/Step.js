import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from './Flex'
import Text from './Text'
import CheckIcon from 'pcln-icons/lib/Check'

const StyledFlex = styled(Flex)`
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
`

function Step({ className, active, completed, children, onClick }) {
  const color = active || completed ? 'primary' : 'text.light'

  return (
    <StyledFlex className={className} alignItems="center" onClick={onClick}>
      {completed && (
        <CheckIcon color="primary" size={16} mr={1} legacy={false} />
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
