import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Swipeable from 'react-swipeable'
import { Box, Flex, Relative } from 'pcln-design-system'
import styled from 'styled-components'
import ArrowController from './ArrowController'

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: this.props.children,
      internalCurrentItemIndex: this.props.currentItemIndex || 0,
      currentItemTranslate: 0,
      isSwiping: false
    }

    this.handleSwipingLeft = this.handleSwipingLeft.bind(this)
    this.handleSwipingRight = this.handleSwipingRight.bind(this)
    this.handleSwipedLeft = this.handleSwipedLeft.bind(this)
    this.handleSwipedRight = this.handleSwipedRight.bind(this)
    this.updateSelectedItem = this.updateSelectedItem.bind(this)
    this.mapItems = this.mapItems.bind(this)
    this.mapDots = this.mapDots.bind(this)
  }

  handleSwipingLeft(e, absX) {
    const swipedPercentage = (absX / window.innerWidth) * 100
    const swipeLeft = swipedPercentage <= 100 ? swipedPercentage : 100
    this.setState(previousState => ({
      currentItemTranslate: 0 - swipeLeft,
      isSwiping: true
    }))
  }

  handleSwipingRight(e, absX) {
    const swipedPercentage = (absX / window.innerWidth) * 100
    const swipeRight = swipedPercentage <= 100 ? swipedPercentage : 100
    this.setState(previousState => ({
      currentItemTranslate: 0 + swipeRight,
      isSwiping: true
    }))
  }

  handleSwipedLeft(e, absX) {
    const index =
      this.props.currentItemIndex || this.state.internalCurrentItemIndex
    const nextItemIndex = (index + 1) % this.state.items.length

    this.setState({
      internalCurrentItemIndex: nextItemIndex,
      currentItemTranslate: 0,
      isSwiping: false
    })
  }

  handleSwipedRight(e, absX) {
    const index =
      this.props.currentItemIndex || this.state.internalCurrentItemIndex
    const previousItemIndex =
      (index + this.state.items.length - 1) % this.state.items.length

    this.setState({
      internalCurrentItemIndex: previousItemIndex,
      currentItemTranslate: 0,
      isSwiping: false
    })
  }

  updateSelectedItem(selectedItemIndex) {
    this.setState({
      internalCurrentItemIndex: selectedItemIndex
    })
  }

  mapItems() {
    const { items } = this.state

    const currentItemIndex =
      this.props.currentItemIndex || this.state.internalCurrentItemIndex

    const itemsToShow = []
    items.forEach((item, index) => {
      if (index <= currentItemIndex + 2) {
        itemsToShow.push(
          <span key={`item-${index}`}>
            <PositionItem>{item}</PositionItem>
          </span>
        )
      }
    })

    return itemsToShow
  }

  mapDots() {
    const currentItemIndex =
      this.props.currentItemIndex || this.state.internalCurrentItemIndex

    return this.state.items.map((item, mapIndex) => (
      <Dot
        key={mapIndex}
        mx={2}
        mt={2}
        bg={mapIndex === currentItemIndex ? 'blue' : 'borderGray'}
        onClick={this.updateSelectedItem.bind(this, mapIndex)}
      />
    ))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.children
    })
  }

  render() {
    const { currentItemTranslate, isSwiping } = this.state

    const { shouldShowArrows } = this.props

    const currentItemIndex =
      this.props.currentItemIndex || this.state.internalCurrentItemIndex

    return (
      <Box {...this.props}>
        <OverflowContainer w={1} mb={3}>
          {shouldShowArrows && (
            <div>
              <PositionedArrowLeftController
                handleClick={this.handleSwipedRight}
                iconDirection="chevronLeft"
              />
              <PositionedArrowRightController
                handleClick={this.handleSwipedLeft}
                iconDirection="chevronRight"
              />
            </div>
          )}
          <Swipeable
            onSwipingLeft={this.handleSwipingLeft}
            onSwipingRight={this.handleSwipingRight}
            onSwipedLeft={this.handleSwipedLeft}
            onSwipedRight={this.handleSwipedRight}
            trackMouse
          >
            <SwiperWrap
              translateX={-92 * currentItemIndex + currentItemTranslate + 4}
              isSwiping={isSwiping}
            >
              {this.mapItems()}
            </SwiperWrap>
          </Swipeable>
        </OverflowContainer>
        <Flex wrap justify="center">
          {this.mapDots()}
        </Flex>
      </Box>
    )
  }
}

const OverflowContainer = styled(Relative)`
  overflow: hidden;
`

const Dot = styled(Box)`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  cursor: pointer;
`

Dot.displayName = 'Dot'

const PositionedArrowLeftController = styled(ArrowController)`
  position: absolute;
  top: 38%;
  z-index: 1;
`

const PositionedArrowRightController = styled(PositionedArrowLeftController)`
  right: 0;
`

const SwiperWrap = styled.div`
  transition-property: all;
  transition-duration: ${props => (props.isSwiping ? '0s' : '0.25s')};
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0;
  white-space: nowrap;
  transform: ${props => `translate(${props.translateX}%, 0)`};
`

const PositionItem = styled(Box)`
  display: inline-flex;
  width: 92%;
  object-fit: contain;

  transition: opacity 0.3s ease 0s;
  user-select: none;
  * {
    user-drag: none;
  }

  > * {
    width: 100%;
    white-space: normal;
  }
`

// Carousel.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.node).isRequired,
//   currentItemIndex: PropTypes.number,
//   shouldShowArrows: PropTypes.bool
// }

Carousel.defaultProps = {
  children: []
}

export default Carousel
