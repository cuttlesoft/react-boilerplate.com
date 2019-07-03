import React from 'react'
import { storiesOf } from '@storybook/react'

import { grommet } from 'grommet/themes'
import { Box } from '../../Box'
import { Container } from '../../Container'
import DataTable from '../DataTable'
import { columns, DATA } from './data'

storiesOf('DataTable', module).add('Simple', () => <SimpleDataTable />)

const SimpleDataTable = () => (
  <Container theme={grommet}>
    <Box align="center" pad="large">
      <DataTable columns={columns} data={DATA} step={10} />
    </Box>
  </Container>
)
