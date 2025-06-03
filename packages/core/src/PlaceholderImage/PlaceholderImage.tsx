import { type ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { Image } from '../Image/Image'

const RandomImage = styled(Image)`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`

const determineSRC = (blur, chooseSrc, height, width) => {
  const imageURLs = [
    `http://placeimg.com/${width}/${height}/any`,
    `http://placekitten.com/${width}/${height}`,
    `https://picsum.photos/${width}/${height}`,
    `https://source.unsplash.com/${width}x${height}`,
    `https://www.fillmurray.com/${width}/${height}`,
  ]

  if (blur || chooseSrc) {
    return blur ? `https://picsum.photos/${width}/${height}?blur` : imageURLs[chooseSrc]
  }

  const randomNum = Math.floor(Math.random() * imageURLs.length)
  return imageURLs[randomNum]
}

/**
 * @public
 */
export type PlaceholderImageProps = ComponentPropsWithoutRef<'img'> & {
  ariaHidden?: boolean
  blur?: boolean
  chooseSrc?: string
  height?: string
  width?: string
}

/**
 * @public
 */
export function PlaceholderImage({
  alt,
  ariaHidden = true,
  blur = false,
  chooseSrc,
  className,
  height = '500',
  width = '500',
}: PlaceholderImageProps) {
  return (
    <RandomImage
      alt={alt || 'Random image used for placeholder content'}
      aria-hidden={ariaHidden}
      blur={blur}
      className={className}
      height={height}
      src={determineSRC(blur, chooseSrc, height, width)}
      width={width}
    />
  )
}

PlaceholderImage.displayName = 'PlaceholderImage'
