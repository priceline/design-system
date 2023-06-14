import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const viewports = {
  designSystem_xs: {
    name: 'Design System: xs',
    styles: {
      height: '600px',
      width: '320px',
    },
    type: 'mobile',
  },
  designSystem_sm: {
    name: 'Design System: sm',
    styles: {
      height: '600px',
      width: '512px',
    },
    type: 'mobile',
  },
  designSystem_md: {
    name: 'Design System: md',
    styles: {
      height: '100%',
      width: '640px',
    },
    type: 'tablet',
  },
  designSystem_lg: {
    name: 'Design System: lg',
    styles: {
      height: '100%',
      width: '768px',
    },
    type: 'tablet',
  },
  designSystem_xl: {
    name: 'Design System: xl',
    styles: {
      height: '100%',
      width: '1024px',
    },
    type: 'desktop',
  },
  designSystem_xxl: {
    name: 'Design System: xxl',
    styles: {
      height: '100%',
      width: '1280px',
    },
    type: 'desktop',
  },
  ...INITIAL_VIEWPORTS,
}
