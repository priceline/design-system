
# Heading

The `Heading` component is an extension of the [`Text`](/Text) component intended for headings.

```.jsx
<Heading>Hello</Heading>
```

## HTML Heading Elements

By default, the `Heading` component renders an `<h3>` element with default font size 24px.
To use a different heading level, use the following:

```.jsx
<Heading.h1>This is a h1 element</Heading.h1>
<Heading.h2>This is a h2 element</Heading.h2>
<Heading.h3>This is a h3 element</Heading.h3>
<Heading.h4>This is a h4 element</Heading.h4>
<Heading.h5>This is a h5 element</Heading.h5>
<Heading.h6>This is a h6 element</Heading.h6>
```

## Examples

```.jsx
<Heading.h1>Hello</Heading.h1>
```

```.jsx
<Heading.h5 m={3} bold>Hello</Heading.h5>
```

```.jsx
<Heading.h2 color='purple'>Purple</Heading.h2>
```

