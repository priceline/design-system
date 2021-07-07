# pcln-codemods

This package uses a modified version of Facebook's [react-codemod](https://github.com/reactjs/react-codemod) to run JSCodeshift transforms that can help you upgrade projects from DS4 to DS5.

### Usage
`npx pcln-codemods <transform> <path> [...options]`
* `transform` - name of transform, see available transforms below.
* `path` - files or directory to transform
* use the `--dry` option for a dry-run and use `--print` to print the output for comparison

This will start an interactive wizard, and then run the specified transform.

### Included Transforms

Note: It's recommended to run the transforms in this order because some props conflict (e.g. `align` on `Flex` and `Text`) and may require manual intervention after running each transform.

* rename-deprecated-props-flex
* rename-deprecated-props-text
* button-fullwidth-to-width
* stamp-variation-solid-to-fill

**Caution:** These codemods will not catch everything (e.g. passing a variable as a prop instead of a primitive value). Please review the changes they produce carefully and confirm that they'll behave as expected.

#### `button-fullwidth-to-width`

Replaces the `fullWidth` prop with `width={1}` on `Button` elements.

```sh
npx pcln-codemods button-fullwidth-to-width <path>
```

#### `rename-deprecated-props-flex`

Renames deprecated props on `Flex` elements.

* align
* wrap
* justify

```sh
npx pcln-codemods rename-deprecated-props-flex <path>
```

#### `rename-deprecated-props-text`

Renames deprecated props on `Text` elements.

* align

```sh
npx pcln-codemods rename-deprecated-props-text <path>
```

#### `stamp-variation-solid-to-fill`

Replaces the deprecated `solid` variation on `Stamp` elements with `fill`.

```sh
npx pcln-codemods stamp-variation-solid-to-fill <path>
```
