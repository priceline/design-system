import styled from 'styled-components'
import {
  fontWeight,
  borderRadius,
  FontWeightProps,
  BorderRadiusProps,
} from 'styled-system'
import { Box, BoxProps } from '../Box'
import { applyVariations, deprecatedPropType } from '../utils'
import { ColorProps } from '../@types/colorProps'

interface RatingBadgeProps
  extends BoxProps,
    FontWeightProps,
    BorderRadiusProps,
    ColorProps {}

const RatingBadge = styled(Box)<RatingBadgeProps>`
  display: inline-block;
  line-height: 1.5;
  ${fontWeight} ${borderRadius};
  ${applyVariations('RatingBadge')}
` as React.FC<RatingBadgeProps>

RatingBadge.defaultProps = {
  fontWeight: 'bold',
  px: 2,
  color: 'white',
  bg: 'orange',
  borderRadius: 1,
}

RatingBadge.propTypes = {
  bg: deprecatedPropType('color'),
}

export default RatingBadge
