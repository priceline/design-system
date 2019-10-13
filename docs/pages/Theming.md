# Theming

You can pass a modified theme to the `ThemeProvider` to change the look and feel of the components.

Default button.

```.jsx
<ThemeProvider>
  <Button>Default</Button>
</ThemeProvider>
```

You can define a new palette to change the colors of components.

```.jsx
<ThemeProvider
  theme={{
    palette: {
      primary: {
        base: '#ff001d',
        dark: '#ffa52f'
      }
    }
  }}
>
  <Button>Custom</Button>
</ThemeProvider>
```

As well as the palette, you can also add additional styles to any component and it's variations.

```.jsx
<ThemeProvider
  theme={{
    palette: {
      primary: {
        base: '#ff001d',
        dark: '#ffa52f'
      }
    },
    componentStyles: {
      Button: {
        fill: {
          primary: {
            backgroundImage: 'linear-gradient(135deg, red 0%, orange 100%)',
            '&:hover': {
              backgroundImage: 'linear-gradient(135deg, darkRed 0%, darkOrange 100%)',
            }
          }
        }
      },
      Text: {
        primary: {
          color: 'white',
          backgroundImage: 'linear-gradient(135deg, red 0%, orange 100%)'
        }
      },
      Banner: {
        error: {
          backgroundImage: 'linear-gradient(135deg, red 0%, orange 100%)'
        }
      }
    }
  }}
>
  <Box p={3}>
    <Text color="primary" mb={2}>Text with override</Text>
    <Button>Button with ovverride</Button>
    <Banner color="error" mt={1}>Banner with override</Banner>
  </Box>
</ThemeProvider>
```

# Testing With Theming

Previously, most components had a default prop for `theme`. This was removed as the value of `theme` should always come from the `ThemeProvider`, and not directly from `theme.js`. Because of this change, some unit tests may now fail. The recommended remedy for this issue is to create a wrapper function for your test renderer that either wraps it's children in the `ThemeProvider` or sets a context value for `theme` from `createTheme()`. Some examples:

`@testing-library/react`

```jsx
import { render } from '@testing-library/react'
import { ThemeProvider } from 'pcln-design-system'

global.renderWithTheme = Tree => {
  return render(<ThemeProvider children={Tree} />)
}
```

`enzyme`

```jsx
import { mount } from 'enzyme'
import { ThemeProvider } from 'pcln-design-system'

global.mountWithTheme = (node, options) => {
  return mount(node, { wrappingComponent: ThemeProvider })
}
```

# Migrating to Theming

## Absolute

- Updated to support [palette](/palette) colors with the `color` prop.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Absolute color="secondary" p={1} mt={-3}>
    Secondary Absolute
</Absolute>
<Absolute color="error" p={1} ml={200} mt={-3}>
    Error Absolute
</Absolute>
```

## BackgroundImage

- No changes required.

## Badge

- Updated to support [palette](/palette) colors with the `color` prop.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Badge color="primary">primary badge</Badge>
<Badge color="secondary">secondary badge</Badge>
<Badge color="error">error badge</Badge>
<Badge color="promoPrimary">promo primary badge</Badge>
```

## Banner

- Updated to support [palette](/palette) colors with the `color` prop.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Banner color="primary" p={2} mb={1}>Primary banner</Banner>
<Banner color="secondary" p={2} mb={1}>Secondary banner</Banner>
<Banner color="error" iconName="attention" p={2} mb={1}>Error banner</Banner>
<Banner color="caution" header="Promo" iconName="dollar" p={2}>Caution banner</Banner>
```

## BlockLink

- No changes required.

## Box

- Updated to support [palette](/palette) colors with the `color` prop.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Box color="primary" p={2} mb={1}>Primary box</Box>
<Box color="secondary" p={2} mb={1}>Secondary box</Box>
<Box color="error" p={2} mb={1}>Error box</Box>
<Box color="caution" p={2}>Caution box</Box>
```

## Button

- Updated to support [palette](/palette) colors with the `color` prop.
- Updated to support two variations, `fill` (default) and `outline`.
- Both variations support the `disabled` prop, which changes the color to light and removes hover.

```.jsx
<Button mr={1}>Button</Button>
<Button color="secondary" mr={1}>Button</Button>
<Button color="error" mr={1}>Button</Button>
<Button color="caution" mr={1}>Button</Button>
<Button color="error" disabled>Button</Button>
```

```.jsx
<Button variation="outline" mr={1}>Button</Button>
<Button variation="outline" color="secondary" mr={1}>Button</Button>
<Button variation="outline" color="error" mr={1}>Button</Button>
<Button variation="outline" color="caution" mr={1}>Button</Button>
<Button variation="outline" color="error" disabled>Button</Button>
```

## Card

- No changes required.

## Checkbox

- Updated to support [palette](/palette) colors with the `color` prop.

```.jsx
<Checkbox color="secondary" />
<Checkbox color="secondary" checked />
<Checkbox color="secondary" disabled />
<Checkbox color="secondary" disabled checked />
```

## CloseButton (WIP)

- Updated to support [palette](/palette) colors with the `color` prop.

```.jsx
<Flex>
  <Box mx="auto" />
  <CloseButton color="error" />
</Flex>
```

## Container

- No changes required.

## Divider

- Updated to support [palette](/palette) colors with the `color` prop.
- Migrate any uses of the prop `borderColor` to `color` with a [palette](/palette) color.

```.jsx
<Divider color="primary" />
<Divider color="secondary" />
<Divider color="error" />
```

## Flag

- Updated to support [palette](/palette) colors with the `color` prop.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Card py={3}>
  <Flag color="primary" mb={3}>
    Primary flag
  </Flag>
  <Flag color="error" mb={3}>
      Error flag
    </Flag>
  <Flag color="caution">
      Caution flag
    </Flag>
</Card>
```

## Flex

- Updated to support [palette](/palette) colors with the `color` prop.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Flex color="alert">
  <Box width={1/2} p={2} m={2} color="primary">Flex</Box>
  <Box width={1/2} p={2} m={2} color="secondary">Box</Box>
</Flex>
```

## FormField

- No changes required.

## GreenButton

- This component will be deprecated in v3
- Migrate any uses to use `Button` with the `secondary` color

```.jsx
<Button color="secondary">Button</Button>
```

## Heading

- Updated to support [palette](/palette) colors with the `color` prop.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Heading color="primary">Primary Heading</Heading>
<Heading color="error">Error Heading</Heading>
```

## Hide

- Updated to support [palette](/palette) colors with the `color` prop.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Flex justifyContent="space-between">
  <Hide xs p={2} color="primary">
    Hide xs
  </Hide>
  <Hide sm p={2} color="secondary">
    Hide sm
  </Hide>
</Flex>
```

## Hug

- Updated to support [palette](/palette) colors with the `color` prop.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Hug color="primary" text="Primary">
  Hug
</Hug>
```

## Icon (WIP)

- Need to update after merging core changes.

## IconButton (WIP)

- Need to update after merging core changes.

## IconField

- No changes required.

## Image

- No changes required.

## Input

- Updated to support [palette](/palette) colors with the `color` prop.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Input color="primary" defaultValue="Primary" mb={2} />
<Input color="error" defaultValue="Error" />
```

## InputGroup

- Updated to support [palette](/palette) colors with the `borderColor` prop.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<InputGroup borderColor="primary">
  <FormField>
    <Label>Where from?</Label>
    <Input
      placeholder='Where from?'
    />
  </FormField>
  <FormField>
    <Label>Where to?</Label>
    <Input
      placeholder='Where to?'
    />
  </FormField>
</InputGroup>
```

## Label

- Updated to support [palette](/palette) colors with the `color` and `bg` props.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Label color="primary" bg="background" p={2}>Primary label</Label>
```

## Link

- Updated to support [palette](/palette) colors with the `color` prop.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Link color="secondary">Secondary Link</Link>
<br />
<Link color="error">Error Link</Link>
```

## OutlineButton

- This component will be deprecated in v3
- Migrate any uses to use `Button` with the `outline` variation

```.jsx
<Button variation="outline">Outline Button</Button>
```

## Radio

- Updated to support [palette](/palette) colors with the `color` prop.

```.jsx
<Label fontSize="14px">
  <Radio color="error" checked />
  <span>selected</span>
</Label>
<Label fontSize="14px">
  <Radio color="error" />
  <span>not selected</span>
</Label>
<Label fontSize="14px">
  <Radio color="error" disabled />
  <span>disabled</span>
</Label>
```

## RatingBadge

- No changes required.

## RedButton

- This component will be deprecated in v3
- Migrate any uses to use `Button` with the correct `color` prop
  - Depending on your use case either use the `error` or `warning` [palette](/palette) colors

```.jsx
<Button color="error">Error Button</Button>
```

```.jsx
<Button color="warning">Warning Button</Button>
```

## Relative

- No changes required.

## Select

- Updated to support [palette](/palette) colors with the `color` prop.

```.jsx
<Select color="secondary">
  <option>Select A</option>
  <option>Select B</option>
</Select>
```

## SrOnly

- No changes required.

## Stamp

- Updated to support [palette](/palette) colors with the `color`, `bg` and `borderColor` props.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Stamp color="primary" mr={2}>
  <Icon name="Pin" size={16} mr={1} /> primary stamp
</Stamp>
<Stamp color="error" mr={2}>
  <Icon name="Warning" size={16} mr={1} /> error stamp
</Stamp>
<Stamp color="caution" bg="background.dark" borderColor="caution">
  <Icon name="Information" size={16} mr={1} /> just booked
</Stamp>
```

## Text

- Updated to support [palette](/palette) colors with the `color` props.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Text color="primary">Primary</Text>
<Text color="secondary">Secondary</Text>
<Text color="error">Error</Text>
```

## ToggleBadge

- Updated to support [palette](/palette) colors with the `color` and `bg` props.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<ToggleBadge color="secondary" selected>Flight + Hotel</ToggleBadge>
<ToggleBadge color="secondary">Flight + Hotel + Car</ToggleBadge>
<ToggleBadge color="secondary">Flight + Car</ToggleBadge>
```

## Tooltip

- Updated to support [palette](/palette) colors with the `color` and `bg` props.
- Migrate any uses of the component to use a [palette](/palette) color instead.

```.jsx
<Box mt={4}>
  <Tooltip color="primary" top left>
    primary tooltip
  </Tooltip>
</Box>
```

## Truncate

- No changes required.

## "text" Color Use Case

- If "text" color is used (i.e. `color="text"`), the `bg` prop is required for
  theming. Palette namespace is also suggested to be provided for both `color` &
  `bg` props.

```.jsx
<Box mt={3} color="text.lightest" bg="background.dark">
  Theme 1: color="text.lightest" value & bg="background.dark"
</Box>
<Box mt={3} color="text" bg="background.lighted">
  Theme 2: color="text" & "bg"="background.lighted"
</Box>
```
