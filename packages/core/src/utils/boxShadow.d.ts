import { CSSObject } from "styled-components";
interface BoxShadow extends CSSObject {
    'box-shadow': string;
}
declare const _default: (props: any) => BoxShadow;
/**
 * Replacement for styled-system's boxShadow that maps sizes to the boxShadows values defined
 * in the theme. Returns an object representing the box-shadow CSS rule for use in
 * Styled Components.
 *
 * @param props
 * @returns {{ 'box-shadow': string }}
 */
export default _default;
