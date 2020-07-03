import { DefaultTheme } from 'styled-components';
interface ColorStyle {
    color: string;
    backgroundColor: string;
}
export interface ColorStyles {
    whiteOnText: ColorStyle;
    whiteOnGray: ColorStyle;
    textOnLightGray: ColorStyle;
    whiteOnBlue: ColorStyle;
    blueOnLightBlue: ColorStyle;
    whiteOnGreen: ColorStyle;
    greenOnLightGreen: ColorStyle;
    whiteOnRed: ColorStyle;
    redOnLightRed: ColorStyle;
    textOnOrange: ColorStyle;
    whiteOnPurple: ColorStyle;
    purpleOnLightPurple: ColorStyle;
    textOnWhite: ColorStyle;
    grayOnWhite: ColorStyle;
    blueOnWhite: ColorStyle;
    greenOnWhite: ColorStyle;
    redOnWhite: ColorStyle;
    purpleOnWhite: ColorStyle;
    whiteOnDarkOrange: ColorStyle;
    info: ColorStyle;
    success: ColorStyle;
    warning: ColorStyle;
    danger: ColorStyle;
}
declare const _default: (theme: Pick<DefaultTheme, 'colors'>) => ColorStyles;
/**
 * Create colorStyles based on the passed in theme
 *
 * @param {Object} theme The passed in theme
 *
 *
 * @returns {Object} The generated colorStyles
 */
export default _default;
