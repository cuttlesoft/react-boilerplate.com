/* eslint-disable react/prop-types */
import React from 'react'

// Components
import { Form as GrommetForm } from 'grommet'

// Helpers
import { doc } from './Form.doc'
import helpers from '../../utils/helpers'

/**
 * Form
 */
const Form = ({ children, style, ...rest }) => (
  <GrommetForm style={{ maxWidth: '70vw', margin: 'auto', ...style }} {...rest}>
    {children}
  </GrommetForm>
)

export default helpers.createWithDoc({
  docFunction: doc,
  component: Form,
})
