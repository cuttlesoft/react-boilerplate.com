import React from 'react'
import { Grommet, grommet } from 'grommet'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Text from './Text'

const renderComponent = (props = {}) =>
  render(
    <Grommet theme={grommet}>
      <Text {...props}>TESTING</Text>
    </Grommet>,
  )

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})
