import React from 'react'
import { Flex } from '../Flex/Flex'
import { Link, LinkProps } from '../Link/Link'
import { Text } from '../Text/Text'

/**
 * @public
 */
export type BreadcrumbLinkProps = React.RefAttributes<unknown> & {
  className?: string
  isLastChild?: boolean
  href?: string
  icon?: React.ReactNode
  label?: string
  onClick?: LinkProps['onClick']
}

/**
 * @public
 */
export const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = React.forwardRef(
  ({ className, isLastChild, href, icon, label, onClick }, ref) => {
    const linkColor = isLastChild ? 'text.dark' : 'text.light'

    return (
      <Flex className={className} alignItems='center'>
        {icon}
        <Link href={href} color={linkColor} onClick={onClick} ref={ref}>
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
)

BreadcrumbLink.displayName = 'BreadcrumbLink'
