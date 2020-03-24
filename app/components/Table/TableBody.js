/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { TableBody as GrommetTableBody } from 'grommet'

// Helpers
import { doc } from './TableBody.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * TableBody
 *
 */
const TableBody = ({ children, ...props }) => (
  <GrommetTableBody {...props}>{children}</GrommetTableBody>
)

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: TableBody,
})
