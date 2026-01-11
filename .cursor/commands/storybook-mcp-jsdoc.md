Use the `pcln-design-system_MCP` tools to write an excellent JSDoc comment for the referenced component.

- Use `mcp_pcln-design-system_MCP_get-documentation` to fetch component documentation
- Use `mcp_pcln-design-system_MCP_list-all-documentation` to discover available components

The comment should help humans and LLMs understand the component, what it can do and what it looks like.

## Guidelines

- **Do not include verbose parameter annotations** - Those are handled by TypeScript and react-docgen-typescript
- **Do not include code examples** - Examples are already in the Storybook stories
- **Do not include Storybook links** - Avoid fictional or placeholder URLs
- **Focus on what the component does and when to use it** - Keep the JSDoc concise and focused on purpose, behavior, and use cases
- **Document visual modes/variants** - If the component has different visual modes (like full overlay vs gradients), explain them clearly

## JSDoc Placement for react-docgen

React-docgen needs the JSDoc on a **named function** to capture it. The placement depends on the component pattern:

### Standard forwardRef components
Place JSDoc immediately before the exported component:

```typescript
/**
 * JSDoc goes here.
 */
export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  (props, ref) => <StyledMyComponent ref={ref} {...props} />
)
```

### HOC-wrapped components (withTheme, etc.)
Place JSDoc on the **base function**, not the wrapped export. Use a proper name (not underscore-prefixed) to satisfy React hooks linting:

```typescript
/**
 * JSDoc goes here on the base function.
 */
function TooltipBase({ ... }) {
  // hooks work here because function name starts with uppercase
}

export const Tooltip = withTheme(TooltipBase)
```

**Avoid underscore prefixes** like `_Tooltip` - they cause React hooks linting warnings because hook rules require component names to start with an uppercase letter.

### Compound components with type assertions
Use a named function inside forwardRef so react-docgen can find it:

```typescript
/**
 * JSDoc goes here.
 */
export const List = React.forwardRef<HTMLUListElement, ListProps>(
  function List(props, ref) {
    return <StyledList ref={ref} {...props} />
  }
) as React.ForwardRefExoticComponent<...> & { ol: typeof OrderedList }
```

IF THE MCP IS NOT AVAILABLE, DO NOTHING
