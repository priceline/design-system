# `<Hug />`

Use the `<Hug />` component to surround another component with a border and a banner on top.
This component has a `<HugBanner />` component nested inside of it to create a banner.
Pass in `props.children` to be wrapped.

```jsx
  <Hug icon='check' text={<Text.span>I hug my props.children</Text.span>} />
```

Prop | Type | Description
---|---|---
iconName | string | svg icon name
text | node, array of nodes, or string | When providing a node, it is highly recommended to use a `<Text.span />` node, to keep text on a single line