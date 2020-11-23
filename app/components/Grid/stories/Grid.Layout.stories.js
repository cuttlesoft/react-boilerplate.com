import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '../../Box'
import { Button } from '../../Button'
import Grid from '../Grid'
import { Heading } from '../../Heading'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Grid', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Layout', () => (
    <StoryContainer>
      <Grid
        fill
        rows={['auto', 'flex']}
        columns={['auto', 'flex']}
        areas={[
          {
            name: 'header',
            start: [0, 0],
            end: [1, 0],
          },
          {
            name: 'sidebar',
            start: [0, 1],
            end: [0, 1],
          },
          {
            name: 'main',
            start: [1, 1],
            end: [1, 1],
          },
        ]}
      >
        <Box
          gridArea="header"
          direction="row"
          align="center"
          justify="between"
          pad={{
            horizontal: 'medium',
            vertical: 'small',
          }}
          background="dark-2"
        />

        <Box
          gridArea="sidebar"
          background="dark-3"
          width="small"
          animation={[
            { type: 'fadeIn', duration: 300 },
            {
              type: 'slideRight',
              size: 'xlarge',
              duration: 150,
            },
          ]}
        >
          {['First', 'Second', 'Third'].map(name => (
            <Button key={name} href="#" hoverIndicator>
              <Box
                pad={{
                  horizontal: 'medium',
                  vertical: 'small',
                }}
              >
                <Heading level="4">{name}</Heading>
              </Box>
            </Button>
          ))}
        </Box>

        <Box gridArea="main" justify="center" align="center">
          <Heading level="4">main</Heading>
        </Box>
      </Grid>
    </StoryContainer>
  ))
