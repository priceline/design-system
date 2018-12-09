import React from 'react'
import { mount, shallow } from 'enzyme'
import { Box, Link, Text, ThemeProvider } from 'pcln-design-system'
import renderer from 'react-test-renderer'
import Tabs from '../src'

const withTheme = Component => <ThemeProvider>{Component}</ThemeProvider>

const props = {
  activeColor: 'darkBlue',
  defaultColor: 'blue',
  tabs: [
    {
      title: 'Tab 1'
    },
    {
      title: 'Tab 2'
    },
    {
      title: 'Tab 3'
    }
  ]
}

const childElements = [
  <Box>Child 1</Box>,
  <Box>Child 2</Box>,
  <Box>Child 3</Box>
]

const mappedProps = [
  {
    heading: 'Mapped content 1',
    body: 'Body Text 1'
  },
  {
    heading: 'Mapped content 2',
    body: 'Body Text 2'
  },
  {
    heading: 'Mapped content 3',
    body: 'Body Text 3'
  }
]

const ExampleTab = props => (
  <Flex flexDirection="column">
    <Heading>{props.heading}</Heading>
    <Box>{props.body}</Box>
  </Flex>
)

const mockHotelProps = {
  activeColor: 'darkBlue',
  defaultColor: 'blue',
  tabs: [
    {
      title: 'Tab 1',
      content: {
        confirmationNumber: '123-TEST'
      }
    },
    {
      title: 'Tab 2',
      content: {
        hotelName: 'Venetian Las Vegas'
      }
    },
    {
      title: 'Tab 3',
      content: {
        importantInfo: 'Free wifi'
      }
    }
  ]
}

const ManageTab = props => <Box>{props.confirmationNumber}</Box>

const RoomTab = props => <Box>{props.hotelName}</Box>

const ImportantInfoTab = props => <Box>{props.importantInfo}</Box>

// content is not tied to tabs array

const HardCodedTabContent = withTheme(
  <Tabs {...props}>
    <Box>Test 1</Box>
    <Box>Test 2</Box>
    <Box>Test 3</Box>
  </Tabs>
)

const MappedElementsTabs = withTheme(
  <Tabs {...props}>{childElements.map(child => child)}</Tabs>
)

const MappedPropsTabs = withTheme(
  <Tabs {...props}>
    {mappedProps.map((content, i) => (
      <ExampleTab key={i} {...content} />
    ))}
  </Tabs>
)

const HotelTabs = withTheme(
  <Tabs {...mockHotelProps}>
    <ManageTab {...mockHotelProps.tabs[0].content} />
    <RoomTab {...mockHotelProps.tabs[1].content} />
    <ImportantInfoTab {...mockHotelProps.tabs[2].content} />
  </Tabs>
)

describe('Tab Navigation', () => {
  test('renders with hardcoded elements', () => {
    const wrapper = mount(HardCodedTabContent)
    const tree = renderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders with mapped elements', () => {
    const wrapper = mount(MappedElementsTabs)
    const tree = renderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders with mapped props', () => {
    const wrapper = mount(MappedPropsTabs)
    const tree = renderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders with composite components consuming props', () => {
    const wrapper = mount(HotelTabs)
    const tree = renderer.create(wrapper).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('default activeTab should be first index of tabs array', () => {
    const wrapper = mount(HotelTabs)
    const manageTabHeading = wrapper.find('Styled(Text)').first()
    // const manageTabContent = wrapper.find('ManageTab')
    console.log(wrapper.debug())
    expect(manageTabHeading.prop('isActive')).toBe(true)
    // expect(manageTabContent).toHaveLength(1)
  })

  test('on click of 2nd tab title should switch activeTab to index 1 of tab array', () => {
    const wrapper = mount(ThemedTabs)
    const roomsTabHeading = wrapper.find('Styled(Text)').at(1)
    expect(roomsTabHeading.prop('isActive')).toBe(false)

    // write test to make sure 2nd child component is displayed
    // write test to test color change of active Tab

    roomsTabHeading.simulate('click')
    const manageTabHeading = wrapper.find('Styled(Text)').first()
    const manageTabContent = wrapper.find('ManageTab')
    const postClickRoomsTab = wrapper.find('Styled(Text)').at(1)
    const hotelImage = wrapper.find('Image')
    expect(manageTabHeading.prop('isActive')).toBe(false)
    expect(manageTabContent).toHaveLength(0)
    expect(postClickRoomsTab.prop('isActive')).toBe(true)
    expect(hotelImage.prop('src')).toBe(
      'https://mobileimg.priceline.com/htlimg/50/50564/thumbnail-150-square.jpg'
    )
  })

  test('on click of 2nd tab title should display 2nd child of the component', () => {})

  test("on click of tab title should update active tab title's styles", () => {})

  test('tab title text defaultColor and activeColor can be customized via props', () => {})
})
