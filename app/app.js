/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for async support
import '@babel/polyfill'

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { Router } from 'react-router'
import FontFaceObserver from 'fontfaceobserver'
import 'sanitize.css/sanitize.css'

// Import root app
import App from 'containers/App'

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider'

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.ico'
import 'file-loader?name=.htaccess!./.htaccess' // eslint-disable-line import/extensions

import trunk from './configureStore'

// Import i18n messages
import { translationMessages } from './i18n'

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {})

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded')
})

const MOUNT_NODE = document.getElementById('app')

// Create MobX store with history
const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()
const stores = {
  routing: routingStore,
}

const history = syncHistoryWithStore(browserHistory, routingStore)

const render = messages => {
  trunk.init().then(() => {
    ReactDOM.render(
      <LanguageProvider messages={messages}>
        <Provider {...stores}>
          <Router history={history}>
            <App />
          </Router>
        </Provider>
      </LanguageProvider>,
      MOUNT_NODE,
    )
  })
}

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render(translationMessages)
  })
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'))
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/de.js'),
      ]),
    ) // eslint-disable-line prettier/prettier
    .then(() => render(translationMessages))
    .catch(err => {
      throw err
    })
} else {
  render(translationMessages)
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install() // eslint-disable-line global-require
}
