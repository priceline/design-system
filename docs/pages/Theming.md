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

As well as the palette, you can also add additional styles to any component and it's variants.

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
      Box: {
        backgroundColor: 'gray'
      },
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
        color: 'orange'
      }
    }
  }}
>
  <Box p={3}>
    <Text mb={2}>Text with override</Text>
    <Button>Button with ovverride</Button>
  </Box>
</ThemeProvider>
```
