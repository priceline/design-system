
# Banner

Use `Banner` component to create a box with a optional header, text, optional left-hand icon, optional right-hand close button, and palette color scheme.

```.jsx
<Banner px={3} py={2} showIcon={false}>
  This is a Banner
</Banner>
```

## Props
Prop | Type | Description
---|---|---
`bg` | string | Sets background-color and color. Accepts `blue`, `green`, `orange`, `red`, `lightBlue`, `lightGreen`, `lightOrange`, `lightRed`
`header` | string | Sets header content
`iconName` | string | Sets left-hand svg icon name
`onClose` | function | Passes onClick functionality to close button / shows close button if provided
`showIcon` | boolean | Renders left-hand icon (true by default)
`text` | string | Sets text content
`textAlign` | string | Sets text alignment for text only (icons not affected)

```.jsx
<Banner
  showIcon={false}
  bg='lightBlue'
  p={2}>
  <Flex>
    <Icon name='calendar' />
    <Box pl={2}>
      <Heading fontSize={2} bold>Are Your Dates Correct?</Heading>
      <Text>
        Remember to double check the calendar because availability may change depending on your dates.
      </Text>
    </Box>
  </Flex>
</Banner>
```

