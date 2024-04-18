import React from 'react'
import { render } from '../__test__/testing-library'
import { Avatar } from './Avatar'

const elonJPG = 'https://pbs.twimg.com/media/DwSta0wUcAAQQR9.jpg'

describe('Avatar', () => {
  test('renders default', () => {
    const { asFragment } = render(<Avatar />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders initials', () => {
    const { asFragment } = render(<Avatar initials='WS' />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders mr elon', () => {
    const { asFragment } = render(
      <Avatar title='Not Elon Musk' subtitle='totally.not.elon@musk.com' src={elonJPG} altText='papa-elon' />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
