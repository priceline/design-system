import React from 'react'
import { action } from '@storybook/addon-actions'
import { Calendar, Image } from 'pcln-icons'
import { Box, Button, Flex, IconButton, Text } from '..'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

export default {
  title: 'IconButton',
  component: IconButton,
}

export const Default = () => (
  <Box>
    <h3>Default</h3>
    <IconButton
      onClick={action('Clicked IconButton')}
      aria-label={'Click to choose date'}
      icon={<Image title='Choose date' />}
    />
    <Box mt={4} />
    <h3> Color</h3>
    <Flex>
      <Box>
        <Text>Primary</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' color='primary' />}
          variation='plain'
        />
      </Box>
      <Box ml={4}>
        <Text>Secondary</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' color='secondary' />}
          variation='plain'
        />
      </Box>
    </Flex>
    <Box mt={4} />
    <h3> Size</h3>
    <Flex>
      <Box>
        <Text>24px (default)</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' color='primary' />}
          variation='plain'
        />
      </Box>
      <Box ml={4}>
        <Text>32px</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' color='primary' size={32} />}
          variation='plain'
        />
      </Box>
      <Box ml={4}>
        <Text>32px</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' color='primary' size={48} />}
          variation='plain'
        />
      </Box>
      <Box ml={4}>
        <Text>32px</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' color='primary' size={64} />}
          variation='plain'
        />
      </Box>
    </Flex>
    <Box mt={4} />
    <h3> Disabled</h3>
    <IconButton onClick={action('Clicked IconButton')} icon={<Calendar title='Choose date' />} disabled />
    <Box mt={4} />
    <h3> containerSize</h3>
    <Flex>
      <Box>
        <Text pr={4} pb={3}>
          sm
        </Text>
        <IconButton
          containerSize='sm'
          variation='fill'
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
        />
      </Box>
      <Box px={4}>
        <Text pb={3}>md (default)</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          containerSize='md'
          variation='fill'
        />
      </Box>
      <Box px={4}>
        <Text pb={3}>lg</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          containerSize='lg'
          variation='fill'
        />
      </Box>
      <Box px={4}>
        <Text pb={3}>xl</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          containerSize='xl'
          variation='fill'
        />
      </Box>
    </Flex>
    <Box mt={4} />
    <h3> Variation</h3>
    <Flex>
      <Box>
        <Text pb={3}>Fill (default)</Text>
        <IconButton
          variation='fill'
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
        />
      </Box>
      <Box px={4}>
        <Text pb={3}>Subtle</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          variation='subtle'
        />
      </Box>
      <Box px={4}>
        <Text pb={3}>lightFill</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          variation='lightFill'
        />
      </Box>
      <Box px={4}>
        <Text pb={3}>outline</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          variation='outline'
        />
      </Box>
      <Box bg='caution.light' px={4}>
        <Text pb={3}>plain</Text>
        <IconButton
          p={3}
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          variation='plain'
        />
      </Box>
      <Box bg='caution.light' px={4} pb={4}>
        <Text pb={3}>white</Text>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          variation='white'
        />
      </Box>
    </Flex>
    <Box mt={4} />
    <h3> boxShadowSize</h3>
    <Flex>
      <Box pb={4}>
        <Text pb={3}>sm</Text>
        <IconButton
          boxShadowSize='sm'
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          variation='white'
        />
      </Box>
      <Box px={4} pb={4}>
        <Text pb={3}>md</Text>
        <IconButton
          boxShadowSize='md'
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          variation='white'
        />
      </Box>
      <Box pr={4} pb={4}>
        <Text pb={3}>lg</Text>
        <IconButton
          boxShadowSize='lg'
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          variation='white'
        />
      </Box>
      <Box pr={4} pb={4}>
        <Text pb={3}>xl</Text>
        <IconButton
          boxShadowSize='xl'
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          variation='white'
        />
      </Box>
      <Box pr={4} pb={4}>
        <Text pb={3}>2xl</Text>
        <IconButton
          boxShadowSize='2xl'
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          variation='white'
        />
      </Box>
      <Box pr={4} pb={4}>
        <Text pb={3}>overlay-lg</Text>
        <IconButton
          boxShadowSize='overlay-lg'
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          variation='white'
        />
      </Box>
      <Box pr={4} pb={4}>
        <Text pb={3}>overlay-xl</Text>
        <IconButton
          boxShadowSize='overlay-xl'
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' />}
          variation='white'
        />
      </Box>
    </Flex>
  </Box>
)

export function ForwardRefs() {
  function refChild(dsRef) {
    function onClick() {
      return dsRef.current.focus()
    }
    return (
      <>
        <IconButton
          onClick={action('Clicked IconButton')}
          icon={<Calendar title='Choose date' size={64} />}
          dsRef={dsRef}
        />
        <br />
        <Button onClick={onClick} mt={4}>
          Click to focus button via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}

ForwardRefs.story = {
  name: 'Forward refs',
}
