import React from 'react'
import { render, screen } from 'testing-library'
import { Calendar, Close, User, Visibility } from 'pcln-icons'
import { IconField, IconButton, Input } from '..'

describe('IconField', () => {
  it('renders', () => {
    render(
      <IconField data-testid='icon-field'>
        <Calendar title='calendar' />
        <Input id='test' placeholder='IconField' />
      </IconField>
    )

    screen.getByTestId('icon-field')
    screen.getAllByTitle('calendar')
    screen.getByPlaceholderText('IconField')
  })

  it('renders icon button', () => {
    render(
      <IconField>
        <Input id='test' placeholder='IconField' />
        <IconButton id='test' icon={<Close title='close' />} />
      </IconField>
    )

    screen.getByPlaceholderText('IconField')
    screen.getAllByTitle('close')
    screen.getByRole('button')
  })

  it('renders icon, input and icon button together', () => {
    render(
      <IconField>
        <Calendar title='calendar' />
        <Input id='test' placeholder='IconField' />
        <IconButton id='test' icon={<Close title='close' />} />
      </IconField>
    )

    screen.getAllByTitle('calendar')
    screen.getByPlaceholderText('IconField')
    screen.getAllByTitle('close')
    screen.getByRole('button')
  })

  it('does not render unknown children', () => {
    render(
      <IconField data-testid='icon-field'>
        <pre>Does not render</pre>
      </IconField>
    )
    expect(screen.queryByTestId('icon-field')).not.toBeInTheDocument()
  })

  it('does not add styles for no icons', () => {
    render(
      <IconField>
        <Input id='test' placeholder='IconField' />
      </IconField>
    )

    const prefixIconWrapper = screen.queryByTestId('icon-field-prefix-icons')
    const suffixIconWrapper = screen.queryByTestId('icon-field-suffix-icons')
    const input = screen.getByPlaceholderText('IconField')

    expect(prefixIconWrapper).not.toBeInTheDocument()
    expect(suffixIconWrapper).not.toBeInTheDocument()
    expect(input).not.toHaveStyleRule('padding-left')
    expect(input).not.toHaveStyleRule('padding-right')
  })

  it('adds styles for single icons', () => {
    render(
      <IconField>
        <Calendar title='calendar' />
        <Input id='test' placeholder='IconField' />
        <Close title='close' />
      </IconField>
    )

    const calendarIcon = screen.getAllByTitle('calendar')[0]
    const closeIcon = screen.getAllByTitle('close')[0]
    const prefixIconWrapper = screen.getByTestId('icon-field-prefix-icons')
    const suffixIconWrapper = screen.getByTestId('icon-field-suffix-icons')
    const input = screen.getByPlaceholderText('IconField')

    expect(calendarIcon).toHaveStyleRule('margin-left', '8px')
    expect(calendarIcon).toHaveStyleRule('margin-right', '8px')
    expect(closeIcon).toHaveStyleRule('margin-left', '8px')
    expect(closeIcon).toHaveStyleRule('margin-right', '8px')

    expect(prefixIconWrapper).toHaveStyleRule('margin-right', '-40px')
    expect(suffixIconWrapper).toHaveStyleRule('margin-left', '-40px')
    expect(input).toHaveStyleRule('padding-left', '40px')
    expect(input).toHaveStyleRule('padding-right', '40px')
  })

  it('adds styles for multiple icons', () => {
    render(
      <IconField>
        <User title='user' />
        <Calendar title='calendar' />
        <Input id='test' placeholder='IconField' />
        <Visibility title='visibility' />
        <Close title='close' />
      </IconField>
    )

    const prefixIconWrapper = screen.getByTestId('icon-field-prefix-icons')
    const suffixIconWrapper = screen.getByTestId('icon-field-suffix-icons')
    const input = screen.getByPlaceholderText('IconField')

    const calendarIcon = screen.getAllByTitle('calendar')[0]
    const closeIcon = screen.getAllByTitle('close')[0]

    expect(prefixIconWrapper).toHaveStyleRule('margin-right', '-80px')
    expect(suffixIconWrapper).toHaveStyleRule('margin-left', '-80px')
    expect(input).toHaveStyleRule('padding-left', '80px')
    expect(input).toHaveStyleRule('padding-right', '80px')

    expect(calendarIcon).toHaveStyleRule('margin-left', '0')
    expect(calendarIcon).toHaveStyleRule('margin-right', '8px')
    expect(closeIcon).toHaveStyleRule('margin-left', '8px')
    expect(closeIcon).toHaveStyleRule('margin-right', '0')
  })
})
