import React from 'react'
import { IntlProvider } from 'react-intl'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import TemplateHeader from './TemplateHeader'

/**
 *
 * Tests for TemplateHeader
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale="en">
      <BrowserRouter>
        <TemplateHeader {...props} />)
      </BrowserRouter>
    </IntlProvider>,
  )

describe('TemplateHeader', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
