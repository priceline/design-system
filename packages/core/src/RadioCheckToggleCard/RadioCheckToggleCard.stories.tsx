import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Button, Flex, Image, Input, Text, ThemeProvider, theme } from '..'
import { Section } from '../DocsUtils'
import { getPaletteColor } from '../utils'
import { RadioCheckToggleCard, TCardTypes, THPositions, TVPositions } from './RadioCheckToggleCard'
import { argTypes } from './RadioCheckToggleCard.stories.args'

type Story = StoryObj<typeof RadioCheckToggleCard>

const dumpText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros neque, sodales eu urna at, porta rutrum metus. Aliquam aliquam dolor erat, in convallis ipsum volutpat quis.'

const exampleImage = () => (
  <Image borderRadius='lg' src='https://s1.pclncdn.com/design-assets/hero/beach.jpg' />
)
const exampleInput = ({ disabled }) => (
  <Box width='100%' mt={2} style={{ backgroundColor: getPaletteColor('background.lightest') }}>
    <Input
      borderRadius='lg'
      style={{ background: theme.colors.lightestBackground }}
      placeholder='Placeholder'
      disabled={disabled}
    />
  </Box>
)
const divider = () => <Box width='100%' my={4} style={{ border: '1px solid #e0e5ea' }} />

const EnabledStateCard = styled(Box)`
  flex: 1 1 30%;

  & > label > div {
    background-color: ${getPaletteColor('background.lightest')} !important;
    border-color: transparent !important;

    & div.cardIcon > svg {
      color: ${getPaletteColor('text.light')} !important;
      border-color: transparent !important;
      box-shadow: none !important;
    }
  }
`

const HoverStateCard = styled(Box)`
  flex: 1 1 30%;

  & > label > div {
    background-color: ${getPaletteColor('background.lightest')} !important;
    border-color: ${getPaletteColor('primary.base')} !important;

    & div.cardIcon > svg {
      color: ${getPaletteColor('primary.base')} !important;
      border-color: transparent !important;
      box-shadow: none !important;
    }
  }
`

const FocusStateCard = styled(Box)`
  flex: 1 1 30%;

  & > label > div {
    background-color: ${getPaletteColor('background.lightest')} !important;
    border-color: transparent !important;

    & div.cardIcon > svg {
      color: ${getPaletteColor('text.light')} !important;
      border-color: ${getPaletteColor('text.light')} !important;
      box-shadow: inset 0 0 0 5px ${getPaletteColor('background.light')} !important;
    }
  }
`

const SelectedStateCard = styled(Box)`
  flex: 1 1 30%;

  & > label > div {
    background-color: ${getPaletteColor('primary.light')} !important;
    border-color: ${getPaletteColor('primary.base')} !important;

    & div.cardIcon > svg {
      color: ${getPaletteColor('primary.base')} !important;
      border-color: transparent !important;
      box-shadow: none !important;
    }
  }
`

const SelectedHoverStateCard = styled(Box)`
  flex: 1 1 30%;

  & > label > div {
    background-color: ${getPaletteColor('primary.light')} !important;
    border-color: ${getPaletteColor('primary.dark')} !important;

    & div.cardIcon > svg {
      color: ${getPaletteColor('primary.dark')} !important;
      border-color: transparent !important;
      box-shadow: none !important;
    }
  }
`

const SelectedFocusStateCard = styled(Box)`
  flex: 1 1 30%;

  & > label > div {
    background-color: ${getPaletteColor('primary.light')} !important;
    border-color: ${getPaletteColor('primary.base')} !important;

    & div.cardIcon > svg {
      color: ${getPaletteColor('primary.base')} !important;
      border-color: ${getPaletteColor('primary.base')} !important;
      box-shadow: none !important;
    }
  }
`

const DefaultDocPage = () => {
  const [examples, setExamples] = useState({
    ['types-label']: [],
    ['formatting-position']: 'example-1',
    ['formatting-label-with-children']: ['example-1'],
    ['formatting-full-width-children']: ['example-1'],
    ['additional-actions-buttons']: 'example-1',
    ['additional-actions-forms-1']: 'example-1',
    ['additional-actions-forms-2']: 'example-1',
  })

  const data: {
    cardType: TCardTypes
    name: string
    options: {
      hPosition: THPositions
      vPosition: TVPositions
      title: string
      value: string
    }[]
  } = {
    cardType: 'radio',
    name: 'formatting-position',
    options: [
      { hPosition: 'left', vPosition: 'top', title: dumpText, value: 'example-1' },
      { hPosition: 'right', vPosition: 'top', title: dumpText, value: 'example-2' },
      { hPosition: 'left', vPosition: 'center', title: dumpText, value: 'example-3' },
      { hPosition: 'right', vPosition: 'center', title: dumpText, value: 'example-4' },
    ],
  }

  const handleOnChangeInLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    const result = examples['types-label'] as Array<string>
    const index = result.indexOf(value)

    if (index >= 0) {
      result.splice(index, 1)
    } else {
      result.unshift(value)
    }

    if (result.length > 2) {
      result.pop()
    }

    setExamples((previousState) => ({
      ...previousState,
      ['types-label']: result,
    }))
  }

  const handleOnChange =
    (e: React.ChangeEvent<HTMLInputElement>) =>
    ({ cardType, name }) => {
      const { value } = e.currentTarget
      let result: string | string[] = value

      if (cardType !== 'radio') {
        result = examples[name] as Array<string>
        const index = result.indexOf(value)

        if (index >= 0) {
          result.splice(index, 1)
        } else {
          result.push(value)
        }
      }

      setExamples((previousState) => ({
        ...previousState,
        [name]: result,
      }))
    }

  return (
    <ThemeProvider>
      <Section heading='Types'>
        <Text textStyle='subheading3' my={3}>
          Label
        </Text>
        <Text textStyle='paragraph' my={3}>
          In its checked state, by default the color is to be primary.base.
        </Text>
        <Flex flexDirection='column' style={{ width: '50%', gap: '16px' }}>
          <RadioCheckToggleCard
            name='types-label'
            title='Radio'
            value='example-1'
            isSelected={examples['types-label'].includes('example-1')}
            onChange={handleOnChangeInLabel}
          />
          <RadioCheckToggleCard
            cardType='checkbox'
            name='types-label'
            title='Checkbox'
            value='example-2'
            isSelected={examples['types-label'].includes('example-2')}
            onChange={handleOnChangeInLabel}
          />
          <RadioCheckToggleCard
            cardType='toggle'
            name='types-label'
            title='Toggle'
            value='example-3'
            isSelected={examples['types-label'].includes('example-3')}
            onChange={handleOnChangeInLabel}
          />
        </Flex>
      </Section>

      {divider()}

      <Section heading='States'>
        <Text textStyle='paragraph' my={3}>
          Radio - Examples shown indicate the card & action states
        </Text>

        <Flex my={4} flexWrap='wrap' style={{ width: '100%', gap: '16px' }}>
          <EnabledStateCard>
            <RadioCheckToggleCard
              name='states-radio'
              title='Enabled'
              value='example-1'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </EnabledStateCard>

          <HoverStateCard>
            <RadioCheckToggleCard
              name='states-radio'
              title='Hover'
              value='example-2'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </HoverStateCard>

          <FocusStateCard>
            <RadioCheckToggleCard
              name='states-radio'
              title='Focus'
              value='example-3'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </FocusStateCard>

          <SelectedStateCard>
            <RadioCheckToggleCard
              name='states-radio'
              title='Selected'
              value='example-4'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedStateCard>

          <SelectedHoverStateCard>
            <RadioCheckToggleCard
              name='states-radio'
              title='Selected Hover'
              value='example-5'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedHoverStateCard>

          <SelectedFocusStateCard>
            <RadioCheckToggleCard
              name='states-radio'
              title='Selected Focus'
              value='example-6'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedFocusStateCard>
        </Flex>

        <Text textStyle='paragraph' my={3}>
          Checkbox - Examples shown indicate the card & action states
        </Text>
        <Flex my={4} flexWrap='wrap' style={{ width: '100%', gap: '16px' }}>
          <EnabledStateCard>
            <RadioCheckToggleCard
              cardType='checkbox'
              name='states-checkbox'
              title='Enabled'
              value='example-1'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </EnabledStateCard>

          <HoverStateCard>
            <RadioCheckToggleCard
              cardType='checkbox'
              name='states-checkbox'
              title='Hover'
              value='example-2'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </HoverStateCard>

          <FocusStateCard>
            <RadioCheckToggleCard
              cardType='checkbox'
              name='states-checkbox'
              title='Focus'
              value='example-3'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </FocusStateCard>

          <SelectedStateCard>
            <RadioCheckToggleCard
              cardType='checkbox'
              name='states-checkbox'
              title='Selected'
              value='example-4'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedStateCard>

          <SelectedHoverStateCard>
            <RadioCheckToggleCard
              cardType='checkbox'
              name='states-checkbox'
              title='Selected Hover'
              value='example-5'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedHoverStateCard>

          <SelectedFocusStateCard>
            <RadioCheckToggleCard
              cardType='checkbox'
              name='states-checkbox'
              title='Selected Focus'
              value='example-6'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedFocusStateCard>
        </Flex>

        <Text textStyle='paragraph' my={3}>
          Toggle - Examples shown indicate the card & action states
        </Text>
        <Flex my={4} flexWrap='wrap' style={{ width: '100%', gap: '16px' }}>
          <EnabledStateCard>
            <RadioCheckToggleCard
              cardType='toggle'
              name='states-toggle'
              title='Enabled'
              value='example-1'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </EnabledStateCard>

          <HoverStateCard>
            <RadioCheckToggleCard
              cardType='toggle'
              name='states-toggle'
              title='Hover'
              value='example-2'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </HoverStateCard>

          <FocusStateCard>
            <RadioCheckToggleCard
              cardType='toggle'
              name='states-toggle'
              title='Focus'
              value='example-3'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </FocusStateCard>

          <SelectedStateCard>
            <RadioCheckToggleCard
              cardType='toggle'
              name='states-toggle'
              title='Selected'
              value='example-1'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedStateCard>

          <SelectedHoverStateCard>
            <RadioCheckToggleCard
              cardType='toggle'
              name='states-toggle'
              title='Selected Hover'
              value='example-2'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedHoverStateCard>

          <SelectedFocusStateCard>
            <RadioCheckToggleCard
              cardType='toggle'
              name='states-toggle'
              title='Selected Focus'
              value='example-3'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedFocusStateCard>
        </Flex>
      </Section>

      {divider()}

      <Section heading='Formatting'>
        <Text textStyle='subheading3' my={3}>
          Position
        </Text>
        <Flex my={4} flexWrap='wrap' style={{ width: '65%', gap: '16px' }}>
          {data.options.map((option) => (
            <Box key={`${data.name}_${option.value}`} style={{ flex: '1 1 45%' }}>
              <RadioCheckToggleCard
                {...option}
                cardType={data.cardType as TCardTypes}
                name={data.name}
                isSelected={examples['formatting-position'] === option.value}
                onChange={(e) =>
                  handleOnChange(e)({
                    cardType: data.cardType,
                    name: data.name,
                  })
                }
              />
            </Box>
          ))}
        </Flex>

        <Text textStyle='subheading3' my={3}>
          Label with children
        </Text>
        <Flex my={4} flexWrap='wrap' style={{ width: '65%', gap: '16px' }}>
          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              cardType='checkbox'
              hPosition='left'
              isTakingFullHeightOfCard
              isTitleBold
              name='formatting-label-with-children'
              title='Title'
              value='example-1'
              isSelected={examples['formatting-label-with-children'].includes('example-1')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'checkbox',
                  name: 'formatting-label-with-children',
                })
              }
            >
              <Text textStyle='paragraph' style={{ marginTop: '8px' }}>
                {dumpText}
              </Text>
            </RadioCheckToggleCard>
          </Box>

          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              cardType='checkbox'
              isTakingFullHeightOfCard
              isTitleBold
              name='formatting-label-with-children'
              title='Title'
              value='example-2'
              isSelected={examples['formatting-label-with-children'].includes('example-2')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'checkbox',
                  name: 'formatting-label-with-children',
                })
              }
            >
              <Text textStyle='paragraph' style={{ marginTop: '8px' }}>
                {dumpText}
              </Text>
            </RadioCheckToggleCard>
          </Box>

          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              cardType='checkbox'
              hPosition='left'
              vPosition='center'
              isTakingFullHeightOfCard
              isTitleBold
              name='formatting-label-with-children'
              title='Title'
              value='example-3'
              isSelected={examples['formatting-label-with-children'].includes('example-3')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'checkbox',
                  name: 'formatting-label-with-children',
                })
              }
            >
              {exampleImage()}
            </RadioCheckToggleCard>
          </Box>

          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              cardType='checkbox'
              vPosition='center'
              isTakingFullHeightOfCard
              isTitleBold
              name='formatting-label-with-children'
              title='Title'
              value='example-4'
              isSelected={examples['formatting-label-with-children'].includes('example-4')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'checkbox',
                  name: 'formatting-label-with-children',
                })
              }
            >
              {exampleImage()}
            </RadioCheckToggleCard>
          </Box>
        </Flex>

        <Text textStyle='subheading3' my={3}>
          Full width children
        </Text>
        <Flex my={4} flexWrap='wrap' style={{ width: '65%', gap: '16px' }}>
          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              cardType='toggle'
              hPosition='left'
              name='formatting-full-width-children'
              title='Title'
              value='example-1'
              isSelected={examples['formatting-full-width-children'].includes('example-1')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'toggle',
                  name: 'formatting-full-width-children',
                })
              }
            >
              <Text textStyle='paragraph' style={{ marginTop: '8px' }}>
                {dumpText}
              </Text>
              <Button mt={2} disabled={!examples['formatting-full-width-children'].includes('example-1')}>
                Button
              </Button>
            </RadioCheckToggleCard>
          </Box>

          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              cardType='toggle'
              name='formatting-full-width-children'
              title='Title'
              value='example-2'
              isSelected={examples['formatting-full-width-children'].includes('example-2')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'toggle',
                  name: 'formatting-full-width-children',
                })
              }
            >
              <Text textStyle='paragraph' style={{ marginTop: '8px' }}>
                {dumpText}
              </Text>
              <Button mt={2} disabled={!examples['formatting-full-width-children'].includes('example-2')}>
                Button
              </Button>
            </RadioCheckToggleCard>
          </Box>

          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              cardType='toggle'
              hPosition='left'
              name='formatting-full-width-children'
              title='Title'
              value='example-3'
              isSelected={examples['formatting-full-width-children'].includes('example-3')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'toggle',
                  name: 'formatting-full-width-children',
                })
              }
            >
              {exampleImage()}
              <Text textStyle='paragraph' style={{ marginTop: '8px' }}>
                {dumpText}
              </Text>
              <Button mt={2} disabled={!examples['formatting-full-width-children'].includes('example-3')}>
                Button
              </Button>
            </RadioCheckToggleCard>
          </Box>

          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              cardType='toggle'
              name='formatting-full-width-children'
              title='Title'
              value='example-4'
              isSelected={examples['formatting-full-width-children'].includes('example-4')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'toggle',
                  name: 'formatting-full-width-children',
                })
              }
            >
              {exampleImage()}
              <Text textStyle='paragraph' style={{ marginTop: '8px' }}>
                {dumpText}
              </Text>
              <Button mt={2} disabled={!examples['formatting-full-width-children'].includes('example-4')}>
                Button
              </Button>
            </RadioCheckToggleCard>
          </Box>
        </Flex>
      </Section>

      {divider()}

      <Section heading='Additional Actions'>
        <Text textStyle='subheading3' my={3}>
          Buttons
        </Text>
        <Text textStyle='paragraph' my={3}>
          In its checked state, by default the color is to be primary.base.
        </Text>

        <Flex my={4} flexWrap='wrap' style={{ width: '65%', gap: '16px' }}>
          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              name='additional-actions-buttons'
              title='Title'
              value='example-1'
              isSelected={examples['additional-actions-buttons'].includes('example-1')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'radio',
                  name: 'additional-actions-buttons',
                })
              }
            >
              {exampleImage()}
              <Text textStyle='paragraph' style={{ marginTop: '8px' }}>
                {dumpText}
              </Text>
              <Button mt={2} disabled={!examples['additional-actions-buttons'].includes('example-1')}>
                I Select the Radio Card
              </Button>
            </RadioCheckToggleCard>
          </Box>

          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              name='additional-actions-buttons'
              title='Title'
              value='example-2'
              isSelected={examples['additional-actions-buttons'].includes('example-2')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'radio',
                  name: 'additional-actions-buttons',
                })
              }
            >
              {exampleImage()}
              <Text textStyle='paragraph' style={{ marginTop: '8px' }}>
                {dumpText}
              </Text>
              <Button mt={2} disabled={!examples['additional-actions-buttons'].includes('example-2')}>
                I Select the Radio Card
              </Button>
            </RadioCheckToggleCard>
          </Box>
        </Flex>

        <Text textStyle='subheading3' my={3}>
          Forms
        </Text>
        <Text textStyle='paragraph' my={3}>
          In its checked state, by default the color is to be primary.base.
        </Text>

        <Flex my={4} flexWrap='wrap' style={{ width: '100%', gap: '16px' }}>
          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              hPosition='left'
              isTakingFullHeightOfCard
              name='additional-actions-forms-1'
              title='Title'
              value='example-1'
              isSelected={examples['additional-actions-forms-1'].includes('example-1')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'radio',
                  name: 'additional-actions-forms-1',
                })
              }
            >
              <Text textStyle='paragraph' style={{ marginTop: '8px' }}>
                {dumpText}
              </Text>
              {exampleInput({ disabled: !examples['additional-actions-forms-1'].includes('example-1') })}
              {exampleInput({ disabled: !examples['additional-actions-forms-1'].includes('example-1') })}
            </RadioCheckToggleCard>
          </Box>

          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              hPosition='left'
              isTakingFullHeightOfCard
              name='additional-actions-forms-1'
              title='Title'
              value='example-2'
              isSelected={examples['additional-actions-forms-1'].includes('example-2')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'radio',
                  name: 'additional-actions-forms-1',
                })
              }
            >
              <Text textStyle='paragraph' style={{ marginTop: '8px' }}>
                {dumpText}
              </Text>
              {exampleInput({ disabled: !examples['additional-actions-forms-1'].includes('example-2') })}
              {exampleInput({ disabled: !examples['additional-actions-forms-1'].includes('example-2') })}
            </RadioCheckToggleCard>
          </Box>
        </Flex>

        <Text textStyle='paragraph' my={3}>
          with nested disabled function/action
        </Text>

        <Flex my={4} flexWrap='wrap' style={{ width: '100%', gap: '16px' }}>
          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              hPosition='left'
              isTakingFullHeightOfCard
              name='additional-actions-forms-2'
              title='Title'
              value='example-1'
              isSelected={examples['additional-actions-forms-2'].includes('example-1')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'radio',
                  name: 'additional-actions-forms-2',
                })
              }
            >
              <Text textStyle='paragraph' style={{ marginTop: '8px' }}>
                {dumpText}
              </Text>
              {exampleInput({ disabled: !examples['additional-actions-forms-2'].includes('example-1') })}
              {exampleInput({ disabled: !examples['additional-actions-forms-2'].includes('example-1') })}
              <Button mt={2} disabled={!examples['additional-actions-forms-2'].includes('example-1')}>
                I Select the Radio Card
              </Button>
            </RadioCheckToggleCard>
          </Box>

          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              hPosition='left'
              isTakingFullHeightOfCard
              name='additional-actions-forms-2'
              title='Title'
              value='example-2'
              isSelected={examples['additional-actions-forms-2'].includes('example-2')}
              onChange={(e) =>
                handleOnChange(e)({
                  cardType: 'radio',
                  name: 'additional-actions-forms-2',
                })
              }
            >
              <Text textStyle='paragraph' style={{ marginTop: '8px' }}>
                {dumpText}
              </Text>
              {exampleInput({ disabled: !examples['additional-actions-forms-2'].includes('example-2') })}
              {exampleInput({ disabled: !examples['additional-actions-forms-2'].includes('example-2') })}
              <Button mt={2} disabled={!examples['additional-actions-forms-2'].includes('example-2')}>
                I Select the Radio Card
              </Button>
            </RadioCheckToggleCard>
          </Box>
        </Flex>
      </Section>

      {divider()}
    </ThemeProvider>
  )
}

const meta: Meta<typeof RadioCheckToggleCard> = {
  title: 'Core / RadioCheckToggleCard',
  component: RadioCheckToggleCard,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gpbXA3aonRBAJbQiZvrayO/Design-Ops-Dev-Week?type=design&node-id=2-1755&mode=dev',
    },

    docs: {
      page: () => <DefaultDocPage />,
    },
  },
}
export default meta

export const Radio: Story = {
  args: { cardType: 'radio', name: 'radio-card', title: 'Title' },
  argTypes,
  render: (args) => (
    <Section heading={args.cardType}>
      <Flex flexDirection='column' style={{ maxWidth: '350px', gap: '16px' }}>
        <RadioCheckToggleCard value='example-1' isSelected={false} onChange={(e) => {}} {...args}>
          <Box width='100%' height='75px' />
        </RadioCheckToggleCard>

        <RadioCheckToggleCard value='example-2' isSelected={false} onChange={(e) => {}} {...args}>
          <Text textStyle='paragraph'>
            I am some content. I am some content. I am some content. I am some content.
          </Text>
        </RadioCheckToggleCard>

        <RadioCheckToggleCard value='example-3' isSelected={false} onChange={(e) => {}} {...args}>
          <Text textStyle='paragraph'>
            I am some content. I am some content. I am some content. I am some content.
          </Text>
          <Button mt={2} width='100%'>
            Button
          </Button>
        </RadioCheckToggleCard>

        <RadioCheckToggleCard value='example-4' isSelected={false} onChange={(e) => {}} {...args}>
          {exampleImage()}
        </RadioCheckToggleCard>
      </Flex>
    </Section>
  ),
}

export const Checkbox: Story = {
  args: { ...Radio.args, cardType: 'checkbox', name: 'checkbox-card' },
  argTypes,
  render: Radio.render,
}

export const Toggle: Story = {
  args: { ...Radio.args, cardType: 'toggle', name: 'toggle-card' },
  argTypes,
  render: Radio.render,
}
