import { describe, PropTypes } from 'react-desc'

export const doc = PopoutForm => {
  const DocumentedPopoutForm = describe(PopoutForm)
    .description('A PopoutForm')
    .usage(
      `import { PopoutForm } from 'components/PopoutForm';
<PopoutForm />`,
    )

  DocumentedPopoutForm.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedPopoutForm
}
