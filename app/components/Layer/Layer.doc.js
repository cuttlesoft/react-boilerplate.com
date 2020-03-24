import { describe, PropTypes } from 'react-desc'

export const doc = Layer => {
  const DocumentedLayer = describe(Layer)
    .description('A Layer')
    .usage(
      `import { Layer } from 'components/Layer';
<Layer />`,
    )

  DocumentedLayer.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedLayer
}
