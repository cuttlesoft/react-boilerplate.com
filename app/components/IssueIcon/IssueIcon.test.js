import React from 'react'
import { render } from '@testing-library/react'

import IssueIcon from './IssueIcon'

describe('IssueIcon', () => {
  it('should render a SVG', () => {
    const { container } = render(<IssueIcon />)

    expect(container.querySelector('svg')).not.toBeNull()
  })
})
