import { describe, PropTypes } from 'react-desc'

export const doc = Message => {
  const DocumentedMessage = describe(Message).description('A Message').usage(
    `import { Message } from 'components/Message';
<Message />`,
  )

  DocumentedMessage.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedMessage
}
