import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Calendar } from 'pcln-icons'

import { IconButton } from '../src'

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
