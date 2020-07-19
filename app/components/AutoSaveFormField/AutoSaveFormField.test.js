import React from 'react'
import { render } from '@testing-library/react'

import { TestWrapper } from '../../utils/TestWrapper'
import AutoSaveFormField from './AutoSaveFormField'

const renderComponent = (props = {}) =>
  render(
    <TestWrapper>
      <AutoSaveFormField name="Test Name" onSave={() => {}} value="Test Value" {...props} />
    </TestWrapper>,
  )

/**
 *
 * Tests for AutoSaveFormField
 *
 */
describe('AutoSaveFormField', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
