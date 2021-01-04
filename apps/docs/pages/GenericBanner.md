# GenericBanner

The `GenericBanner` component is an actionable `<banner>` element with an option to pass a left or right icon, a `heading`, `text`, or a `leftImage`. When the intent is for the call to action to use a native `<a>` tag, `URLProps` and `ctaText` can be used. When the intent is for the call to action to be a native `<button>`, `buttonClick` and `ctaText` can be used. When using a link, it can be styled to appear as a link or a button. Similarly, when using a button, it can be styled to appear as a link or a button. By default, the call to action is styled to look like a link in both cases.

```.jsx
 <GenericBanner
    p={2}
    heading={
      <Text.span fontWeight='bold' textColor='primary.base' mr={1}>
        COVID-19
      </Text.span>
    }
    text={
      <Text.span
        textColor='primary.base'
        mr={1}
      >
        Update: Your travel may be impacted. Please review this important
        info.
      </Text.span>
    }
    ctaText={
      <Text.span
        textColor='primary.base'
        fontWeight='bold'
      >
        Read More
      </Text.span>
    }
    buttonClick={() => console.log('clicked')}
    color='caution.light'
  />
```

## Props

| Prop              | Type                                                                                                                            | Description                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `alignItems`      | `baseline`, `end`, `center`, `flex-end`, `flex-start`, `self-end`, `self-start`, `start`, `stretch`                             | Applies the desired align-items styling to the flex items within the banner. The default is set to `center`.                                                                                        |
| `buttonClick`     | function                                                                                                                        | If using a button for the call to action, ie the intended action is to trigger new content in the same context, then the onClick function can be used to trigger this desired action.               |
| `buttonSize `     | `small`, `medium`, `large`                                                                                                      | When using ctaText and buttonClick and passing in a buttonVariation of fill or outline, buttonSize controls the size of the button.                                                                 |
| `buttonVariation` | `fill`, `outline`, `link`                                                                                                       | When using ctaText and buttonClick, buttonVariation can be used to alter the appearance of the button element. `link` makes the button look like a link. `link` is the default value.               |
| `ctaText`         | node                                                                                                                            | This is the call to action text node to be passed in which should be paired with either URLProps or buttonClick.                                                                                    |
| `fontSize`        | string, number or array of either                                                                                               | Used to control the font-size of heading, text and the ctaText. `[0, null, null, 1]` is the default.                                                                                                |
| `heading`         | node                                                                                                                            | Used to pass in the heading type text                                                                                                                                                               |
| `iconLeft`        | node                                                                                                                            | Used to pass in an icon on the left side                                                                                                                                                            |
| `iconRight`       | node                                                                                                                            | Used to pass in an icon on the right side                                                                                                                                                           |
| `imageLeft`       | node                                                                                                                            | Used to pass in an image on the left side                                                                                                                                                           |
| `justifyContent`  | `end`, `center`, `left`, `right`, `flex-end`, `flex-start`, `space-around`, `space-evenly`, `space-between`, `start`, `stretch` | Applies the desired justify-content styling to the flex items within the banner. The default is set to `center`.                                                                                    |
| `linkColor`       | string                                                                                                                          | When using URLProps and ctaText, linkColor can be used to customize link color. Default is `primary`.                                                                                               |
| `linkVariation`   | `fill`, `outline`, `link`                                                                                                       | When using ctaText and URLProps, linkVariation can be used to alter the appearance of the link element. `fill` and `outline` make the link element look like a button. `link` is the default value. |
| `text`            | node                                                                                                                            | Used to pass in the body text                                                                                                                                                                       |
| `URLProps`        | object containing an href(string), and a target(string)                                                                         | If the call to action should be a link, ie the intended action navigates the user to a new page then href and target should be provided in URLProps                                                 |

### Related

- [Banner](/Banner)
