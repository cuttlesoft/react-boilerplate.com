/* eslint-disable react/prop-types */
import React from 'react'
import { Form } from 'grommet'
import { doc } from './Form.doc'
import { createWithDoc } from '../../utils/helpers'

/**
 * Form
 */
const createForm = ({
  errors,
  messages,
  onChange,
  onReset,
  onSubmit,
  value,
  children,
  ...rest
}) => (
  <Form
    errors={errors}
    messages={{
      invalid: 'Invalid',
      required: 'Required',
      ...messages,
    }}
    onChange={onChange}
    onReset={onReset}
    onSubmit={onSubmit}
    value={value}
    {...rest}
  >
    {children}
  </Form>
)

export default createWithDoc({
  docFunction: doc,
  component: createForm,
})
