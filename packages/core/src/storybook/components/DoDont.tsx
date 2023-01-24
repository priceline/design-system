import React from 'react'
import { Box, Text, theme } from '../..'

type ExampleProps = {
  isDo?: boolean
  children: React.ReactNode
  desc?: string
}

const Example = ({ isDo, children, desc }: ExampleProps) => (
  <Box>
    <Box
      p={3}
      mb={2}
      borderRadius='xl'
      style={{
        display: 'grid',
        placeItems: 'center',
        border: `1px solid ${theme.colors.borderGray}`,
        borderTop: `5px solid ${isDo ? theme.colors.green : theme.colors.red}`,
        aspectRatio: '2.5',
      }}
    >
      {children}
    </Box>
    <Text.span>
      <Text.span bold>{isDo ? 'DO ' : "DON'T "}</Text.span>
      {desc}
    </Text.span>
  </Box>
)

export type DoDontProps = {
  doExample: React.ReactNode
  doText?: string
  dontExample: React.ReactNode
  dontText?: string
}

export const DoDont = ({ doExample, dontExample, doText, dontText }: DoDontProps) => (
  <Box
    my={4}
    style={{
      display: 'grid',
      gridAutoFlow: 'column',
      gridTemplateColumns: `repeat(2, 1fr)`,
      gap: theme.space[3],
    }}
  >
    <Example desc={doText} isDo>
      {doExample}
    </Example>
    <Example desc={dontText}>{dontExample}</Example>
  </Box>
)
