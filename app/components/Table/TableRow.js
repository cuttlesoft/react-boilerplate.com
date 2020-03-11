/* eslint-disable react/prop-types */
import React from 'react'
import { TableRow } from 'grommet'

import { doc } from './TableRow.doc'
import helpers from '../../utils/helpers'

/**
 *
 * TableRow
 *
 */
function createTableRow({ children, ...props }) {
  return <TableRow {...props}>{children}</TableRow>
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: createTableRow,
})
