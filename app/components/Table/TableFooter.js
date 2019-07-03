/* eslint-disable react/prop-types */
/**
 *
 * TableFooter
 *
 */

import React from 'react'
import { TableFooter } from 'grommet'

function createTableFooter({ children, ...props }) {
  return <TableFooter {...props}>{children}</TableFooter>
}

let createTableFooterWithDoc

if (process.env.NODE_ENV !== 'production') {
  createTableFooterWithDoc = require('./TableFooter.doc').doc(createTableFooter) // eslint-disable-line global-require
}

const TableFooterWrapper = createTableFooterWithDoc || createTableFooter
export default TableFooterWrapper
