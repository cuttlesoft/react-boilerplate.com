import { describe, PropTypes } from 'react-desc'

export const doc = Container => {
  const DocumentedContainer = describe(Container).description('A Container').usage(
    `import { Container } from 'components/Container';
<Container />`,
  )

  DocumentedContainer.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedContainer
}
