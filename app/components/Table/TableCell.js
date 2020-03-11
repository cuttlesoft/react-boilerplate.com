/* eslint-disable react/prop-types */
import React from 'react'
import { TableCell } from 'grommet'

import { doc } from './TableCell.doc'
import helpers from '../../utils/helpers'

/**
 *
 * TableCell
 *
 */
function createTableCell({ children, plain, scope, size, verticalAlign, ...props }) {
  return (
    <TableCell plain={plain} scope={scope} size={size} verticalAlign={verticalAlign} {...props}>
      {children}
    </TableCell>
  )
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: createTableCell,
})
