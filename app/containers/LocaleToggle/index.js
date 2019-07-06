/*
 *
 * LanguageToggle
 *
 */

import React, { useContext } from 'react'

import Toggle from 'components/Toggle'
import messages from './messages'
import { appLocales } from '../../i18n'
import { LocaleStoreContext } from '../../stores/LocaleStore'

import { Wrapper } from './Wrapper'

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
