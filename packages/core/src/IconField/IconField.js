import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '../Flex'

const IconField = (props) => {
  const isIcon = (item) => item.type.isIcon || item.type.isIconButton

  const children = React.Children.toArray(props.children).filter(
    (child) => child.type.isField || isIcon(child)
  )

  const styledChildren = children.map((child, i) => {
    if (isIcon(child)) {
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          flex: 'none',
          alignSelf: 'center',
          pointerEvents: child.type.isIcon ? 'none' : 'auto',
          marginLeft: i === 0 ? 8 : -32,
          marginRight: i === 0 ? -32 : 8,
          position: 'relative',
        },
      })
    }
    return React.cloneElement(child, {
      style: {
        ...child.props.style,
        paddingLeft: i === 0 ? undefined : 40,
        paddingRight: i === children.length - 1 ? undefined : 40,
      },
    })
  })

  return <Flex>{styledChildren}</Flex>
}
IconField.propTypes = { children: PropTypes.node }

export default IconField
