import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Button, Flex, Image, Input, Text, ThemeProvider } from '..'
import { Section } from '../DocsUtils'
import { getPaletteColor } from '../utils'

import RadioCheckToggleCard, {
  TCardTypes,
  THPositions,
  TVPositions,
  hPositions,
  vPositions,
} from './RadioCheckToggleCard'

type Story = StoryObj<typeof RadioCheckToggleCard>

const dumpText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros neque, sodales eu urna at, porta rutrum metus. Aliquam aliquam dolor erat, in convallis ipsum volutpat quis.'

const exampleImage = () => (
  <Image
    borderRadius='lg'
    src='https://s3-alpha-sig.figma.com/img/10f2/be0d/ddefd4f7e2ee4a21404c1e74d29d5b81?Expires=1690156800&Signature=RwiH~zrIeWfWMLqS1F1jE~ItekChBO4-CNhbeDYmoMMOxdGnzDUJv32TfH0bxkdV4P-Y-~CtKrhvv7fSl~9Eyu584jUGacgi1FtLb5ECEO4ct5gMnF~orq6UpnbnYGcaSZQz5fw~tZGfrEbLI7GjS13tPLAKp7Hzm4CnEyWjKaU59NYYjSvUylS0IUxBrgIvLNqlrEUm3Q7XFPNDEADqDzsrKBi6P02ouiBcZqThpFQUS5~QI5FZW~OTlZbM~6Msav1ugrKIdbklI25MgrK4ro53dyIX7jzQ~YKldJmrrmFGESrcuA98fi1ctFJ2p2NHDQKadYDfFXvUho8Cj7Myjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  />
)
const divider = () => <Box width='100%' my={4} style={{ border: '1px solid #e0e5ea' }} />

const EnabledStateCard = styled(Box)`
  & > label > div {
    --background-color: ${getPaletteColor('background.lightest')} !important;
    --border-color: transparent !important;
    --icon-color: ${getPaletteColor('text.light')} !important;
    --icon-border-color: transparent !important;
    --icon-border-shadow-color: transparent !important;
  }
`

const HoverStateCard = styled(Box)`
  & > label > div {
    --background-color: ${getPaletteColor('background.lightest')} !important;
    --border-color: ${getPaletteColor('primary.base')} !important;
    --icon-color: ${getPaletteColor('primary.base')} !important;
    --icon-border-color: transparent !important;
    --icon-border-shadow-color: transparent !important;
  }
`

const FocusStateCard = styled(Box)`
  & > label > div {
    --background-color: ${getPaletteColor('background.lightest')} !important;
    --border-color: transparent !important;
    --icon-color: ${getPaletteColor('text.light')} !important;
    --icon-border-color: ${getPaletteColor('text.light')} !important;
    --icon-border-shadow-color: ${getPaletteColor('background.light')} !important;
  }
`

const SelectedStateCard = styled(Box)`
  & > label > div {
    --background-color: ${getPaletteColor('primary.light')} !important;
    --border-color: ${getPaletteColor('primary.base')} !important;
    --icon-color: ${getPaletteColor('primary.base')} !important;
    --icon-border-color: transparent !important;
    --icon-border-shadow-color: transparent !important;
  }
`

const SelectedHoverStateCard = styled(Box)`
  & > label > div {
    --background-color: ${getPaletteColor('primary.light')} !important;
    --border-color: ${getPaletteColor('primary.dark')} !important;
    --icon-color: ${getPaletteColor('primary.dark')} !important;
    --icon-border-color: transparent !important;
    --icon-border-shadow-color: transparent !important;
  }
`

const SelectedFocusStateCard = styled(Box)`
  & > label > div {
    --background-color: ${getPaletteColor('primary.light')} !important;
    --border-color: ${getPaletteColor('primary.base')} !important;
    --icon-color: ${getPaletteColor('primary.base')} !important;
    --icon-border-color: ${getPaletteColor('primary.base')} !important;
    --icon-border-shadow-color: transparent !important;
  }
`

const DefaultDocPage = () => {
  const [examples, setExamples] = useState({
    ['types-label-1']: '',
    ['types-label-2']: [],
    ['types-label-3']: [],
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
            cardType='radio'
            name='types-label-1'
            title='Radio'
            value='example-1'
            isSelected={examples['types-label-1'].includes('example-1')}
            onChange={(e) =>
              handleOnChange(e)({
                cardType: 'radio',
                name: 'types-label-1',
              })
            }
          />
          <RadioCheckToggleCard
            cardType='checkbox'
            name='types-label-2'
            title='Checkbox'
            value='example-1'
            isSelected={examples['types-label-2'].includes('example-1')}
            onChange={(e) =>
              handleOnChange(e)({
                cardType: 'checkbox',
                name: 'types-label-2',
              })
            }
          />
          <RadioCheckToggleCard
            cardType='toggle'
            name='types-label-3'
            title='Toggle'
            value='example-1'
            isSelected={examples['types-label-3'].includes('example-1')}
            onChange={(e) =>
              handleOnChange(e)({
                cardType: 'toggle',
                name: 'types-label-3',
              })
            }
          />
        </Flex>
      </Section>

      {divider()}

      <Section heading='States'>
        <Text textStyle='paragraph' my={3}>
          Radio - Examples shown indicate the card & action states
        </Text>

        <Flex my={4} flexWrap='wrap' style={{ width: '100%', gap: '16px' }}>
          <EnabledStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='radio'
              hPosition='right'
              vPosition='top'
              name='states-radio'
              title='Enabled'
              value='example-1'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </EnabledStateCard>

          <HoverStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='radio'
              hPosition='right'
              vPosition='top'
              name='states-radio'
              title='Hover'
              value='example-2'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </HoverStateCard>

          <FocusStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='radio'
              hPosition='right'
              vPosition='top'
              name='states-radio'
              title='Focus'
              value='example-3'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </FocusStateCard>

          <SelectedStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='radio'
              hPosition='right'
              vPosition='top'
              name='states-radio'
              title='Selected'
              value='example-4'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedStateCard>

          <SelectedHoverStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='radio'
              hPosition='right'
              vPosition='top'
              name='states-radio'
              title='Selected Hover'
              value='example-5'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedHoverStateCard>

          <SelectedFocusStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='radio'
              hPosition='right'
              vPosition='top'
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
          <EnabledStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='checkbox'
              hPosition='right'
              vPosition='top'
              name='states-checkbox'
              title='Enabled'
              value='example-1'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </EnabledStateCard>

          <HoverStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='checkbox'
              hPosition='right'
              vPosition='top'
              name='states-checkbox'
              title='Hover'
              value='example-2'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </HoverStateCard>

          <FocusStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='checkbox'
              hPosition='right'
              vPosition='top'
              name='states-checkbox'
              title='Focus'
              value='example-3'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </FocusStateCard>

          <SelectedStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='checkbox'
              hPosition='right'
              vPosition='top'
              name='states-checkbox'
              title='Selected'
              value='example-4'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedStateCard>

          <SelectedHoverStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='checkbox'
              hPosition='right'
              vPosition='top'
              name='states-checkbox'
              title='Selected Hover'
              value='example-5'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedHoverStateCard>

          <SelectedFocusStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='checkbox'
              hPosition='right'
              vPosition='top'
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
          <EnabledStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='toggle'
              hPosition='right'
              vPosition='top'
              name='states-toggle'
              title='Enabled'
              value='example-1'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </EnabledStateCard>

          <HoverStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='toggle'
              hPosition='right'
              vPosition='top'
              name='states-toggle'
              title='Hover'
              value='example-2'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </HoverStateCard>

          <FocusStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='toggle'
              hPosition='right'
              vPosition='top'
              name='states-toggle'
              title='Focus'
              value='example-3'
              isSelected={false}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </FocusStateCard>

          <SelectedStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='toggle'
              hPosition='right'
              vPosition='top'
              name='states-toggle'
              title='Selected'
              value='example-1'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedStateCard>

          <SelectedHoverStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='toggle'
              hPosition='right'
              vPosition='top'
              name='states-toggle'
              title='Selected Hover'
              value='example-2'
              isSelected={true}
              onChange={() => {}}
            >
              <Box width='100%' height='75px' />
            </RadioCheckToggleCard>
          </SelectedHoverStateCard>

          <SelectedFocusStateCard style={{ flex: '1 1 30%' }}>
            <RadioCheckToggleCard
              cardType='toggle'
              hPosition='right'
              vPosition='top'
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
              vPosition='top'
              isHeightOccupied
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
              hPosition='right'
              vPosition='top'
              isHeightOccupied
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
              isHeightOccupied
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
              hPosition='right'
              vPosition='center'
              isHeightOccupied
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
              vPosition='top'
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
              hPosition='right'
              vPosition='top'
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
              vPosition='top'
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
              hPosition='right'
              vPosition='top'
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
              cardType='radio'
              hPosition='right'
              vPosition='top'
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
              cardType='radio'
              hPosition='right'
              vPosition='top'
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
              cardType='radio'
              hPosition='left'
              vPosition='top'
              isHeightOccupied
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
              <Input mt={2} placeholder='Placeholder' />
              <Input mt={2} placeholder='Placeholder' />
            </RadioCheckToggleCard>
          </Box>

          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              cardType='radio'
              hPosition='left'
              vPosition='top'
              isHeightOccupied
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
              <Input mt={2} placeholder='Placeholder' />
              <Input mt={2} placeholder='Placeholder' />
            </RadioCheckToggleCard>
          </Box>
        </Flex>

        <Text textStyle='paragraph' my={3}>
          with nested disabled function/action
        </Text>

        <Flex my={4} flexWrap='wrap' style={{ width: '100%', gap: '16px' }}>
          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              cardType='radio'
              hPosition='left'
              vPosition='top'
              isHeightOccupied
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
              <Input mt={2} placeholder='Placeholder' />
              <Input mt={2} placeholder='Placeholder' />
              <Button mt={2} disabled={!examples['additional-actions-forms-2'].includes('example-1')}>
                I Select the Radio Card
              </Button>
            </RadioCheckToggleCard>
          </Box>

          <Box style={{ flex: '1 1 45%' }}>
            <RadioCheckToggleCard
              cardType='radio'
              hPosition='left'
              vPosition='top'
              isHeightOccupied
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
              <Input mt={2} placeholder='Placeholder' />
              <Input mt={2} placeholder='Placeholder' />
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
  argTypes: {
    hPosition: {
      control: { type: 'radio' },
      options: hPositions,
      defaultValue: RadioCheckToggleCard.defaultProps.hPosition,
      description: 'Controlling the button icon horizontal position',
    },
    vPosition: {
      control: { type: 'radio' },
      options: vPositions,
      defaultValue: RadioCheckToggleCard.defaultProps.vPosition,
      description: 'Controlling the button icon vertical position',
    },
    isHeightOccupied: {
      control: 'boolean',
      defaultValue: false,
      description: 'Controlling the button icon whether take full height of the card',
    },
    title: {
      control: 'text',
      defaultValue: 'Title',
      description: 'Card label',
    },
    isTitleBold: {
      control: 'boolean',
      defaultValue: false,
      description: 'Controlling the card label bold status',
    },
    isSelected: {
      control: 'boolean',
      defaultValue: false,
      description: 'Controlling the card selection status',
    },
  },
  render: (args) => (
    <Section heading='Radio Card'>
      <Flex flexDirection='column' style={{ maxWidth: '350px', gap: '16px' }}>
        <RadioCheckToggleCard
          cardType='radio'
          name='radio-card'
          title='Title'
          value='example-1'
          isSelected={false}
          onChange={(e) => {}}
          {...args}
        >
          <Box width='100%' height='75px' />
        </RadioCheckToggleCard>

        <RadioCheckToggleCard
          cardType='radio'
          name='radio-card'
          title='Title'
          value='example-2'
          isSelected={false}
          onChange={(e) => {}}
          {...args}
        >
          <Text textStyle='paragraph'>
            I am some content. I am some content. I am some content. I am some content.
          </Text>
        </RadioCheckToggleCard>

        <RadioCheckToggleCard
          cardType='radio'
          name='radio-card'
          title='Title'
          value='example-3'
          isSelected={false}
          onChange={(e) => {}}
          {...args}
        >
          <Text textStyle='paragraph'>
            I am some content. I am some content. I am some content. I am some content.
          </Text>
          <Button mt={2} width='100%'>
            Button
          </Button>
        </RadioCheckToggleCard>

        <RadioCheckToggleCard
          cardType='radio'
          name='radio-card'
          title='Title'
          value='example-4'
          isSelected={false}
          onChange={(e) => {}}
          {...args}
        >
          {exampleImage()}
        </RadioCheckToggleCard>
      </Flex>
    </Section>
  ),
}

export const Checkbox: Story = {
  argTypes: Radio.argTypes,
  render: (args) => (
    <Section heading='Checkbox Card'>
      <Flex flexDirection='column' style={{ maxWidth: '350px', gap: '16px' }}>
        <RadioCheckToggleCard
          cardType='checkbox'
          name='checkbox-card'
          title='Title'
          value='example-1'
          isSelected={false}
          onChange={(e) => {}}
          {...args}
        >
          <Box width='100%' height='75px' />
        </RadioCheckToggleCard>

        <RadioCheckToggleCard
          cardType='checkbox'
          name='checkbox-card'
          title='Title'
          value='example-2'
          isSelected={false}
          onChange={(e) => {}}
          {...args}
        >
          <Text textStyle='paragraph'>
            I am some content. I am some content. I am some content. I am some content.
          </Text>
        </RadioCheckToggleCard>

        <RadioCheckToggleCard
          cardType='checkbox'
          name='checkbox-card'
          title='Title'
          value='example-3'
          isSelected={false}
          onChange={(e) => {}}
          {...args}
        >
          <Text textStyle='paragraph'>
            I am some content. I am some content. I am some content. I am some content.
          </Text>
          <Button mt={2} width='100%'>
            Button
          </Button>
        </RadioCheckToggleCard>

        <RadioCheckToggleCard
          cardType='checkbox'
          name='checkbox-card'
          title='Title'
          value='example-4'
          isSelected={false}
          onChange={(e) => {}}
          {...args}
        >
          {exampleImage()}
        </RadioCheckToggleCard>
      </Flex>
    </Section>
  ),
}

export const Toggle: Story = {
  argTypes: Radio.argTypes,
  render: (args) => (
    <Section heading='Toggle Card'>
      <Flex flexDirection='column' style={{ maxWidth: '350px', gap: '16px' }}>
        <RadioCheckToggleCard
          cardType='toggle'
          name='toggle-card'
          title='Title'
          value='example-1'
          isSelected={false}
          onChange={(e) => {}}
          {...args}
        >
          <Box width='100%' height='75px' />
        </RadioCheckToggleCard>

        <RadioCheckToggleCard
          cardType='toggle'
          name='toggle-card'
          title='Title'
          value='example-2'
          isSelected={false}
          onChange={(e) => {}}
          {...args}
        >
          <Text textStyle='paragraph'>
            I am some content. I am some content. I am some content. I am some content.
          </Text>
        </RadioCheckToggleCard>

        <RadioCheckToggleCard
          cardType='toggle'
          name='toggle-card'
          title='Title'
          value='example-3'
          isSelected={false}
          onChange={(e) => {}}
          {...args}
        >
          <Text textStyle='paragraph'>
            I am some content. I am some content. I am some content. I am some content.
          </Text>
          <Button mt={2} width='100%'>
            Button
          </Button>
        </RadioCheckToggleCard>

        <RadioCheckToggleCard
          cardType='toggle'
          name='toggle-card'
          title='Title'
          value='example-4'
          isSelected={false}
          onChange={(e) => {}}
          {...args}
        >
          {exampleImage()}
        </RadioCheckToggleCard>
      </Flex>
    </Section>
  ),
}
