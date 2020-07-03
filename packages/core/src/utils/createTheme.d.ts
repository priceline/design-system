import { DefaultTheme } from 'styled-components';
interface PaletteColor {
    lightest?: string;
    light?: string;
    base: string;
    dark?: string;
    darkest?: string;
}
interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    text: PaletteColor;
    success: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    alert: PaletteColor;
    caution: PaletteColor;
    notify: PaletteColor;
    pricePrimary: PaletteColor;
    priceSecondary: PaletteColor;
    strike: PaletteColor;
    promoPrimary: PaletteColor;
    promoSecondary: PaletteColor;
    border: PaletteColor;
    background: PaletteColor;
}
interface CreatedTheme extends DefaultTheme {
    contrastRatio: number;
    palette: Palette;
    componentStyles: any;
}
declare const _default: (theme?: any | undefined, customBreakpoints?: any) => CreatedTheme;
/**
 * Create the theme
 *
 * @param {Object}  theme             The theme to merge against the default
 * @param {Object=} customBreakpoints Custom breakpoints for the theme
 *
 * @returns {Object} The generated theme
 */
export default _default;
