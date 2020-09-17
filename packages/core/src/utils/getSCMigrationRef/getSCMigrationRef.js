import * as SC from 'styled-components'
import moize from 'moize'

const isStyledComponents3 = moize((styled) =>
  /*
    We have to use this hack to avoid triggering deprecation warnings we got by checking
    for the presence of .extend on newly created Styled components, as well as the
    Webpack warnings raised if we check for a non-existent export directly.
   */
  Object.keys(styled).includes('injectGlobal')
)

/**
 * This function is a bridge from styled-components 3 to 4+. In some cases, it isn't possible
 * to refactor components to avoid setting innerRefs on a specific component (e.g. when you need to add
 * a ref to a styled-component instance passed in as a prop).
 *
 * This relies on styled components created with SC3 having a .extend property, whereas SC4+ components
 * will not have .extend.
 * @returns {string}
 */
function getSCMigrationRef() {
  return isStyledComponents3(SC) ? 'innerRef' : 'ref'
}

export { getSCMigrationRef }
