import React from 'react'
import { storiesOf } from '@storybook/react'
import { Link } from '../src'

storiesOf('Link', module)
  .add('Link component', () => (
    <Link href="https://www.priceline.com/home/" target="_blank">
      Priceline Home
    </Link>
  ))
  .add('Link open self', () => (
    <Link href="https://www.priceline.com/home/" target="_self">
      Open the Priceline Home in the same window
    </Link>
  ))
  .add('Color', () => (
    <div>
      <Link color="darkGray">I'm a different color!</Link>
      <br />
      <Link color="secondary">I'm a different color!</Link>
      <br />
      <Link color="error">I'm a different color!</Link>
    </div>
  ))
