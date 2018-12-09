import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Text } from 'pcln-design-system'
import styled from 'styled-components'

const TabTitle = styled(Text)`
  border-bottom: ${props =>
    props.isActive ? `4px solid ${props.activeColor}` : 'none'};
  cursor: pointer;
`

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 0
    }
  }

  render() {
    const { activeColor, children, defaultColor, tabs } = this.props

    return (
      <React.Fragment>
        <Flex bg="lightGray" px={1} pt={2}>
          {tabs.map((tab, i) => (
            <TabTitle
              color={this.state.activeTab === i ? activeColor : defaultColor}
              key={i}
              mx={3}
              py={2}
              onClick={() => this.setState({ activeTab: i })}
              isActive={this.state.activeTab === i}
              {...this.props}
            >
              {tab.title}
            </TabTitle>
          ))}
        </Flex>
        <Flex bg="white" py={3} px={3}>
          {children[this.state.activeTab]}
        </Flex>
      </React.Fragment>
    )
  }
}

Tabs.defaultProps = {
  tabs: []
}

Tabs.propTypes = {
  activeColor: PropTypes.string,
  defaultColor: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Tabs
