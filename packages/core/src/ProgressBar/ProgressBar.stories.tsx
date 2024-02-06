import React from 'react'
import { Box } from '../Box/Box'
import { PaletteFamilyName } from '../theme/theme'
import { ProgressBar } from './ProgressBar'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
}

const steps = [{ color: 'warning' }, { color: 'caution' }, { color: 'primary' }, { color: 'success' }] as {
  color: PaletteFamilyName
}[]

export const EmptyProgressBar = () => <ProgressBar steps={steps} currentStep={0} />

export const BasicProgressBar = () => <ProgressBar steps={steps} currentStep={3} />

export const Thick = () => <ProgressBar steps={steps} currentStep={1} stepHeight='10px' />

export const Short = () => (
  <Box width='300px'>
    <ProgressBar steps={steps} currentStep={4} />
  </Box>
)
