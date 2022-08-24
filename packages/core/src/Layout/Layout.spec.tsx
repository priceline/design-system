import React from 'react'
import { render } from '../__test__/testing-library'

import { Layout, Box, theme } from '..'

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
      <Layout variation={'60-40'}>
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

  it('renders with gap', () => {
    const { getByTestId } = render(
      <Layout variation='50-50' gap='sm'>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Layout>
    )

    expect(getByTestId('layout-flex')).toHaveStyle(`margin-left: -${theme.space[1]};`)
    expect(getByTestId('layout-flex')).toHaveStyle(`margin-right: -${theme.space[1]};`)
    expect(getByTestId('box-1')).toHaveStyle(`padding-left: ${theme.space[1]};`)
    expect(getByTestId('box-1')).toHaveStyle(`padding-right: ${theme.space[1]};`)
    expect(getByTestId('box-2')).toHaveStyle(`padding-left: ${theme.space[1]};`)
  })

  it('renders with gap as responsive array', () => {
    const { getByTestId } = render(
      <Layout variation='50-50' gap={['sm']}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Layout>
    )

    expect(getByTestId('box-1')).toHaveStyle(`padding-left: ${theme.space[1]};`)
    expect(getByTestId('box-1')).toHaveStyle(`padding-right: ${theme.space[1]};`)
    expect(getByTestId('box-2')).toHaveStyle(`padding-left: ${theme.space[1]};`)
  })

  it('renders with row gap', () => {
    const { getByTestId } = render(
      <Layout variation='50-50' rowGap='sm'>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Layout>
    )

    expect(getByTestId('layout-flex')).toHaveStyle(`margin-top: -${theme.space[1]};`)
    expect(getByTestId('layout-flex')).toHaveStyle(`margin-bottom: -${theme.space[1]};`)
    expect(getByTestId('box-1')).toHaveStyle(`padding-top: ${theme.space[1]};`)
    expect(getByTestId('box-1')).toHaveStyle(`padding-bottom: ${theme.space[1]};`)
    expect(getByTestId('box-2')).toHaveStyle(`padding-top: ${theme.space[1]};`)
  })

  it('renders with row gap as responsive array', () => {
    const { getByTestId } = render(
      <Layout variation='50-50' rowGap={['sm']}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Layout>
    )

    expect(getByTestId('box-1')).toHaveStyle(`padding-top: ${theme.space[1]};`)
    expect(getByTestId('box-1')).toHaveStyle(`padding-bottom: ${theme.space[1]};`)
    expect(getByTestId('box-2')).toHaveStyle(`padding-top: ${theme.space[1]};`)
  })
})
