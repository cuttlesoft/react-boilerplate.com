import { describe, PropTypes } from 'react-desc'

export const doc = Link => {
  const DocumentedLink = describe(Link)
    .description('A Link')
    .usage(
      `import { Link } from 'components/Link';
<Link />`,
    )

  DocumentedLink.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedLink
}
