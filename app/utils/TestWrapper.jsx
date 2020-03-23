/* eslint-disable react/prop-types */
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { Grommet } from 'grommet'

import theme from './theme'

export const TestWrapper = ({ children }) => (
  <IntlProvider locale="en">
    <MemoryRouter initialEntries={['/']}>
      <Grommet theme={theme}>{children}</Grommet>
    </MemoryRouter>
  </IntlProvider>
)
