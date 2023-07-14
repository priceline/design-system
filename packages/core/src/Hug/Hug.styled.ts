import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { Card } from '../Card'
import { applyVariations, colorSchemeCustomForeground } from '../utils'
import { Flex, Box } from '..'
import type { IFlexProps } from '../Flex'

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

export interface IHeaderProps extends IFlexProps {
  iconUsesColorScheme: boolean
}

export const Header: React.FC<IHeaderProps> = styled(Flex)`
  ${colorSchemeCustomForeground}

  ${({ colorScheme, theme, iconUsesColorScheme }) => {
    // This block handles setting the color of the icon in the header to colorScheme.foreground
    // depending whether or not the icon node already had a custom color prop

    if (!iconUsesColorScheme) return ''

    const computedColorScheme = themeGet(`colorSchemes.${colorScheme}`)({ theme })

    return (
      computedColorScheme &&
      `
        svg {
          color: ${computedColorScheme.foreground};
        }
      `
    )
  }}
`
