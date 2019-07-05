/*
 *
 * LanguageToggle
 *
 */

import React, { useContext } from 'react'
import styled from 'styled-components'

import Toggle from 'components/Toggle'
import messages from './messages'
import { appLocales } from '../../i18n'
import { LocaleStoreContext } from '../../stores/LocaleStore'

export const Wrapper = styled.div`
  padding: 2px;
`

export const LocaleToggle = () => {
  const localStore = useContext(LocaleStoreContext)

  return (
    <Wrapper>
      <Toggle
        value={localStore.locale}
        values={appLocales}
        messages={messages}
        onToggle={evt => localStore.changeLocale(evt.target.value)}
      />
    </Wrapper>
  )
}

export default LocaleToggle
