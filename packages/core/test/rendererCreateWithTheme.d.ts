import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { ReactTestRenderer } from 'react-test-renderer';
declare const rendererCreateWithTheme: (Tree: React.ReactNode) => ReactTestRenderer;
export default rendererCreateWithTheme;
