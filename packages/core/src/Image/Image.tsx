import React from 'react'
import styled from 'styled-components'
import PropTypes, { InferProps } from 'prop-types'
import { width, height, space, borderRadius, boxShadow } from 'styled-system'
import {
  borderRadiusAttrs,
  borderRadiusValues,
  boxShadowAttrs,
  boxShadowSizeValues,
  paletteFamilies,
  roundedValues,
} from '../utils'

const propTypes = {
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  ...height.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  borderRadiusSize: PropTypes.oneOf(borderRadiusValues),
  rounded: PropTypes.oneOf(roundedValues),
  boxShadowSize: PropTypes.oneOf(boxShadowSizeValues),
  boxShadowColor: PropTypes.oneOf(paletteFamilies),
}

const Image: React.FC<InferProps<typeof propTypes>> = styled.img.attrs((props) => ({
  ...borderRadiusAttrs(props),
  ...boxShadowAttrs(props),
}))`
  display: block;
  max-width: 100%;
  ${height};
  ${space};
  ${width};

  ${borderRadius}
  ${boxShadow}
`

Image.displayName = 'Image'

Image.propTypes = propTypes

export default Image
