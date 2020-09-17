# Stamp

Use the `Stamp` component to subtly display attributes alongside listing cells and on product detail pages.
Use it in conjunction with an `Icon` component to give it more context.
An Icon placed within a Stamp will inherit the assigned Stamp color.

```.jsx
<Stamp color='promoPrimary'>
  <TrendingUp size={16} mr={1} /> top booked hotel
</Stamp>
```

## Props

| Prop          | Type                     | Description                         |
| ------------- | ------------------------ | ----------------------------------- |
| `bg`          | string                   | Sets background color               |
| `borderColor` | string                   | Sets border color                   |
| `color`       | string                   | Sets both Text and Icon color       |
| `px`          | number, string, or array | Sets padding-left and padding-right |
| `py`          | number, string, or array | Sets padding-top and padding-bottom |
| `mx`          | number, string, or array | Sets margin-left and margin-right   |
| `my`          | number, string, or array | Sets margin-top and margin-bottom   |
