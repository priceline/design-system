import kebabCase from 'lodash/kebabCase'

export const copy = async (value: string) => navigator.clipboard.writeText(value)

export const getStoryId = (storyName?: string, storyTitle?: string) =>
  `story--${kebabCase(storyTitle)}--${kebabCase(storyName)}`
