/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { TableCell as GrommetTableCell } from 'grommet'

// Helpers
import { doc } from './TableCell.doc'
import helpers from '../../utils/helpers'

/**
 *
 * TableCell
 *
 */
const TableCell = ({ children, ...rest }) => (
  <GrommetTableCell {...rest}>{children}</GrommetTableCell>
)

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: TableCell,
})
