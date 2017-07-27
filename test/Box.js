import React from 'react'
import testRenderer from 'react-test-renderer'
import { Box } from '../src'

describe('Box', () => {
    test('rederer', () => {
      const snapshot = testRenderer.create(<Box />).toJSON()

      expect(snapshot).toMatchSnapshot()
    })
})
