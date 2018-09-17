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

describe('MaskedInput', () => {
  test('renders', () => {
    const json = renderJSON(
      <MaskedInput id="test" value="12/20" format={formatDate} />
    )
    expect(json).toMatchSnapshot()
  })
})
