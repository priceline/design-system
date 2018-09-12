import React from 'react'
import Flex from './Flex'

const IconField = props => {
  const children = React.Children.toArray(props.children).filter(
    child => child.type.isField || child.type.isIcon
  )

  const styledChildren = children.map((child, i) => {
    if (child.type.isIcon) {
      return React.cloneElement(child, {
        style: {
          flex: 'none',
          alignSelf: 'center',
          pointerEvents: 'none',
          marginLeft: i === 0 ? 8 : -32,
          marginRight: i === 0 ? -32 : 8
        }
      })
    }
    return React.cloneElement(child, {
      style: {
        paddingLeft: i === 0 ? undefined : 40,
        paddingRight: i === children.length - 1 ? undefined : 40
      }
    })
  })

  return <Flex>{styledChildren}</Flex>
}

export default IconField
