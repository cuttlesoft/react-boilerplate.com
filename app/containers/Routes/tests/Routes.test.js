import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { Routes } from '..'

const renderer = new ShallowRenderer()

describe('Routes', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<Routes />)

    const renderedOutput = renderer.getRenderOutput()

    expect(renderedOutput).toMatchSnapshot()
  })
})
