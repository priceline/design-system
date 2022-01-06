import { create } from '@storybook/theming'
import { createTheme } from 'pcln-design-system'

const theme = createTheme()

// https://storybook.js.org/docs/react/configure/theming#create-a-theme-quickstart

export default create({
  base: 'light',

  brandTitle: 'Priceline Design System',
  brandUrl: 'https://www.priceline.com',
  brandImage: 'https://press.priceline.com/wp-content/uploads/2019/10/Priceline_Logo_RGB_Blue_2019-1.png',

  colorPrimary: theme.palette.primary.base,
})
