/* istanbul ignore file */
// todo: remove coverage ignore once storybook interaction test coverage counts

import React, { useMemo } from 'react'
import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Button, Flex, Grid } from '../'

const GappedFlex = styled(Flex)`
  gap: ${themeGet('space.2')};
`

export interface IChatActionContainer {
  chatActions: IChatAction[]
}

export interface IChatAction {
  label: string
  onClick: () => void
}

function ChatActionContainer({ chatActions }: IChatActionContainer) {
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

export default ChatActionContainer
