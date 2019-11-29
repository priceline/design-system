import React from 'react'
import { Link } from '../src'

describe('Link', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Link>Dummy</Link>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('adds a safe rel when target is blank', () => {
    const json = rendererCreateWithTheme(
      <Link target="_blank">Dummy</Link>
    ).toJSON()

    expect(json).toMatchSnapshot()
    expect(json.props.target).toEqual('_blank')
    expect(json.props.rel).toEqual('noopener')
  })

  test('does not add a safe rel when target is not blank', () => {
    const json = rendererCreateWithTheme(<Link>Dummy</Link>).toJSON()

    expect(json).toMatchSnapshot()
    expect(json.props.rel).toBe(null)
  })
})
