import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '../../Box'
import { DataTable } from '..'
import { StoryContainer } from '../../StoryContainer'

// Utils
import { columns, DATA } from './data'

// Misc
import README from '../README.md'

storiesOf('DataTable', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Simple', () => <SimpleDataTable />)

const SimpleDataTable = () => (
  <StoryContainer>
    <Box align="center" pad="large">
      <DataTable columns={columns} data={DATA} step={10} />
    </Box>
  </StoryContainer>
)
