/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { observer } from 'mobx-react'
import { LocaleStoreContext } from '../../stores/LocaleStore'

export const LanguageProvider = observer(props => {
  const localStore = useContext(LocaleStoreContext)

  return (
    <IntlProvider
      locale={localStore.locale}
      key={localStore.locale}
      messages={props.messages[localStore.locale]}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  )
})

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
}

export default LanguageProvider
