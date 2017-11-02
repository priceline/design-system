import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider, InputField } from '..'

describe('InputField', () => {
  test('it renders', () => {
    const json = renderer.create(
      <ThemeProvider>
        <InputField/>
      </ThemeProvider>).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders a form field wth a label and placeholder', () => {
    const json = renderer.create(
      <ThemeProvider>
         <InputField
            icon='locked'
            label='Card number'
            id='form-field-3'
            placeholder='0000 0000 0000 0000'
          />
      </ThemeProvider>).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders a form field with a color prop', () => {
    const json = renderer.create(
      <ThemeProvider>
          <InputField
            id='form-field-2'
            label='Last name'
            defaultValue='Dumoulin'
            placeholder='e.g. Dumoulin'
            color='blue'
          />
      </ThemeProvider>).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders a form field with an error message', () => {
    const json = renderer.create(
      <ThemeProvider>
        <InputField
          icon='circleInfo'
          color='red'
          info='Please enter a valid email address'
          label='Email Address'
          defaultValue='oliver.dumoulin@priceline.c'
          id='form-field-3'
          placeholder='example@test.com'
        />
      </ThemeProvider>).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders a form field with a generic message', () => {
    const json = renderer.create(
      <ThemeProvider>
        <InputField
          icon='circleInfo'
          info='This is just some info'
          label='Email Address'
          id='form-field-3'
          placeholder='example@test.com'
        />
      </ThemeProvider>).toJSON()
    expect(json).toMatchSnapshot()
  })
})
