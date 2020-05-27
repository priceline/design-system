import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button, CloseButton } from '..'
import ForwardRefDemo from '../../storybook/utils/ForwardRefsDemo'

storiesOf('CloseButton', module)
  .add('with click handler', () => (
    <CloseButton color='background.darkest' onClick={action('clicked')} />
  ))
  .add('Forward refs', () => (
    <ForwardRefDemo
      refChild={(dsRef) => (
        <>
          <CloseButton
            color='background.darkest'
            onClick={action('clicked')}
            dsRef={dsRef}
          />
          <br />
          <Button onClick={() => dsRef.current.focus()} mt={4}>
            Click to focus button via ref
          </Button>
        </>
      )}
    />
  ))
