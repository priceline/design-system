import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

import { Flex } from '../Flex'
import { Link } from '../Link'
import { Text } from '../Text'

const propTypes = {
  className: PropTypes.string,
  isLastChild: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

const BreadcrumbLink: React.FC<InferProps<typeof propTypes>> = React.forwardRef(
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

BreadcrumbLink.propTypes = propTypes

BreadcrumbLink.defaultProps = {
  className: '',
}

export default BreadcrumbLink
