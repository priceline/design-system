import React from 'react'
import { Avatar } from '../src'

const elonJPG = 'https://pbs.twimg.com/media/DwSta0wUcAAQQR9.jpg'

describe('Avatar', () => {
  test('renders default', () => {
    const json = rendererCreateWithTheme(<Avatar />)
    expect(json).toMatchSnapshot()
  })

  test('renders initials', () => {
    const json = rendererCreateWithTheme(<Avatar initials="WS" />)
    expect(json).toMatchSnapshot()
  })

  test('renders mr elon', () => {
    const json = rendererCreateWithTheme(
      <Avatar
        title="Not Elon Musk"
        subtitle="totally.not.elon@musk.com"
        src={elonJPG}
      />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
})
