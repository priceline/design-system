import React from 'react'
import styled from 'styled-components'
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuLink
} from '@reach/menu-button'
import { color, height, themeGet, width } from 'styled-system'

const DropdownContext = React.createContext({
  identifier: 'dropdown'
})

const Dropdown = props => (
  <DropdownContext.Provider
    value={{
      identifier: props.identifier
    }}
  >
    <Menu>{props.children}</Menu>
  </DropdownContext.Provider>
)

const commonStyle = `
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`

const DropdownButtonCore = styled(MenuButton)`
  ${color} ${height} ${width} ${commonStyle};
  padding: 12px;
  text-align: left;
  font-family: ${themeGet('font')};
`

const DropdownButton = props => (
  <DropdownContext.Consumer>
    {({ identifier }) => (
      <DropdownButtonCore
        id={identifier}
        color={props.color}
        height={props.height}
        width={props.width}
      >
        {props.children}
      </DropdownButtonCore>
    )}
  </DropdownContext.Consumer>
)

const DropdownListCore = styled(MenuList)`
  ${color} ${height} ${width};
  ${commonStyle};
  position: absolute;
  top: ${props => props.offsetBottom}px;
  left: ${props => props.offsetLeft}px;
  margin-top: 8px;
  padding: 4px;
  box-shadow: rgba(0, 0, 0, 0.08) 0 0 2px 0, rgba(0, 0, 0, 0.16) 0 2px 8px 0;
  font-family: ${themeGet('font')};
  [data-reach-menu-item][data-selected] {
    background: ${themeGet('colors.blue')};
    color: ${themeGet('colors.white')};
  }
`

class DropdownListImpl extends React.Component {
  state = {
    dropdownButtonOffsetBottom: 0,
    dropdownButtonOffsetLeft: 0
  }

  componentDidMount() {
    const dropdownButton = document.getElementById(this.props.identifier)
    if (dropdownButton) {
      const dropdownButtonOffsetBottom =
        dropdownButton.offsetTop + dropdownButton.offsetHeight

      this.setState({
        dropdownButtonOffsetBottom: dropdownButtonOffsetBottom,
        dropdownButtonOffsetLeft: dropdownButton.offsetLeft
      })
    }
  }

  render() {
    return (
      <DropdownListCore
        identifier={this.props.identifier}
        offsetLeft={this.state.dropdownButtonOffsetLeft}
        offsetBottom={this.state.dropdownButtonOffsetBottom}
        color={this.props.color}
        height={this.props.height}
        width={this.props.width}
      >
        {this.props.children}
      </DropdownListCore>
    )
  }
}

const DropdownList = props => (
  <DropdownContext.Consumer>
    {({ identifier }) => (
      <DropdownListImpl {...props} identifier={identifier} />
    )}
  </DropdownContext.Consumer>
)

const DropdownItem = styled(MenuItem)`
  ${color} ${height} ${width} ${commonStyle};
  padding: 8px;
`

const DropdownLink = styled(MenuLink)`
  ${color} ${height} ${width} ${commonStyle};
  display: block;
  padding: 8px;
  text-decoration: none;
`

export { Dropdown, DropdownButton, DropdownList, DropdownItem, DropdownLink }
