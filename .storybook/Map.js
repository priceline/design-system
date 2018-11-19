import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Map, Box } from '../src'

const description = 'A low-level layout component that renders an image'

storiesOf('Map', module)
  .add('Map component', withInfo({
    text: description,
    inline: true
  })(() => (
    <Map 
      height={number('Height', 200)}
      width={number('Width', 200)}
      address={text('Address', '137 Varick Street, New York, NY')}
      pinColor={text('Pin Color')}
    />
  )))

