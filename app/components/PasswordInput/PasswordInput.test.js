import React from 'react'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'

import PasswordInput from './PasswordInput'
import { DEFAULT_LOCALE } from '../../i18n'

const renderComponent = (props = {}) => render(<PasswordInput {...props} />)

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})

test('It does not log to the console', () => {
  const spy = jest.spyOn(global.console, 'log')
  render(
    <IntlProvider locale={DEFAULT_LOCALE}>
      <PasswordInput />
    </IntlProvider>,
  )
  expect(spy).not.toHaveBeenCalled()
})
