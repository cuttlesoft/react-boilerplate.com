import { describe, PropTypes } from 'react-desc'

export const doc = StoryContainer => {
  const DocumentedStoryContainer = describe(StoryContainer)
    .description('The top level StoryContainer container.')
    .usage(
      `import { StoryContainer } from 'component/StoryContainer'
<StoryContainer>...</StoryContainer>`,
    )
    .intrinsicElement('div')

  DocumentedStoryContainer.propTypes = {
    full: PropTypes.bool.description('Whether to take the whole viewport.').defaultValue(false),
    plain: PropTypes.bool
      .description(
        'Whether or not StoryContainer should apply a global font-family, font-size, and line-height.',
      )
      .defaultValue(false),
    cssVars: PropTypes.bool
      .description('Whether to expose the css variables.')
      .defaultValue(false),
    theme: PropTypes.object.description('Custom styles for StoryContainer app component.'),
    userAgent: PropTypes.string.description(
      'User agent used to detect the device width for setting the initial breakpoint.',
    ),
  }

  return DocumentedStoryContainer
}

export const themeDoc = {
  'container.extend': {
    description: 'Any additional style for StoryContainer.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'global.font.face': {
    description: 'Custom font face declaration',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
}
