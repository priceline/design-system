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
  .add('variants', () => (
    <div>
      <div>
        <Link>Primary Link</Link>
      </div>
      <div>
        <Link variant="secondary">Secondary Link</Link>
      </div>
      <div>
        <Link variant="title">Title Link</Link>
      </div>
      <div>
        <Link variant="navigation">Navigation Link</Link>
      </div>
    </div>
  ))
  .add('Color', () => <Link color="darkGray">I'm a different color!</Link>)
