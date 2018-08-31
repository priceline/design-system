# Relative

Use `Relative` component to control position and to act as a
parent/ancestor to an `Absolute` element.

This component is an extension of the
[`Box`](https://pricelinelabs.github.io/design-system/Box) component and inherits its props.

```.jsx
<Relative p={2}>
  Relative postioned
</Relative>
```

## Props

Prop | Type | Description
---|---|---
`top` | number, string, or array | Sets top
`bottom` | number, string, or array | Sets bottom
`left` | number, string, or array | Sets left
`right` | number, string, or array | Sets right
`zIndex` | number or string | Sets z-index
