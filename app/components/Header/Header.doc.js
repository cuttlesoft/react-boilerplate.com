import { describe, PropTypes } from 'react-desc'

export const doc = Header => {
  const DocumentedHeader = describe(Header).description('A Header').usage(
    `import { Header } from 'components/Header';
<Header />`,
  )

  DocumentedHeader.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedHeader
}
