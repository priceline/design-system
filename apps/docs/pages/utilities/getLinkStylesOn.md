# getLinkStylesOn

A utility function to get the link styles that belong on a background color.

## Syntax

```js
getLinkStylesOn(colorShade)(props)
```

## Usage

```jsx
import { Link, getLinkStylesOn } from 'pcln-design-system'

const Component = styled(Link)`
  ${props => getLinkStylesOn('primary.base')(props)};
`
```

## Arguments

| Argument     | Type   | Description                                                                         |
| ------------ | ------ | ----------------------------------------------------------------------------------- |
| `colorShade` | String | The full palette color and shade expressed in dot notation, example `primary.base`. |
| `props`      | Object | The props passed to the component, must contain a `theme` prop.                     |

## Example

```jsx
const StyledLink = styled(Link)`
  ${props => getLinkStylesOn(props.backgroundColor)(props)}
`

const LinkDemo = ({ backgroundColor, children, ...props }) => (
  <Box color={backgroundColor}>
    <StyledLink backgroundColor={backgroundColor} {...props}>
      {children}
    </StyledLink>
  </Box>
)
```

```.jsx
<LinkDemo backgroundColor='primary.base'>light link styling</LinkDemo>

<LinkDemo backgroundColor='background.base'>default link styling</LinkDemo>

<LinkDemo backgroundColor='highlight.tone'>dark link styling</LinkDemo>
```

Pass a full palette color and shade to return the link styles that belong on that color. The above examples demonstrate the styles that are returned in order to make the link accessible on colors that do not meet the theme's contrast ratio (color, on-hover color, text decoration underline, and optional bold font weight).