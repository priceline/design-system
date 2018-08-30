import React from 'react'
import hoistStatics from 'hoist-non-react-statics'

export default map => Component =>
  hoistStatics(props => <Component {...map(props)} />, Component)
