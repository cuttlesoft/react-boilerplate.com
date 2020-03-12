import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
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
  intl: intlShape.isRequired,
}

export default injectIntl(ToggleOption)
