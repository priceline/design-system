
# Migrating

## v2.0.0

Follow these steps to migrate from v1 to v2

- Remove any references to legacy color values
- Remove the `legacy` prop from ThemeProvider
- Remove the `legacy` prop from Icon
- Ensure no imports are targeting files within the `dist/` directory (e.g. use `import { Box } from 'pcln-design-system'`; *NOT* `import Box from 'pcln-design-system/dist/Box'`)
- Replace any legacy icons with new ones
- Change Flex `align` prop to `alignItems`
- Change Flex `justify` prop to `justifyContent`
- Change Flex `wrap` prop to `flexWrap='wrap'`
- Change Box `align` prop to `textAlign`
- Change Text `bold` prop to `fontWeight='bold'`
- The Text `italic` prop has been removed. Use styled-components or the `<i>` tag to use italic styles.
- Change Button `fullWidth` prop to `width={1}`
- If you're using the `customBreakpoints` prop in the ThemeProvider, ensure the values in the array are strings with `em` units
- Ensure Heading component has appropriately set styles. If your application relied on the styles with the `Heading.h1` – `Heading.h6` semantic components, use the new `textStyle` prop to set styles (e.g. `<Heading.h1 textStyle='display6' />`)
- Account for other typographic changes (#231)
- Update dependencies if your application has the following in its `package.json`:
  - `styled-components` >=3.0.0
  - `styled-system` >=3.0.0

