import { describe, PropTypes } from 'react-desc'

export const doc = Avatar => {
  const DocumentedAvatar = describe(Avatar).description('A Avatar').usage(
    `import { Avatar } from 'components/Avatar';
<Avatar />`,
  )

  DocumentedAvatar.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedAvatar
}
