import styled from 'styled-components'
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
}))(styled.div`
  display: flex;
  ${space} ${width} ${color} ${alignItems} ${justifyContent}
  ${flexDirection}
  ${flexWrap}
`)

Flex.defaultProps = {
  theme
}

Flex.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
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
