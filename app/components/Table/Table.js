/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Table as GrommetTable } from 'grommet'

// Helpers
import { doc } from './Table.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * Table
 *
 */
const Table = ({ children, ...rest }) => <GrommetTable {...rest}>{children}</GrommetTable>

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Table,
})
