import React from 'react'
import styled from 'styled-components'
import { border, BorderProps } from 'styled-system'
import PropTypes from 'prop-types'

import { Box, IBoxProps } from '../Box'
import { applyVariations, getPaletteColor, deprecatedColorValue } from '../utils'

const styleAsButton = ({ as, ...props }) =>
  as === 'button'
    ? `
      font-family : inherit;
      &:hover {
        cursor: pointer;
        box-shadow: ${props.theme.shadows.xl};
      }`
    : ''

const cardPropTypes = {
  borderColor: deprecatedColorValue(),
  color: deprecatedColorValue(),
  borderWidth: PropTypes.oneOf([0, 1, 2]),
}

export interface ICardProps extends IBoxProps, BorderProps {
  borderColor?: string
}

const Card: React.FC<ICardProps> = styled(Box)`
  ${applyVariations('Card')}
  ${styleAsButton}

  border-color: ${(props) =>
    props.borderWidth === 0 ? '0' : getPaletteColor(props.borderColor, 'base')(props)};
  ${border};
`

Card.propTypes = cardPropTypes

Card.defaultProps = {
  borderColor: 'border',
  borderRadius: 'xsm',
  borderStyle: 'solid',
  borderWidth: 1,
}

Card.displayName = 'Card'

export default Card
