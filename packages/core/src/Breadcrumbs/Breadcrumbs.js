import React from 'react'
import PropTypes from 'prop-types'
import BreadcrumbLink from './BreadcrumbLink'
import { Flex } from '../Flex'

function Breadcrumbs({ className, children }) {
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

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Breadcrumbs.defaultProps = {
  className: '',
}

export default Breadcrumbs
