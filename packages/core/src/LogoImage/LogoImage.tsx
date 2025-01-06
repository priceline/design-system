import React from 'react'
import styled, { css } from 'styled-components'
import { Image } from '../Image/Image'

const ImageWrapper = styled(Image)`
  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          max-height: 16px;
          max-width: 60px;
        `
      case 'medium':
        return css`
          max-height: 28px;
          max-width: 104px;
        `
    }
  }}
  object-fit: contain;
  margin: auto;
`

type Size = 'small' | 'medium'

/**
 * @public
 */
export type LogoImageProps = {
  alt: string
  size: Size
  src: string
}

/**
 * @public
 */
export function LogoImage({ alt, size, src }: LogoImageProps) {
  return <ImageWrapper alt={alt} src={src} size={size} />
}
