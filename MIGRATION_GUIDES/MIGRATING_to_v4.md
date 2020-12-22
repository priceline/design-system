# Migrate to Design System version 4

See the full [v4 announcement](../ANNOUNCING_V4.md) for more information about the benefits of upgrading and what's included in v4.

## Breaking Changes

After upgrading to React 16.10+ and Styled Components v4, there are no breaking changes to the `pcln-design-system` API! 🎉

## UPDATE: Unintended breaking changes

### Styled `Link` loses its default styles when using DS 3 and SC 4 together

**Temporary workaround**: explicitly set prop `variation='link'` on `styled(Link)`s. This issue is no longer present after upgrading to both DS4 and SC4.

## Migration Steps

1. Upgrade to `react@^16.10`
1. Upgrade to `styled-components@^4` by following the [official migration guide](https://styled-components.com/docs/faqs#what-do-i-need-to-do-to-migrate-to-v4)
1. Upgrade to `pcln-design-system@^4`
1. Profit! 💵
