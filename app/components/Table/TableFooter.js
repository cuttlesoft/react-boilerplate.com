/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { TableFooter as GrommetTableFooter } from 'grommet'

// Helpers
import { doc } from './TableFooter.doc'
import helpers from '../../utils/helpers'

/**
 *
 * TableFooter
 *
 */
const TableFooter = ({ children, ...props }) => (
  <GrommetTableFooter {...props}>{children}</GrommetTableFooter>
)

export default helpers.createWithDoc({
  envName: process.env.NODE_ENV,
  docFunction: doc,
  component: TableFooter,
})
