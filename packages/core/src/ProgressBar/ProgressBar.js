import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'pcln-design-system'

const CustomBox = styled(Box)`
  width: 100%;
  border-radius: 2px;
  margin-right: 4px;
`

const defaultStepColor = 'background.light'

function ProgressBar({ steps, stepIndex, stepHeight }) {
  return (
    <Flex>
      {steps.map((step, index) => {
        const stepColor =
          index < stepIndex ? steps[stepIndex - 1].color : defaultStepColor
        return (
          <CustomBox key={step.color} color={stepColor} height={stepHeight} />
        )
      })}
    </Flex>
  )
}

ProgressBar.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
    })
  ).isRequired,
  stepIndex: PropTypes.number.isRequired,
  stepHeight: PropTypes.string,
}

ProgressBar.defaultProps = {
  stepHeight: '4px',
}

export default ProgressBar
