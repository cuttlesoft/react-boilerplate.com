/* eslint-disable react/prop-types */
import React from 'react'
import { FormField as GrommetFormField } from 'grommet'
import styled from 'styled-components'

import { doc } from './Form.doc'
import { createWithDoc } from '../../utils/helpers'

export const StyledFormField = styled(GrommetFormField)`
  label {
    margin: 15px 0 0 12px;
    font-size: 14px;
  }

  span {
    font-size: 14px;
  }
`

/**
 * FormField
 */
const FormField = ({ children, required, label, ...rest }) => (
  <StyledFormField required={required} label={required ? `${label}*` : label} {...rest}>
    {children}
  </StyledFormField>
)

export default createWithDoc({
  docFunction: doc,
  component: FormField,
})
