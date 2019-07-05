/* eslint-disable react/prop-types */
/**
 *
 * TableBody
 *
 */

import React from 'react'
import { TableBody } from 'grommet'
import { doc } from './TableBody.doc'
import helpers from '../../utils/helpers'

function createTableBody({ children, ...props }) {
  return <TableBody {...props}>{children}</TableBody>
}

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: createTableBody,
})
