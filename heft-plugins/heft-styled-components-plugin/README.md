# heft-styled-components-plugin

A Heft plugin to transpile Heft output with `babel` to invoke `babel-plugin-styled-components`.

## Usage

Add it to your Heft configuration, dependent on the `typescript` phase that creates the build outputs that we want to further transpile:

```json
 "styled-components": {
  "taskDependencies": ["typescript"],
  "taskPlugin": {
    "pluginPackage": "heft-styled-components-plugin"
  }
}
```
