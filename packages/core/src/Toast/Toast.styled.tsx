import { themeGet } from '@styled-system/theme-get'
import styled, { css } from 'styled-components'
import { Flex, IFlexProps } from '../Flex'
import { IconButton } from '../IconButton'
import { applyVariations, colorSchemeCustomForeground, getPaletteColor } from '../utils'

const variations = {
  border: css`
    background-color: ${(props) => getPaletteColor(props.color, 'light')(props)};
    color: ${getPaletteColor('text.base')};
    border-left: ${themeGet('borderRadii.sm')} solid ${(props) => getPaletteColor(props.color, 'base')(props)};
  `,
  fill: css``,
}

export interface IHeaderProps extends IFlexProps {
  iconUsesColorScheme: boolean
  variation?: keyof typeof variations
}

export const LeftBorderFlex: React.FC<IHeaderProps> = styled(Flex)`
  ${applyVariations('Toast', variations)};

  ${colorSchemeCustomForeground}
`

export const RoundIconButton = styled(IconButton)`
  &&& {
    background-color: ${getPaletteColor('background.lightest')};
    padding: ${themeGet('space.1')};
    pointer-events: auto;

    &:hover {
      background-color: ${getPaletteColor('background.lightest')};
    }
  }
`
