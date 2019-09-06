import React from 'react'

import { ResetStyle } from '../../src/components/Reset'

const GlobalStyleDecorator = storyFn => (
  <>
    <ResetStyle />

    <div style={{ padding: '1rem' }}>{storyFn()}</div>
  </>
)

export default GlobalStyleDecorator
