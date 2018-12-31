import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Dropdown,
  DropdownButton,
  DropdownList,
  DropdownItem,
  DropdownLink
} from '../src'
import { Box } from 'pcln-design-system'

class DropdownControlledOne extends React.Component {
  state = {
    selected: 'List Item One'
  }

  render() {
    return (
      <Dropdown identifier="dropdown-controlled-a">
        <DropdownButton width={140} height={40}>
          {this.state.selected}
        </DropdownButton>
        <DropdownList width={140}>
          <DropdownItem
            onSelect={() => this.setState({ selected: 'List Item One' })}
          >
            List Item One
          </DropdownItem>
          <DropdownItem
            onSelect={() => this.setState({ selected: 'List Item Two' })}
          >
            List Item Two
          </DropdownItem>
          <DropdownItem
            onSelect={() => this.setState({ selected: 'List Item Three' })}
          >
            List Item Three
          </DropdownItem>
          <DropdownItem
            onSelect={() => this.setState({ selected: 'List Item Four' })}
          >
            List Item Four
          </DropdownItem>
        </DropdownList>
      </Dropdown>
    )
  }
}

class DropdownControlledTwo extends React.Component {
  state = {
    selected: 'Ein'
  }

  render() {
    return (
      <Dropdown identifier="dropdown-b">
        <DropdownButton width={200} height={40}>
          {this.state.selected}
        </DropdownButton>
        <DropdownList width={200}>
          <DropdownLink
            component="a"
            href="https://en.wikipedia.org/wiki/German_language"
            target="_blank"
          >
            Deutsche Sprache/ German Language
          </DropdownLink>
          <DropdownItem onSelect={() => this.setState({ selected: 'Ein' })}>
            Ein
          </DropdownItem>
          <DropdownItem onSelect={() => this.setState({ selected: 'Zwei' })}>
            Zwei
          </DropdownItem>
          <DropdownItem onSelect={() => this.setState({ selected: 'Drei' })}>
            Drei
          </DropdownItem>
          <DropdownItem onSelect={() => this.setState({ selected: 'Vier' })}>
            Vier
          </DropdownItem>
          <DropdownItem onSelect={() => this.setState({ selected: 'Fünf' })}>
            Fünf
          </DropdownItem>
        </DropdownList>
      </Dropdown>
    )
  }
}

storiesOf('Dropdown', module)
  .add('Single Uncontrolled', () => (
    <Dropdown identifier="dropdown-1">
      <DropdownButton width={240} height={40}>
        Uncontrolled Dropdown
      </DropdownButton>
      <DropdownList width={240}>
        <DropdownLink component="a" href="https://reactjs.org" target="_blank">
          Official React Site
        </DropdownLink>
        <DropdownItem
          onSelect={() => alert('List Item One')}
          width={240}
          height={40}
        >
          List Item One
        </DropdownItem>
        <DropdownItem
          onSelect={() => alert('List Item Two')}
          width={240}
          height={40}
        >
          List Item Two
        </DropdownItem>
        <DropdownItem
          onSelect={() => alert('List Item Three')}
          width={240}
          height={40}
        >
          List Item Three
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  ))
  .add('Multiple Controlled', () => [
    <Box ml={50}>
      <DropdownControlledOne />
    </Box>,
    <Box ml={350}>
      <DropdownControlledTwo />
    </Box>
  ])
