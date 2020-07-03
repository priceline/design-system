import React from 'react'
import BreadcrumbLink, { BreadcrumbLinkProps } from './BreadcrumbLink'
import { Flex, FlexProps } from '../Flex'

interface BreadcrumbsProps extends FlexProps {}

interface Breadcrumbs<T> extends React.FC<T> {
  Link: React.FC<BreadcrumbLinkProps>
}

const Breadcrumbs: Breadcrumbs<BreadcrumbsProps> = ({
  className,
  children,
}) => {
  return (
    <Flex className={className}>
      {React.Children.map(children, (child, i) => {
        const isLastChild = i === (children as React.ReactNodeArray).length - 1

        return React.cloneElement(child as any, { isLastChild })
      })}
    </Flex>
  )
}

Breadcrumbs.displayName = 'Breadcrumbs'

Breadcrumbs.Link = BreadcrumbLink

Breadcrumbs.defaultProps = {
  className: '',
}

export default Breadcrumbs
