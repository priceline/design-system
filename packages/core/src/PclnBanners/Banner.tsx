import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from '..'
import BannerWrapper from './BannerWrapper'
import IconRightContainer from './IconRightContainer'
import BoxToFlex from './BoxToFlex'

const FullWidthButtonContainer = styled(Box)`
  ${({ buttonRightBreakPoint, theme }) => `
  display: block;
  ${theme.mediaQueries[buttonRightBreakPoint]} {
    display: none;
  }
`}
`

const PartialWidthButtonContainer = styled(Flex)`
  ${({ buttonRightBreakPoint, isButtonFullWidthAtBreakPoint, theme }) => `
    ${
      isButtonFullWidthAtBreakPoint &&
      `
      display: none;
      ${theme.mediaQueries[buttonRightBreakPoint]} {
        display: flex;
      }
  `
    }
`}
`

const Banner = ({
  badge,
  bgColor,
  borderHugLeft,
  borderHugTop,
  borderRadius,
  boxShadowSize,
  buttonRight,
  buttonRightBreakPoint,
  flexPadding,
  heading,
  hoverBoxShadowSize,
  iconLeft,
  iconRight,
  imageLeft,
  isButtonFullWidthAtBreakPoint,
  justifyContent,
  outline,
  px,
  py,
  text,
}) => {
  const hasLeftContent = !!imageLeft || !!iconLeft
  return (
    <BannerWrapper
      data-testid='bannerWrapper'
      bgColor={bgColor}
      borderHugLeft={borderHugLeft}
      borderHugTop={borderHugTop}
      borderRadius={borderRadius}
      boxShadowSize={boxShadowSize}
      hoverBoxShadowSize={hoverBoxShadowSize}
      outline={outline}
      px={px}
      py={py}
    >
      <Flex justifyContent='center' alignItems='center' p={flexPadding}>
        {!!imageLeft && imageLeft}
        {!!iconLeft && iconLeft}
        <BoxToFlex
          alignItems='center'
          buttonRightBreakPoint={buttonRightBreakPoint}
          data-testid='bannerContents'
          isButtonFullWidthAtBreakPoint={isButtonFullWidthAtBreakPoint}
          justifyContent={justifyContent}
          width={1}
        >
          <Box mx={[1, null, 0]} pl={hasLeftContent ? [1, null, 3] : undefined}>
            {!!badge && badge}
            {!!heading && heading}
            {!!text && text}
          </Box>
          {buttonRight && (
            <PartialWidthButtonContainer
              data-testid='buttonBox'
              buttonRightBreakPoint={buttonRightBreakPoint}
              isButtonFullWidthAtBreakPoint={isButtonFullWidthAtBreakPoint}
              justifyContent={justifyContent === 'center' ? 'center' : 'flex-start'}
              ml={justifyContent === 'space-between' ? 'auto' : undefined}
              pl={hasLeftContent ? [2, null, 3] : undefined}
              pr={1}
            >
              {buttonRight}
            </PartialWidthButtonContainer>
          )}
        </BoxToFlex>
      </Flex>
      {buttonRight && isButtonFullWidthAtBreakPoint && (
        <FullWidthButtonContainer
          data-testid='buttonBoxFullWidth'
          buttonRightBreakPoint={buttonRightBreakPoint}
          px={imageLeft ? 0 : 1}
          py={1}
          width={1}
        >
          {buttonRight}
        </FullWidthButtonContainer>
      )}
      {iconRight && <IconRightContainer>{iconRight}</IconRightContainer>}
    </BannerWrapper>
  )
}

Banner.defaultProps = {
  borderRadius: 'xl',
  flexPadding: [1, null, 2],
  isButtonFullWidthAtBreakPoint: false,
  justifyContent: 'space-between',
  px: 2,
  py: 2,
}

export default Banner
