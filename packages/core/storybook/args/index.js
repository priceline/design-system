export const colors = [
  'primary',
  'secondary',
  'text',
  'success',
  'error',
  'warning',
  'alert',
  'caution',
  'notify',
  'pricePrimary',
  'priceSecondary',
  'promoPrimary',
  'promoSecondary',
  'border',
  'background',
]

export const spaceArgs = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
].reduce((acc, prop) => {
  acc[prop] = {
    name: prop,
    type: { name: 'string', required: false },
    description: prop,
    table: {
      defaultValue: { summary: undefined },
    },
  }

  return acc
}, {})
