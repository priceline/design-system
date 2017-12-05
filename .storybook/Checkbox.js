import React from 'react'
import styled from 'styled-components'
import { storiesOf, action, decorateAction } from '@storybook/react'
import { Checkbox, Text, Box, Heading, Button, theme } from '../src'

const Wrapper = props => (
  <Box p="12px" my="6px">
    <Heading.h6 mb="12px">{props.title}</Heading.h6>
    {props.children}
  </Box>
)

const formAction = e => {
  e.preventDefault()
  action('form was submitted, is checkbox checked?')(
    e.target[1].value,
    e.target[1].checked
  )
}

storiesOf('Checkbox', module).add('Checkbox states', () => (
  <div>
    <Wrapper title="Default">
      <Checkbox
        name="default_box"
        value="someValue"
        onClick={action('checkbox-clicked')}
      />
    </Wrapper>

    <Wrapper title="Pre Checked">
      <Checkbox
        name="pre_checked_box"
        value="someValue"
        defaultChecked={true}
        onClick={action('checkbox-clicked')}
      />
    </Wrapper>

    <Wrapper title="With a label">
      <Checkbox
        name="labeled_box"
        value="someValue"
        onClick={action('checkbox-clicked')}
      >
        <Text.p p="8px" m="0" fontSize={14} style={{ display: 'inline-block' }}>
          Some Clickable Label
        </Text.p>
      </Checkbox>
    </Wrapper>

    <Wrapper title="Disabled">
      <Checkbox
        name="disabled_box"
        disabled={true}
        onClick={action('checkbox-clicked')}
      />
    </Wrapper>

    <Wrapper title="Disabled and checked">
      <Checkbox
        name="disabled_checked_box"
        disabled={true}
        checked={true}
        onClick={action('checkbox-clicked')}
      />
    </Wrapper>

    <Wrapper title="Disabled with Label">
      <Checkbox
        name="disabled_labeled_checked_box"
        disabled={true}
        checked={true}
        onClick={action('checkbox-clicked')}
      >
        <Text.p p="8px" m="0" fontSize={14} style={{ display: 'inline-block' }}>
          Some Disabled Label
        </Text.p>
      </Checkbox>
    </Wrapper>

    <Wrapper title="In A Form">
      <form onSubmit={e => formAction(e)}>
        <fieldset style={{ display: 'inline-block', padding: '16px' }}>
          <legend>Fancy Form</legend>
          <Box>
            <Checkbox
              name="form_checkbox"
              value="someValue"
              onClick={action('checkbox-clicked')}
            >
              <Text.p
                p="8px"
                m="0"
                fontSize={14}
                style={{ display: 'inline-block' }}
              >
                Vote For Me
              </Text.p>
            </Checkbox>
          </Box>

          <Button type="submit">Submit Me</Button>
        </fieldset>
      </form>
    </Wrapper>
  </div>
))
