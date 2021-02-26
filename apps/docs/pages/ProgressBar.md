# ProgressBar

The `ProgressBar` component indicates the current step out of a discrete number of steps.

## Usage

```.jsx
<ProgressBar
  steps={[
    { color: 'warning' },
    { color: 'caution' },
    { color: 'primary' },
    { color: 'success' },
  ]}
  currentStep={2}
  stepHeight='10px'
/>
```

## Props

| Prop          | Type                  | Description                                                                                             |
| ------------- | --------------------- | ------------------------------------------------------------------------------------------------------- |
| `steps`       | `[{ color: string }]` | Array of objects containing the palette `color` to apply to all steps when this step is active.         |
| `currentStep` | number                | Fill all steps up to and including this step with the color corresponding to this step. Starts at zero. |
| `stepHeight`  | string                | Height of each step, in pixels.                                                                         |
| `className`   | string                | CSS classname, useful for styling `ProgressBar` with Styled Components.                                 |
