/* eslint-disable jsx-a11y/accessible-emoji */
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { Text } from '../Text/Text'
import { Card } from '../Card/Card'
import { Shimmer } from '../Shimmer/Shimmer'
import { Check } from 'pcln-icons'
import { Animate } from './Animate'

type InfoCardProps = {
  seatsAvailable?: boolean
  isSecondCard?: boolean
}

const InfoCard = ({ seatsAvailable, isSecondCard }: InfoCardProps) => (
  <Card width={1 / 4} borderRadius='xl' mr={isSecondCard ? 0 : 2} boxShadow='sm' borderWidth={0}>
    <Flex flexDirection='column' alignItems='center'>
      <Text mt={3} fontWeight='bold' fontSize={0}>
        {isSecondCard ? 'Main Cabin' : 'Base Fare'}
      </Text>
      <Text fontSize={3} color='success' fontWeight='bold' mt={2}>
        {isSecondCard ? '+$45' : '$98'}
      </Text>
      <Text mt={1} fontSize={0} color='text.light'>
        round-trip
      </Text>
      {!seatsAvailable ? null : (
        <Text mt={2} fontSize={0} color='error'>
          2 seats left
        </Text>
      )}
      <Text color='primary' fontSize={0} mt={3} mb={2}>
        as low as 0% apr
      </Text>
    </Flex>
  </Card>
)

const Skeletons = () => (
  <Animate variant='fadeIn' key='WOOP'>
    <Flex>
      <Box width={1 / 2}>
        <Shimmer mt={2} height='20px' width='200px' borderRadius='xl' />
        <Flex alignItems='center' my={1}>
          <Shimmer height='40px' width='80px' borderRadius='xl' />
          <Shimmer mx={2} height='40px' width='56px' borderRadius='xl' />
          <Box height='2px' width='calc(100% - 240px)' bg='border.base' />
          <Shimmer m={2} height='40px' width='56px' borderRadius='xl' />
        </Flex>
        <Shimmer height='30px' width='80%' borderRadius='xl' mb={0} />
      </Box>
      <Shimmer width={1 / 4} height='128px' borderRadius='xl' />
      <Shimmer width={1 / 4} ml={2} height='128px' borderRadius='xl' />
    </Flex>
  </Animate>
)

const DetailsSection = () => (
  <Box width={1 / 2}>
    <Text mt={2} height='20px' width='200px' fontSize={0}>
      <Text.span fontWeight='bold'>1 Stop</Text.span> 6h 6m
    </Text>
    <Flex alignItems='center' my={2} height='calc(100% - 68px)'>
      <Flex width='80px' flexDirection='column' justifyContent='center' alignItems='center'>
        <Flex
          borderRadius='full'
          height='30px'
          width='30px'
          bg='yellow'
          mb={1}
          alignItems='center'
          justifyContent='center'
        >
          S
        </Flex>
        <Text fontSize='10px' textAlign='center'>
          Spirit Air
        </Text>
      </Flex>
      <Box mx={2} height='40px' width='56px'>
        <Text fontWeight='bold' fontSize={1} textAlign='right'>
          06:10a
        </Text>
        <Text fontSize={1} textAlign='right'>
          SFO
        </Text>
      </Box>
      <Box height='2px' width='calc(100% - 240px)' bg='border.base' />
      <Box mx={2} height='40px' width='56px'>
        <Text fontWeight='bold' fontSize={1}>
          09:10a
        </Text>
        <Text fontSize={1}>LAX</Text>
      </Box>
    </Flex>
    <Flex alignItems='center'>
      <Check color='success' size={18} />
      <Text fontSize={1}>Free cancellation within 30 hours</Text>
    </Flex>
  </Box>
)

const ExampleCard = ({ isLoading, seatsAvailable }: ExampleCardProps) => (
  <AnimatePresence>
    <Animate variant='layout'>
      <Card pr={2} pt={2} pb={2} pl={3} borderRadius='xl' my={2}>
        {isLoading ? (
          <Skeletons />
        ) : (
          <Animate variant='fadeIn' key='adjfjd' delay={0.01}>
            <Flex>
              <DetailsSection />
              <InfoCard seatsAvailable={seatsAvailable} />
              <InfoCard isSecondCard />
            </Flex>
          </Animate>
        )}
      </Card>
    </Animate>
  </AnimatePresence>
)

type ExampleCardProps = {
  isLoading: boolean
  seatsAvailable?: boolean
  delay?: number
}

export { ExampleCard }
