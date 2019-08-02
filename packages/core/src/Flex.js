import styled from 'styled-components'
import Box from './Box'
import PropTypes from 'prop-types'
import {
  space,
  width,
  color,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection
} from 'styled-system'
import theme from './theme'
import { mapProps, deprecatedPropType } from './utils'

const Flex = mapProps(({ wrap, align, justify, ...props }) => ({
  flexWrap: wrap ? 'wrap' : undefined,
  alignItems: align,
  justifyContent: justify,
  ...props
}))(styled(Box)`
  display: flex;
  ${alignItems} ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`)

Flex.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  // color: PropTypes.string,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  // deprecated
  wrap: deprecatedPropType('flexWrap'),
  align: deprecatedPropType('alignItems'),
  justify: deprecatedPropType('justifyContent')
}

Flex.displayName = 'Flex'

export default Flex
