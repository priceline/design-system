var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const deepmerge = require('deepmerge');
import defaultTheme from '../theme/theme';
import createTextStyles from './createTextStyles';
import createColorStyles from './createColorStyles';
/**
 * Adds aliases to an array of keys
 *
 * @param {Array} arr The array to add aliases to
 */
const addAliases = (arr) => {
    arr.forEach((val, key) => {
        arr[['sm', 'md', 'lg', 'xl', 'xxl'][key]] = val;
    });
    return arr;
};
/**
 * Create the palette based on passed in theme
 *
 * @param {Object=} palette The passed in palette
 * @param {Object}  theme   The passed in theme
 *
 * @returns {Object} The generated palette
 */
const createPalette = (_a) => {
    var { palette = {} } = _a, theme = __rest(_a, ["palette"]);
    const { lightBlue, blue, darkBlue, lightGreen, green, darkGreen, white, text, lightRed, red, darkRed, lightOrange, orange, darkOrange, lightYellow, yellow, lightPurple, purple, pink, gray, borderGray, darkGray, lightGray, buttonGray, } = theme.colors;
    return deepmerge({
        primary: {
            light: lightBlue,
            base: blue,
            dark: darkBlue,
        },
        secondary: {
            light: lightGreen,
            base: green,
            dark: darkGreen,
        },
        text: {
            lightest: white,
            light: gray,
            base: text,
            dark: '#001023',
        },
        success: {
            light: lightGreen,
            base: green,
            dark: darkGreen,
        },
        error: {
            light: lightRed,
            base: red,
            dark: darkRed,
        },
        warning: {
            light: lightRed,
            base: red,
            dark: darkRed,
        },
        alert: {
            light: lightOrange,
            base: orange,
            dark: darkOrange,
        },
        caution: {
            light: lightYellow,
            base: yellow,
            dark: '#b19a1d',
        },
        notify: {
            light: lightYellow,
            base: yellow,
            dark: '#b19a1d',
        },
        pricePrimary: {
            light: lightGreen,
            base: green,
            dark: darkGreen,
        },
        priceSecondary: {
            light: blue,
            base: darkBlue,
            dark: '#002f6b',
        },
        strike: {
            base: red,
        },
        promoPrimary: {
            light: lightPurple,
            base: purple,
            dark: '#550080',
        },
        promoSecondary: {
            light: '#fe649a',
            base: pink,
            dark: '#b12b5a',
        },
        border: {
            light: gray,
            base: borderGray,
            dark: darkGray,
        },
        background: {
            lightest: white,
            light: lightGray,
            base: buttonGray,
            dark: gray,
            darkest: text,
        },
    }, palette);
};
/**
 * Create the theme
 *
 * @param {Object}  theme             The theme to merge against the default
 * @param {Object=} customBreakpoints Custom breakpoints for the theme
 *
 * @returns {Object} The generated theme
 */
export default (theme, customBreakpoints = null) => {
    const mergedTheme = deepmerge(defaultTheme, theme || {});
    return Object.assign(Object.assign({}, mergedTheme), { contrastRatio: mergedTheme.contrastRatio || 2.6, breakpoints: addAliases(customBreakpoints || mergedTheme.breakpoints), mediaQueries: addAliases(mergedTheme.mediaQueries), palette: createPalette(mergedTheme), colorStyles: createColorStyles(mergedTheme), textStyles: createTextStyles(mergedTheme) });
};
//# sourceMappingURL=createTheme.js.map