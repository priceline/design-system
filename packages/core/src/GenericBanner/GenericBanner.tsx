import React from 'react'
import styled from 'styled-components'
import { alignItems, fontSize, justifyContent } from 'styled-system'
import PropTypes, { InferProps } from 'prop-types'
import { Banner } from '../Banner'
import { Box } from '../Box'
import { Flex } from '../Flex'
import { Link } from '../Link'
import { Relative } from '../Relative'
import { Button } from '../Button'

const BannerWithRadius = styled(Banner)`
  cursor: ${(props) => (props.onClick ? 'pointer' : 'cursor')};
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

const propTypes = {
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...fontSize.propTypes,
  buttonClick: PropTypes.func,
  buttonSize: PropTypes.oneOf(['small', 'medium', 'large']),
  buttonVariation: PropTypes.oneOf(['fill', 'outline', 'link']),
  ctaText: PropTypes.node,
  heading: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  imageLeft: PropTypes.node,
  linkVariation: PropTypes.oneOf(['fill', 'outline', 'link']),
  linkColor: PropTypes.string,
  text: PropTypes.node,
  URLProps: PropTypes.shape({
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
  }),
  urlText: PropTypes.string,
}

const GenericBanner: React.FC<InferProps<typeof propTypes>> = ({
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
}) => {
  function onClick(e) {
    e.stopPropagation()
    buttonClick()
  }
  return (
    <Relative>
      {URLProps && <WrapperLink tabIndex={-1} aria-hidden='true' {...URLProps} />}
      <BannerWithRadius {...props} onClick={URLProps ? null : buttonClick}>
        <Flex alignItems={alignItems} justifyContent={justifyContent}>
          {!!iconLeft && iconLeft}
          {!!imageLeft && imageLeft}
          <Box px={2} fontSize={fontSize}>
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

GenericBanner.propTypes = propTypes

GenericBanner.defaultProps = {
  alignItems: 'center',
  buttonVariation: 'link',
  fontSize: [0, null, null, 1],
  justifyContent: 'center',
  linkColor: 'primary',
  linkVariation: 'link',
  borderRadius: '6px',
}

export default GenericBanner
