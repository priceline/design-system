import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Box } from '../Box'
import { Relative } from '../Relative'
import { Flex } from '../Flex'

const propTypes = {
  children: PropTypes.node,
  arrowPosition: PropTypes.string,
}

const SlideBoxWrapper: React.FC<InferProps<typeof propTypes>> = ({ children, arrowPosition }) =>
  arrowPosition === 'side' ? (
    <Relative>
      <Flex alignItems='center'>{children}</Flex>
    </Relative>
  ) : (
    <Box>{children}</Box>
  )

export { SlideBoxWrapper }
