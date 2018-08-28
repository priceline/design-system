#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const readdir = require('recursive-readdir')
const camelCase = require('lodash.camelcase')
const upperFirst = require('lodash.upperfirst')
const uniqBy = require('lodash.uniqby')

const pkgPath = path.join(__dirname, './node_modules/material-design-icons')
const outDir = path.join(__dirname, './svg/material-design')

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
  return {
    filename,
    name,
    content
  }
}

const writeFile = ({ name, content }) => {
  const filename = path.join(outDir, name + '.svg')
  fs.writeFileSync(filename, content)
}

const docTemplate = ({ icons = [] }) => `
# Icons (${icons.length})

${icons.map(({ name }) => `- \`${name}\``).join('\n')}
`

const createDoc = icons => {
  const filename = path.join(__dirname, './ICONS.md')
  const content = docTemplate({ icons })
  fs.writeFileSync(filename, content)
}

// todo: copy icons/ directory

const build = async () => {
  const files = await readdir(pkgPath, [ignore])
  const icons = uniqBy(files, file => path.basename(file))
    .filter(is24px)
    .filter(filename => {
      const name = upperFirst(camelCase(rename(filename)))
      console.log(name, whitelist.includes(name))
      return whitelist.includes(name)
    })
    .map(readFile)
    .sort((a, b) => (a.name < b.name ? -1 : 1))

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)

  icons.forEach(writeFile)
  createDoc(icons)

  console.log(icons.length, ' icons copied')
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
