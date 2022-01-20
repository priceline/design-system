import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from '..'

const CustomBox = styled(Box)`
  border-radius: 2px;
`

const defaultStepColor = 'background.light'

const propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
    })
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
  stepHeight: PropTypes.string,
  className: PropTypes.string,
}

const ProgressBar: React.FC<InferProps<typeof propTypes>> = ({
  steps,
  currentStep,
  stepHeight,
  className,
}) => {
  return (
    <Flex className={className}>
      {steps.map((step, index) => {
        const stepColor = index < currentStep ? steps[currentStep - 1].color : defaultStepColor
        return (
          <CustomBox
            key={index}
            color={stepColor}
            height={stepHeight}
            width={1}
            mr={1}
            data-testid={'test-id-' + index}
          />
        )
      })}
    </Flex>
  )
}

ProgressBar.propTypes = propTypes

ProgressBar.defaultProps = {
  stepHeight: '4px',
}

export default ProgressBar
