import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Cartesian } from '@compositor/kit'

import { Link, Button } from '..'
import ForwardRefDemo from '../../storybook/utils/ForwardRefsDemo'

const variations = { link: 'link', fill: 'fill', outline: 'outline' }
const colors = {
  primary: 'primary',
  secondary: 'secondary',
  text: 'text',
  success: 'success',
  error: 'error',
  warning: 'warning',
  alert: 'alert',
  caution: 'caution',
  notify: 'notify',
  pricePrimary: 'pricePrimary',
  priceSecondary: 'priceSecondary',
  promoPrimary: 'promoPrimary',
  promoSecondary: 'promoSecondary',
  border: 'border',
  background: 'background',
}

storiesOf('Link', module)
  .add('Link component', () => (
    <Link href='https://www.priceline.com/home/' target='_blank'>
      Priceline Home
    </Link>
  ))
  .add('Link open self', () => (
    <Link href='https://www.priceline.com/home/' target='_self'>
      Open the Priceline Home in the same window
    </Link>
  ))
  .add('Forward refs', () => (
    <ForwardRefDemo
      refChild={(dsRef) => (
        <>
          <Link color='darkGray' dsRef={dsRef}>
            I'm a link!
          </Link>
          <br />
          <Button
            color='error'
            onClick={() => (dsRef.current.innerHTML = 'Bacon!')}
            mt={4}
          >
            Click to update link text via ref
          </Button>
        </>
      )}
    />
  ))
  .add('Color', () => (
    <div>
      <Link color='darkGray'>I'm a different color!</Link>
      <br />
      <Link color='secondary'>I'm a different color!</Link>
      <br />
      <Link color='error'>I'm a different color!</Link>
    </div>
  ))
  .add('All', () => (
    <Cartesian
      component={Link}
      color={Object.keys(colors)}
      variation={Object.keys(variations)}
      onClick={action('Clicked button in All')}
      m={3}
    >
      Link Text
    </Cartesian>
  ))
