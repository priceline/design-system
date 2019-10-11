import React from 'react'
import Button from './Button'

const GreenButton = ({ children, ...props }) => (
  <Button color="secondary" {...props}>
    {children}
  </Button>
)

GreenButton.displayName = 'GreenButton'

export default GreenButton
