import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hide } from '../src'

storiesOf('Hide', module)
  .add('Hide', () => (
    <div>
      <Hide xs>Hide xs</Hide>
      <Hide sm>Hide sm</Hide>
      <Hide md>Hide md</Hide>
      <Hide lg>Hide lg</Hide>
      <Hide xl>Hide xl</Hide>
    </div>
  ))
