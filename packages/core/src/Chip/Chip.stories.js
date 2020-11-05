import React, { useState } from 'react'
import Chip from './Chip'
import { Breakfast, Parking, Whirlpool, Wifi } from 'pcln-icons'

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const toggle = () => setValue(!value)

  return [value, toggle]
}

export const Choice = () => (
  <Chip variation='choice'>
    <Wifi mr={2} /> Free Wifi
  </Chip>
)

export const ChoiceSelected = () => (
  <Chip selected variation='choice'>
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
        selected={breakfastSelected}
        variation='choice'
        onClick={onBreakfastClick}
        m={2}
      >
        <Breakfast mr={2} />
        Free Breakfast
      </Chip>
      <Chip
        selected={parkingSelected}
        variation='choice'
        onClick={onParkingSelected}
        m={2}
      >
        <Parking mr={2} />
        Free Parking
      </Chip>
      <Chip
        selected={wifiSelected}
        variation='choice'
        onClick={onWifiSelected}
        m={2}
      >
        <Wifi mr={2} />
        Free Wifi
      </Chip>
      <Chip variation='choice' disabled m={2}>
        <Whirlpool mr={2} /> Free Whirlpool
      </Chip>
    </>
  )
}

export const Filter = () => (
  <Chip variation='filter'>
    <Wifi mr={2} /> Free Wifi
  </Chip>
)

export const FilterSelected = () => (
  <Chip selected variation='filter'>
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
        selected={breakfastSelected}
        variation='filter'
        onClick={toggleBreakfastSelected}
        m={2}
      >
        <Breakfast mr={2} />
        Free Breakfast
      </Chip>
      <Chip
        selected={parkingSelected}
        variation='filter'
        onClick={toggleParkingSelected}
        m={2}
      >
        <Parking mr={2} />
        Free Parking
      </Chip>
      <Chip
        selected={wifiSelected}
        variation='filter'
        onClick={toggleWifiSelected}
        m={2}
      >
        <Wifi mr={2} />
        Free Wifi
      </Chip>
      <Chip variation='filter' disabled m={2}>
        <Whirlpool mr={2} /> Free Whirlpool
      </Chip>
    </>
  )
}

export const Input = () => (
  <Chip variation='input'>
    <Wifi mr={2} /> Free Wifi
  </Chip>
)

export const InputSelected = () => (
  <Chip variation='input' selected>
    <Wifi mr={2} /> Free Wifi
  </Chip>
)

export const InputWithState = () => {
  const [breakfastEnabled, toggleBreakfast] = useToggle(true)
  const [parkingEnabled, toggleParking] = useToggle(true)
  const [wifiEnabled, toggleWifi] = useToggle(true)

  return (
    <>
      {breakfastEnabled && (
        <Chip selected variation='input' onClick={toggleBreakfast} m={2}>
          <Breakfast mr={2} />
          Free Breakfast
        </Chip>
      )}
      {parkingEnabled && (
        <Chip selected variation='input' onClick={toggleParking} m={2}>
          <Parking mr={2} />
          Free Parking
        </Chip>
      )}
      {wifiEnabled && (
        <Chip selected variation='input' onClick={toggleWifi} m={2}>
          <Wifi mr={2} />
          Free Wifi
        </Chip>
      )}
      <Chip variation='input' disabled m={2}>
        <Whirlpool mr={2} /> Free Whirlpool
      </Chip>
    </>
  )
}

export const Disabled = () => (
  <Chip disabled>
    <Wifi mr={2} /> Free Wifi
  </Chip>
)

export default {
  title: 'Chip',
  component: Chip,
}
