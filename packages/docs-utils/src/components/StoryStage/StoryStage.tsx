import { Box } from 'pcln-design-system'
import React from 'react'
import styled from 'styled-components'

const Stage = styled(Box)`
  > * {
    margin: 16px;
  }
`

export type StoryStageProps = {
  children: React.ReactNode
  [x: string]: any
}

export const StoryStage = ({ children, ...rest }: StoryStageProps) => <Stage {...rest}>{children}</Stage>
