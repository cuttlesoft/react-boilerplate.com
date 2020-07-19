import React from 'react'
import { storiesOf } from '@storybook/react'
import { Attraction, Car } from 'grommet-icons'

// Components
import { Anchor } from '../../Anchor'
import { Button } from '../../Button'
import { Box } from '..'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Box', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Simple', () => (
    <StoryContainer>
      <Box
        direction="row-responsive"
        justify="center"
        align="center"
        pad="xlarge"
        background="dark-2"
        gap="medium"
      >
        <Box
          pad="large"
          align="center"
          background={{ color: 'light-2', opacity: 'strong' }}
          round
          gap="small"
        >
          <Attraction size="large" />
          <p>Party</p>
          <Anchor href="" label="Link" />
          <Button label="Button" onClick={() => {}} />
        </Box>

        <Box pad="large" align="center" background="dark-3" round gap="small">
          <Car size="large" color="light-2" />
          <p>Travel</p>
          <Anchor href="" label="Link" />
          <Button label="Button" onClick={() => {}} />
        </Box>
      </Box>
    </StoryContainer>
  ))
