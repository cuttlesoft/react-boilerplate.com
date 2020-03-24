/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { TableHeader as GrommetTableHeader } from 'grommet'

// Helpers
import { doc } from './TableFooter.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 *
 * TableHeader
 *
 */
const TableHeader = ({ children, ...props }) => (
  <GrommetTableHeader {...props}>{children}</GrommetTableHeader>
)

export default createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: TableHeader,
})
