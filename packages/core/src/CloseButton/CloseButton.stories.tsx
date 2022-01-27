import React from 'react'
import { action } from '@storybook/addon-actions'

import { Button, CloseButton } from '..'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

export default {
  title: 'CloseButton',
  component: CloseButton,
}

export const WithClickHandler = () => <CloseButton color='background.darkest' onClick={action('clicked')} />

WithClickHandler.story = {
  name: 'with click handler',
}

export const ForwardRefs = () => {
  function refChild(dsRef) {
    function onClick() {
      dsRef.current.focus()
    }

    return (
      <>
        <CloseButton color='background.darkest' onClick={action('clicked')} dsRef={dsRef} />
        <br />
        <Button onClick={onClick} mt={4}>
          Click to focus button via ref
        </Button>
      </>
    )
  }

  return <ForwardRefDemo refChild={refChild} />
}

ForwardRefs.story = {
  name: 'Forward refs',
}
