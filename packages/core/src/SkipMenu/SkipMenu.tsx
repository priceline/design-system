import React from 'react'
import styled from 'styled-components'
import { Flex } from '../Flex/Flex'
import { Link } from '../Link/Link'
import { SrOnly } from '../SrOnly/SrOnly'

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

/**
 * @public
 */
export type SkipMenuProps = {
  className?: string
  skipLinks?: { label: string; targetId: string }[]
}

/**
 * An accessibility component providing keyboard-navigable skip links.
 *
 * Renders hidden links that become visible on focus, allowing keyboard users
 * to skip directly to main content sections. Provide `skipLinks` array with
 * `label` and `targetId` for each section. Essential for screen reader and
 * keyboard accessibility compliance.
 *
 * @public
 */
export function SkipMenu({ className, skipLinks, ...props }: SkipMenuProps) {
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
