import React from 'react'
import { Text } from '../../Text/Text'
import { getStoryId } from '../utils'

/**
 * @public
 */
export type StoryHeadingProps = {
  storyName: string
  storyTitle: string
}

/**
 * @public
 */
export const StoryHeading = ({ storyName, storyTitle }: StoryHeadingProps) => (
  <Text id={getStoryId(storyName, storyTitle)} textStyle='subheading3' my={4}>
    {storyName}
  </Text>
)
