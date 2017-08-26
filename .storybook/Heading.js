import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Heading } from '../src'

const description = 'A type of the primitive <Text> component' +
  ' using HTML h1-h6 element for setting section headings,' +
  ' extending <Text> properties'

storiesOf('Heading', module)
  .add('Heading component', withInfo({
    inline: true,
    text: description
  })(() => (
    <Heading>
      Heading component
    </Heading>
  )))
