# Checkbox

Use the `Checkbox` component as a styled version of the HTML `<input type="checkbox">`

## Usage

Wrap the `Radio` component with the `Label` component to create a form control.

Note: `defaultChecked` is used in the example as an uncontrolled component.

```.jsx
<Label htmlFor='another_checkbox'>
  <Checkbox id='another_checkbox' />
</Label>

<Label htmlFor='pre_checked'>
  <Checkbox defaultChecked id='pre_checked' />
  Text Next to Checkbox
</Label>

<Label htmlFor='pre_checked'>
  <Checkbox disabled id='pre_checked' />
  I am Disabled
</Label>
```


Prop | Type | Description
---|---|---
`id` | string (required) | HTML element id
`name` | string | HTML input element name
`size` | number | Height and width in px (the checkbox is a square), defaulted to *20*
`disabled` | bool | Sets the checkbox as "disabled", defaulted to *false*
`defaultChecked` | bool | Sets the checkbox as "checked", defaulted to *false*
`onChange` | fn (required) | Handler for the click/change of the checkbox
`theme` | object | Overrides the current theme
