import React, { Children } from 'react'

import { Box, Text, theme } from '../..'

export type RelatedComponentProps = {
  name: string
  desc?: string
  onClick?: () => void
  children: React.ReactNode
}

export const RelatedComponent = ({ name, desc, children, onClick }: RelatedComponentProps) => (
  <Box onClick={onClick} style={{ cursor: 'pointer' }}>
    <Box
      bg='background.light'
      borderRadius='xl'
      p={3}
      style={{
        display: 'grid',
        placeItems: 'center',
        aspectRatio: '2.5',
      }}
    >
      {children}
    </Box>
    <Text textStyle='heading5' py={2}>
      {name}
    </Text>
    {desc && <Text>{desc}</Text>}
  </Box>
)

export type RelatedComponentContainerProps = {
  children: React.ReactNode
}

export const RelatedComponentContainer = ({ children }: RelatedComponentContainerProps) => (
  <Box
    style={{
      display: 'grid',
      gridAutoFlow: 'column',
      gridTemplateColumns: `repeat(${Children.count(children)}, 1fr)`,
      gap: theme.space[3],
    }}
  >
    {children}
  </Box>
)
