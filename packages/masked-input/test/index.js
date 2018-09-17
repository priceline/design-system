import React from 'react'
import TestRenderer from 'react-test-renderer'
import {
  MaskedInput,
  CreditCardInput,
  ExpirationDateInput,
  formatDate,
  formatCreditCard
} from '../src'

const renderJSON = el => TestRenderer.create(el).toJSON()

describe('pcln-masked-input', () => {
  describe('MaskedInput', () => {
    test('renders', () => {
      const json = renderJSON(
        <MaskedInput id="test" value="12/20" format={formatDate} />
      )
      expect(json).toMatchSnapshot()
    })
  })

  describe('formatDate', () => {
    test('formats numbers as MM/YY', () => {
      const date = formatDate('1220')
      expect(date).toBe('12/20')
    })

    test('returns number string with one digit', () => {
      const date = formatDate('1')
      expect(date).toBe('1')
    })

    test('returns empty string with no value', () => {
      const date = formatDate('')
      expect(date).toBe('')
    })
  })

  describe('formatCreditCard', () => {
    test('formats number with hyphens', () => {
      const number = formatCreditCard('4242424242424242')
      expect(number).toBe('4242-4242-4242-4242')
    })

    test('returns empty string with no value', () => {
      const number = formatCreditCard('')
      expect(number).toBe('')
    })
  })

  describe('CreditCardInput', () => {
    test('renders', () => {
      const json = renderJSON(<CreditCardInput id="test" value="4242" />)
      expect(json).toMatchSnapshot()
    })
  })

  describe('ExpirationDateInput', () => {
    test('renders', () => {
      const json = renderJSON(<ExpirationDateInput id="test" value="1020" />)
      expect(json).toMatchSnapshot()
    })
  })
})
