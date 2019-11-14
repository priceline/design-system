# Migrate to Design System version 3

## Benefits

- Tree-shaking for the `core` package (`pcln-design-system`)
- Tree-shaking for the `icons` package (`pcln-icons`)
  - Can now use `import { TrendingUp, Timer } from 'pcln-icons'` import syntax
- Tree-shaking for the `autocomplete` package (`pcln-autocomplete`)
- Tree-shaking for the `modal` package (`pcln-modal`)
- (Need to verify) Tree-shaking for the `popover` package (`pcln-popover`)
- (Need to verify) Tree-shaking for the `slider` package (`pcln-slider`)

- Import

## Breaking Changes

### Core (`pcln-design-system`)

- peerDependency increase: `pcln-icons >=3`
- Icon `<Icon name="iconName" />` has been removed
- IconButton
  - `name`, `size` and `color` props are removed
  - added `icon` prop of type node. You should pass the `size` and `color` props directly to the icon child:

```
import { IconButton } from 'pcln-design-system
import { ThumbsUp } from 'pcln-icons

<IconButton icon={
  <ThumbsUp size={32} color='primary' />>
} />
```

### Icons (`pcln-icons`)

- `main` and `module` fields in `package.json` now point to CommonJS (CJS) and ES Modules (ESM) builds, respectively.
- Usage: `import { TrendingUp, Timer } from 'pcln-icons'`
  - Imports from `pcln-icons/lib/` are no longer available. This previously contained a CJS build that was incompatible with tree-shaking and dead code elimination in bundlers.
  - Built artifact now contains separate CJS and ESM builds, targetted by the `main` and `modules` fields. Modern bundlers like Webpack and Parcel target the `module`, since the ESM code supports tree-shaking. The `main` build is for CJS for Node.js usage, including unit testing (Jest) and Server-Side Rendering (SSR).
  - Default export removed (`import Icon from 'pcln-icons'`)
  - To use `Icon`, the previous default export, use (`import { Icon } from 'pcln-icons'`) instead.

## Enhancements
