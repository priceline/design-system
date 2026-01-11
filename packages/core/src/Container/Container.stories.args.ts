export const argTypes = {
  size: {
    options: ['sm', 'md', 'lg', 'xl'],
    description: 'Set the max width and padding of the container',
    control: 'select' as const,
  },
}
