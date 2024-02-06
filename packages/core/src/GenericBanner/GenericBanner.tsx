import React from 'react'
import styled from 'styled-components'
import { AlignItemsProps, FontSizeProps, JustifyContentProps, MarginProps, PaddingProps } from 'styled-system'
import { Banner } from '../Banner/Banner'
import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { Flex } from '../Flex/Flex'
import { Link } from '../Link/Link'
import { Relative } from '../Relative/Relative'
import { ColorSchemeName } from '../theme/theme'
import { colorSchemeCustomForeground } from '../utils/utils'

const BannerWithRadius = styled(Banner)`
  cursor: ${(props) => (props.onClick ? 'pointer' : 'cursor')};

  ${colorSchemeCustomForeground}
`

const WrapperLink = styled.a`
  z-index: 1;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const CustomLink = styled(Link)`
  display: inline-flex;
  z-index: 2;
`

const CustomButton = styled(Button)`
  z-index: 2;
  text-decoration: ${(props) => (props.buttonTextUnderline ? 'underline' : 'none')};
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Node = React.ReactElement<any, string | React.JSXElementConstructor<any>>

export type GenericBannerProps = AlignItemsProps &
  JustifyContentProps &
  FontSizeProps &
  PaddingProps &
  MarginProps & {
    buttonClick?: () => unknown
    buttonSize?: 'small' | 'medium' | 'large'
    buttonVariation?: 'fill' | 'outline' | 'link'
    ctaText?: Node
    heading?: Node
    iconLeft?: Node
    iconRight?: Node
    imageLeft?: Node
    linkVariation?: 'fill' | 'outline' | 'link'
    borderRadius?: string
    linkColor?: string
    text?: Node
    URLProps?: {
      href: string
      target?: string
    }
    color?: string
    colorScheme?: ColorSchemeName
  }

export function GenericBanner({
  alignItems,
  buttonClick,
  buttonSize,
  buttonVariation,
  ctaText,
  fontSize,
  heading,
  iconLeft,
  iconRight,
  imageLeft,
  justifyContent,
  linkVariation,
  linkColor,
  text,
  /* eslint-disable @typescript-eslint/naming-convention */
  URLProps,
  ...props
}: GenericBannerProps) {
  function onClick(e) {
    e.stopPropagation()
    buttonClick()
  }

  return (
    <Relative>
      {URLProps && <WrapperLink tabIndex={-1} aria-hidden='true' {...URLProps} />}
      <BannerWithRadius
        {...props}
        onClick={URLProps ? null : buttonClick}
        iconUsesColorScheme
        // we need to unset Banner's color prop if colorScheme is provided so it doesn't render its own icon
        color={!props.colorScheme ? props.color : null}
      >
        <Flex alignItems={alignItems} justifyContent={justifyContent}>
          {!!iconLeft && iconLeft}
          {!!imageLeft && imageLeft}
          {/*
            fontSize is not a prop Box supports
            <Box px={2} fontSize={fontSize}>
          */}
          <Box px={2}>
            {!!heading &&
              React.cloneElement(heading, {
                fontSize: heading.props.fontSize || fontSize,
              })}
            {!!text &&
              React.cloneElement(text, {
                fontSize,
              })}

            {URLProps && ctaText && (
              <CustomLink
                p={linkVariation === 'fill' || linkVariation === 'outline' ? 2 : null}
                color={linkColor}
                variation={linkVariation}
                fontSize={fontSize}
                {...URLProps}
              >
                {React.cloneElement(ctaText, {
                  fontSize,
                  zIndex: 2,
                })}
              </CustomLink>
            )}
            {buttonClick && typeof buttonClick === 'function' && ctaText && (
              <CustomButton
                size={buttonSize}
                buttonTextUnderline={buttonVariation === 'link'}
                variation={buttonVariation}
                onClick={onClick}
              >
                {React.cloneElement(ctaText, {
                  fontSize,
                })}
              </CustomButton>
            )}
          </Box>
          {!!iconRight && iconRight}
        </Flex>
      </BannerWithRadius>
    </Relative>
  )
}

GenericBanner.defaultProps = {
  alignItems: 'center',
  buttonVariation: 'link',
  fontSize: [0, null, null, 1],
  justifyContent: 'center',
  linkColor: 'primary',
  linkVariation: 'link',
  borderRadius: '6px',
}
