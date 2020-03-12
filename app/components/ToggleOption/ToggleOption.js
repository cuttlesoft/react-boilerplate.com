import React from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

/**
 *
 * ToggleOption
 *
 */
const ToggleOption = ({ value, message, intl }) => (
  <option value={value}>{message ? intl.formatMessage(message) : value}</option>
)

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
  intl: PropTypes.object.isRequired,
}

export default injectIntl(ToggleOption)
