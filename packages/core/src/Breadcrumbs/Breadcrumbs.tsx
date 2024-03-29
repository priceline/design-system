import React from 'react'
import { Flex } from '../Flex/Flex'
import { BreadcrumbLink, type BreadcrumbLinkProps } from './BreadcrumbLink'

/**
 * @public
 */
export type BreadcrumbsProps = {
  className?: string
  children?: React.ReactNode
}

/**
 * @public
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> & { Link: React.FC<BreadcrumbLinkProps> } = ({
  className,
  children,
}) => {
  return (
    <Flex className={className}>
      {React.Children.map(children, (child, i) => {
        const isLastChild = i === React.Children.count(children) - 1

        if (React.isValidElement(child)) {
          // @ts-ignore
          return React.cloneElement(child, { isLastChild })
        }
      })}
    </Flex>
  )
}

Breadcrumbs.displayName = 'Breadcrumbs'

Breadcrumbs.Link = BreadcrumbLink
