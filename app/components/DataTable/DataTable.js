/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { DataTable as GrommetDataTable } from 'grommet'

// Helpers
import { doc } from './DataTable.doc'
import helpers from '../../utils/helpers'

/**
 *
 * DataTable
 *
 */
const DataTable = ({ ...rest }) => <GrommetDataTable {...rest} />

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: DataTable,
})
