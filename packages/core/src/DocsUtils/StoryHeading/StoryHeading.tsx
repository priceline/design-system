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
 * A subheading for individual stories within documentation sections.
 *
 * Renders a subheading3-styled title with an auto-generated ID combining story
 * name and title for anchor linking. Use above story examples to label and
 * provide navigation anchors.
 *
 * @public
 */
export const StoryHeading = ({ storyName, storyTitle }: StoryHeadingProps) => (
  <Text id={getStoryId(storyName, storyTitle)} textStyle='subheading3' my={4}>
    {storyName}
  </Text>
)
