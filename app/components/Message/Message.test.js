import React from 'react'
import { render } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions

// Components
import { TestWrapper } from 'utils/TestWrapper'
import Message from './Message'

const renderComponent = (props = {}) =>
  render(
    <TestWrapper>
      <Message message="Cuttlefish are colorblind" {...props} />
    </TestWrapper>,
  )

/**
 *
 * Tests for Message
 *
 */
describe('Message', () => {
  test('it renders and matches snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })
})
