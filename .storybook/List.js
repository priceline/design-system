import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container, List, ListItem, Icon, Text } from '../src'

storiesOf('List', module)
  .add('List component', () => (
    <List p={2}>
      <ListItem p={1}>Item 1</ListItem>
      <ListItem p={1}>Item 2</ListItem>
      <ListItem p={1}>Item 3</ListItem>
    </List>
  ))
  .add('List with icons', () => (
    <List p={2}>
      <ListItem p={1}>
        <Icon color="blue" size={24} m={2} name="planeOutlineEngine" />
        <Text mt={2}>Item 1</Text>
      </ListItem>
      <ListItem p={1}>
        <Icon color="red" size={24} m={2} name="arrowLeft" />
        <Text mt={2}>Item 2</Text>
      </ListItem>
      <ListItem p={1}>
        <Icon color="yellow" size={24} m={2} name="arrowRight" />
        <Text mt={2}>Item 3</Text>
      </ListItem>
    </List>
  ))
  .add('List within container', () => (
    <Container maxWidth={250}>
      <List p={2}>
        <ListItem p={1}>
          <Icon color="blue" size={24} m={2} name="planeOutlineEngine" />
          <Text mt={2}>Item 1</Text>
        </ListItem>
        <ListItem p={1}>
          <Icon color="red" size={24} m={2} name="arrowLeft" />
          <Text mt={2}>Item 2</Text>
        </ListItem>
        <ListItem p={1}>
          <Icon color="yellow" size={24} m={2} name="arrowRight" />
          <Text mt={2}>Item 3</Text>
        </ListItem>
      </List>
    </Container>
  ))
