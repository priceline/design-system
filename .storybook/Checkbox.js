import React from 'react'
import styled from 'styled-components'
import { storiesOf, action } from '@storybook/react'
import { Checkbox } from '../src'

const checkActionFn = (name, value, isChecked) => {
  console.log('Checkbox Arguments', name, value, isChecked)
}

storiesOf('Checkbox', module).add('Checkbox states', () => (
  <div>
    <section>
      <h4>Checkbox</h4>
      <Checkbox
        name="default_box"
        value="someValue"
        checkAction={checkActionFn}
      />
    </section>

    <section>
      <h4>Checkbox - pre-checked</h4>
      <Checkbox
        name="default_box"
        value="someValue"
        isChecked={true}
        checkAction={checkActionFn}
        borderWidth={1}
      />
    </section>

    <section>
      <h4>Disabled (cannot change)</h4>
      <Checkbox
        name="disabled_box"
        isDisabled={true}
        checkAction={checkActionFn}
      />
    </section>

    <section>
      <h4>Disabled & Checked (cannot change)</h4>
      <Checkbox
        name="disabled_checked_box"
        isDisabled={true}
        isChecked={true}
        checkAction={checkActionFn}
      />
    </section>
  </div>
))
