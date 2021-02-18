import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex, Box } from 'pcln-design-system'

const CustomBox = styled(Box)`
  border-radius: 2px;
  margin-right: 4px;
`

function ProgressBar({ steps, stepIndex, stepHeight, stepWidth }) {
  const defaultBar = 'background.light'

  return (
    steps &&
    steps.length > 0 && (
      <Flex>
        {steps.map((step, index) => {
          const color = index < stepIndex ? step.color : defaultBar
          return (
            <CustomBox
              color={color}
              height={stepHeight}
              width={stepWidth}
            ></CustomBox>
          )
        })}
      </Flex>
    )
  )
}

ProgressBar.defaultProps = {
  steps: [
    { color: 'background.light' },
    { color: 'background.light' },
    { color: 'background.light' },
    { color: 'background.light' },
  ],
  stepHeight: '4px',
  stepWidth: '100%',
}

ProgressBar.propTypes = {
  steps: PropTypes.array,
  stepIndex: PropTypes.number,
  stepHeight: PropTypes.string,
  stepWidth: PropTypes.string,
}

export default ProgressBar
