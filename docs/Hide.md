---
layout: docs-layout.jsx
---

# Hide

A Box component extension to set `display: none` between specific breakpoints.
This component's props work differently than other mobile-first min-width
media queries since it's often useful to hide an element only at certain breakpoints.

```jsx
// Hidden below the first breakpoint
<Hide xs />

// Hidden at large breakpoints
<Hide lg xl />
```

Prop | Type | Description
---|---|---
xs | boolean | sets display: none below the sm breakpoint
sm | boolean | sets display: none between the sm and md breakpoint
md | boolean | sets display: none between the md and lg breakpoint
lg | boolean | sets display: none between the lg and xl breakpoint
xl | boolean | sets display: none above the xl breakpoint
