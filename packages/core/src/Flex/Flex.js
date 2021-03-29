import styled from 'styled-components'
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system'

import { Box } from '../Box'

import {
  applyVariations,
  deprecatedPropType,
  deprecatedColorValue,
} from '../utils'
import propTypes from '@styled-system/prop-types'
import pick from 'lodash.pick'

const Flex = styled(Box).attrs(({ wrap, align, justify, ...props }) => ({
  flexWrap: wrap ? 'wrap' : undefined,
  alignItems: align,
  justifyContent: justify,
  ...props,
}))`
  display: flex;
  ${applyVariations('Flex')}
  ${alignItems} ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`

Flex.propTypes = {
  ...propTypes.space,
  ...pick(propTypes.layout, ['width']),
  color: deprecatedColorValue(),
  bg: deprecatedPropType('color'),
  ...pick(propTypes.flexbox, [
    'alignItems',
    'justifyContent',
    'flexWrap',
    'flexDirection',
  ]),
  wrap: deprecatedPropType('flexWrap'),
  align: deprecatedPropType('alignItems'),
  justify: deprecatedPropType('justifyContent'),
}

Flex.displayName = 'Flex'

export default Flex
