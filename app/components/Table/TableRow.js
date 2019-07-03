/* eslint-disable react/prop-types */
/**
 *
 * TableRow
 *
 */

import React from 'react'
import { TableRow } from 'grommet'

function createTableRow({ children, ...props }) {
  return <TableRow {...props}>{children}</TableRow>
}

let createTableRowWithDoc

if (process.env.NODE_ENV !== 'production') {
  createTableRowWithDoc = require('./TableRow.doc').doc(createTableRow) // eslint-disable-line global-require
}

const TableRowWrapper = createTableRowWithDoc || createTableRow
export default TableRowWrapper
