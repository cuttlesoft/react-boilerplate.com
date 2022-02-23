/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { FormField as GrommetFormField } from 'grommet'
import styled from 'styled-components'
import _ from 'lodash'

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
const FormField = ({ children, label, name, required, serverSideRequired, value, ...rest }) => {
  /**
   * Configure the children to pass down in the `FormField`.
   * - If there is a `name`, and the `children` are not an array, clone them and pass down the `name` prop.
   */
  const configureChildren = () => {
    if (name && _.isObject(children) && !_.isArray(children))
      return React.cloneElement(children, { name })

    return children
  }

  return (
    <StyledFormField
      label={
        required || serverSideRequired ? (
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
      name={name}
      required={required}
      {...value}
      {...rest}
    >
      {configureChildren()}
    </StyledFormField>
  )
}

export default createWithDoc({
  docFunction: doc,
  component: FormField,
})
