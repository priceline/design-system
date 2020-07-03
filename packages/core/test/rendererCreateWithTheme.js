import React from 'react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { createTheme } from '../src';
const rendererCreateWithTheme = (Tree) => {
    return renderer.create(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
    React.createElement(ThemeProvider, { theme: createTheme() }, Tree));
};
export default rendererCreateWithTheme;
//# sourceMappingURL=rendererCreateWithTheme.js.map