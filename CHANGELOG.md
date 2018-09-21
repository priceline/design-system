
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

- Update to styled-system v3 #356
- Adjust styles for `IconButton` #362
- Update colors #355

## [2.0.0-0] 2018-09-14

### Added

- Text `textStyle` prop
- Text `fontWeight` prop
- Text `lineHeight` prop
- `theme.lineHeights`
- `theme.textStyles`
- `theme.colorStyles` for color combinations

### Changed

- Typography styling (`theme.fontSizes`, `theme.fontWeights`)
- Updated to styled-system v2
- Box `align` prop is now `textAlign`
- Flex `align` prop is now `alignItems`
- Flex `justify` prop is now `justifyContent`
- Flex `wrap` prop is now `flexWrap`
- Removes usage of styled-components' `.extend()` method
- `theme.breakpoints` is now an array of string values with `em` units

### Removed

- Legacy icons
- Icon `legacy` prop
- Removes icon name aliases
- Legacy color values in theme
- Default styling for `Heading.h1` – `Heading.h6`

## [1.0.0-70] 2018-08-21

- Adds `color` prop to Badge
