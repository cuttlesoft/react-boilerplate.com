/* eslint-disable react/prop-types */
import React from 'react'
import { DataTable } from 'grommet'

import { doc } from './DataTable.doc'
import helpers from '../../utils/helpers'

/**
 *
 * DataTable
 *
 */
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

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: createDataTable,
})
