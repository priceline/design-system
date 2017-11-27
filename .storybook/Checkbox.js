import React from 'react'
import styled from 'styled-components'
import { storiesOf, action } from '@storybook/react'
import { Checkbox, Text, Box, Heading, theme } from '../src'

const Wrapper = props => (
  <Box p="12px" my="6px">
    <Heading.h6 mb="12px">Checkbox</Heading.h6>
    {props.children}
  </Box>
)

storiesOf('Checkbox', module).add('Checkbox states', () => (
  <div>
    <Wrapper>
      <Checkbox
        name="default_box"
        value="someValue"
        onClick={action('checkbox-clicked')}
        theme={theme}
      />
    </Wrapper>

    <Wrapper>
      <Checkbox
        name="pre_checked_box"
        value="someValue"
        defaultChecked={true}
        onClick={action('checkbox-clicked')}
      />
    </Wrapper>

    <Wrapper>
      <Checkbox
        name="labeled_box"
        value="someValue"
        onClick={action('checkbox-clicked')}
      >
        <Text.p p="8px" m="0" fontSize={14} style={{ display: 'inline-block' }}>
          Label Here
        </Text.p>
      </Checkbox>
    </Wrapper>

    <Wrapper>
      <Checkbox
        name="disabled_box"
        disabled={true}
        onClick={action('checkbox-clicked')}
      />
    </Wrapper>

    <Wrapper>
      <Checkbox
        name="disabled_checked_box"
        disabled={true}
        checked={true}
        onClick={action('checkbox-clicked')}
      />
    </Wrapper>
  </div>
))
