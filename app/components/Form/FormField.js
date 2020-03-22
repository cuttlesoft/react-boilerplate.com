/* eslint-disable react/prop-types */
import React from 'react'
import { FormField as GrommetFormField } from 'grommet'
import styled from 'styled-components'

import { doc } from './Form.doc'
import helpers from '../../utils/helpers'

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
const FormField = props => {
  const { children, required, label, ...rest } = props
  return (
    <StyledFormField required={required} label={required ? `${label}*` : label} {...rest}>
      {children}
    </StyledFormField>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: FormField,
})
