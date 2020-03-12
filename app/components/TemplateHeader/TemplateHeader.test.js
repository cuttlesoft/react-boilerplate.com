import React from 'react'
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
    <BrowserRouter>
      <TemplateHeader {...props} />)
    </BrowserRouter>,
  )

describe('TemplateHeader', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()

    expect(container).toMatchSnapshot()
  })
})
