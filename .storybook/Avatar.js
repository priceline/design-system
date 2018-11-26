import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Avatar, Flex } from '../src'

storiesOf('Avatar', module).add(
  'Avatar component',
  withInfo({
    inline: true,
    text: 'Use the <Avatar/ > component to render an image avatar.'
  })(() => (
    <Flex>
      <Avatar />
    </Flex>
  ))
)
