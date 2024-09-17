import React from 'react'
import { Flex } from '../..'
import BannerWrapper from '../BannerWrapper'

const InputBanner = ({
  text,
  heading,
  imageLeft,
  iconLeft,
  outline,
  bgColor,
  buttonRight,
  inputs,
  borderHugTop,
  borderHugLeft,
  boxShadowSize,
}) => (
  <BannerWrapper
    py={imageLeft ? 0 : 3}
    outline={outline}
    bgColor={bgColor}
    borderHugTop={borderHugTop}
    borderHugLeft={borderHugLeft}
    boxShadowSize={boxShadowSize}
    borderRadius='xl'
  >
    <Flex
      flexDirection={['column', null, null, 'row']}
      data-testid='inputBannerContents'
      width={1}
      justifyContent='flex-start'
      alignItems='center'
      pr={[2, null, null, 0]}
    >
      <Flex flexDirection='row' width='100%' px={2}>
        <Flex>
          {!!imageLeft && imageLeft}
          {!!iconLeft && iconLeft}
        </Flex>
        <Flex flexDirection='column'>
          {!!heading && heading}
          {!!text && text}
        </Flex>
      </Flex>
      <Flex
        justifyContent={['start', null, null, 'end']}
        alignItems='center'
        flexDirection={['column', null, null, 'row']}
        width='100%'
        pl={[2, null, null, 0]}
        pr={[0, null, null, 2]}
      >
        <Flex width={['100%', null, null, 'unset']} pt={[2, null, null, 0]}>
          {inputs}
        </Flex>
        {buttonRight && (
          <Flex
            pr={[0, null, null, 3]}
            pl={[0, null, null, 1]}
            pt={[3, null, null, 0]}
            width={['100%', null, null, 'unset']}
          >
            {buttonRight}
          </Flex>
        )}
      </Flex>
    </Flex>
  </BannerWrapper>
)

export default InputBanner
