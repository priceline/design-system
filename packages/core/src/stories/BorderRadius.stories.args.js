import { borderRadii } from '../../storybook/args'

export const defaultArgs = {
  p: 3,
  m: 0,
  color: 'primary',
  size: '200px',
  borderRadius: 'full',
}

export const argTypes = {
  children: { table: { disable: true } },
  p: { table: { disable: true } },
  m: { table: { disable: true } },
  color: { table: { disable: true } },
  boxShadowSize: { table: { disable: true } },

  size: {
    name: 'size',
    type: { name: 'string' },
    description: 'size',
  },
}

export const borderRadiusArgType = {
  name: 'borderRadius',
  type: { name: 'string' },
  options: borderRadii,
  description: 'borderRadius',
  control: {
    type: 'select',
  },
}
