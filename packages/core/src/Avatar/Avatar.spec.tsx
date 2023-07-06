import { describe, expect, it, vi } from 'vitest'
import { render } from '../__test__/testing-library'

import { Avatar } from '.'

const elonJPG = 'https://pbs.twimg.com/media/DwSta0wUcAAQQR9.jpg'

describe('Avatar', () => {
  it('renders default', () => {
    const { asFragment } = render(<Avatar />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders initials', () => {
    const { asFragment } = render(<Avatar initials='WS' />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders mr elon', () => {
    const { asFragment } = render(
      <Avatar title='Not Elon Musk' subtitle='totally.not.elon@musk.com' src={elonJPG} altText='papa-elon' />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
