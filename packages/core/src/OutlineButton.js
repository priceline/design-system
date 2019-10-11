import React from 'react'
import Button from './Button'

const OutlineButton = ({ children, ...props }) => (
  <Button variation="outline" {...props}>
    {children}
  </Button>
)

OutlineButton.displayName = 'OutlineButton'

export default OutlineButton
