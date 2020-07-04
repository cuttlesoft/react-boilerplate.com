import React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from 'grommet' /** @todo: replace with custom wrappers */
import { Close, Send, User } from 'grommet-icons'

import { Box } from '../../Box'
import { StoryContainer } from '../../StoryContainer'
import { Button } from '..'
import README from '../README.md'

const IconPlain = () => (
  <StoryContainer>
    <Box align="center" pad="large">
      <Text margin="small"> plain=true (no padding, no border) </Text>
      <Box direction="row">
        <Button plain icon={<Close />} onClick={() => {}} primary />
        <Button plain icon={<Send />} onClick={() => {}} />
        <Button plain icon={<User />} onClick={() => {}} />
      </Box>
    </Box>
    <Box align="center" pad="large">
      <Text margin="small"> plain=false (includes padding and border)</Text>
      <Box direction="row">
        <Button plain={false} icon={<Close />} onClick={() => {}} primary />
        <Button plain={false} icon={<Send />} onClick={() => {}} />
        <Button plain={false} icon={<User />} onClick={() => {}} />
      </Box>
    </Box>
    <Box align="center" pad="large">
      <Text margin="small"> plain=undefined (with padding, no border) </Text>
      <Box direction="row">
        <Button icon={<Close />} onClick={() => {}} primary />
        <Button icon={<Send />} onClick={() => {}} />
        <Button icon={<User />} onClick={() => {}} />
      </Box>
    </Box>
  </StoryContainer>
)

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Icon Plain', () => <IconPlain />)
