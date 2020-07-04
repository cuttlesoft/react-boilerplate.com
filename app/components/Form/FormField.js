/* eslint-disable react/prop-types */
import React from 'react'
import { FormField as GrommetFormField } from 'grommet'
import styled from 'styled-components'

// Components
import { Text } from '../Text'

// Helpers
import { doc } from './Form.doc'
import { createWithDoc } from '../../utils/helpers'

export const StyledFormField = styled(GrommetFormField)`
  /* Error message */
  span {
    font-weight: bold;
    font-size: 12px;
  }
`

/**
 * FormField
 *
 * - If the field is marked as `required`, add an asterisk (*) to its label
 */
const FormField = props => {
  const { label, required, value, children, ...rest } = props
  return (
    <StyledFormField
      label={
        required ? (
          <Text size="xsmall" weight="bold">
            {label}
            <Text color="brand" margin={{ left: 'xsmall' }} size="xsmall">
              *
            </Text>
          </Text>
        ) : (
          <Text size="xsmall" weight="bold">
            {label}
          </Text>
        )
      }
      required={required}
      {...value}
      {...rest}
    >
      {children}
    </StyledFormField>
  )
}

export default createWithDoc({
  docFunction: doc,
  component: FormField,
})
