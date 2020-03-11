import React, { useContext } from 'react'

// Components
import { Toggle } from 'components/Toggle'

// Styles
import { Wrapper } from './styles'

// Utils, Services & Messages
import messages from './LocaleToggle.messages'
import { appLocales } from '../../i18n'

// Store
import { LocaleStoreContext } from '../../stores/LocaleStore'

/*
 *
 * LanguageToggle
 *
 */
export const LocaleToggle = () => {
  const localeStore = useContext(LocaleStoreContext)

  return (
    <Wrapper>
      <Toggle
        value={localeStore.locale}
        values={appLocales}
        messages={messages}
        onToggle={evt => localeStore.changeLocale(evt.target.value)}
      />
    </Wrapper>
  )
}

export default LocaleToggle
