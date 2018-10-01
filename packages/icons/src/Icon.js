import React from 'react'
import upperFirst from 'lodash.upperfirst'
import * as icons from './icons'

export const aliases = {
  ac: 'AcUnit',
  arrival: 'FlightLand',
  arrowDown: 'ArrowDownward',
  arrowUp: 'ArrowUpward',
  arrowLeft: 'ArrowBack',
  arrowRight: 'ArrowForward',
  attention: 'Warning',
  beach: 'BeachAccess',
  bed: 'Hotel',
  boxChecked: 'CheckBox',
  boxEmpty: 'CheckBoxOutlineBlank',
  boxMinus: 'XX',
  boxPlus: 'XX',
  breakfast: 'FreeBreakfast',
  calendar: 'DateRange',
  carriage: 'ChildFriendly',
  cars: 'DirectionsCar',
  chart: 'XX',
  chevronDown: 'KeyboardArrowDown',
  chevronUp: 'KeyboardArrowUp',
  cityView: 'XX',
  clock: 'XX',
  cloud: 'XX',
  coupon: 'XX',
  departure: 'FlightTakeoff',
  document: 'XX',
  dollar: 'XX',
  dollarCircle: 'XX',
  earlyBird: 'XX',
  edit: 'XX',
  electric: 'XX',
  filter: 'XX',
  fitness: 'FitnessCenter',
  flame: 'Whatshot',
  flights: 'Flight',
  freeCancellation: 'XX',
  gallery: 'XX',
  gas: 'XX',
  globe: 'XX',
  gps: 'GpxFixed',
  graph: 'XX',
  grid: 'XX',
  hotels: 'Business',
  inclusive: 'XX',
  information: 'XX',
  informationOutline: 'XX',
  key: 'XX',
  loyalty: 'XX',
  luggage: 'XX',
  manual: 'XX',
  minus: 'XX',
  parking: 'LocalParking',
  phone: 'XX',
  picture: 'XX',
  pin: 'LocationOn',
  plus: 'XX',
  printer: 'Print',
  quilt: 'XX',
  radioChecked: 'RadioButtonChecked',
  radioEmpty: 'RadioButtonUnchecked',
  radioMinus: 'XX',
  radioPlus: 'XX',
  searchRecent: 'XX',
  seat: 'XX',
  seatBusiness: 'XX',
  seatEconomy: 'XX',
  shuttle: 'XX',
  smoking: 'SmokeFree',
  success: 'XX',
  swap: 'XX',
  user: 'XX',
  verified: 'XX',
  warning: 'XX',
  warningOutline: 'XX',
  whirlpool: 'XX',
  zoomOut: 'XX'
}

const Icon = ({ name, ...props }) => {
  const key = upperFirst(name)
  const Component = icons[name] || icons[key] || icons[aliases[name]]
  if (!Component) return false
  return <Component {...props} />
}

Icon.displayName = 'Icon'

export default Icon
