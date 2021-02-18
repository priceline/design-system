import React from 'react'
import { Box } from '../Box'
import ProgressBar from './ProgressBar'

export default {
  title: 'ProgressBar',
  component: ProgressBar,
}

const steps = [
  { color: 'warning' },
  { color: 'caution' },
  { color: 'primary' },
  { color: 'success' },
]

export const basicProgressBar = () => (
  <ProgressBar steps={steps} stepIndex={3} />
)

export const Thick = () => (
  <ProgressBar steps={steps} stepIndex={3} stepHeight='10px' />
)

export const Short = () => (
  <Box width='300px'>
    <ProgressBar steps={steps} stepIndex={4} />
  </Box>
)
