import React from 'react'
import { Stamp, theme } from '../src'

describe('Stamp', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Stamp />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders small size', () => {
    const json = rendererCreateWithTheme(<Stamp size="small" />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders medium fill', () => {
    const json = rendererCreateWithTheme(<Stamp variation="fill" />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders small fill', () => {
    const json = rendererCreateWithTheme(
      <Stamp size="small" variation="fill" />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('color gray sets text and icon color', () => {
    const json = rendererCreateWithTheme(<Stamp color="gray" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.gray)
  })

  test('color blue sets text and icon color', () => {
    const json = rendererCreateWithTheme(<Stamp color="blue" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })

  test('color green sets text and icon color', () => {
    const json = rendererCreateWithTheme(<Stamp color="green" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.green)
  })

  test('color red sets text and icon color', () => {
    const json = rendererCreateWithTheme(<Stamp color="red" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.red)
  })

  test('color orange sets text and icon color', () => {
    const json = rendererCreateWithTheme(<Stamp color="orange" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.orange)
  })

  test('color purple sets text and icon color', () => {
    const json = rendererCreateWithTheme(<Stamp color="purple" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.purple)
  })

  test('bg blue sets background color', () => {
    const json = rendererCreateWithTheme(<Stamp bg="blue" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
  })

  test('borderColor green sets border color', () => {
    const json = rendererCreateWithTheme(<Stamp borderColor="green" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-color', theme.colors.green)
  })

  test('has default borderGray border color', () => {
    const json = rendererCreateWithTheme(<Stamp />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-color', theme.colors.borderGray)
  })
})
