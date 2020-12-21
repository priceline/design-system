import React from 'react'
import { action } from '@storybook/addon-actions'
import { GenericBanner } from '.'
import { Warning, Rowing, Tea, Emoticon } from 'pcln-icons'
import { Text } from '../Text'
import styled from 'styled-components'
import { getPaletteColor } from '../utils'

export default {
  title: 'GenericBanner',
  component: GenericBanner,
}

const UnderlinedLinkText = styled(Text)`
  z-index: 2;
  text-decoration: underline;
  &:hover {
    color: ${(props) => getPaletteColor(props.hoverColor)};
  }
`

export const basicBannerAllInline = () => (
  <GenericBanner
    p={2}
    heading={
      <Text.span fontWeight='bold' textColor='primary.base'>
        COVID-19&nbsp;&nbsp;
      </Text.span>
    }
    text={
      <Text.span textColor='primary.base'>
        Update: Your travel may be impacted. Please review this hotels important
        info.
      </Text.span>
    }
    iconLeft={<Warning />}
    color='caution.light'
  />
)
export const basicBannerAllInlineRightIcon = () => (
  <GenericBanner
    p={2}
    heading={
      <Text.span fontWeight='bold' color='secondary'>
        This is a Heading&nbsp;&nbsp;
      </Text.span>
    }
    text={
      <Text.span
        textColor='primary.base'
        lineHeight={['display', null, null, 'standard']}
      >
        This is some text. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nunc at lacus vel dolor fringilla rhoncus.
      </Text.span>
    }
    iconRight={<Tea />}
    color='primary.light'
  />
)

export const basicBannerBlock = () => (
  <GenericBanner
    p={2}
    heading={<Text fontWeight='bold'>This is a Heading&nbsp;&nbsp;</Text>}
    text={
      <Text>
        This is some text. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nunc at lacus vel dolor fringilla rhoncus.
      </Text>
    }
    URLProps={{
      href: 'https://www.priceline.com',
      target: '_blank',
    }}
    ctaText={
      <UnderlinedLinkText
        color='primary'
        fontWeight='bold'
        hoverColor='primary.dark'
      >
        {' '}
        Read More
      </UnderlinedLinkText>
    }
    iconLeft={<Rowing />}
    color='secondary.light'
  />
)

export const bannerWithOnClick = () => (
  <GenericBanner
    p={2}
    heading={
      <Text.span fontWeight='bold' textColor='primary.base'>
        COVID-19&nbsp;&nbsp;
      </Text.span>
    }
    text={
      <Text.span
        textColor='primary.base'
        lineHeight={['display', null, null, 'standard']}
      >
        Update: Your travel may be impacted. Please review this hotels important
        info.&nbsp;&nbsp;
      </Text.span>
    }
    ctaText={
      <Text.span
        fontSize={[0, null, null, 1]}
        textColor='primary.base'
        fontWeight='bold'
      >
        Read More
      </Text.span>
    }
    buttonClick={action('clicked on the banner or the read more link-button')}
    iconLeft={<Warning />}
    color='caution.light'
  />
)

export const bannerWithURLProps = () => (
  <GenericBanner
    p={2}
    heading={
      <Text.span fontWeight='bold' textColor='primary.base'>
        This is a Heading&nbsp;&nbsp;
      </Text.span>
    }
    text={
      <Text.span color='warning'>
        This is some text. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nunc at lacus vel dolor fringilla rhoncus. &nbsp;&nbsp;
      </Text.span>
    }
    URLProps={{
      href: 'https://www.priceline.com',
      target: '_blank',
    }}
    ctaText={
      <UnderlinedLinkText
        color='primary'
        fontWeight='bold'
        hoverColor='primary.dark'
      >
        {' '}
        Read More
      </UnderlinedLinkText>
    }
    iconLeft={<Emoticon />}
    color='alert.light'
  />
)
