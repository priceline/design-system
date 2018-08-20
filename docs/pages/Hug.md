# Hug

Use the `<Hug />` component to surround another component with a border and a banner on top.
Pass in `props.children` to be wrapped.

```.jsx
  <Hug icon='check' text={<Text.span>I hug my props.children</Text.span>}>
    <Card p={4}>
      Hello
    </Card>
  </Hug>
```

Prop | Type | Description
---|---|---
iconDisplay | string or array of strings | responsive display property of icon
icon | string | svg icon name
text | node, array of nodes, or string | When providing a node, it is highly recommended to use a `<Text.span />` node, to keep text on a single line
