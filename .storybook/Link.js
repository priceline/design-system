import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box, Link } from '../src'

const description = `A type of the <Text> component using HTML <a> (anchor)
  element for creating a hyperlink to other web pages, files, locations within
  the same page, email addresses, or any other URL. The <Link> supports all <Text> props`

storiesOf('Link', module)
  .add('Link component', withInfo({
    inline: true,
    text: description
  })(() => (
    <Box m={50}>
      <Link href='https://www.priceline.com/home/' target='_blank'>
        Priceline Home
      </Link>
    </Box>
  )))
  .add('Link open self', () => (
    <Box m={50}>
      <Link href='https://www.priceline.com/home/' target='_self'>
        Open the Priceline Home in the same window
      </Link>
    </Box>
  ))
  .add('Link using <Text> props', () => (
    <Box m={50}>
      <Link fontSize={3} color='red'>
        Hover on the Priceline Home link to see "not-allowed" cursor
      </Link>
    </Box>
  ))
