/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Table as GrommetTable } from 'grommet'

// Helpers
import { doc } from './Table.doc'
import helpers from '../../utils/helpers'

/**
 *
 * Table
 *
 */
const Table = ({ children, ...rest }) => <GrommetTable {...rest}>{children}</GrommetTable>

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: Table,
})
