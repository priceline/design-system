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
 * @public
 */
export const StoryStage = ({ children, ...rest }: StoryStageProps) => <Stage {...rest}>{children}</Stage>
