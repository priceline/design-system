import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { Box } from '../Box'
import { Button } from '../Button'

export const StyledButton = styled(Button)`
  &:hover {
    box-shadow: ${themeGet('shadows.overlay-lg')};
  }
`

export const NotificationDot = styled(Box)`
  border: 1px solid rgba(255, 255, 255, 0.75);
`
