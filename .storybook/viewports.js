import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export default {
  viewports: {
    xs: {
      name: 'xs',
      styles: {
        height: '600px',
        width: '320px'
      }
    },
    designSystem_sm: {
      name: 'Design System: sm',
      styles: {
        height: '600px',
        width: '512px'
      }
    },
    designSystem_md: {
      name: 'Design System: md',
      styles: {
        height: '100%',
        width: '640px'
      }
    },
    designSystem_lg: {
      name: 'Design System: lg',
      styles: {
        height: '100%',
        width: '768px'
      }
    },
    designSystem_xl: {
      name: 'Design System: xl',
      styles: {
        height: '100%',
        width: '1024px'
      }
    },
    designSystem_xxl: {
      name: 'Design System: xxl',
      styles: {
        height: '100%',
        width: '1280px'
      }
    },
    ...INITIAL_VIEWPORTS
  }
}
