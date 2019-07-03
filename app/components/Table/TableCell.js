/* eslint-disable react/prop-types */
/**
 *
 * TableCell
 *
 */

import React from 'react'
import { TableCell } from 'grommet'

function createTableCell({ children, plain, scope, size, verticalAlign, ...props }) {
  return (
    <TableCell plain={plain} scope={scope} size={size} verticalAlign={verticalAlign} {...props}>
      {children}
    </TableCell>
  )
}

let createTableCellWithDoc

if (process.env.NODE_ENV !== 'production') {
  createTableCellWithDoc = require('./TableCell.doc').doc(createTableCell) // eslint-disable-line global-require
}

const TableCellWrapper = createTableCellWithDoc || createTableCell
export default TableCellWrapper
