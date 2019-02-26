# Layout Guide

The [Box](Box.md) and [Flex](Flex.md) components are low-level layout components that can handle virtually
any layout styling that could be handled with a grid system as well as handle a lot of microlayout styles.

### Flexbox

To effectively use the Flex component, you should be familiar with Flexible Box (flexbox) Layout.
The following links can be useful to understand how flexbox works:

- [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox-1/)
- [MDN: Using CSS Flexible Boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

Additionally you should be aware of flexbox's bugs and limitations, especially in regards to IE11 support.
Generally the Design System layout components should work as expected in IE11, but it's always good to test.

See the [Flexbugs](https://github.com/philipwalton/flexbugs) project for more information.

### Margins

Using the [styled-system][system] library, the Box and Flex components have several style props for handling margins,
while adhering to the Design System's spacing scale.

To add margin around a component, wrap it with the Box component and use the `m` (margin) prop.

```.jsx
<Box m={3}>
  <Text>Hello</Text>
</Box>
```

The number `3` in this example refers to step 3 on the spacing scale (`theme.space`).
The spacing scale is an array of numbers that are used as pixel values in the Box component.

```js
// theme.space
;[0, 4, 8, 16, 32, 64, 128]
```

To add margin in a particular direction use the `mt`, `mr`, `mb`, or `ml` props.
These props are shorthands for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` respectively.

```.jsx
<Box
  mt={3}
  mb={4}>
  <Text>Hello</Text>
</Box>
```

### Shorthand Syntax

Much like other libraries, including [Tachyons][tachyons], [Bootstrap][bs], and [Basscss][bass],
the Box component uses a shorthand syntax for margin and padding.
This has a little bit of a learning curve and requires some internalization,
but due to the heavy use of these properties it can help with development velocity.

[bs]: https://getbootstrap.com/docs/4.0/utilities/spacing/

| Shorthand | Meaning                                     |
| --------- | ------------------------------------------- |
| `m`       | `margin`                                    |
| `mt`      | `margin-top`                                |
| `mr`      | `margin-right`                              |
| `mb`      | `margin-bottom`                             |
| `ml`      | `margin-left`                               |
| `mx`      | `margin-left` and `margin-right` (x-axis)   |
| `my`      | `margin-top` and `margin-top` (y-axis)      |
| `p`       | `padding`                                   |
| `pt`      | `padding-top`                               |
| `pr`      | `padding-right`                             |
| `pb`      | `padding-bottom`                            |
| `pl`      | `padding-left`                              |
| `px`      | `padding-left` and `padding-right` (x-axis) |
| `py`      | `padding-top` and `padding-top` (y-axis)    |

### Padding

The Box and Flex components can also set padding, using a similar API to the margin props.

To add padding to a Box, use the `p` (padding) prop.

```.jsx
<Box p={2}>
  <Text>Hello</Text>
</Box>
```

To add padding in a single direction, use `pt`, `pr`, `pb`, or `pl` props.

```.jsx
<Box pt={2} pb={4}>
  <Text>Hello</Text>
</Box>
```

### Creating a responsive grid layout

The Flex and Box components can be used to create a flexbox-based grid layout,
using the same principles used in other grid systems such as [Bootstrap][boot].

To start, create a wrapping component with padding.

```jsx
<Box p={4} />
```

Next, add a Flex component with the `wrap` prop to set `flex-wrap: wrap`.
This will work similarly to a "row" in traditional grid systems.

```jsx
<Box p={4}>
  <Flex wrap />
</Box>
```

Next add some Box components that will act as "columns",
setting the `width` prop to `1` to make the Boxes fill the full-width of the container
and stack on top of each other for small viewports.

```.jsx
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
to change the width of the Boxes at the _small_ breakpoint and up.

```.jsx
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

Here, the array value (`[ 1, 1/2 ]`) passed to `width` sets its width to `100%` on small viewports and `50%` on viewports wider than the _small_ breakpoint.
If you resize your browser with this example, the Boxes should stack at narrow viewport widths, and appear side-by-side on wider viewports.

Next, to add gutters to the grid, use a combination of padding and negative margins.
Add `mx={-3}` to the Flex component to set left and right margins to `-theme.space[3]` (-16px).
This is how many CSS grid systems compensate for gutters.
Add an equal amount of padding to the Box components (`px={3}`) to create gutters between their child components.
A bottom margin (`mb={4}`) can also be added to the Box components to handle spacing when stacked.

```.jsx
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

### Creating a two-column layout

Often pages will have a two column layout, where the left column contains subnavigation or filters and the right column contains the main content for the page.
Using some of the same techniques from above, this can be achieved using the Flex and Box components.

```jsx
<Flex>
  <Box px={3} width={1 / 4}>
    <Sidebar />
  </Box>
  <Box px={3} width={3 / 4}>
    <MainContent />
  </Box>
</Flex>
```

### Creating a navbar

The Flex and Box components are also well-suited to create things like navbars and toolbars.

Start with a Flex container and set its color to white with a blue background.

```jsx
<Flex color="white" bg="blue" />
```

Next, add an Icon and some placeholder Text components for demonstration.
In a real application, these would likely be links and buttons.

```.jsx
<Flex
  color='white'
  bg='blue'>
  <Icon
    name='hotel'
    mr={2}
  />
  <Text
    bold
    mx={2}>
    Hello
  </Text>
  <Text
    ml='auto'
    mr={2}>
    Right Side
  </Text>
</Flex>
```

Note the `ml='auto'` on the last item.
Setting `margin: auto` on a flex item will space it away from its sibling,
in this case moving the item to the right side of the navbar.

Next, add some padding and use the `align` prop on the parent Flex component to control the layout.

```.jsx
<Flex
  p={2}
  align='center'
  color='white'
  bg='blue'>
  <Icon
    name='hotel'
    mr={2}
  />
  <Text
    bold
    mx={2}>
    Hello
  </Text>
  <Text
    ml='auto'
    mr={2}>
    Right Side
  </Text>
</Flex>
```

### Creating tiled layout

Often you'll see cards representing an list of items arranged in a tiled layout.
Using the [responsive width](#responsive-widths) feature of the Box component
and the `wrap` prop on the Flex component, this sort of layout can be achieved with the following:

```jsx
<Flex wrap>
  {items.map(item => (
    <Box key={item.id} p={3} width={[1 / 2, 1 / 3, 1 / 4]}>
      <ProductCard {...item} />
    </Box>
  ))}
</Flex>
```

### Responsive Widths

The [styled-system][system] library supports setting responsive widths that change per breakpoint with a mobile-first approach.

The Box component accepts number values to set percentage-based widths.
Any number from 0–1 will be converted to a percentage.
Any number greater than 1 will be converted to fixed pixel values.
And strings may be passed to use other CSS units, such as `em` or `vw`.

```jsx
// width: 100%
<Box width={1} />

// width: 50%
<Box width={1/2} />
<Box width={0.5} />

// width: 128px
<Box width={128} />

// width: 2em
<Box width='2em' />
```

To set a width that changes at different breakpoints, pass an array to the `width` prop.

```jsx
<Box
  width={[
    1, // 100% at all viewport widths (xs breakpoint)
    1 / 2, // 50% from the small (sm) breakpoint and up
    1 / 3, // 33% from the medium (md) breakpoint and up
    1 / 4, // 25% from the large (lg) breakpoint and up
    1 / 8 // 12.5% from the x-large (xl) breakpoint and up
  ]}
/>
```

To skip setting a width at a particular breakpoint, use a `null` value in the array.

```jsx
<Box
  width={[
    1, // 100% for all viewport widths
    null, // skip the sm breakpoint (stays 100%)
    1 / 2 // 50% from the md breakpoint and up
  ]}
/>
```

[system]: https://github.com/jxnblk/styled-system
[tachyons]: http://tachyons.io
[bass]: http://basscss.com
[boot]: https://getbootstrap.com
