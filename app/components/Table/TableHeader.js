/* eslint-disable react/prop-types */
import React from 'react'
import { TableHeader } from 'grommet'

import { doc } from './TableFooter.doc'
import helpers from '../../utils/helpers'

/**
 *
 * TableHeader
 *
 */
function createTableHeader({ children, ...props }) {
  return <TableHeader {...props}>{children}</TableHeader>
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: createTableHeader,
})
