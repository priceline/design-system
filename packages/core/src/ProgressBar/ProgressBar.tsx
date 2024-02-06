import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { type PaletteColor, type PaletteFamilyName } from '../theme/theme'

const CustomBox = styled(Box)`
  border-radius: 2px;
`

const defaultStepColor = 'background.light'

export type ProgressBarProps = {
  steps: { color: PaletteColor | PaletteFamilyName }[]
  currentStep: number
  stepHeight?: string
  className?: string
}

export function ProgressBar({ steps, currentStep, stepHeight, className }: ProgressBarProps) {
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

ProgressBar.defaultProps = {
  stepHeight: '4px',
}
