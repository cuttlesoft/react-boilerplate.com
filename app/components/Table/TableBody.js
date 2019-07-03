/* eslint-disable react/prop-types */
/**
 *
 * TableBody
 *
 */

import React from 'react'
import { TableBody } from 'grommet'

function createTableBody({ children, ...props }) {
  return <TableBody {...props}>{children}</TableBody>
}

let createTableBodyWithDoc

if (process.env.NODE_ENV !== 'production') {
  createTableBodyWithDoc = require('./TableBody.doc').doc(createTableBody) // eslint-disable-line global-require
}

const TableBodyWrapper = createTableBodyWithDoc || createTableBody
export default TableBodyWrapper
