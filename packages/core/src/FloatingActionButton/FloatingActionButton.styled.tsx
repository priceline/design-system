import { themeGet } from '@styled-system/theme-get'
import styled from 'styled-components'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'

export const StyledButton = styled(Button)`
  &:hover {
    box-shadow: ${themeGet('shadows.overlay-lg')};
  }
`

export const NotificationDot = styled(Box)`
  border: 1px solid rgba(255, 255, 255, 0.75);
`
