import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import 'jest-styled-components'
import { Add } from 'grommet-icons'

import Anchor from './Anchor'

const additionalProps = {
  a11yTitle: 'string',
  color: 'blue',
  disabled: false,
  icon: <Add />,
  label: 'Clickme',
  onClick: () => {},
  reverse: false,
  size: 'small',
}

const renderComponent = props =>
  render(
    <Anchor href="https://cuttlesoft.com" {...props}>
      <h1>Test</h1>
    </Anchor>,
  )

/**
 *
 * Tests for Anchor
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */
describe('Anchor', () => {
  it('should handle click events', () => {
    const onClickSpy = jest.fn()
    const { container } = renderComponent({ onClick: onClickSpy })
    fireEvent.click(container.querySelector('a'))

    expect(onClickSpy).toHaveBeenCalled()
  })

  it('renders and matches snapshot', () => {
    const { container } = renderComponent(additionalProps)

    expect(container).toMatchSnapshot()
  })
})
