import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Box, Text, Button, Flex, getPaletteColor } from '..'
import { Check } from 'pcln-icons'

const PRODUCTS = ['hotels', 'cars', 'flights', 'vacations', 'cruises'] as const

type ProductType = (typeof PRODUCTS)[number]

type QueryString = Record<string, string | string[] | undefined>

type ProductTabType = {
  autobotID: string
  name: string
  tabText: string
  id: ProductType
  query: QueryString
}

const PRODUCT_TABS = [
  {
    autobotID: 'DASH_TAB_HOTELS',
    name: 'HOTELS',
    tabText: 'Hotels',
    id: 'hotels',
    query: { tab: 'hotels' },
  },
  {
    autobotID: 'DASH_TAB_FLIGHTS',
    name: 'FLIGHTS',
    tabText: 'Flights',
    id: 'flights',
    query: { tab: 'flights' },
  },
  {
    autobotID: 'DASH_TAB_HOTEL + FLIGHT',
    name: 'BUNDLE + SAVE',
    tabText: 'Bundle & Save',
    id: 'vacations',
    query: { tab: 'vacations' },
  },
  {
    autobotID: 'DASH_TAB_CARS',
    name: 'CARS',
    tabText: 'Cars',
    id: 'cars',
    query: { tab: 'cars' },
  },
  {
    autobotID: 'DASH_TAB_CRUISES',
    name: 'CRUISES',
    tabText: 'Cruises',
    id: 'cruises',
    query: { tab: 'cruises' },
  },
] as const

const Wrapper = styled(Flex)`
  position: relative;
`
const IconWrapper = styled(Flex)<{ isActive: boolean }>`
  background: ${(props) => (props.isActive ? 'transparent' : getPaletteColor('background.base'))};
`

const TabWithIcon = styled(Button)<{ highlightTab: boolean }>`
  &:hover {
    text-decoration: none;
  }
  z-index: 1;
  position: relative;
  border: 2px solid ${(props) => (props.highlightTab ? getPaletteColor('primary.base') : 'transparent')};
  background-color: ${(props) => (props.highlightTab ? getPaletteColor('primary.light') : 'transparent')};
  &:hover ${IconWrapper} {
    border: 1px solid ${(props) => (props.isActive ? 'transparent' : getPaletteColor('primary.base'))};
  }
`

const Slider = styled(Button)<{ showSlider: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 44px;
  z-index: 0;
  border: 2px solid ${(props) => (props.showSlider ? getPaletteColor('primary.base') : 'transparent')};
  background-color: ${(props) => (props.showSlider ? getPaletteColor('primary.light') : 'transparent')};
  transition: margin-left 0.4s ease-in-out, width 0.4s ease-in-out;
`

const BrokenButton = () => {
  const [activeTab, setActiveTab] = useState('hotels')
  const [hoveredTab, setHoverTab] = useState('')
  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderOffset, setSliderOffset] = useState(0)
  const [showSlider, setShowSlider] = useState(false)
  const [highlightTab, setHighlightTab] = useState(false)
  useEffect(() => {
    const currentTab = typeof activeTab === 'string' ? activeTab : 'hotels'
    const currentTabElement = document.getElementById(`tab-${currentTab}`)
    if (currentTabElement) {
      setSliderOffset(currentTabElement.offsetLeft)
      setSliderWidth(currentTabElement.offsetWidth)
    }
  }, [activeTab])

  const handleOnClick = (tab: ProductTabType) => {
    setActiveTab(tab.id)
  }
  return (
    <Wrapper role='tablist' aria-label='Types of travel' mx={3}>
      <Slider
        id='slider'
        role='tab'
        my='auto'
        tabIndex={-1}
        aria-hidden='true'
        ml={sliderOffset}
        width={sliderWidth}
        borderRadius='full'
        variation='link'
        showSlider={showSlider}
        onTransitionEnd={() => {
          setShowSlider(false)
          setHighlightTab(true)
        }}
      />
      {PRODUCT_TABS.map((tab) => {
        const isActive = tab.id === activeTab
        const isHoveredTab = tab.id === hoveredTab
        return (
          <TabWithIcon
            mr={[0, null, null, 3]}
            width={[1, null, null, 'auto']}
            key={tab.id}
            color={getPaletteColor('primary.base')}
            variation='link'
            role='tab'
            pr={[2, null, null, 3]}
            borderRadius='full'
            isActive={isActive}
            highlightTab={isActive && highlightTab}
            aria-selected={isActive}
            aria-label={`Search for ${tab.id}`}
            id={`tab-${tab.id}`}
            data-testid={tab.autobotID}
            onMouseEnter={() => setHoverTab(tab.id)}
            onMouseLeave={() => setHoverTab('')}
            onClick={() => {
              if (!isActive) {
                handleOnClick(tab)
                setShowSlider(true)
                setHighlightTab(false)
              }
            }}
          >
            <Flex alignItems='center' justifyContent='center'>
              <Box display={['none', null, 'block']}>
                <IconWrapper
                  isActive={isActive}
                  alignItems='center'
                  justifyContent='center'
                  pt='2px'
                  borderRadius='50%'
                  width={40}
                  height={40}
                  bg='background'
                >
                  <Check name={tab.id} isActive={isActive || isHoveredTab} size='24px' />
                </IconWrapper>
              </Box>
              <Text ml={2} mb='2px' fontSize={1} fontWeight={isActive ? 'bold' : 100}>
                {tab.tabText}
              </Text>
            </Flex>
          </TabWithIcon>
        )
      })}
    </Wrapper>
  )
}

export default BrokenButton
