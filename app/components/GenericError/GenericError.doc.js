import { describe, PropTypes } from 'react-desc'

export const doc = GenericError => {
  const DocumentedGenericError = describe(GenericError)
    .description('A GenericError')
    .usage(
      `import { GenericError } from 'components/GenericError';
<GenericError />`,
    )

  DocumentedGenericError.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedGenericError
}
