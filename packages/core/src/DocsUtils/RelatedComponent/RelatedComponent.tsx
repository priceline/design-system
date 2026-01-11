import React, { Children } from 'react'
import { Box } from '../../Box/Box'
import { Text } from '../../Text/Text'
import { theme } from '../../theme/theme'

/**
 * @public
 */
export type RelatedComponentProps = {
  name: string
  desc?: string
  onClick?: () => void
  children: React.ReactNode
}

/**
 * A clickable card linking to a related component in documentation.
 *
 * Displays a preview area with children content, component name, and optional
 * description. Use within `RelatedComponentContainer` to show related or similar
 * components at the bottom of documentation pages.
 *
 * @public
 */
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

/**
 * @public
 */
export type RelatedComponentContainerProps = {
  children: React.ReactNode
}

/**
 * A grid container for displaying multiple RelatedComponent cards.
 *
 * Automatically creates equal-width columns based on the number of children.
 * Use to group related component links at the end of documentation pages.
 *
 * @public
 */
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
