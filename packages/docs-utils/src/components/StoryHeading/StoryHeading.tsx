import { Text } from 'pcln-design-system'
import React from 'react'
import { getStoryId } from '../../utils'

export type StoryHeadingProps = {
  storyName: string
  storyTitle: string
}

export const StoryHeading = ({ storyName, storyTitle }: StoryHeadingProps) => (
  <Text id={getStoryId(storyName, storyTitle)} textStyle='subheading3' my={4}>
    {storyName}
  </Text>
)
