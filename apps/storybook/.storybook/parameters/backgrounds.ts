import { createTheme } from 'pcln-design-system'
const baseTheme = createTheme()

export const backgrounds = {
  default: 'background.lightest',
  values: [
    {
      name: 'background.lightest',
      value: baseTheme.palette.background.lightest,
    },
    {
      name: 'background.light',
      value: baseTheme.palette.background.light,
    },
    {
      name: 'background.base',
      value: baseTheme.palette.background.base,
    },
    {
      name: 'background.dark',
      value: baseTheme.palette.background.dark,
    },
    {
      name: 'background.darkest',
      value: baseTheme.palette.background.darkest,
    },
  ],
}
