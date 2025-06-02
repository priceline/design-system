import { Flights, Home, Seat } from 'pcln-icons'
import { render } from '../__test__/testing-library'
import { Breadcrumbs } from './Breadcrumbs'

describe('Breadcrumbs', () => {
  test('renders basic', () => {
    const { asFragment } = render(
      <Breadcrumbs>
        <Breadcrumbs.Link href='https://www.priceline.com' label='Home' />
        <Breadcrumbs.Link href='https://www.priceline.com/flights/' label='Flights' />
        <Breadcrumbs.Link href='https://www.priceline.com/flights/' label='Seat Selection' />
      </Breadcrumbs>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with icons', () => {
    const { asFragment } = render(
      <Breadcrumbs>
        <Breadcrumbs.Link
          href='https://www.priceline.com'
          label='Home'
          icon={<Home color='text.light' size={16} mr={2} />}
        />
        <Breadcrumbs.Link
          href='https://www.priceline.com/flights/'
          label='Flights'
          icon={<Flights color='text.light' size={16} mr={2} />}
        />
        <Breadcrumbs.Link
          href='https://www.priceline.com/flights/'
          label='Seat Selection'
          icon={<Seat color='text.dark' size={16} mr={2} />}
        />
      </Breadcrumbs>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
