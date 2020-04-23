import { describe, PropTypes } from 'react-desc'

export const doc = RangeInput => {
  const DocumentedRangeInput = describe(RangeInput)
    .description('A RangeInput')
    .usage(
      `import { RangeInput } from 'components/RangeInput';
<RangeInput />`,
    )

  DocumentedRangeInput.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedRangeInput
}
