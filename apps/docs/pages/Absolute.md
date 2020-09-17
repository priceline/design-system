# Absolute

Use `Absolute` component to control position. Use with a `Relative` parent/ancestor.

**Extends: [Box](/Box)**

```.jsx
<Relative
  p={5}
  zIndex={-1}
  bg='lightBlue'>
  <Absolute
    p={3}
    m={2}
    bg='blue'
    top={0}
    right={0}>
    Absolute
  </Absolute>
</Relative>
```

Note: `zIndex` is set for documentation purposes only. Generally you should avoid using `zIndex` with positioning.

## Props

| Prop     | Type                     | Description  |
| -------- | ------------------------ | ------------ |
| `top`    | number, string, or array | Sets top     |
| `bottom` | number, string, or array | Sets bottom  |
| `left`   | number, string, or array | Sets left    |
| `right`  | number, string, or array | Sets right   |
| `zIndex` | number or string         | Sets z-index |
