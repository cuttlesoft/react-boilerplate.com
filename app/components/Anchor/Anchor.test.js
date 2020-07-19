import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import { Add } from 'grommet-icons'

import Anchor from './Anchor'

const additionalProps = {
  a11yTitle: 'Link to Cuttlesoft Website',
  color: 'brand',
  disabled: false,
  icon: <Add />,
  label: 'Click Me',
  size: 'small',
}

const renderComponent = props => render(<Anchor href="https://cuttlesoft.com" {...props} />)

/**
 *
 * Tests for Anchor
 *
 */
describe('Anchor', () => {
  it('renders and matches snapshot', () => {
    const { container } = renderComponent(additionalProps)

    expect(container).toMatchSnapshot()
  })
})
