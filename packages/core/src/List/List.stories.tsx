import React from 'react'
import List from './List'
import { Text } from '..'
import { argTypes, defaultArgs } from './List.stories.args'

export default {
  title: 'List',
  component: List,
  args: defaultArgs,
  argTypes,
}

const BasicTemplate = (args) => {
  const ListType = args.type === 'ol' ? List.ol : List.ul
  return (
    <ListType {...args}>
      <li>
        <Text>An example line of text</Text>
      </li>
      <li>
        <Text>An example line of text</Text>
      </li>
      <li>
        <Text>An example line of text</Text>
      </li>
      <li>
        <Text>An example line of text</Text>
      </li>
    </ListType>
  )
}

const StructuredRomanTemplate = (args) => {
  const ListType = args.type === 'ol' ? List.ol : List.ul
  return (
    <div style={{ border: '1px solid lightgray' }}>
      <ListType {...{ ...args, ...{ listStyle: 'upper-roman' } }}>
        <li>
          <Text>An example line of text</Text>
        </li>
        <li>
          <Text>An example line of text</Text>
        </li>
        <ListType {...{ ...args, ...{ listStyle: 'upper-alpha' } }}>
          <li>
            <Text>An example line of text</Text>
          </li>
          <li>
            <Text>An example line of text</Text>
          </li>
          <ListType {...{ ...args, ...{ listStyle: 'decimal' } }}>
            <li>
              <Text>An example line of text</Text>
            </li>
            <li>
              <Text>An example line of text</Text>
            </li>
            <ListType {...{ ...args, ...{ listStyle: 'lower-alpha' } }}>
              <li>
                <Text>An example line of text</Text>
              </li>
              <li>
                <Text>An example line of text</Text>
              </li>
              <ListType {...{ ...args, ...{ listStyle: 'decimal' } }}>
                <li>
                  <Text>An example line of text</Text>
                </li>
              </ListType>
            </ListType>
          </ListType>
        </ListType>
        <li>
          <Text>An example line of text</Text>
        </li>
      </ListType>
    </div>
  )
}

const StructuredDecimalTemplate = (args) => {
  const ListType = args.type === 'ol' ? List.ol : List.ul
  return (
    <div style={{ border: '1px solid lightgray' }}>
      <ListType {...{ ...args, ...{ listStyle: 'decimal' } }}>
        <li>
          <Text>An example line of text</Text>
        </li>
        <li>
          <Text>An example line of text</Text>
        </li>
        <ListType {...{ ...args, ...{ listStyle: 'lower-alpha' } }}>
          <li>
            <Text>An example line of text</Text>
          </li>
          <li>
            <Text>An example line of text</Text>
          </li>
          <ListType {...{ ...args, ...{ listStyle: 'lower-roman' } }}>
            <li>
              <Text>An example line of text</Text>
            </li>
            <li>
              <Text>An example line of text</Text>
            </li>
            <ListType {...{ ...args, ...{ listStyle: 'decimal' } }}>
              <li>
                <Text>An example line of text</Text>
              </li>
              <li>
                <Text>An example line of text</Text>
              </li>
              <ListType {...{ ...args, ...{ listStyle: 'lower-alpha' } }}>
                <li>
                  <Text>An example line of text</Text>
                </li>
              </ListType>
            </ListType>
          </ListType>
        </ListType>
        <li>
          <Text>An example line of text</Text>
        </li>
      </ListType>
    </div>
  )
}

const StructuredBulletTemplate = (args) => {
  const ListType = args.type === 'ol' ? List.ol : List.ul
  return (
    <div style={{ border: '1px solid lightgray' }}>
      <ListType {...{ ...args, ...{ listStyle: 'disc' } }}>
        <li>
          <Text>An example line of text</Text>
        </li>
        <li>
          <Text>An example line of text</Text>
        </li>
        <ListType {...{ ...args, ...{ listStyle: 'circle' } }}>
          <li>
            <Text>An example line of text</Text>
          </li>
          <li>
            <Text>An example line of text</Text>
          </li>
          <ListType {...{ ...args, ...{ listStyle: 'square' } }}>
            <li>
              <Text>An example line of text</Text>
            </li>
            <li>
              <Text>An example line of text</Text>
            </li>
            <ListType {...{ ...args, ...{ listStyle: 'disc' } }}>
              <li>
                <Text>An example line of text</Text>
              </li>
              <li>
                <Text>An example line of text</Text>
              </li>
              <ListType {...{ ...args, ...{ listStyle: 'circle' } }}>
                <li>
                  <Text>An example line of text</Text>
                </li>
              </ListType>
            </ListType>
          </ListType>
        </ListType>
        <li>
          <Text>An example line of text</Text>
        </li>
      </ListType>
    </div>
  )
}

export const _List = BasicTemplate.bind({})

export const OrderedList = BasicTemplate.bind({})
OrderedList.args = { color: 'text.light', fontSize: 1 }

export const UnorderedList = BasicTemplate.bind({})
UnorderedList.args = { color: 'primary.dark', fontSize: 1, type: 'ul' }

export const StructuredRomanList = StructuredRomanTemplate.bind({})
StructuredRomanList.args = { color: 'text.light', fontSize: 1 }

export const StructuredDecimalList = StructuredDecimalTemplate.bind({})
StructuredDecimalList.args = { color: 'text.light', fontSize: 1 }

export const StructuredBulletList = StructuredBulletTemplate.bind({})
StructuredBulletList.args = { color: 'text.light', fontSize: 1, type: 'ul' }
