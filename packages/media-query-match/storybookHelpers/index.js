import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'pcln-design-system'

export const Fixture = ({ children, ...props }) => (
  <Box w={1} mt={4} p={3} color='text.lightest' {...props}>
    <Text fontSize={3}>{children}</Text>
  </Box>
)
Fixture.propTypes = {
  children: PropTypes.node,
}

export const Container = ({ children, ...props }) => (
  <Box bg='background.light' {...props}>
    {children}
  </Box>
)
Container.propTypes = {
  children: PropTypes.node,
}
