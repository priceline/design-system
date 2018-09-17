import React from 'react'
import { MaskedInput } from '../src'

export default props => (
  <div>
    <MaskedInput
      format={str => {
        const n = str.replace(/[^\d]+/g, '')
        return n ? n.slice(0, 2) + '/' + n.slice(2) : ''
      }}
      placeholder="MM/YY"
    />
  </div>
)
