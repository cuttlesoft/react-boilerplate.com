import { defineMessages } from 'react-intl'

export const scope = 'boilerplate.pages.HomePage'

/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'React Boilerplate',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage: 'The link between music venues, touring artists, and crew.',
  },
})
