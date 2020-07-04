import React from 'react'
import { storiesOf } from '@storybook/react'

import { Box } from '../../Box'
import { StoryContainer } from '../../StoryContainer'
import { DataTable } from '..'
import README from '../README.md'
import { columns, DATA } from './data'

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
