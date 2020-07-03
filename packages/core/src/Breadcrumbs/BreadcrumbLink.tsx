import React from 'react'

import { Flex, FlexProps } from '../Flex'
import { Link } from '../Link'
import { Text } from '../Text'

export interface BreadcrumbLinkProps extends FlexProps, RefProps {
  isLastChild?: boolean
  href?: string
  icon?: React.ReactNode
  label?: string
  onClick?: React.EventHandler<React.MouseEvent>
}

export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({
  className,
  isLastChild,
  href,
  icon,
  label,
  dsRef,
  onClick,
}) => {
  const linkColor = isLastChild ? 'text.dark' : 'text.light'

  return (
    <Flex className={className} alignItems='center'>
      {icon}
      <Link href={href} color={linkColor} onClick={onClick} dsRef={dsRef}>
        {label}
      </Link>
      {!isLastChild && (
        <Text m={2} color='text.light'>
          /
        </Text>
      )}
    </Flex>
  )
}

BreadcrumbLink.displayName = 'BreadcrumbLink'

BreadcrumbLink.defaultProps = {
  className: '',
}

export default BreadcrumbLink
