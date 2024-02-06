import { themeGet } from '@styled-system/theme-get'
import styled from 'styled-components'
import { Box } from '../Box/Box'
import { Card } from '../Card/Card'
import { Flex, type FlexProps } from '../Flex/Flex'
import { applyVariations, colorSchemeCustomForeground } from '../utils/utils'

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

export type HeaderProps = FlexProps & {
  iconUsesColorScheme: boolean
}

export const Header: React.FC<HeaderProps> = styled(Flex)`
  ${colorSchemeCustomForeground}
`
