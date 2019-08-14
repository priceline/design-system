import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from './Flex'
import Text from './Text'
import Icon from 'pcln-icons'

const Container = styled(Flex)`
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
`

function Step({ className, isCurrent, isCompleted, children, onClick }) {
  const color = isCurrent || isCompleted ? 'primary' : 'text.light'

  return (
    <Container className={className} alignItems="center" onClick={onClick}>
      {isCompleted && (
        <Icon name="check" color="primary" size={16} mr={1} legacy={false} />
      )}
      <Text color={color} bold={isCurrent} fontSize={1}>
        {children}
      </Text>
    </Container>
  )
}

Step.displayName = 'Step'

Step.propTypes = {
  className: PropTypes.string,
  isCurrent: PropTypes.bool,
  isCompleted: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Step
