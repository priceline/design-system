import { css } from 'styled-components'

export function zIndex({ position, zIndex }) {
  return css`
    position: ${position};
    z-index: ${zIndex};
  `
}

export function zIndexAttrs({ position = 'relative', theme, zIndex }) {
  if (!zIndex) {
    return {}
  }

  const zIndexValue = theme.zIndices[zIndex] || zIndex

  return { position, zIndex: zIndexValue }
}
