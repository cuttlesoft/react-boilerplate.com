/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Grid as GrommetGrid, ResponsiveContext } from 'grommet'
import { isPlainObject } from 'lodash'

import { doc } from './Grid.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 * Grid
 */
const Grid = ({ areas, columns, rows, ...rest }) => {
  const size = useContext(ResponsiveContext)

  return (
    <GrommetGrid
      areas={isPlainObject(areas) ? areas[size] : areas}
      columns={isPlainObject(columns) ? columns[size] : columns}
      rows={isPlainObject(rows) ? rows[size] : rows}
      {...rest}
    />
  )
}

export default createWithDoc({
  docFunction: doc,
  component: Grid,
})
