import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box/Box'
import { Text } from '../Text/Text'
import { useScrollWithShadow } from './useScrollWithShadow'

export default {
  title: 'useScrollWithShadows',
}

const ShadowTransitionBox = styled(Box)`
  transition: all 0.3s ease-in-out;
`

const Template = () => {
  // Step 1: Use the hook to get the boxShadow value and scroll handler for the overflow container
  const { boxShadow, onScrollHandler } = useScrollWithShadow()

  return (
    // Step 2: Apply the onScrollHandler and boxShadow values to the container
    <ShadowTransitionBox height='300px' overflow='scroll' onScroll={onScrollHandler} style={{ boxShadow }}>
      {/* This is the content of the container that will overflow */}
      <Box height='1000px'>
        <Text textStyle='heading1' mt={3}>
          useScrollWithShadow()
        </Text>
        <Text textStyle='subheading1' mt={3}>
          Use this hook to apply a shadow to the top of a container when the user scrolls.
        </Text>
        <Text textStyle='paragraph' mt={3}>
          Click the &quot;Show Code&quot; button for usage instructions. Scroll to see the effect.
        </Text>
      </Box>
    </ShadowTransitionBox>
  )
}

export const Basic = Template.bind({})
