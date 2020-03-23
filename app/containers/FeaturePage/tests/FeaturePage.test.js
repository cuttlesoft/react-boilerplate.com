import React from 'react'
import { render } from '@testing-library/react'

// Components
import { TestWrapper } from 'utils/TestWrapper'
import FeaturePage from '../FeaturePage'

describe('FeaturePage', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <TestWrapper>
        <FeaturePage />
      </TestWrapper>,
    )

    expect(firstChild).toMatchSnapshot()
  })
})
