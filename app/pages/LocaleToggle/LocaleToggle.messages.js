import { defineMessages } from 'react-intl'

export const scope = 'boilerplate.pages.LocaleToggle'

/*
 * LocaleToggle Messages
 *
 * This contains all the text for the LanguageToggle component.
 */
export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'en',
  },
  de: {
    id: `${scope}.de`,
    defaultMessage: 'de',
  },
})
