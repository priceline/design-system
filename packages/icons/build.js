#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const readdir = require('recursive-readdir')
const camelCase = require('lodash.camelcase')
const upperFirst = require('lodash.upperfirst')
const uniqBy = require('lodash.uniqby')

const mdPkg = path.join(__dirname, './node_modules/material-design-icons')
const pclnSVGs = path.join(__dirname, './svg/custom')
const mdOutDir = path.join(__dirname, './svg/material-design')

const ignore = (file, stats) => {
  if (stats.isDirectory()) return false
  // ignore svg/design directories
  if (file === 'design') return true
  return !/\.svg$/.test(file)
}

const is24px = filename => /24px.svg$/.test(filename)

const rename = filename =>
  path
    .basename(filename, path.extname(filename))
    .replace(/^ic_/, '')
    .replace(/_24px$/, '')
    .replace(/^3d/, 'three-d') // remove number from beginning

const readFile = filename => {
  const content = fs.readFileSync(filename, 'utf8')
  const name = rename(filename)
  const capitalName = upperFirst(camelCase(name))
  return {
    filename,
    name,
    capitalName,
    content
  }
}

const writeFile = ({ name, content }) => {
  const filename = path.join(mdOutDir, name + '.svg')
  fs.writeFileSync(filename, content)
}

const docTemplate = ({ mdIcons, pclnIcons }) => `
## Material Design Icons (${mdIcons.length})

${mdIcons.map(({ capitalName }) => `- \`${capitalName}\``).join('\n')}

## Priceline Icons (${pclnIcons.length})

${pclnIcons.map(name => `- \`${name}\``).join('\n')}
`

const createDoc = icons => {
  const filename = path.join(__dirname, './ICONS.md')
  const content = docTemplate(icons)
  fs.writeFileSync(filename, content)
}

const build = async () => {
  const files = await readdir(mdPkg, [ignore])
  const icons = uniqBy(files, file => path.basename(file))
    .filter(is24px)
    .filter(filename => {
      const name = upperFirst(camelCase(rename(filename)))
      return whitelist.includes(name)
    })
    .map(readFile)
    .sort((a, b) => (a.name < b.name ? -1 : 1))

  const pclnIconFiles = await readdir(pclnSVGs)
  const pclnIcons = pclnIconFiles.map(filename =>
    path.basename(filename, 'svg')
  )

  if (!fs.existsSync(mdOutDir)) fs.mkdirSync(mdOutDir)

  icons.forEach(writeFile)
  createDoc({
    mdIcons: icons,
    pclnIcons
  })
}

build()

// whitelist of icons to include from material design icons
const whitelist = [
  // build from aliases object
  'AcUnit',
  'FlightLand',
  'ArrowDownward',
  'ArrowBack',
  'ArrowForward',
  'ArrowUpward',
  'ReportProblem',
  'BeachAccess',
  'Hotel',
  'CheckBox',
  'CheckBoxOutlineBlank',
  'IndeterminateCheckBox',
  'AddBox',
  'FreeBreakfast',
  'BusinessCenter',
  'DateRange',
  'ChildFriendly',
  'DirectionsCar',
  'Poll',
  'KeyboardArrowDown',
  'KeyboardArrowUp',
  'LocationCity',
  'Schedule',
  'AccessTime',
  'QueryBuilder',
  'CloudQueue',
  'FlightTakeoff',
  'Description',
  'AttachMoney',
  'MonetizationOn',
  'Brightness5',
  'Create',
  'ModeEdit',
  'FlashOn',
  'InsertEmoticon',
  'Mood',
  'FilterList',
  'FitnessCenter',
  'WhatsHot',
  'Flight',
  'Cached',
  'PhotoLibrary',
  'LocalGasStation',
  'Language',
  'GolfCourse',
  'GpsFixed',
  'ShowChart',
  'Apps',
  'Business',
  'LocalDining',
  'Info',
  'InfoOutline',
  'VpnKey',
  'Work',
  'Remove',
  'NotificationsActive',
  'LocalParking',
  'Call',
  'LocalPhone',
  'Image',
  'LocationOn',
  'Add',
  'Print',
  'ViewQuilt',
  'RadioButtonChecked',
  'RadioButtonUnchecked',
  'RemoveCircleOutline',
  'AddCircleOutline',
  'YoutubeSearchedFor',
  'EventSeat',
  'AirlineSeatReclineExtra',
  'AirlineSeatReclineNormal',
  'AirportShuttle',
  'SmokeFree',
  'CheckCirle',
  'SwapVert',
  'ThumbDown',
  'ThumbUp',
  'Person',
  'VerifiedUser',
  'Error',
  'ErrorOutline',
  'HotTub',
  'ZoomOutMap',

  // non-aliased
  'Star',
  'Accessible',
  'Build',
  'Cake',
  'Casino',
  'Chat',
  'Check',
  'ChevronLeft',
  'ChevronRight',
  'Close',
  'CreditCard',
  'Devices',
  'Directions',
  // 'Discount',
  'Email',
  'Event',
  'EventAvailable',
  'EventBusy',
  'Help',
  'History',
  'Home',
  'Laptop',
  'List',
  'LocalBar',
  'Lock',
  'Map',
  'Menu',
  'Parking',
  'Pets',
  'Pool',
  'Refresh',
  'Restaurant',
  'Rowing',
  'Search',
  'Security',
  'Spa',
  'Star',
  'Timer',
  'TrendingUp',
  'Tune',
  'Web',
  'Wifi'
]
