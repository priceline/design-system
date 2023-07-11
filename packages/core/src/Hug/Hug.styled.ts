import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { Card } from '../Card'
import { applyVariations, colorScheme } from '../utils'
import { Flex, Box } from '..'

export const HugCard = styled(Card)`
  overflow: hidden;
  ${applyVariations('Hug')}
  ${({ colorScheme, theme }) => {
    const computedColorScheme = themeGet(`colorSchemes.${colorScheme}`)({ theme })

    return colorScheme
      ? `
        border-color: ${
          computedColorScheme.foreground !== theme.colors.white
            ? computedColorScheme.foreground
            : computedColorScheme.background
        };
      `
      : ''
  }}
`

export const BorderConcealer = styled(Box)`
  & > * {
    border: 0 !important;
  }
`

export const Header = styled(Flex)`
  ${colorScheme}
`
