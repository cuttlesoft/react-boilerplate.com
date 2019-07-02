/**
 *
 * Tests for Anchor
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { fireEvent, render } from '@testing-library/react'
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

test('it should handle click events', () => {
  const onClickSpy = jest.fn()
  const { container } = renderComponent({ onClick: onClickSpy })
  fireEvent.click(container.querySelector('a'))
  expect(onClickSpy).toHaveBeenCalled()
})

test('it should have children', () => {
  const { container } = renderComponent()
  expect(container.querySelector('a').children).toHaveLength(1)
})
