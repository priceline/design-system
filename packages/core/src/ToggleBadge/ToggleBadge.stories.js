import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Button, ToggleBadge } from '..'
import ForwardRefDemo from '../../storybook/utils/ForwardRefsDemo'

storiesOf('ToggleBadge', module)
  .add(
    'ToggleBadge component',
    withInfo({
      inline: true,
      text:
        'Use the <ToggleBadge /> component to render a primitive ToggleBadge.',
    })(() => <ToggleBadge>ToggleBadge</ToggleBadge>)
  )
  .add('Selected', () => <ToggleBadge selected>Selected - Badge</ToggleBadge>)
  .add('Unselected', () => <ToggleBadge>Un - Selected - Badge</ToggleBadge>)
  .add('Unselected with different background color', () => (
    <ToggleBadge unSelectedBg='yellow'>Un - Selected - Badge</ToggleBadge>
  ))
  .add('A group', () => (
    <div>
      <ToggleBadge selected>Flight + Hotel</ToggleBadge>
      <ToggleBadge>Flight + Hotel + Car</ToggleBadge>
      <ToggleBadge>Flight + Car</ToggleBadge>
    </div>
  ))
  .add('Forward refs', () => (
    <ForwardRefDemo
      refChild={(dsRef) => (
        <>
          <div>
            <ToggleBadge selected>Flight + Hotel</ToggleBadge>
            <ToggleBadge ref={dsRef}>Flight + Hotel + Car</ToggleBadge>
            <ToggleBadge>Flight + Car</ToggleBadge>
          </div>
          <Button onClick={() => dsRef.current.focus()} mt={4}>
            Click to focus second badge via ref
          </Button>
        </>
      )}
    />
  ))
