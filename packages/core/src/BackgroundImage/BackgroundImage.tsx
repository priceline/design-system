import styled, { css } from 'styled-components'
import { width, WidthProps } from 'styled-system'
import { applyVariations, getPaletteColor, mapProps } from '../utils'

const variations = {
  parallax: css`
    background-attachment: fixed;
  `,
  static: css`
    background-attachment: scroll;
  `,
}

const image = (props) =>
  props.image ? { backgroundImage: `url(${props.image})` } : null

const height = (props) => (props.height ? { height: props.height } : null)

interface BackgroundImageProps extends WidthProps {
  height?: string
  image?: string
  variation?: 'parallax' | 'static'
}

export const BackgroundImage: React.FC<BackgroundImageProps> = mapProps(
  ({ ...props }) => ({
    ...props,
  })
)(styled.div<BackgroundImageProps>`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${getPaletteColor('border.light')};
  ${image} ${height} ${width};
  ${applyVariations('BackgroundImage', variations)}
`)

BackgroundImage.defaultProps = {
  variation: 'static',
}

BackgroundImage.displayName = 'BackgroundImage'

export default BackgroundImage
