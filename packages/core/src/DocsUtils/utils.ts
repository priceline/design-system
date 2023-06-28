import { Story, StoryObj } from '@storybook/react'
import kebabCase from 'lodash/kebabCase'
import reactElementToJSXString from 'react-element-to-jsx-string'

export const copy = async (value: string) => navigator.clipboard.writeText(value)

export const getStoryId = (storyName?: string, storyTitle?: string) =>
  `story--${kebabCase(storyTitle)}--${kebabCase(storyName)}`

export const getStoryCode = (story: Story | StoryObj) => {
  const code = typeof story === 'function' ? story(story.args, null) : story.render(story.args, null)
  return reactElementToJSXString(code, { showDefaultProps: false })
}
