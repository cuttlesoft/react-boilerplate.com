/* eslint-disable react/prop-types */
/**
 *
 * DataTable
 *
 */

import React from 'react'
import { DataTable } from 'grommet'

function createDataTable({
  a11yTitle,
  alignSelf,
  columns,
  data,
  groupBy,
  margin,
  onSearch,
  resizeable,
  size,
  sortable,
  step,
  ...rest
}) {
  return (
    <DataTable
      a11yTitle={a11yTitle}
      alignSelf={alignSelf}
      columns={columns}
      data={data}
      groupBy={groupBy}
      margin={margin}
      onSearch={onSearch}
      resizeable={resizeable}
      size={size}
      sortable={sortable}
      step={step}
      {...rest}
    />
  )
}

let createDataTableWithDoc

if (process.env.NODE_ENV !== 'production') {
  createDataTableWithDoc = require('./DataTable.doc').doc(createDataTable) // eslint-disable-line global-require
}

const DataTableWrapper = createDataTableWithDoc || createDataTable
export default DataTableWrapper
