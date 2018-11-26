import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Switch, Flex } from '../src'

storiesOf('Switch', module).add(
  'Switch component',
  withInfo({
    inline: true,
    text: 'Use the <Switch/ > component to render a boolean switch.'
  })(() => (
    <Flex>
      <Switch />
    </Flex>
  ))
)
