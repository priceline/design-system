import styled from 'styled-components'
import { width, WidthProps } from 'styled-system'

interface ImageProps
  extends WidthProps,
    Omit<React.HTMLProps<HTMLImageElement>, 'width'> {
  height?: string
}

export const Image: React.FC<ImageProps> = styled.img.attrs((props) => ({
  height: props.height || 'auto',
}))<ImageProps>`
  display: block;
  max-width: 100%;
  ${width}
`

Image.displayName = 'Image'

export default Image
