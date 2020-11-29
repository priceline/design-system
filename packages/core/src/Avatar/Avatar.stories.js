import React from 'react'
import { Avatar } from '..'

const elonJPG = 'https://pbs.twimg.com/media/DwSta0wUcAAQQR9.jpg'

export default {
  title: 'Avatar',
  component: Avatar,
}

export const Default = () => <Avatar />
export const Initials = () => <Avatar initials='WS' />

export const Elon = () => (
  <Avatar
    title='Not Elon Musk'
    subtitle='totally.not.elon@musk.com'
    src={elonJPG}
  />
)
