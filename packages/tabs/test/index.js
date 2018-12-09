import React from 'react'
import { mount } from 'enzyme'
import { Box, Flex, Heading, ThemeProvider } from 'pcln-design-system'
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
    const manageTabContent = wrapper.find('Box')
    expect(manageTabHeading.prop('isActive')).toBe(true)
    expect(manageTabContent.text()).toBe('123-TEST')
  })

  test('on click of 2nd tab title should switch activeTab to index 1 of tab array', () => {
    const wrapper = mount(HotelTabs)
    expect(
      wrapper
        .find('Styled(Text)')
        .at(0)
        .prop('isActive')
    ).toBe(true)
    expect(
      wrapper
        .find('Styled(Text)')
        .at(1)
        .prop('isActive')
    ).toBe(false)
    wrapper
      .find('Styled(Text)')
      .at(1)
      .simulate('click')
    expect(
      wrapper
        .find('Styled(Text)')
        .at(0)
        .prop('isActive')
    ).toBe(false)
    expect(
      wrapper
        .find('Styled(Text)')
        .at(1)
        .prop('isActive')
    ).toBe(true)
  })

  test('on click of 2nd tab title should display 2nd child of the component', () => {
    const wrapper = mount(HotelTabs)
    expect(wrapper.find('Box').text()).toBe('123-TEST')
    wrapper
      .find('Styled(Text)')
      .at(1)
      .simulate('click')
    expect(wrapper.find('Box').text()).toBe('Venetian Las Vegas')
  })

  test("on click of tab title should update active tab title's styles", () => {
    const wrapper = mount(HotelTabs)
    expect(
      wrapper
        .find('Styled(Text)')
        .at(1)
        .prop('color')
    ).toBe('blue')
    wrapper
      .find('Styled(Text)')
      .at(1)
      .simulate('click')
    expect(
      wrapper
        .find('Styled(Text)')
        .at(1)
        .prop('color')
    ).toBe('darkBlue')
  })

  test('tab title text defaultColor and activeColor can be customized via props', () => {
    const wrapper = mount(
      <Tabs {...mockHotelProps} activeColor="darkGreen" defaultColor="green">
        <ManageTab {...mockHotelProps.tabs[0].content} />
        <RoomTab {...mockHotelProps.tabs[1].content} />
        <ImportantInfoTab {...mockHotelProps.tabs[2].content} />
      </Tabs>
    )
    expect(
      wrapper
        .find('Styled(Text)')
        .at(1)
        .prop('color')
    ).toBe('green')
    wrapper
      .find('Styled(Text)')
      .at(1)
      .simulate('click')
    expect(
      wrapper
        .find('Styled(Text)')
        .at(1)
        .prop('color')
    ).toBe('darkGreen')
  })
})
