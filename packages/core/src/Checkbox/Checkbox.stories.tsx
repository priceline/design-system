/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'

import { Checkbox, Text, Box, Heading, Button, Label } from '..'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

const StyledLabel = styled(Label)`
  cursor: pointer;
  font-size: 12px;
  vertical-align: middle;
`

const Wrapper = (props) => (
  <Box p='12px' my='6px' fontSize='12px'>
    {props.title ? <Heading.h6 mb='12px'>{props.title}</Heading.h6> : null}
    {props.children}
  </Box>
)

const formAction = (e) => {
  e.preventDefault()
  action('form was submitted, is checkbox checked?')(e.target[1].id, e.target[1].checked)
}

const checkAction = (e) => {
  action(`${e.target.id} was clicked`)(e.target.value, e.target.checked)
}

export default {
  title: 'Checkbox',
  component: Checkbox,
}

function onSubmit(e) {
  return formAction(e)
}

const FilterExample: React.FC = () => {
  const [filterState, setFilterState] = useState({
    all: false,
    indeterminate: false,
    small: false,
    medium: false,
    large: false,
  })

  const handleFilterSelection = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const target = event.target
    if (target.id === 'all') {
      if (filterState.all || filterState.indeterminate) {
        setFilterState({
          all: false,
          indeterminate: false,
          small: false,
          medium: false,
          large: false,
        })
      } else {
        setFilterState({
          all: true,
          indeterminate: false,
          small: true,
          medium: true,
          large: true,
        })
      }
    } else {
      const newFilterState = { ...filterState, [target.id]: !filterState[target.id] }
      const indeterminate = !(
        newFilterState.small === newFilterState.medium && newFilterState.small === newFilterState.large
      )
      const all = newFilterState.small && newFilterState.medium && newFilterState.large
      setFilterState({
        ...filterState,
        [target.id]: !filterState[target.id],
        indeterminate,
        all,
      })
    }
  }
  return (
    <>
      <Wrapper>
        <StyledLabel htmlFor='all'>
          <Checkbox
            id='all'
            onChange={handleFilterSelection}
            indeterminate={filterState.indeterminate}
            checked={filterState.all}
          />
          Cars
        </StyledLabel>
        <Box ml={2}>
          <StyledLabel htmlFor='small'>
            <Checkbox id='small' onChange={handleFilterSelection} checked={filterState.small} />
            Small
          </StyledLabel>
          <StyledLabel htmlFor='medium'>
            <Checkbox id='medium' onChange={handleFilterSelection} checked={filterState.medium} />
            Medium
          </StyledLabel>
          <StyledLabel htmlFor='large'>
            <Checkbox id='large' onChange={handleFilterSelection} checked={filterState.large} />
            Large
          </StyledLabel>
        </Box>
      </Wrapper>
    </>
  )
}

export const CheckboxStates = () => {
  return (
    <div>
      <Wrapper>
        <StyledLabel htmlFor='unchecked_box'>
          <Checkbox id='unchecked_box' onChange={checkAction} />
          Unchecked by default
        </StyledLabel>
      </Wrapper>

      <Wrapper>
        <StyledLabel htmlFor='checked_box'>
          <Checkbox id='checked_box' defaultChecked onChange={checkAction} />
          Checked by default
        </StyledLabel>
      </Wrapper>

      <Wrapper>
        <StyledLabel htmlFor='disabled_box'>
          <Checkbox id='disabled_box' disabled onChange={checkAction} />
          <Text.span color='border.base'>Disabled</Text.span>
        </StyledLabel>
      </Wrapper>

      <Wrapper>
        <StyledLabel htmlFor='disabled_checked_box'>
          <Checkbox id='disabled_checked_box' disabled defaultChecked onChange={checkAction} />
          <Text.span color='border.base'>Disabled &amp; Checked</Text.span>
        </StyledLabel>
      </Wrapper>

      <Wrapper>
        <StyledLabel htmlFor='indeterminate_box'>
          <Checkbox id='indeterminate_box' indeterminate onChange={checkAction} />
          Initially indeterminate check box (clicking will checkmark it)
        </StyledLabel>
      </Wrapper>

      <Wrapper>
        <StyledLabel htmlFor='indeterminate_checked_box'>
          <Checkbox id='indeterminate_checked_box' defaultChecked indeterminate onChange={checkAction} />
          Initially indeterminate check box (clicking will uncheck it)
        </StyledLabel>
      </Wrapper>

      <Wrapper title='Indeterminate Checkboxes'>
        <FilterExample />
      </Wrapper>

      <Wrapper title='In A Form'>
        <form onSubmit={onSubmit}>
          <fieldset style={{ display: 'inline-block', padding: '16px' }}>
            <legend>Fancy Form</legend>

            <Wrapper>
              <StyledLabel fontSize='14px' htmlFor='form_checkbox'>
                <Checkbox id='form_checkbox' size={30} onChange={checkAction} />
                &nbsp;In This Form
              </StyledLabel>
            </Wrapper>

            <Button type='submit'>Submit Me</Button>
            <br />
            <br />
            <Button variation='outline' color='border.base' type='reset'>
              Reset Me
            </Button>
          </fieldset>
        </form>
      </Wrapper>
    </div>
  )
}

CheckboxStates.story = {
  name: 'Checkbox states',
}

export const Color = () => (
  <div>
    <Wrapper>
      <StyledLabel htmlFor='secondary_unchecked_box'>
        <Checkbox id='secondary_unchecked_box' onChange={checkAction} color='secondary' />
        Secondary color unchecked by default
      </StyledLabel>
      <StyledLabel htmlFor='secondary_checked_box'>
        <Checkbox id='secondary_checked_box' defaultChecked onChange={checkAction} color='secondary' />
        Secondary color checked by default
      </StyledLabel>
      <StyledLabel htmlFor='secondary_disabled_box'>
        <Checkbox id='secondary_disabled_box' disabled onChange={checkAction} color='secondary' />
        Secondary color disabled
      </StyledLabel>
    </Wrapper>
    <Wrapper>
      <StyledLabel htmlFor='error_unchecked_box'>
        <Checkbox id='error_unchecked_box' onChange={checkAction} color='error' />
        Error color unchecked by default
      </StyledLabel>
      <StyledLabel htmlFor='error_checked_box'>
        <Checkbox id='error_checked_box' defaultChecked onChange={checkAction} color='error' />
        Error color checked by default
      </StyledLabel>
      <StyledLabel htmlFor='error_disabled_box'>
        <Checkbox id='error_disabled_box' disabled onChange={checkAction} color='error' />
        Error color disabled
      </StyledLabel>
    </Wrapper>
  </div>
)

Color.story = {
  name: 'color',
}

export function ForwardRefs() {
  function refChild(dsRef) {
    function onClick() {
      return dsRef.current.focus()
    }
    return (
      <>
        {/*
          This example is for SC3
            <Button dsRef={e => this.btnRef = e}>Click me</Button>
        */}
        <StyledLabel htmlFor='check'>
          <Checkbox id='check' ref={dsRef} />
          Checkbox with ref
        </StyledLabel>
        <Button onClick={onClick} mt={4}>
          Click to focus checkbox via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}

ForwardRefs.story = {
  name: 'Forward refs',
}
