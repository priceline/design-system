import React from 'react'
import { render } from '../__test__/testing-library'

import { RadioCheckToggleCard } from '.'
import { Text } from '../Text'

describe('RadioCheckToggleCard', () => {
  describe('common', () => {
    it('should render default UI correctly', () => {
      const { asFragment, getByTestId } = render(
        <RadioCheckToggleCard
          cardType='radio'
          name='radio-1'
          title='Title'
          value='example-1'
          isSelected={false}
          onChange={() => {}}
        />
      )

      expect(asFragment()).toMatchSnapshot()
      expect(getByTestId('rdt-card-title')).toHaveStyleRule('font-size', '14px')
      expect(getByTestId('rdt-card-header')).toHaveStyleRule('flex-direction', 'row')
      expect(getByTestId('rdt-card-header').querySelector(':nth-child(2)')).toHaveStyle(
        'margin: 0 0 0 var(--default-card-margin)'
      )
    })

    it('should render bold title correctly', () => {
      const { getByTestId, asFragment } = render(
        <RadioCheckToggleCard
          cardType='radio'
          isTitleBold
          name='radio-1'
          title='Title'
          value='example-1'
          isSelected={false}
          onChange={() => {}}
        >
          <Text>Happy Priceline!</Text>
        </RadioCheckToggleCard>
      )

      expect(asFragment()).toMatchSnapshot()
      expect(getByTestId('rdt-card-title')).toHaveStyleRule('font-size', '16px')
      expect(getByTestId('rdt-card-title')).toHaveStyleRule('font-weight', '700')
    })

    it('should render left button UI correctly', () => {
      const { asFragment, getByTestId } = render(
        <RadioCheckToggleCard
          cardType='radio'
          hPosition='left'
          name='radio-1'
          title='Title'
          value='example-1'
          isSelected={false}
          onChange={() => {}}
        />
      )

      expect(asFragment()).toMatchSnapshot()
      expect(getByTestId('rdt-card-header').querySelector(':nth-child(2)')).toHaveStyle(
        'margin: 0 var(--default-card-margin) 0 0'
      )
    })

    it('should execute handle change function', () => {
      let isSelected = false
      let selectedValue = ''
      const spyOnChange = jest.fn().mockImplementation((e: React.ChangeEvent<HTMLInputElement>) => {
        isSelected = true
        selectedValue = e.currentTarget.value
      })
      const cardTitle = 'Pay by credit card'

      const { getByText } = render(
        <RadioCheckToggleCard
          cardType='radio'
          name='radio-1'
          title={cardTitle}
          value='example-1'
          isSelected={isSelected}
          onChange={spyOnChange}
        />
      )

      getByText(cardTitle).click()

      expect(isSelected).toEqual(true)
      expect(selectedValue).toEqual('example-1')
      expect(spyOnChange).toHaveBeenCalled()
      expect(spyOnChange).toHaveBeenCalledTimes(1)
    })

    it('should render children correctly', () => {
      const { getByText, getByTestId, asFragment } = render(
        <RadioCheckToggleCard
          cardType='radio'
          name='radio-1'
          title='Title'
          value='example-1'
          isSelected={false}
          onChange={() => {}}
        >
          <Text>Happy Priceline!</Text>
        </RadioCheckToggleCard>
      )

      expect(asFragment()).toMatchSnapshot()
      expect(getByText('Happy Priceline!')).toBeInTheDocument()
      expect(getByTestId('rdt-card-main').childElementCount).toEqual(2)
      expect(getByTestId('rdt-card-header').querySelector('div').childElementCount).toEqual(1)
    })

    it('should render children next to title correctly', () => {
      const { getByText, getByTestId, asFragment } = render(
        <RadioCheckToggleCard
          cardType='radio'
          isTakingFullHeightOfCard
          name='radio-1'
          title='Title'
          value='example-1'
          isSelected={false}
          onChange={() => {}}
        >
          <Text>Happy Priceline!</Text>
        </RadioCheckToggleCard>
      )

      expect(asFragment()).toMatchSnapshot()
      expect(getByText('Happy Priceline!')).toBeInTheDocument()
      expect(getByTestId('rdt-card-main').childElementCount).toEqual(1)
      expect(getByTestId('rdt-card-header').querySelector('div').childElementCount).toEqual(2)
    })
  })

  describe('Radio Card', () => {
    it('should render unchecked state UI correctly', () => {
      const { asFragment } = render(
        <RadioCheckToggleCard
          cardType='radio'
          name='radio-1'
          title='Title'
          value='example-1'
          isSelected={false}
          onChange={() => {}}
        />
      )

      expect(asFragment()).toMatchSnapshot()
    })

    it('should render checked state UI correctly', () => {
      const { asFragment } = render(
        <RadioCheckToggleCard
          cardType='radio'
          name='radio-1'
          title='Title'
          value='example-1'
          isSelected={true}
          onChange={() => {}}
        />
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('Checkbox Card', () => {
    it('should render unchecked state UI correctly', () => {
      const { asFragment } = render(
        <RadioCheckToggleCard
          cardType='checkbox'
          name='radio-1'
          title='Title'
          value='example-1'
          isSelected={false}
          onChange={() => {}}
        />
      )

      expect(asFragment()).toMatchSnapshot()
    })

    it('should render checked state UI correctly', () => {
      const { asFragment } = render(
        <RadioCheckToggleCard
          cardType='checkbox'
          name='radio-1'
          title='Title'
          value='example-1'
          isSelected={true}
          onChange={() => {}}
        />
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe('Toggle Card', () => {
    it('should render unchecked state UI correctly', () => {
      const { asFragment } = render(
        <RadioCheckToggleCard
          cardType='toggle'
          name='radio-1'
          title='Title'
          value='example-1'
          isSelected={false}
          onChange={() => {}}
        />
      )

      expect(asFragment()).toMatchSnapshot()
    })

    it('should render checked state UI correctly', () => {
      const { asFragment } = render(
        <RadioCheckToggleCard
          cardType='toggle'
          name='radio-1'
          title='Title'
          value='example-1'
          isSelected={true}
          onChange={() => {}}
        />
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
