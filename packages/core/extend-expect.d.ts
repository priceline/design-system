/*
  This is a fix for a known issue when using jest-styled-components with TypeScript.
  https://github.com/styled-components/jest-styled-components/issues/264
 */
declare namespace jest {
  interface Matchers<R> {
    // @ts-ignore
    toHaveStyleRule: import('jest-styled-components').jest.Matchers<
      R
    >['toHaveStyleRule']
  }
}
