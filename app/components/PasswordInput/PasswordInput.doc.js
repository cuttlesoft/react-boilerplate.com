import { describe, PropTypes } from 'react-desc'

export const doc = PasswordInput => {
  const DocumentedPasswordInput = describe(PasswordInput)
    .description('A PasswordInput')
    .usage(
      `import { PasswordInput } from 'components/PasswordInput';
<PasswordInput />`,
    )

  DocumentedPasswordInput.propTypes = {
    value: PropTypes.string.description('Value of the input').defaultValue(''),
    onChnage: PropTypes.func.description('Function to change the value').defaultValue(() => {}),
  }

  return DocumentedPasswordInput
}
