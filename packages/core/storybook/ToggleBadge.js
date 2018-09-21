import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box, ToggleBadge } from '../src'

storiesOf('ToggleBadge', module)
  .add(
    'ToggleBadge component',
    withInfo({
      inline: true,
      text:
        'Use the <ToggleBadge /> component to render a primitive ToggleBadge.'
    })(() => <ToggleBadge>ToggleBadge</ToggleBadge>)
  )
  .add('Selected', () => <ToggleBadge selected>Selected - Badge</ToggleBadge>)
  .add('Unselected', () => <ToggleBadge>Un - Selected - Badge</ToggleBadge>)
  .add('Unselected with different background color', () => (
    <ToggleBadge unSelectedBg="yellow">Un - Selected - Badge</ToggleBadge>
  ))
  .add('A group', () => (
    <div>
      <ToggleBadge selected>Flight + Hotel</ToggleBadge>
      <ToggleBadge>Flight + Hotel + Car</ToggleBadge>
      <ToggleBadge>Flight + Car</ToggleBadge>
    </div>
  ))
