import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import BreadcrumbLink, { IBreadcrumbLink } from './BreadcrumbLink'
import { Flex } from '../Flex'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

const Breadcrumbs: React.FC<InferProps<typeof propTypes> & { children?: React.ReactNode }> & {
  Link: React.FC<IBreadcrumbLink>
} = ({ className, children }) => {
  return (
    <Flex className={className}>
      {React.Children.map(children, (child, i) => {
        const isLastChild = i === React.Children.count(children)

        return React.isValidElement(child) ? React.cloneElement(child, { isLastChild }) : null
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
