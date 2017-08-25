import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Button, RedButton, GreenButton, OutlineButton, theme, Flex, Box } from '../src'

const Container = styled.div`
  margin-bottom: 20px;
`

storiesOf('Button', module)
  .add('Button Component', () => (
    <div>
      <Flex justify='space-around'>
        <Box width={1/3} p={2}>
          <h4>{`<Button />`}</h4>
          <Container>
            <Button>
              Default
            </Button>
          </Container>
          <Container>
            <Button disabled>
              Disabled
            </Button>
          </Container>
        </Box>

        <Box width={1/3} p={2}>
          <h4>{`<GreenButton />`}</h4>
          <Container>
            <GreenButton>
              Default
            </GreenButton>
          </Container>
          <Container>
            <GreenButton disabled>
              Disabled
            </GreenButton>
          </Container>
        </Box>

        <Box width={1/3} p={2}>
          <h4>{`<OutlineButton />`}</h4>
          <Container>
            <OutlineButton color='purple'>
              Default
            </OutlineButton>
          </Container>
          <Container>
            <OutlineButton color='purple' disabled>
              Disabled
            </OutlineButton>
          </Container>
        </Box>

        <Box width={1/3} p={2}>
          <h4>{`<RedButton />`}</h4>
          <Container>
            <RedButton>
              Default
            </RedButton>
          </Container>
          <Container>
            <RedButton disabled>
              Disabled
            </RedButton>
          </Container>
        </Box>
      </Flex>
      <Box p={2}>
        <h4>Sizes</h4>
      </Box>
      <Flex justify='space-around'>
        <Box width={1/4} p={2}>
          <Button size='small'>Small</Button>
        </Box>

        <Box width={1/4} p={2}>
          <Button size='medium'>Medium</Button>
        </Box>

        <Box width={1/4} p={2}>
          <Button size='large'>Large</Button>
        </Box>

        <Box width={1/4} p={2}>
          <Button fullWidth size='large' icon='airport'>Full Width</Button>
        </Box>
      </Flex>
    </div>
  ))
