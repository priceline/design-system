/// <reference types="react" />
import PropTypes from 'prop-types';
import hoistStatics from 'hoist-non-react-statics';
export { default as getSCMigrationRef } from '../utils/getSCMigrationRef';
export declare const mapProps: (map: any) => (Component: any) => ((props: any) => JSX.Element) & hoistStatics.NonReactStatics<any, {}>;
export declare const deprecatedPropType: (replacement: any) => (props: any, propName: any) => Error;
export declare const deprecatedColorValue: () => (props: any, propName: any, componentName: any) => Error;
/**
 * Converts a hex color to rgb
 *
 * @example hexToRgb('#007aff') => 'rgb(0, 122, 255)'
 *
 * @param {string} color The color to transform to rgb
 *
 * @returns {string} The color in rgb
 */
export declare const hexToRgb: (color: any) => string;
/**
 * Decomposes a color into an array of values
 *
 * @example decomposeColor('#007aff') => [0, 122, 255]
 *
 * @param {string} color The color to decompose
 *
 * @returns {Array} An array of the color values
 */
export declare const decomposeColor: (color: any) => any;
/**
 * Gets the luminance of a color
 *
 * @example getLuminance('#007aff') => 0.211
 * @see https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color The color to get the luminance of
 *
 * @return {Number} The luminance of the color
 */
export declare const getLuminance: (color: any) => number;
/**
 * Gets the contrast ratio between two colors
 *
 * @example getContrastRatio('#007aff', '#fff') => 4.016975780478911
 * @see https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} colorA
 * @param {string} colorB
 *
 * @return {Number} The contrast ratio
 */
export declare const getContrastRatio: (colorA: any, colorB: any) => number;
/**
 * Applies the selected size styles to a styled component.
 *
 * @param {Object} sizes An object of size styles
 *
 * @param defaultSize
 * @returns {array}
 */
export declare const applySizes: (sizes?: any, defaultSize?: string) => ({ size, }: {
    size: any;
}) => import("styled-components").FlattenSimpleInterpolation;
/**
 * Applies the selected variation style to a styled component.
 * Combines the variation style with any custom styling from
 * theme.componentStyles[component][variation]
 *
 * Once updated to styled-components v4, componentName is no
 * longer needed as it is part of forwardedClass.displayName
 *
 * @param {string} componentName The name of the component
 * @param {Object} variations    An object of variation styles
 *
 * @returns {array}
 */
export declare const applyVariations: (componentName: any, variations?: any) => (props: any) => import("styled-components").FlattenSimpleInterpolation;
/**
 * Gets the color of a palette shade, using props.color as
 * the palette color. If palette shade does not exist, falls
 * back to theme.colors
 *
 * @example getPaletteColor('dark')(props) => will return the dark
 * shade of theme.palette[props.color].dark
 * @example getPaletteColor('primary.base')(props) => theme.palette.primary.base
 * @example getPaletteColor('primary', 'base')(props) => theme.palette.primary.base
 */
export declare const getPaletteColor: (...args: any[]) => (props: any) => any;
/**
 * Checks if the given color prop is a valid palette color
 *
 * @param {Object} props
 *
 * @returns {boolean}
 */
export declare const hasPaletteColor: (props: any) => boolean;
/**
 * Gets the text color that belongs on a given background color
 *
 * @param {string} name The name of the background color
 *
 * @returns {string} The text color that belongs on the background
 */
export declare const getTextColorOn: (name: any) => (props: any) => any;
export declare const getByPalette: (props: any) => import("styled-components").FlattenSimpleInterpolation;
/**
 * Extended color function from styled-system. First checks
 * for a palette color before falling back to styled-system
 *
 * @param {Object} props
 *
 * @returns {string|css}
 */
export declare const color: (props: any) => "" | import("styled-components").FlattenSimpleInterpolation;
export declare const borders: (props: any) => {
    'border-color': any;
    ':focus': {
        outline: number;
        'border-color': any;
        'box-shadow': string;
    };
};
/**
 * Since PropTypes doesn't ship with a type for React refs, we define one here to
 * reference throughout the project to describe custom props that expect a ref (e.g. dsRef)
 *
 * Source: https://stackoverflow.com/a/51127130
 */
export declare const refPropType: PropTypes.Requireable<((...args: any[]) => any) | PropTypes.InferProps<{
    current: PropTypes.Requireable<any>;
}>>;
