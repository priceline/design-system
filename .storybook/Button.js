import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Button, theme, Flex, Box } from '../src'

const Container = styled.div`
  margin-bottom: 20px;
`

storiesOf('Button', module)
  .add('Button Component', () => (
    <div>
      <Flex justify='space-around'>
        <Box width={1/3} p={2}>
          <h3>Primary</h3>
          <Container>
            <Button primary>
              Default
            </Button>
          </Container>
          <Container>
            <Button primary disabled>
              Disabled
            </Button>
          </Container>
          <Container>
            <Button primary icon='hotel'>
              Icon
            </Button>
          </Container>
        </Box>

        <Box width={1/3} p={2}>
          <h3>Secondary</h3>
          <Container>
            <Button secondary>
              Default
            </Button>
          </Container>
          <Container>
            <Button secondary disabled>
              Disabled
            </Button>
          </Container>
          <Container>
            <Button secondary icon='hotel'>
              Icon
            </Button>
          </Container>
        </Box>

        <Box width={1/3} p={2}>
          <h3>Outline</h3>
          <Container>
            <Button outline>
              Default
            </Button>
          </Container>
          <Container>
            <Button outline disabled>
              Disabled
            </Button>
          </Container>
          <Container>
            <Button outline icon='hotel'>
              Icon
            </Button>
          </Container>
        </Box>

        <Box width={1/3} p={2}>
          <h3>Error</h3>
          <Container>
            <Button error>
              Default
            </Button>
          </Container>
          <Container>
            <Button error disabled>
              Disabled
            </Button>
          </Container>
          <Container>
            <Button error icon='hotel'>
              Icon
            </Button>
          </Container>
        </Box>
      </Flex>
      <Box p={2}>
        <h3>Sizes</h3>
      </Box>
      <Flex justify='space-around'>
        <Box width={1/4} p={2}>
          <Button small>Small</Button>
        </Box>

        <Box width={1/4} p={2}>
          <Button medium>Medium</Button>
        </Box>

        <Box width={1/4} p={2}>
          <Button large>Large</Button>
        </Box>

        <Box width={1/4} p={2}>
          <Button fullWidth large icon='airport'>Full Width</Button>
        </Box>
      </Flex>
    </div>
  ))
  .add('Custom Color', () => (
    <Button bg='#8b00a5' bgHover='#4c015a'>Purple</Button>
  ))
  .add('Custom Icon', () => (
    <Button icon='circlePlus' small></Button>
  ))

