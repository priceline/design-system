import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import { space, color, theme } from 'styled-system'
import { withDocs } from 'mdx-docs'
import isAbsoluteURL from 'is-absolute-url'

const Base = styled.a`
  display: block;
  text-decoration: none;
  font-size: ${theme('fontSizes.2')}px;
  ${space} ${color} &:hover {
    color: ${theme('colors.text')};
  }
  &.active {
    color: ${theme('colors.blue')};
    font-weight: ${theme('bold')};
    border-left: 4px solid #007aff;
    margin-left: -16px;
    padding-left: 28px;
  }
`
Base.defaultProps = {
  pl: 3,
  pr: 2,
  py: 1,
  color: 'gray',
}

export default withDocs(
  ({
    basepath,
    href,
    menu,
    toggleMenu,
    closeMenu,
    routes,
    route,
    ...props
  }) => {
    if (isAbsoluteURL(href)) {
      return (
        <Base href={href} target='_blank' rel='noopener'>
          {props.children}
        </Base>
      )
    }
    return (
      <NextLink
        {...props}
        href={href}
        as={!isAbsoluteURL(href) && !!basepath ? basepath + href : href}
        passHref
      >
        <Base className={props.href === route.path ? 'active' : undefined}>
          {props.children}
        </Base>
      </NextLink>
    )
  }
)
