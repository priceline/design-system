import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'
import { Flex } from '../Flex'
import { Link } from '../Link'
import { SrOnly } from '../SrOnly'

/*
 * :focus-within property not supported on ie11
 * If ie11 support is needed, we would probably need to go with state/focus delagation solution
 */
const OffScreenPanel = styled(SrOnly)`
  &:focus-within {
    height: auto;
    width: 100%;
    max-width: 100%;
    clip: auto;
    margin: 0;
    overflow: unset;
  }
`

const propTypes = {
  className: PropTypes.string,
  skipLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      targetId: PropTypes.string,
    })
  ),
}

const SkipMenu: React.FC<InferProps<typeof propTypes>> = ({ className, skipLinks, ...props }) => {
  if (!skipLinks?.length) return null
  return (
    <OffScreenPanel data-testid='skip-menu' as={Flex} className={className} {...props}>
      {skipLinks?.map(({ label, targetId, ...skipLink }) => (
        <Link key={`skipLink_${targetId}`} href={`#${targetId}`} p={2} {...skipLink}>
          {label}
        </Link>
      ))}
    </OffScreenPanel>
  )
}

SkipMenu.displayName = 'SkipMenu'

SkipMenu.propTypes = propTypes

export default SkipMenu
