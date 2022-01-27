import React from 'react'
import { Hide } from 'pcln-design-system'
import { StyledDotGroup } from './Dots.styles'

const Dots = () => (
  <Hide xs sm>
    <StyledDotGroup data-testid='dot_group' />
  </Hide>
)

export { Dots }
