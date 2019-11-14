import React from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar } from '../src'

const elonJPG = 'https://pbs.twimg.com/media/DwSta0wUcAAQQR9.jpg'

storiesOf('Avatar', module)
  .add('Default', () => <Avatar />)
  .add('Elon', () => (
    <Avatar
      title="Not Elon Musk"
      subTitle="totally.not.elon@musk.com"
      src={elonJPG}
    />
  ))
