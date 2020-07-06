import React from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar } from '..'

const elonJPG = 'https://pbs.twimg.com/media/DwSta0wUcAAQQR9.jpg'

storiesOf('Avatar', module)
  .add('Default', () => <Avatar />)
  .add('Initials', () => <Avatar initials='WS' />)
  .add('Elon', () => (
    <Avatar
      title='Not Elon Musk'
      subtitle='totally.not.elon@musk.com'
      src={elonJPG}
    />
  ))
