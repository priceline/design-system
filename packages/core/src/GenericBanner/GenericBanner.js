import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Banner } from '../Banner'
import { Text } from '../Text'
import { Flex } from '../Flex'
import { Link } from '../Link'
import { Relative } from '../Relative'
import { Button } from '../Button'

const BannerWithRadius = styled(Banner)`
  border-radius: 6px;
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
  padding: 0;
  background-color: transparent;
`

const CustomButton = styled(Button)`
  z-index: 2;
  vertical-align: none;
  text-decoration: underline;
`
const GenericBanner = ({
  alignment,
  ctaText,
  heading,
  iconLeft,
  iconRight,
  imageLeft,
  buttonClick,
  text,
  textFontSize,
  URLProps,
  ...props
}) => {
  return (
    <Relative>
      {URLProps && (
        <WrapperLink tabIndex={-1} aria-hidden='true' {...URLProps} />
      )}
      <BannerWithRadius
        {...props}
        onClick={URLProps ? null : buttonClick}
        data-testid='BannerWithRadius'
      >
        <Flex alignItems='center' justifyContent={alignment}>
          {!!iconLeft && iconLeft}
          {!!imageLeft && imageLeft}
          <Text px={2} fontSize={textFontSize}>
            {!!heading && heading}
            {!!text && text}

            {URLProps && ctaText && (
              <CustomLink fontSize={textFontSize} {...URLProps}>
                {ctaText}
              </CustomLink>
            )}
            {Boolean(buttonClick) && ctaText && (
              <CustomButton
                fontSize={textFontSize}
                variation='link'
                onClick={(e) => {
                  e.stopPropagation()
                  buttonClick()
                }}
              >
                {ctaText}
              </CustomButton>
            )}
          </Text>
          {!!iconRight && iconRight}
        </Flex>
      </BannerWithRadius>
    </Relative>
  )
}

GenericBanner.displayName = 'GenericBanner'

GenericBanner.propTypes = {
  alignment: PropTypes.string,
  ctaText: PropTypes.node,
  heading: PropTypes.node,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  imageLeft: PropTypes.node,
  text: PropTypes.node,
  textFontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  buttonClick: PropTypes.func,
  URLProps: PropTypes.shape({
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
  }),
}

GenericBanner.defaultProps = {
  textFontSize: [0, null, null, 1],
  alignment: 'center',
}

export default GenericBanner
