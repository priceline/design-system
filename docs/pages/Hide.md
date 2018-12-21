# Hide

Conditionally hides content based on viewport width.

**Extends: [Box](/Box)**

This component's props work differently than other mobile-first min-width
media queries since it's often useful to hide an element only at certain breakpoints.

Hidden below the first breakpoint

```.jsx
<Hide xs>
  Hide xs
</Hide>
```

Hidden at large breakpoints

```.jsx
<Hide lg xl>
  Hide lg xl
</Hide>
```

## Props

| Prop | Type    | Description                                         |
| ---- | ------- | --------------------------------------------------- |
| `xs` | boolean | Sets display: none below the sm breakpoint          |
| `sm` | boolean | Sets display: none between the sm and md breakpoint |
| `md` | boolean | Sets display: none between the md and lg breakpoint |
| `lg` | boolean | Sets display: none between the lg and xl breakpoint |
| `xl` | boolean | Sets display: none above the xl breakpoint          |
