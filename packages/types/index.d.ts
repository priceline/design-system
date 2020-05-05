// Type definitions for pcln-design-system 3.x.x
// Project: https://github.com/priceline/design-system

import * as SC from 'styled-components'

/* eslint-disable @typescript-eslint/no-use-before-define */
export = PCLNDesignSystem
export as namespace PCLNDesignSystem
/* eslint-enable @typescript-eslint/no-use-before-define */

declare namespace PCLNDesignSystem {
    //
    // pcln-design-system components
    // ------------------------------------------------------------
    type Box = SC.AnyStyledComponent

    //
    // pcln-design-system utils
    // ------------------------------------------------------------
    function getContrastRatio(colorA: string, colorB: string): number
}
