
# Layout

The [Box](Box.md) and [Flex](Flex.md) components are low-level layout components that can handle virtually
any layout styling that could be handled with a grid system as well as handle a lot of microlayout styles.

## Flexbox

To effectively use the Flex component, you should be familiar with Flexible Box (flexbox) Layout.
The following links can be useful to understand how flexbox works:

- [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox-1/)
- [MDN: Using CSS Flexible Boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

Additionally you should be aware of flexbox's bugs and limitations, especially in regards to IE11 support.

See the [Flexbugs](https://github.com/philipwalton/flexbugs) project for more information.

## Margins

Using the [styled-system][system] library, the Box and Flex components have several style props for handling margins,
while adhering to the Design System's spacing scale.

To add margin around a component, wrap it with the Box component and use the `m` (margin) prop.

```jsx
<Box m={3}>
  <Text>Hello</Text>
</Box>
```

The number `3` in this example refers to step 3 on the spacing scale (`theme.space`).
The spacing scale is an array of numbers that are used as pixel values in the Box component.

```js
// theme.space
[ 0, 4, 8, 16, 32, 64, 128 ]
```

To add margin in a particular direction use the `mt`, `mr`, `mb`, or `ml` props.
These props are shorthands for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` respectively.

```jsx
<Box
  mt={3}
  mb={4}>
  <Text>Hello</Text>
</Box>
```

### Shorthand Syntax

Much like other libraries, including [Tachyons][tachyons] and [Basscss][bass],
the Box component uses a shorthand syntax for margin and padding.
This has a little bit of a learning curve and requires some internalization,
but due to the heavy use of these properties it can help with development velocity.

Shorthand | Meaning
---|---
`m` | `margin`
`mt` | `margin-top`
`mr` | `margin-right`
`mb` | `margin-bottom`
`ml` | `margin-left`
`mx` | `margin-left` and `margin-right` (x-axis)
`my` | `margin-top` and `margin-top` (y-axis)
`p` | `padding`
`pt` | `padding-top`
`pr` | `padding-right`
`pb` | `padding-bottom`
`pl` | `padding-left`
`px` | `padding-left` and `padding-right` (x-axis)
`py` | `padding-top` and `padding-top` (y-axis)

## Padding

The Box and Flex components can also set padding, using a similar API to the margin props.

To add padding to a Box, use the `p` (padding) prop.

```jsx
<Box p={2}>
  <Text>Hello</Text>
</Box>
```

To add padding in a single direction, use `pt`, `pr`, `pb`, or `pl` props.

```jsx
<Box pt={2} pb={4}>
  <Text>Hello</Text>
</Box>
```

## Creating a responsive grid layout

The Flex and Box components can be used to create a flexbox-based grid layout,
using the same principles used in other grid systems such as [Bootstrap][boot].

To start, create a wrapping component with padding.

```jsx
<Box p={4}>
</Box>
```

Next, add a Flex component with the `wrap` prop to set `flex-wrap: wrap`.
This will work similarly to a "row" in traditional grid systems.

```jsx
<Box p={4}>
  <Flex wrap>
  </Flex>
</Box>
```

Next add some Box components that will act as "columns",
setting the `width` prop to `1` to make the Boxes fill the full-width of the container
and stack on top of each other for small viewports.

```jsx
<Box p={4}>
  <Flex wrap>
    <Box width={1}>
      <Text>Hello</Text>
    </Box>
    <Box width={1}>
      <Text>Hello</Text>
    </Box>
  </Flex>
</Box>
```

Next, use the `width` prop's [responsive array](#responsive-widths) feature
to change the width of the Boxes at the *small* breakpoint and up.

```jsx
<Box p={4}>
  <Flex wrap>
    <Box width={[ 1, 1/2 ]}>
      <Text>Hello</Text>
    </Box>
    <Box width={[ 1, 1/2 ]}>
      <Text>Hello</Text>
    </Box>
  </Flex>
</Box>
```

Here, the array value (`[ 1, 1/2 ]`) passed to `width` sets its width to `100%` on small viewports and `50%` on viewports wider than the *small* breakpoint.
If you resize your browser with this example, the Boxes should stack at narrow viewport widths, and appear side-by-side on wider viewports.


Next, to add gutters to the grid, use a combination of padding and negative margins.
Add `mx={-3}` to the Flex component to set left and right margins to -theme.space[3] (-16px).
This is how many CSS grid systems compensate for gutters.
Add an equal amount of padding to the Box components (`px={3}`) to create gutters between their child components.
A bottom margin (`mb={4}`) can also be added to the Box components to handle spacing when stacked.

```jsx
<Box p={4}>
  <Flex
    wrap
    mx={-3}>
    <Box
      width={[ 1, 1/2 ]}
      px={3}
      mb={4}>
      <Text>Hello</Text>
    </Box>
    <Box
      width={[ 1, 1/2 ]}
      px={3}
      mb={4}>
      <Text>Hello</Text>
    </Box>
  </Flex>
</Box>
```

Note that `* { box-sizing: border-box }` should be set in your application to ensure that the padding and width work as expected in the above example.

Because each Box component in the example above adds left and right padding of `px={3}`,
the total amount of space between their children will be double that amount.
Since the spacing scale is based on powers of two, that amount of space is equal to `theme.space[4]`,
which is why the margin bottom is set to `4`.

<!--
## Responsive Widths
-->


[system]: https://github.com/jxnblk/styled-system
[tachyons]: http://tachyons.io
[bass]: http://basscss.com
[boot]: https://getbootstrap.com
[responsive-widths]: Box.md#responsive-widths
