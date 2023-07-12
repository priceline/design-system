import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Box } from '../Box'
import { RelativeFlex } from './Arrow.styles'

const propTypes = {
  children: PropTypes.node,
  arrowPosition: PropTypes.string,
}

const SlideBoxWrapper: React.FC<InferProps<typeof propTypes>> = ({ children, arrowPosition }) =>
  arrowPosition === 'side' ? (
    <RelativeFlex alignItems='center'>{children}</RelativeFlex>
  ) : (
    <Box>{children}</Box>
  )

export { SlideBoxWrapper }
