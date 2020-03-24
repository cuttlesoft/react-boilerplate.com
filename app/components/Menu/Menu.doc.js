import { describe, PropTypes } from 'react-desc'

export const doc = Menu => {
  const DocumentedMenu = describe(Menu)
    .description('A Menu')
    .usage(
      `import { Menu } from 'components/Menu';
<Menu />`,
    )

  DocumentedMenu.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedMenu
}
