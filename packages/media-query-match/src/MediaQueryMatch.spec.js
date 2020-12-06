import React from 'react'

import { render } from '../test/react-testing'

import MediaQueryMatch from '.'

const targetNode = <span>TARGET</span>

describe('MediaQueryMatch', () => {
  describe('minWidth - smaller than xs', () => {
    test('matches', () => {
      const { getByText } = render(
        <MediaQueryMatch maxWidth='xs' values={{ width: 319 }}>
          {targetNode}
        </MediaQueryMatch>
      )

      expect(getByText('TARGET')).toBeTruthy()
    })

    it('should render children when not provided a minWidth or maxWidth', () => {
      const { getByText } = render(<MediaQueryMatch>{targetNode}</MediaQueryMatch>)

      expect(getByText('TARGET')).toBeTruthy()
    })

    test('does not match', () => {
      const { queryByText } = render(
        <MediaQueryMatch maxWidth='xs' values={{ width: 320 }}>
          {targetNode}
        </MediaQueryMatch>
      )

      expect(queryByText('TARGET')).toBeFalsy()
    })
  })

  describe('maxWidth - mobile', () => {
    test('matches', () => {
      const { getByText } = render(
        <MediaQueryMatch maxWidth='md' values={{ width: 639 }}>
          {targetNode}
        </MediaQueryMatch>
      )

      expect(getByText('TARGET')).toBeTruthy()
    })

    test('does not match', () => {
      const { queryByText } = render(
        <MediaQueryMatch maxWidth='md' values={{ width: 640 }}>
          {targetNode}
        </MediaQueryMatch>
      )

      expect(queryByText('TARGET')).toBeFalsy()
    })
  })

  describe('minWidth and maxWidth - slim sidebar', () => {
    test('does not match - smaller', () => {
      const { queryByText } = render(
        <MediaQueryMatch minWidth='xl' maxWidth='xxl' values={{ width: 1000 }}>
          {targetNode}
        </MediaQueryMatch>
      )

      expect(queryByText('TARGET')).toBeFalsy()
    })

    test('matches', () => {
      const { getByText } = render(
        <MediaQueryMatch minWidth='xl' maxWidth='xxl' values={{ width: 1120 }}>
          {targetNode}
        </MediaQueryMatch>
      )

      expect(getByText('TARGET')).toBeTruthy()
    })

    test('does not match - larger', () => {
      const { queryByText } = render(
        <MediaQueryMatch minWidth='xl' maxWidth='xxl' values={{ width: 1280 }}>
          {targetNode}
        </MediaQueryMatch>
      )

      expect(queryByText('TARGET')).toBeFalsy()
    })
  })

  describe('maxWidth - desktop, ignore', () => {
    test('matches, no ignore', () => {
      const { getByText } = render(
        <MediaQueryMatch maxWidth='xxl' values={{ width: 1000 }}>
          {targetNode}
        </MediaQueryMatch>
      )

      expect(getByText('TARGET')).toBeTruthy()
    })

    test('does not match, no ignore', () => {
      const { queryByText } = render(
        <MediaQueryMatch maxWidth='xxl' values={{ width: 1600 }}>
          {targetNode}
        </MediaQueryMatch>
      )

      expect(queryByText('TARGET')).toBeFalsy()
    })

    test('matches, ignore', () => {
      const { getByText } = render(
        <MediaQueryMatch maxWidth='xxl' ignore values={{ width: 1000 }}>
          {targetNode}
        </MediaQueryMatch>
      )

      expect(getByText('TARGET')).toBeTruthy()
    })

    test('matches, ignore, no children', () => {
      const { queryByText } = render(<MediaQueryMatch maxWidth='xxl' ignore values={{ width: 1000 }} />)

      expect(queryByText('TARGET')).toBeFalsy()
    })

    test('does not match, ignore', () => {
      const { getByText } = render(
        <MediaQueryMatch maxWidth='xxl' ignore values={{ width: 1600 }}>
          {targetNode}
        </MediaQueryMatch>
      )

      expect(getByText('TARGET')).toBeTruthy()
    })
  })
})
