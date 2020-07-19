import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

// Components
import { TestWrapper } from 'utils/TestWrapper'
import { HomePage } from '../HomePage'

/**
 * HomePage Test Criteria
 *
 */
describe('HomePage', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <TestWrapper>
        <HomePage loading={false} error={false} repos={[]} />
      </TestWrapper>,
    )

    expect(firstChild).toMatchSnapshot()
  })
})
