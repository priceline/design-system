import React from 'react'
import { storiesOf } from '@storybook/react'
import { PlaceholderImage } from '..'

storiesOf('PlaceholderImage', module)
  .add('Blurred image', () => <PlaceholderImage width='600' blur />)

  .add(`Choose source '0'`, () => <PlaceholderImage chooseSrc='0' />)

  .add('Default random image', () => <PlaceholderImage />)

  .add('With height and width props defined', () => (
    <PlaceholderImage height='250' width='250' />
  ))
