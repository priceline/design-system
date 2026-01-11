import React from 'react'
import styled from 'styled-components'
import { Box } from '../../Box/Box'

const Stage = styled(Box)`
  > * {
    margin: 16px;
  }
`

/**
 * @public
 */
export type StoryStageProps = {
  children: React.ReactNode
  [x: string]: unknown
}

/**
 * A container that adds consistent spacing around story examples.
 *
 * Wraps children with automatic 16px margins between elements. Use in Storybook
 * stories to provide consistent spacing when displaying multiple component
 * examples or variations.
 *
 * @public
 */
export const StoryStage = ({ children, ...rest }: StoryStageProps) => <Stage {...rest}>{children}</Stage>
