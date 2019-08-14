import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Flex from './Flex'
import Step from './Step'

const Container = styled(Flex)`
  & > :not(:last-child) {
    margin-right: 32px;
  }
`

function Stepper({ className, currentIndex, items, children }) {
  return (
    <Container className={className}>
      {children}
      {items &&
        items.map((item, index) => (
          <Step
            key={index}
            isCurrent={index === currentIndex}
            isCompleted={index < currentIndex}
            onClick={item.onClick}
          >
            {item.label}
          </Step>
        ))}
    </Container>
  )
}

Stepper.displayName = 'Stepper'

Stepper.Step = Step

Stepper.propTypes = {
  className: PropTypes.string,
  currentIndex: PropTypes.number,
  items: PropTypes.array,
  children: PropTypes.node
}

Stepper.defaultProps = {
  className: '',
  currentIndex: 0
}

export default Stepper
