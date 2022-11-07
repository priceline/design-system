# Migrate to Design System version 5

## Maintenance changes
- Upgrade to Styled System v5
    - See [migration guide](https://styled-system.com/guides/migrating)
- Upgrade to Styled Components v5
    - See [migration guide](https://styled-components.com/doc/faqs#what-do-i-need-to-do-to-migrate-to-v5)

## Breaking Changes

### Core
- Remove fallback to Styled System for non-palette colors from `Box` and all components that extend it (e.g. no more hex values or CSS colors allowed)

#### Theme
- Replaced `boxShadows` in theme with new `shadows` values
- Replaced the old `borderRadii` in the theme with new values

#### Removed exports
- `deprecatedPropType`

#### Button
- Removed `fullWidth` prop. Use `width={1}` instead.

#### Flex
- Removed `wrap` prop. Use `flexWrap` instead.
- Removed `align` prop. Use `alignItems` instead.
- Removed `justify` prop. Use `justifyContent` instead.

#### GenericBanner
- Due to changes in how `Banner` handles the `color` prop, you'll need to set the `color` prop on any `<Text/>` or `<Icon/>` nodes that you want to customize, for example nodes passed to the `heading` or `text` props.

#### Stamp
- Removed `variation='solid'`. Use `variation='fill'` instead.

  > Note about the `bg` prop for `variation='outline'`: this is a special case where we want to allow customization of the CSS `background-color` and `color` rules, so passing a semantic color name to `bg` will set the background color independently from `color`.

#### Text
- Removed `align` prop. Use `textAlign` instead.