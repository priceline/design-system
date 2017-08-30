import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Link } from '..'

describe('Link', () => {
  test('renders', () => {
    const json = renderer.create(<Link>Dummy</Link>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Link using "cursor" prop', () => {
    const json = renderer.create(<Link cursor='wait'>Dummy</Link>).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('cursor', 'wait')
  })

  test('Link using "textDecoration" prop', () => {
    const json = renderer.create(<Link textDecoration='overline'>Dummy</Link>).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-decoration', 'overline')
  })

  test('Link using "display" prop', () => {
    const json = renderer.create(<Link display='none'>Dummy</Link>).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('display', 'none')
  })
})
