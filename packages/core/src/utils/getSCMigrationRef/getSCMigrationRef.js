import styled from 'styled-components'

const TestComponent = styled.div``

const isStyledComponents3 = !!TestComponent.extend

/**
 * This function is a bridge from styled-components 3 to 4+. In some cases, it isn't possible
 * to refactor components to avoid setting innerRefs on a specific component (e.g. when you need to add
 * a ref to a styled-component instance passed in as a prop).
 *
 * This relies on styled components created with SC3 having a .extend property, whereas SC4+ components
 * will not have .extend.
 * @returns {string}
 */
export default function getSCMigrationRef() {
  return isStyledComponents3 ? 'innerRef' : 'ref'
}
