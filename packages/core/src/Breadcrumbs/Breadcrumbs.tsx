import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import BreadcrumbLink from './BreadcrumbLink'
import { Flex } from '../Flex'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

const Breadcrumbs: React.FC<InferProps<typeof propTypes>> = ({ className, children }) => {
  return (
    <Flex className={className}>
      {React.Children.map(children, (child, i) => {
        const isLastChild = i === children.length - 1

        return React.cloneElement(child, { isLastChild })
      })}
    </Flex>
  )
}

Breadcrumbs.displayName = 'Breadcrumbs'

Breadcrumbs.Link = BreadcrumbLink

Breadcrumbs.propTypes = propTypes

Breadcrumbs.defaultProps = {
  className: '',
}

export default Breadcrumbs
