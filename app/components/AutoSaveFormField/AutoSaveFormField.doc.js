import { describe, PropTypes } from 'react-desc'

export const doc = AutoSaveFormField => {
  const DocumentedAutoSaveFormField = describe(AutoSaveFormField)
    .description('A AutoSaveFormField')
    .usage(
      `import { AutoSaveFormField } from 'components/AutoSaveFormField';
<AutoSaveFormField />`,
    )

  DocumentedAutoSaveFormField.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedAutoSaveFormField
}
