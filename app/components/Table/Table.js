/* eslint-disable react/prop-types */
/**
 *
 * Table
 *
 */

import React from 'react'
import { Table } from 'grommet'

function createTable({ a11lyTitle, alignSelf, caption, children, margin, ...rest }) {
  return (
    <Table
      a11lyTitle={a11lyTitle}
      alignSelf={alignSelf}
      caption={caption}
      margin={margin}
      {...rest}
    >
      {children}
    </Table>
  )
}

let createTableWithDoc

if (process.env.NODE_ENV !== 'production') {
  createTableWithDoc = require('./Table.doc').doc(createTable) // eslint-disable-line global-require
}

const TableWrapper = createTableWithDoc || createTable
export default TableWrapper
