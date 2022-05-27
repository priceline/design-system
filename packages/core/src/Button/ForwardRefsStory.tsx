/* istanbul ignore file */

import React from 'react'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'
import { Button } from '.'

export const ForwardRefs = () => {
  function refChild(dsRef) {
    function onClick() {
      dsRef.current.focus()
    }
    return (
      <>
        <Button ref={dsRef} color='error' size='large'>
          PANIC
        </Button>
        <br />
        <Button mt={4} onClick={onClick}>
          Click to focus PANIC button via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}
