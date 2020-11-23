import { describe, PropTypes } from 'react-desc'

export const doc = GenericLoading => {
  const DocumentedGenericLoading = describe(GenericLoading).description('A GenericLoading').usage(
    `import { GenericLoading } from 'components/GenericLoading';
<GenericLoading />`,
  )

  DocumentedGenericLoading.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedGenericLoading
}
