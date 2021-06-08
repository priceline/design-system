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

export const fontSizes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
