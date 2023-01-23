import { StoryObj } from '@storybook/react'
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
  })

export const getStoryCode = (story: StoryObj) =>
  formatCode(reactElementToJSXString(story.render(story.args, null)))
