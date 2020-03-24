import React from 'react'
import PropTypes from 'prop-types'

import { Text } from '../Text'

/**
 *
 * Message
 *
 * Displays a message. If isError is set, the text is red
 *
 */
const Message = ({ isError = false, message, ...rest }) => (
  <Text
    color={isError ? 'status-critical' : 'primary'}
    margin={{ vertical: 'small' }}
    size="small"
    {...rest}
  >
    {message}
  </Text>
)

Message.propTypes = {
  isError: PropTypes.bool,
  message: PropTypes.string.isRequired,
}

export default Message
