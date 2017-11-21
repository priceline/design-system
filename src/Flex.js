import styled from 'styled-components'
import { responsiveStyle } from 'styled-system'
import Box from './Box'
import PropTypes from 'prop-types'

const align = responsiveStyle('align-items', 'align')
const justify = responsiveStyle('justify-content', 'justify')
const direction = responsiveStyle('flex-direction', 'direction')
const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')

const Flex = styled(Box)`
  display: flex;
  ${align} ${justify} ${direction} ${wrap};
`

Flex.propTypes = {
  /** align-items */
  align: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'baseline',
    'stretch'
  ]),
  /** justify-content */
  justify: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-around',
    'space-between',
    'space-evenly',
    'stretch'
  ]),
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]),
  /** flex-wrap: wrap */
  wrap: PropTypes.bool
}

Flex.displayName = 'Flex'

export default Flex
