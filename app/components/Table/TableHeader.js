/* eslint-disable react/prop-types */
/**
 *
 * TableHeader
 *
 */

import React from 'react'
import { TableHeader } from 'grommet'

function createTableHeader({ children, ...props }) {
  return <TableHeader {...props}>{children}</TableHeader>
}

let createTableHeaderWithDoc

if (process.env.NODE_ENV !== 'production') {
  createTableHeaderWithDoc = require('./TableHeader.doc').doc(createTableHeader) // eslint-disable-line global-require
}

const TableHeaderWrapper = createTableHeaderWithDoc || createTableHeader
export default TableHeaderWrapper
