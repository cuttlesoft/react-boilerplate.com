import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'

// Components
import { Box } from '../../Box'
import { Button } from '..'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

const customButtonColor = deepMerge(grommet, {
  button: {
    color: {
      light: 'white',
      dark: 'white',
    },
  },
})

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Colored', () => (
    <StoryContainer theme={customButtonColor}>
      <Box align="center" pad="large" gap="small">
        <Button primary title="Submit" onClick={() => {}} />
        <Button primary color="dark-1" title="custom theme text colored" onClick={() => {}} />
        <Button primary color="dark-1" title="dark-1" onClick={() => {}} />
        <Button primary color="#111111" title="#111111" onClick={() => {}} />
        <Button primary color="#777" title="#777" onClick={() => {}} />
        <Button plain color="red" title="plain red" onClick={() => {}} />
        <Button plain title="plain inherit" onClick={() => {}} />
      </Box>
    </StoryContainer>
  ))
