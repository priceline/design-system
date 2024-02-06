import themeGet from '@styled-system/theme-get'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Button } from '../Button/Button'
import { Flex } from '../Flex/Flex'
import { Grid } from '../Grid/Grid'

const GappedFlex = styled(Flex)`
  gap: ${themeGet('space.2')};
`

/**
 * @public
 */
export type ChatActionContainerProps = {
  chatActions: IChatAction[]
}

/**
 * @public
 */
export interface IChatAction {
  label: string
  onClick: () => void
}

/**
 * @public
 */
export function ChatActionContainer({ chatActions }: ChatActionContainerProps) {
  const actions = useMemo(() => {
    return chatActions.map((chatAction) => (
      <Button key={chatAction.label} boxShadowSize='sm' variation='white' onClick={chatAction.onClick}>
        {chatAction.label}
      </Button>
    ))
  }, [chatActions])

  if (chatActions?.length === 2) {
    return (
      <Grid templateColumns='1fr 1fr' gap={2}>
        {actions}
      </Grid>
    )
  } else {
    return (
      <GappedFlex flexDirection={['column', null, 'row']} flexWrap={['none', null, 'wrap']}>
        {actions}
      </GappedFlex>
    )
  }
}
