import React from 'react'
import { Rifm } from 'rifm'
import { Input } from 'pcln-design-system'
import creditcards from 'creditcards'

export const MaskedInput = ({ value, onChange, format, ...props }) => (
  <Rifm
    value={value}
    onChange={onChange}
    format={format}
    children={({ value, onChange }) => (
      <Input type="text" {...props} value={value} onChange={onChange} />
    )}
  />
)

MaskedInput.displayName = 'MaskedInput'
MaskedInput.isField = true

const { card } = creditcards

export const formatCreditCard = str => {
  const n = str.replace(/[^\d]+/gi, '')
  return n ? card.format(n, '-') : ''
}

export const CreditCardInput = props => (
  <MaskedInput
    format={formatCreditCard}
    autoComplete="cc-number"
    placeholder="4242-4242-4242-4242"
    {...props}
  />
)

CreditCardInput.displayName = 'CreditCardInput'
CreditCardInput.isField = true

export const formatDate = str => {
  const n = str.replace(/[^\d]+/g, '')
  if (!n) return ''
  return n.length < 2 ? n : n.slice(0, 2) + '/' + n.slice(2)
}

export const ExpirationDateInput = props => (
  <MaskedInput
    format={formatDate}
    autoComplete="cc-exp"
    placeholder="MM/YY"
    maxLength="5"
    {...props}
  />
)

ExpirationDateInput.displayName = 'ExpirationDateInput'
ExpirationDateInput.isField = true
