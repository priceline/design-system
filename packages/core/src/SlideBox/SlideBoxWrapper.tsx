import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Box } from '../Box'
import { Relative } from '../Relative'
import { Flex } from '../Flex'

const propTypes = {
  children: PropTypes.node,
  arrowPosition: PropTypes.oneOf(['top', 'bottom', 'side', 'hide', undefined]),
}

const SlideBoxWrapper: React.FC<InferProps<typeof propTypes> & { children?: React.ReactNode }> = ({
  children,
  arrowPosition,
}) =>
  arrowPosition === 'side' ? (
    <Relative>
      <Flex alignItems='center'>{children}</Flex>
    </Relative>
  ) : (
    <Box>{children}</Box>
  )

export { SlideBoxWrapper }
