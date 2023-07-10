import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import { Box } from '../Box'
import { getPaletteColor } from '../utils'

const SCRIM_COLOR = 'rgba(0, 24, 51, 0.5)'

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: ${SCRIM_COLOR};
  position: fixed;
  inset: 0;

  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const SIZES = {
  sm: {
    content: { p: 3 },
    header: {
      textStyle: 'heading4',
    },
  },
  md: {
    content: { p: 3 },
    header: {
      textStyle: 'heading3',
    },
  },
  lg: {
    content: { p: '24px' },
    header: {
      textStyle: 'heading3',
    },
  },
  xl: {
    content: { p: '24px' },
    header: {
      textStyle: 'heading3',
    },
  },
  xxl: {
    content: { p: '24px' },
    header: {
      textStyle: 'heading3',
    },
  },
}

export const DialogContentArea = styled(Box).attrs((props) => {
  const { size, headerContent } = props
  const contentSize = SIZES[size].content

  if (contentSize) {
    return {
      px: contentSize.p,
      pb: contentSize.p,
      pt: headerContent ? 0 : contentSize.p,
    }
  }
})``

export const DialogContent = styled(Dialog.Content)`
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 750px;
  max-height: 85vh;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  ${(props) =>
    props?.hugColor &&
    `
    border-top: 4px solid ${getPaletteColor(props.hugColor)(props)};
    `}
`

export const DialogTitle = styled(Box)`
  ${(props) =>
    props?.headerColorScheme === 'primary' &&
    `
    background-color: ${getPaletteColor('primary.base')(props)};
    color: ${getPaletteColor('text.lightest')(props)};
  `}
`

export const DialogDescription = styled(Dialog.Description)`
  margin: 10px 0 20px;
  color: red;
  font-size: 15px;
  line-height: 1.5;
`
