import { themeGet } from '@styled-system/theme-get'
import { Badge, Box, Button, Flex, getLinkStylesOn, Image, Text } from '../index'
import React, { memo } from 'react'
import Banner from '../PclnBanners'
import styled, { css } from 'styled-components'
import {
  Ac,
  Attention,
  Beach,
  Bed,
  Cake,
  CalendarClock,
  CardTravel,
  Cars,
  Casino,
  Chat,
  Cruises,
  Discount,
  Dollar,
  DollarCircle,
  EarlyBird,
  Email,
  Event,
  Flights,
  Help,
  Hotels,
  Information,
  InformationOutline,
  Lock,
  Loyalty,
  Luggage,
  Sparkle,
  Star,
  Success,
  SuccessOutline,
  Sunrise,
  TravelExplore,
  Verified,
  Warning,
  WarningOutline,
} from 'pcln-icons'

function getAccessibleLinkStyles(props) {
  const { backgroundColor, textColor, isBold = false } = props

  const lightColor = textColor?.includes('light') ? textColor : 'text.lightest'
  const darkColor = !textColor?.includes('light') ? textColor : 'text.dark'

  return getLinkStylesOn(backgroundColor, lightColor, darkColor, isBold)(props)
}

function isBackgroundDark(backgroundColor) {
  return (
    (backgroundColor.includes('base') && !backgroundColor.includes('background')) ||
    backgroundColor.includes('dark') ||
    backgroundColor.includes('shade') ||
    backgroundColor.includes('tone')
  )
}

const ICONS = {
  Ac,
  Attention,
  Beach,
  Bed,
  Cake,
  CalendarClock,
  CardTravel,
  Cars,
  Casino,
  Chat,
  Cruises,
  Discount,
  Dollar,
  DollarCircle,
  EarlyBird,
  Email,
  Event,
  Flights,
  Help,
  Hotels,
  Information,
  InformationOutline,
  Lock,
  Loyalty,
  Luggage,
  Sparkle,
  Star,
  Success,
  SuccessOutline,
  Sunrise,
  TravelExplore,
  Verified,
  Warning,
  WarningOutline,
}

const MEDIA_WIDTH = 84
const MEDIA_HEIGHT = 96
const SCALED_MEDIA_HEIGHT = 115

const ICON_SIZE_WITH_BACKGROUND = 64
const ICON_SIZE_WITHOUT_BACKGROUND = 48

function handleClick(element, url, openInNewTab) {
  // istanbul ignore else
  if (typeof window === 'object' && element && element.target && typeof element.target.href === 'undefined') {
    if (openInNewTab) {
      window.open(url, '_blank')
    } else {
      window.location.href = url
    }
  }
}

const BannerBadge = styled(Badge)`
  &&& {
    line-height: 1.2;
  }
`

const BannerButton = styled(Button)`
  white-space: nowrap;
`

const BannerLink = styled(Box)`
  &&&:hover {
    cursor: pointer;
  }
`

const BannerRichText = styled(Text)`
  margin: unset;
  &&& > * {
    padding-left: 0;
  }
  &&& a,
  a span {
    font-weight: bold;
    ${(props) => getAccessibleLinkStyles({ ...props, isBold: true })}
  }
`

const IconContainer = styled(Flex)`
  svg {
    align-self: center;
  }

  ${themeGet('mediaQueries.md')} {
    align-self: center;
    align-content: center;
  }
`

const ResponsiveImage = styled(Image)`
  object-fit: cover;
`

const LinkWrapper = ({ children, openInNewTab, url }) => {
  return url ? (
    <BannerLink onClick={(element) => handleClick(element, url, openInNewTab)}>{children}</BannerLink>
  ) : (
    children
  )
}

const RichMediaBanner = ({
  backgroundColor,
  badge,
  badgeIcon,
  borderHugPosition,
  borderRadius,
  boxShadowSize,
  buttonRightBreakPoint,
  buttonVariation,
  callToAction,
  heading,
  icon,
  hasIconBackground,
  hasInlineLink,
  includeVipTier,
  isButtonFullWidthAtBreakPoint,
  isButtonThemeColored,
  isHeadingThemeColored,
  isVip,
  justifyContent,
  media,
  paragraph,
  textAlign,
  textColor,
  themeColor,
  ...props
}) => {
  const { buttonText, longUrl, openInNewTab, url, ...buttonProps } = callToAction || {}
  const linkUrl = longUrl || url
  const linkWrapperProps = {
    openInNewTab,
    url: linkUrl,
  }

  const isButtonAlwaysRight = buttonRightBreakPoint === 'none' || buttonRightBreakPoint === null
  const buttonRightBreakPointProp = isButtonAlwaysRight ? null : buttonRightBreakPoint
  const hasBorderRadius = borderRadius !== 'none'

  const backgroundColorProp = backgroundColor.includes('themeColor.')
    ? `${themeColor.split('.')[0]}.${backgroundColor.split('.')[1]}`
    : backgroundColor
  const isBackgroundLightest = backgroundColor === 'background.lightest'
  const isDark = isBackgroundDark(backgroundColorProp)
  const themeColorIndex = themeColor.split('.')[0]
  const fallbackTextColor = isDark ? 'text.lightest' : 'text.base'
  textColor = typeof textColor === 'string' ? textColor : fallbackTextColor

  let themeColorProp
  switch (backgroundColorProp) {
    case 'primary.tint':
      themeColorProp = 'text.heading'
      break
    case 'primary.dark':
    case 'primary.shade':
      themeColorProp = hasIconBackground ? backgroundColorProp : `${themeColorIndex}.base`
      break
    case 'promoPrimary.tint':
      themeColorProp = 'promoPrimary.dark'
      break
    case 'highlight.light':
      themeColorProp = 'secondary.dark'
      break
    default:
      themeColorProp = `${themeColorIndex}.base`
  }

  const showIcon = icon && ICONS[icon]
  const Icon = ICONS[icon]
  const iconProps = {
    color: themeColorProp,
    'data-testid': 'banner-icon',
  }
  const iconContainerProps = { px: 2 }

  const iconNode =
    showIcon && hasIconBackground ? (
      <IconContainer {...iconContainerProps}>
        <Flex
          borderRadius='9999px'
          color={isBackgroundLightest ? `${themeColorIndex}.light` : 'background.lightest'}
          height={ICON_SIZE_WITH_BACKGROUND}
          justifyContent='center'
          width={ICON_SIZE_WITH_BACKGROUND}
        >
          <Icon {...iconProps} size={32} />
        </Flex>
      </IconContainer>
    ) : (
      <IconContainer pl={[1, null, 2]} pr={2} py={1}>
        <Icon {...iconProps} size={ICON_SIZE_WITHOUT_BACKGROUND} />
      </IconContainer>
    )

  const showImage = typeof media !== 'undefined'
  const imageNode = showImage && (
    <Box height={['100%', null, MEDIA_HEIGHT]} maxWidth={MEDIA_WIDTH}>
      <ResponsiveImage
        data-testid='banner-image'
        borderRadius={hasBorderRadius ? 'lg' : undefined}
        height='100%'
        maxWidth={MEDIA_WIDTH}
        minHeight={[MEDIA_WIDTH, null, MEDIA_HEIGHT]}
        src={media?.file?.url ? `${media?.file?.url}?h=${SCALED_MEDIA_HEIGHT}` : media}
      />
    </Box>
  )

  const badgeNode = badge && (
    <Flex justifyContent={justifyContent}>
      <BannerBadge
        borderRadius={hasBorderRadius ? 'full' : undefined}
        bg={isDark ? 'background.lightest' : themeColorProp}
        color={isDark ? themeColorProp : 'text.lightest'}
        mb={[2]}
        size={['small', null, 'medium']}
        textAlign={textAlign}
      >
        <Flex alignItems='center'>
          {badgeIcon && <Image mr={1} height={['12px', null, '16px']} src={badgeIcon?.file?.url} />}
          {badge}
        </Flex>
      </BannerBadge>
    </Flex>
  )

  const textProps = {
    backgroundColor: backgroundColorProp,
    color: textColor,
    textAlign,
  }
  const headingProps = {
    ...textProps,
    color: isHeadingThemeColored ? themeColorProp : textColor,
    textStyle: ['heading6', null, 'heading5'],
  }
  const headingNode =
    heading &&
    (heading.data ? (
      <BannerRichText body={heading} {...headingProps} />
    ) : (
      <Text {...headingProps}>{heading}</Text>
    ))

  const paragraphProps = {
    ...textProps,
    textStyle: 'subheading6',
    pt: heading ? (isVip ? 1 : 2) : 0,
  }
  const paragraphNode =
    paragraph &&
    (paragraph.data ? (
      <BannerRichText body={paragraph} {...paragraphProps} />
    ) : (
      <Text {...paragraphProps}>{paragraph}</Text>
    ))
  let richTextHasInlineLink = hasInlineLink
  if (heading?.content || paragraph?.content) {
    richTextHasInlineLink =
      hasInlineLink ||
      (heading?.content && JSON.stringify(heading?.content).includes('hyperlink')) ||
      (paragraph?.content && JSON.stringify(paragraph?.content).includes('hyperlink'))
  }

  let buttonVariationSetting = isBackgroundLightest ? 'subtle' : 'white'
  if (buttonVariation) {
    buttonVariationSetting = buttonVariation
  }
  const buttonNode = buttonText && (
    <Box mt={[1, null, 0]}>
      <BannerButton
        borderRadius={hasBorderRadius ? 'action-lg' : 'none'}
        color={isButtonThemeColored ? themeColorProp.split('.')[0] : 'primary'}
        size='small'
        data-testid='banner-button'
        variation={buttonVariationSetting}
        width={isButtonFullWidthAtBreakPoint ? '100%' : undefined}
        // @ts-ignore
        onClick={() => handleClick(linkUrl, openInNewTab)}
        {...buttonProps}
      >
        {buttonText}
      </BannerButton>
    </Box>
  )

  const bannerProps = {
    badge: badgeNode,
    bgColor: backgroundColorProp,
    borderHugLeft: borderHugPosition === 'left' ? themeColorProp : undefined,
    borderHugTop: borderHugPosition === 'top' ? themeColorProp : undefined,
    borderRadius,
    boxShadowSize: isBackgroundLightest && !richTextHasInlineLink ? boxShadowSize : 'none',
    buttonRight: buttonNode,
    flexPadding: media ? 0 : [2, null, 1],
    heading: headingNode,
    iconContainerProps,
    iconLeft: showIcon && iconNode,
    iconSizeCss:
      isVip && !includeVipTier
        ? css`
            font-size: ${ICON_SIZE_WITHOUT_BACKGROUND}px;
          `
        : undefined,
    imageLeft: imageNode,
    includeIconText: includeVipTier,
    isDark,
    justifyContent,
    mobileIconAlign: 'center',
    outline: isBackgroundLightest && richTextHasInlineLink ? 'background.tint' : undefined,
    text: paragraphNode,
    ...(buttonNode && { hoverBoxShadowSize: 'lg' }),
    ...(buttonText && { buttonRightBreakPoint: buttonRightBreakPointProp }),
    ...(buttonText && {
      isButtonFullWidthAtBreakPoint: isButtonAlwaysRight ? false : isButtonFullWidthAtBreakPoint,
    }),
    ...props,
  }

  return (
    <LinkWrapper {...linkWrapperProps}>
      {/* @ts-ignore */}
      <Banner {...bannerProps} />
    </LinkWrapper>
  )
}

RichMediaBanner.defaultProps = {
  backgroundColor: 'themeColor.light',
  borderRadius: 'xl',
  boxShadowSize: 'sm',
  buttonRightBreakPoint: 'sm',
  hasIconBackground: false,
  hasInlineLink: false,
  isButtonFullWidthAtBreakPoint: true,
  isButtonThemeColored: false,
  isHeadingThemeColored: false,
  justifyContent: 'space-between',
  textAlign: 'left',
  themeColor: 'primary',
}

export default memo(RichMediaBanner)
