import React, { useState } from 'react'
import Chip from './Chip'
import { Breakfast, Check, Parking, Whirlpool, Wifi } from 'pcln-icons'

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const toggle = () => setValue(!value)

  return [value, toggle]
}

export const Choice = () => (
  <Chip id='chip' variation='choice'>
    <Wifi mr={2} /> Free Wifi
  </Chip>
)

export const ChoiceSelected = () => (
  <Chip id='chip' selected variation='choice'>
    <Wifi mr={2} /> Free Wifi
  </Chip>
)

export const ChoiceWithState = () => {
  const [breakfastSelected, setBreakfastSelected] = useState(true)
  const [parkingSelected, setParkingSelected] = useState(false)
  const [wifiSelected, setWifiSelected] = useState(false)

  const onBreakfastClick = () => {
    setBreakfastSelected(true)
    setParkingSelected(false)
    setWifiSelected(false)
  }

  const onParkingSelected = () => {
    setBreakfastSelected(false)
    setParkingSelected(true)
    setWifiSelected(false)
  }

  const onWifiSelected = () => {
    setBreakfastSelected(false)
    setParkingSelected(false)
    setWifiSelected(true)
  }

  return (
    <>
      <Chip
        id='chip1'
        selected={breakfastSelected}
        variation='choice'
        onClick={onBreakfastClick}
        m={2}
      >
        <Breakfast mr={2} />
        Free Breakfast
      </Chip>
      <Chip
        id='chip2'
        selected={parkingSelected}
        variation='choice'
        onClick={onParkingSelected}
        m={2}
      >
        <Parking mr={2} />
        Free Parking
      </Chip>
      <Chip
        id='chip3'
        selected={wifiSelected}
        variation='choice'
        onClick={onWifiSelected}
        m={2}
      >
        <Wifi mr={2} />
        Free Wifi
      </Chip>
      <Chip id='chip4' variation='choice' disabled m={2}>
        <Whirlpool mr={2} /> Free Whirlpool
      </Chip>
    </>
  )
}

export const Filter = () => (
  <Chip id='chip' variation='filter'>
    <Wifi mr={2} /> Free Wifi
  </Chip>
)

export const FilterSelected = () => (
  <Chip id='chip' selected variation='filter'>
    <Wifi mr={2} /> Free Wifi
  </Chip>
)

export const FilterWithSelectedIcon = () => (
  <Chip id='chip' selected variation='filter' selectedIcon={Check}>
    <Wifi mr={2} /> Free Wifi
  </Chip>
)

export const FilterWithState = () => {
  const [breakfastSelected, toggleBreakfastSelected] = useToggle(true)
  const [parkingSelected, toggleParkingSelected] = useToggle(false)
  const [wifiSelected, toggleWifiSelected] = useToggle(false)

  return (
    <>
      <Chip
        id='chip1'
        selected={breakfastSelected}
        variation='filter'
        onClick={toggleBreakfastSelected}
        m={2}
      >
        <Breakfast mr={2} />
        Free Breakfast
      </Chip>
      <Chip
        id='chip2'
        selected={parkingSelected}
        variation='filter'
        onClick={toggleParkingSelected}
        m={2}
      >
        <Parking mr={2} />
        Free Parking
      </Chip>
      <Chip
        id='chip3'
        selected={wifiSelected}
        variation='filter'
        onClick={toggleWifiSelected}
        m={2}
      >
        <Wifi mr={2} />
        Free Wifi
      </Chip>
      <Chip chip='chip4' variation='filter' disabled m={2}>
        <Whirlpool mr={2} /> Free Whirlpool
      </Chip>
    </>
  )
}

export const Disabled = () => (
  <Chip id='chip' disabled>
    <Wifi mr={2} /> Free Wifi
  </Chip>
)

export default {
  title: 'Chip',
  component: Chip,
}
