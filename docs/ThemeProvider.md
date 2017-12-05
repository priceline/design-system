
# ThemeProvider

The ThemeProvider component is a wrapper around the styled-components' [ThemeProvider][sc-theme]

Wrap the root of your application with the `ThemeProvider` component,
which adds the Design System theme to context for use in styled-components
and sets typographic defaults.
This should only be included once in your application.

```jsx
<ThemeProvider>
  <Heading>
    Hello
  </Heading>
</ThemeProvider>
```

Prop | Type | Description
---|---|---
`legacy` | Boolean | Enable legacy color palette
`customBreakpoints` | Array | Array of em number values to override default breakpoints

[sc-theme]: https://www.styled-components.com/docs/advanced#theming
