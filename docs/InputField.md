
# InputField

Use `<InputField />` component to create an input a user can type into with a label. Optional props include adding an icon, changing color, and inserting a placeholder.

```.jsx
<InputField>
  <Icon size={24} name='search' legacy={false} />
  <Label>Where are you going?</Label>
  <Input placeholder='Where are you going?'/>
</InputField>
```

Prop | Type | Description
---|---|---
label | string | Text to be used as the label for the input element.
icon | string | The optional icon that shows up on the right side of the element.
color | string | Optional border and icon color.
info | string | Additional content to go in the info drawer below the element. This will be replaced by a tooltip later probably.
