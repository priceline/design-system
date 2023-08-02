import styled, { css } from 'styled-components'
import { space, fontSize, compose } from 'styled-system'
import themeGet from '@styled-system/theme-get'
import { getPaletteColor, applySizes } from '../utils'
import { Box, IBoxProps } from '../Box'

const getSizes = ({ hasChildren, hasTopLabel, borderRadiusOverride }) => ({
  sm: css`
    border-radius: ${themeGet(`borderRadii.${borderRadiusOverride || 'action-sm'}`)};
    padding-left: 8px;
    padding-right: 8px;
    ${hasChildren ? '' : hasTopLabel ? 'height: 50px;' : 'height: 32px;'}
    font-size: ${themeGet('fontSizes.0')}px;
  `,
  md: css`
    border-radius: ${themeGet(`borderRadii.${borderRadiusOverride || 'action-md'}`)};
    padding-left: 16px;
    padding-right: 16px;
    ${hasChildren ? '' : hasTopLabel ? 'height: 58px;' : 'height: 40px;'}
    font-size: ${themeGet('fontSizes.1')}px;
  `,
})

const getColor = ({ disabled }) => (disabled ? 'text.light' : 'base')

const getCursor = ({ disabled }) => (disabled ? 'not-allowed' : 'pointer')

const getBorderColor = (props) =>
  props.disabled ? 'transparent' : getPaletteColor(props.selected ? 'base' : 'border.base')(props)

const getBackgroundColor = (props) =>
  props.disabled ? 'background.base' : props.selected ? 'light' : 'background.lightest'

interface IChipContentWrapper extends IBoxProps {
  disabled: boolean
  hasChildren: boolean
  selected: boolean
  hasTopLabel: boolean
  borderRadiusOverride?: string
}

const ChipContentWrapper: React.FC<IChipContentWrapper> = styled(Box)`
  ${(props) => `
    cursor: ${getCursor(props)};
    color: ${getPaletteColor(getColor(props))(props)};
    background-color: ${getPaletteColor(getBackgroundColor(props))(props)};
    border: 1px solid ${getBorderColor(props)};
    ${
      props.disabled
        ? ``
        : `
          &:hover {
            border: 1px solid ${getPaletteColor('base')(props)};
            background-color: ${getPaletteColor('background.lightest')(props)};
          }
          `
    }

    ${
      props.selected && !props.disabled
        ? `
          &:hover {
            color: ${getPaletteColor('tone')(props)};
            border: 1px solid ${getPaletteColor('tone')(props)};
            background-color: ${getPaletteColor('light')(props)};
          }
          `
        : ''
    }

    ${props.disabled && props.selected ? `border: 1px solid ${getPaletteColor('text.light')(props)};` : ''}
  `}
  width: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 2px;
  white-space: nowrap;
  ${({ theme, hasChildren, hasTopLabel, borderRadiusOverride }) =>
    applySizes(getSizes({ hasChildren, hasTopLabel, borderRadiusOverride }), undefined, theme.mediaQueries)};

  ${(props) => compose(space, fontSize)(props)}
`

export { ChipContentWrapper }
