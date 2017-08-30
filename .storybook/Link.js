import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Link } from '../src'

const description = 'A type of the <Text> component\' +\n' +
  ' using HTML <a> (anchor) element for creating a hyperlink to other web pages,' +
  ' files, locations within the same page, email addresses, or any other URL.' +
  ' The <Link> supports all <Text> props'

storiesOf('Link', module)
  .add('Link component', withInfo({
    inline: true,
    text: description
  })(() => (
    <Link m={3} href='https://www.priceline.com/home/' target='_blank' color='blue'>
      Priceline Home
    </Link>
  )))
  .add('Link open self', () => (
    <Link href='https://www.priceline.com/home/' target='_self' color='blue'>
      Open the Priceline Home in the same window
    </Link>
  ))
  .add('Hover with the "not-allowed" cursor', () => (
    <Link cursor='not-allowed' color='red'>
      Hover on the Priceline Home link to see "not-allowed" cursor
    </Link>
  ))
  .add('Link using textDecoration prop', () => (
    <Link textDecoration='underline' color='gray'>
      Link with style - text-docoration: underline
    </Link>
  ))
  .add('Link using display prop', () => (
    <Link display='list-item' color='purple'>
      Link with style - display: list-item
    </Link>
  ))
