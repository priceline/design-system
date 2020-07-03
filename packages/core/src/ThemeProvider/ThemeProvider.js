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
import React from 'react';
import styled, { ThemeProvider as StyledThemeProvider, } from 'styled-components';
import { createTheme } from '../utils';
export const Base = styled.div `
  font-family: ${({ theme }) => theme.font};
  line-height: ${({ theme }) => theme.lineHeights.standard};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  * {
    box-sizing: border-box;
  }
`;
export const ThemeProvider = (_a) => {
    var { theme, customBreakpoints } = _a, props = __rest(_a, ["theme", "customBreakpoints"]);
    // Once updated to React 16.8 this should be wrapped in React.useMemo()
    const mergedTheme = createTheme(theme, customBreakpoints);
    return (React.createElement(StyledThemeProvider, { theme: mergedTheme },
        React.createElement(Base, Object.assign({}, props))));
};
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map