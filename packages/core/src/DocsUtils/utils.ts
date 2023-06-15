import { Story, StoryObj } from '@storybook/react'
import kebabCase from 'lodash/kebabCase'
import prettier from 'prettier'
import parserBabel from 'prettier/parser-babel'
import reactElementToJSXString from 'react-element-to-jsx-string'

export const copy = async (value: string) => navigator.clipboard.writeText(value)

export const getStoryId = (storyName?: string, storyTitle?: string) =>
  `story--${kebabCase(storyTitle)}--${kebabCase(storyName)}`

export const formatCode = (code: string) =>
  prettier.format(code, {
    parser: 'babel',
    plugins: [parserBabel],
    jsxSingleQuote: true,
    printWidth: 120,
  })

export const getStoryCode = (story: Story | StoryObj) => {
  const code = typeof story === 'function' ? story(story.args, null) : story.render(story.args, null)
  return formatCode(reactElementToJSXString(code, { showDefaultProps: false })).slice(0, -2)
}
