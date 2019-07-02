/**
 *
 * Tests for Anchor
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { fireEvent, render } from 'react-testing-library'
import 'jest-styled-components'

import Anchor from './Anchor'

const children = <h1>Test</h1>
const href = 'https://cuttlesoft.com'
const renderComponent = (props = {}) =>
  render(
    <Anchor href={href} {...props}>
      {children}
    </Anchor>,
  )

describe('<Anchor />', () => {
  it('should handle click events', () => {
    const onClickSpy = jest.fn()
    const { container } = renderComponent({ onClick: onClickSpy })
    fireEvent.click(container.querySelector('a'))
    expect(onClickSpy).toHaveBeenCalled()
  })
})
