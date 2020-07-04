import { describe, PropTypes } from 'react-desc'

export const doc = FormContainer => {
  const DocumentedFormContainer = describe(FormContainer)
    .description('A FormContainer')
    .usage(
      `import { FormContainer } from 'components/FormContainer';
<FormContainer />`,
    )

  DocumentedFormContainer.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedFormContainer
}
