import { DefaultTheme } from 'styled-components';
interface TextStyle {
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    letterSpacing?: string;
    textTransform?: string;
}
export interface TextStyles {
    display8: TextStyle;
    display7: TextStyle;
    display6: TextStyle;
    display5: TextStyle;
    display4: TextStyle;
    display3: TextStyle;
    display2: TextStyle;
    display1: TextStyle;
    display0: TextStyle;
    body2: TextStyle;
    body1: TextStyle;
    body0: TextStyle;
    small: TextStyle;
}
declare const _default: (theme: Pick<DefaultTheme, 'fontSizes' | 'fontWeights' | 'lineHeights' | 'letterSpacings'>) => TextStyles;
/**
 * Create textStyles based on the passed in theme
 *
 * @param {Object} theme The passed in theme
 *
 * @returns {Object} The generated textStyles
 */
export default _default;
