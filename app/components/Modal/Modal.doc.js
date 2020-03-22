import { describe, PropTypes } from 'react-desc'

export const doc = Modal => {
  const DocumentedModal = describe(Modal)
    .description('A Modal')
    .usage(
      `import { Modal } from 'components/Modal';
<Modal />`,
    )

  DocumentedModal.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedModal
}
