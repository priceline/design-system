import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { themeGet, space, fontSize } from 'styled-system'
import {
  applyVariations,
  getPaletteColor,
  deprecatedColorValue,
  deprecatedPropType
} from './utils'

const variations = {
  small: css`
    ${themeGet('textStyles.small')}

    & > svg {
      width: 12px;
      height: 12px;
    }
  `,
  regular: css`
    ${themeGet('textStyles.display0')}
    line-height: ${themeGet('lineHeights.standard')};
    
    & > svg {
      width: 14px;
      height: 14px;
    }
  `
}

const Stamp = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  min-height: 24px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: ${themeGet('letterSpacings.caps')};
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => getPaletteColor(props.borderColor, 'base')(props)};
  color: ${getPaletteColor('base')};
  ${props =>
    props.bg
      ? `background-color: ${getPaletteColor(props.bg, 'base')(props)};`
      : ''}
  
  ${space} ${fontSize};
  ${applyVariations('Stamp', variations)}
`

Stamp.displayName = 'Stamp'

Stamp.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  variation: PropTypes.oneOf(Object.keys(variations)),
  color: deprecatedColorValue(),
  bg: deprecatedPropType('color'),
  borderColor: deprecatedColorValue()
}

Stamp.defaultProps = {
  px: 1,
  py: 0,
  color: 'border.light',
  bg: 'background.light',
  borderColor: 'border.base',
  variation: 'regular'
}

export default Stamp
