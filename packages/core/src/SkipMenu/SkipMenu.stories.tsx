import React from 'react'
import { SkipMenu } from '.'
import { Flex } from '..'

const skipLinks = [
  {
    label: 'Skip to main content',
    targetId: 'main-content',
  },
  {
    label: 'Skip to listings',
    targetId: 'listings-section',
  },
  {
    label: 'Skip to filters',
    targetId: 'filter-section',
  },
  {
    label: 'Skip to footer',
    targetId: 'footer',
  },
]

export default {
  title: 'SkipMenu',
  component: SkipMenu,
}

export const Default = () => (
  <>
    <SkipMenu skipLinks={skipLinks} />
    {skipLinks.map((section, index) => (
      <Flex
        key={index}
        tabIndex='-1'
        height='50vh'
        width={1}
        justifyContent='center'
        alignItems='center'
        id={section.targetId}
        color={index % 2 ? 'primary' : 'background'}
      >
        {section.label}
      </Flex>
    ))}
  </>
)
