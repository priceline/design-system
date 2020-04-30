import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Calendar } from 'pcln-icons'

import { Button, IconButton } from '../src'
import ForwardRefDemo from './utils/ForwardRefsDemo'

storiesOf('IconButton', module)
  .add('default', () => (
    <IconButton
      onClick={action('Clicked IconButton')}
      icon={<Calendar title="Choose date" />}
    />
  ))
  .add('with color', () => (
    <IconButton
      onClick={action('Clicked IconButton')}
      icon={<Calendar title="Choose date" color="primary" />}
    />
  ))
  .add('with size', () => (
    <IconButton
      onClick={action('Clicked IconButton')}
      icon={<Calendar title="Choose date" size={64} />}
    />
  ))
  .add('Forward refs', () => (
    <ForwardRefDemo
      refChild={dsRef => (
        <>
          <IconButton
            onClick={action('Clicked IconButton')}
            icon={<Calendar title="Choose date" size={64} />}
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
