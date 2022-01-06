import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '../Flex'

const IconField = (props) => {
  const isIcon = (item) => item.type.isIcon || item.type.isIconButton

  const children = React.Children.toArray(props.children).filter(
    (child) => child?.type.isField || isIcon(child)
  )

  if (children.length === 0) {
    return null
  }

  let inputIndex = children && children.findIndex((child) => child.type.isField)

  const prefixIcons = children.slice(0, inputIndex)
  const input = children[inputIndex]
  const suffixIcons = children.slice(inputIndex + 1, children.length)

  const paddingLeft = prefixIcons.length > 0 ? prefixIcons.length * 40 : undefined
  const paddingRight = suffixIcons.length > 0 ? suffixIcons.length * 40 : undefined

  const marginRight = prefixIcons.length > 0 ? -(prefixIcons.length * 40) : undefined
  const marginLeft = suffixIcons.length > 0 ? -(suffixIcons.length * 40) : undefined

  return (
    <Flex alignItems='center' {...props}>
      {prefixIcons.length > 0 && (
        <Flex mr={marginRight} data-testid='icon-field-prefix-icons'>
          {prefixIcons.map((icon, index) => React.cloneElement(icon, { ml: index === 0 ? 2 : 0, mr: 2 }))}
        </Flex>
      )}
      {input && React.cloneElement(input, { pl: paddingLeft, pr: paddingRight })}
      {suffixIcons.length > 0 && (
        <Flex ml={marginLeft} data-testid='icon-field-suffix-icons'>
          {suffixIcons.map((icon, index) => React.cloneElement(icon, { ml: 2, mr: index === 0 ? 2 : 0 }))}
        </Flex>
      )}
    </Flex>
  )
}

IconField.propTypes = { children: PropTypes.node }

export default IconField
