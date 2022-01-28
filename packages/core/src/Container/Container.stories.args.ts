export const argTypes = {
  size: {
    name: 'size',
    type: { name: 'string' },
    options: ['sm', 'md', 'lg', 'xl'],
    description: 'Set the max width and padding of the container',
    control: {
      type: 'select',
    },
  },
}
