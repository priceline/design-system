import React from 'react'
import PropTypes from 'prop-types'

import { Flex } from '../Flex'
import { Link } from '../Link'
import { Text } from '../Text'
import { refPropType } from '../utils'

function BreadcrumbLink({
  className,
  isLastChild,
  href,
  icon,
  label,
  dsRef,
  onClick,
}) {
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

BreadcrumbLink.propTypes = {
  className: PropTypes.string,
  isLastChild: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  dsRef: refPropType,
  onClick: PropTypes.func,
}

BreadcrumbLink.defaultProps = {
  className: '',
}

export default BreadcrumbLink
