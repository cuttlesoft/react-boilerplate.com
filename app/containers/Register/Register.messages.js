import { defineMessages } from 'react-intl'

export const scope = 'app.containers.Register'

/*
 * Register Messages
 *
 * This contains all the text for the Register container.
 */
export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Register container!',
  },
  loading: {
    id: `${scope}.loading`,
    defaultMessage: 'Loading Register container!',
  },
})
