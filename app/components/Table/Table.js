/* eslint-disable react/prop-types */
import React from 'react'
import { Table } from 'grommet'

import { doc } from './Table.doc'
import helpers from '../../utils/helpers'

/**
 *
 * Table
 *
 */
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

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: createTable,
})
