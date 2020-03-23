import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, render, fireEvent } from '@testing-library/react'
import 'jest-styled-components'

import { Grommet } from 'grommet'
import Form from './Form'
import FormField from './FormField'
import { Button } from '../Button'

describe('Form', () => {
  afterEach(cleanup)

  test('empty', () => {
    const component = renderer.create(
      <Grommet>
        <Form />
      </Grommet>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with field', () => {
    const component = renderer.create(
      <Grommet>
        <Form>
          <FormField name="test" />
        </Form>
      </Grommet>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('regexp validation', () => {
    const onSubmit = jest.fn()
    const { getByPlaceholderText, getByText, queryByText } = render(
      <Grommet>
        <Form onSubmit={onSubmit}>
          <FormField
            name="test"
            required
            validate={{ regexp: /^[a-z]/i }}
            placeholder="test input"
          />
          <Button type="submit" primary label="Submit" />
        </Form>
      </Grommet>,
    )

    fireEvent.change(getByPlaceholderText('test input'), {
      target: { value: '1' },
    })
    fireEvent.click(getByText('Submit'))
    expect(getByText('invalid')).toMatchSnapshot()

    fireEvent.change(getByPlaceholderText('test input'), {
      target: { value: 'a' },
    })
    fireEvent.click(getByText('Submit'))
    expect(queryByText('invalid')).toBeNull()
  })

  test('required validation', () => {
    const onSubmit = jest.fn()
    const { getByPlaceholderText, getByText, queryByText } = render(
      <Grommet>
        <Form onSubmit={onSubmit}>
          <FormField name="test" required placeholder="test input" />
          <Button type="submit" primary label="Submit" />
        </Form>
      </Grommet>,
    )

    fireEvent.click(getByText('Submit'))
    expect(queryByText('required')).toMatchSnapshot()
    fireEvent.change(getByPlaceholderText('test input'), {
      target: { value: '1' },
    })
    expect(queryByText('required')).toBeNull()
  })

  test('reset clears form', () => {
    const onReset = jest.fn()
    const { getByPlaceholderText, getByText, queryByText } = render(
      <Grommet>
        <Form onReset={onReset}>
          <FormField name="test" required placeholder="test input" />
          <Button type="reset" primary label="Reset" />
        </Form>
      </Grommet>,
    )
    fireEvent.change(getByPlaceholderText('test input'), {
      target: { value: 'Input has changed' },
    })
    fireEvent.click(getByText('Reset'))
    expect(queryByText('Input has changed')).toBeNull()
  })
})
