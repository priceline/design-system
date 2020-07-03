import styled, { css } from 'styled-components'
import { width, space } from 'styled-system'

import { buttonStyles } from '../Button'
import {
  applyVariations,
  getPaletteColor,
  getSCMigrationRef,
  mapProps,
} from '../utils'
import { ColorProps } from '../@types/colorProps'

const variations = {
  fill: css`
    &:hover {
      text-decoration: none;
    }

    ${buttonStyles}
  `,
  link: css`
    cursor: pointer;
    text-decoration: none;
    color: ${getPaletteColor('base')};

    &:hover {
      color: ${getPaletteColor('dark')};
      text-decoration: underline;
    }
  `,
  outline: css`
    &:hover {
      text-decoration: none;
    }

    ${buttonStyles}
  `,
}

export interface LinkProps
  extends ColorProps,
    RefProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variation?: 'fill' | 'link' | 'outline'
  onClick?: React.EventHandler<React.MouseEvent>
}

export const Link: React.FC<LinkProps> = mapProps(
  ({ target, dsRef, ...props }) => ({
    [getSCMigrationRef()]: dsRef,
    rel: target === '_blank' ? 'noopener' : null,
    target,
    ...props,
  })
)(styled.a<LinkProps>`
  ${width} ${space};
  ${applyVariations('Link', variations)}
`)

Link.displayName = 'Link'

Link.defaultProps = {
  color: 'primary',
  variation: 'link',
}

export default Link
