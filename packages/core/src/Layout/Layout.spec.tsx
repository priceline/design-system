import React from 'react'
import { Box } from '../Box/Box'
import { render } from '../__test__/testing-library'
import { Layout } from './Layout'

describe('Layout', () => {
  it('renders with variations', () => {
    const { rerender, getByText } = render(
      <Layout variation='50-50'>
        <Box>1</Box>
      </Layout>
    )
    expect(getByText(1)).toHaveStyle('width: 0.5')

    rerender(
      <Layout variation='33-33-33'>
        <Box>1</Box>
      </Layout>
    )
    expect(getByText(1)).toHaveStyle('width: 0.33')

    rerender(
      <Layout variation='60-40'>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Layout>
    )
    expect(getByText(1)).toHaveStyle('width: 0.6')
    expect(getByText(2)).toHaveStyle('width: 0.4')
    expect(getByText(3)).toHaveStyle('width: 0.6')

    rerender(
      <Layout variation={['25-25-25-25']}>
        <Box>1</Box>
      </Layout>
    )
    expect(getByText(1)).toHaveStyle('width: 0.25')
  })
})
