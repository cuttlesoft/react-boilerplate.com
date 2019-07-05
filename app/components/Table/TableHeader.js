/* eslint-disable react/prop-types */
/**
 *
 * TableHeader
 *
 */

import React from 'react'
import { TableHeader } from 'grommet'
import { doc } from './TableFooter.doc'
import helpers from '../../utils/helpers'

function createTableHeader({ children, ...props }) {
  return <TableHeader {...props}>{children}</TableHeader>
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: createTableHeader,
})
