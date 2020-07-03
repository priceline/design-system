import React from 'react';
import { DefaultTheme } from 'styled-components';
export declare const Base: React.FunctionComponent<any>;
interface ThemeProviderProps {
    theme?: DefaultTheme;
    customBreakpoints?: string[];
    props?: any;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps & React.HTMLProps<HTMLDivElement>>;
export default ThemeProvider;
