import React from 'react'
import styled from 'styled-components'

import { Box } from '../..'

const Stage = styled(Box)`
  > * {
    margin: 16px;
  }
`

export type StoryStageProps = {
  children: React.ReactNode
  [x: string]: unknown
}

export const StoryStage = ({ children, ...rest }: StoryStageProps) => <Stage {...rest}>{children}</Stage>
