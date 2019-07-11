import { describe, PropTypes } from 'react-desc'

export const doc = Theme => {
  const DocumentedTheme = describe(Theme)
    .description('A Theme')
    .usage(
      `import { Theme } from 'components/Theme';
<Theme />`,
    )

  DocumentedTheme.propTypes = {
    theme: PropTypes.shape({}).description(
      'Custom theme object to wrap the top-level component with',
    ),
  }

  return DocumentedTheme
}
