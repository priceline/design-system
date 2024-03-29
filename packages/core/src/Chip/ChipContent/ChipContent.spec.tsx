import { Broom, Departure } from 'pcln-icons'
import React from 'react'
import { render } from '../../__test__/testing-library'
import { ChipContent } from './ChipContent'

const props = {
  id: 'testId',
  disabled: false,
  selected: false,
  facet: '(06)',
  label: 'Chips are Delicious',
  bridgeLabel: 'Chips are amazing',
  Icon: Departure,
  IconTitle: 'Departure',
  action: {
    Icon: Broom,
    title: 'Sweep',
  },
  image: <img src='https://www.priceline.com/sam/air/carrier_logos/airLogo_DL.png' alt='Delta' height='24' />,
}

describe('ChipContent', () => {
  test('All Prop Options passed in', () => {
    const { getByText, getAllByTitle, getByAltText, getByTestId } = render(<ChipContent {...props} />)

    //image
    expect(getByAltText('Delta'))

    //Icon
    expect(getAllByTitle('Departure')).toHaveLength(2)

    //label
    expect(getByText('Chips are Delicious'))

    //bridgeLabel
    expect(getAllByTitle('to')).toHaveLength(2)
    expect(getByText('Chips are amazing'))

    //action icon
    expect(getAllByTitle('Sweep')).toHaveLength(2)

    //facet
    expect(getByText('(06)'))

    //style
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('border', '1px solid #c0cad5')
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('background-color', '#fff')
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('cursor', 'pointer')
  })

  test('selected, sm', () => {
    const { getByTestId } = render(<ChipContent {...{ ...props, selected: true, size: 'sm' }} />)
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('border', '1px solid #0068ef')
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('cursor', 'pointer')
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('padding-left', '8px')
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('height', '32px')
  })

  test('disabled, md', () => {
    const { getByTestId } = render(<ChipContent {...{ ...props, disabled: true, size: 'md' }} />)
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('border', '1px solid transparent')
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('cursor', 'not-allowed')
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('padding-left', '16px')
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('height', '40px')
  })

  test('md, with topLabel', () => {
    const { getByTestId, getByText } = render(
      <ChipContent {...{ ...props, size: 'md', topLabel: 'I love chips' }} />
    )
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('height', '58px')
    expect(getByText('I love chips'))
  })

  test('Custom contents', () => {
    const { getByText } = render(<ChipContent>HELLO</ChipContent>)

    //Child element
    expect(getByText('HELLO'))
  })

  test('No Icon and No image', () => {
    const { queryByAltText, queryByTitle } = render(
      <ChipContent {...{ ...props, BridgeIcon: Broom, Icon: undefined, image: undefined }} />
    )
    expect(queryByAltText('Delta')).not.toBeInTheDocument()
    expect(queryByTitle('Departure')).not.toBeInTheDocument()
  })

  test('disabled and selected', () => {
    const { getByTestId } = render(<ChipContent {...{ ...props, disabled: true, selected: true }} />)
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('border', '1px solid #4f6f8f')
    expect(getByTestId('chipContentWrapper')).toHaveStyleRule('cursor', 'not-allowed')
  })
})
