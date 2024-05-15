import { render } from '@testing-library/react'
import React from 'react'

import { NumberInput } from '../NumberInput'

test('renders - number', () => {
  const { container } = render(
    <NumberInput
      type="number"
      id="numberInput"
      label="Number"
      name="numberInput"
      value=""
      onChange={(str) => console.log(str)}
      placeholder="0.00"
      required={true}
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})

test('renders - currency', () => {
  const { container } = render(
    <NumberInput
      type="number"
      id="currencyInput"
      label="Currency"
      name="currencyInput"
      value="50"
      onChange={(str) => console.log(str)}
      placeholder="100.00"
      min={0}
      max={100}
      step={10}
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})

test('renders - error', () => {
  const { container } = render(
    <NumberInput
      type="number"
      id="currencyInput"
      label="Currency"
      name="currencyInput"
      value="200"
      onChange={(str) => console.log(str)}
      placeholder="100.00"
      min={0}
      max={100}
      step={10}
      error={true}
      errorMsg="Oh gosh, this is an error isn't it!"
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})

test('renders - with trailing icon', () => {
  const { container } = render(
    <NumberInput
      type="number"
      id="currencyInput"
      label="Currency"
      name="currencyInput"
      value=""
      onChange={(str) => console.log(str)}
      placeholder="100.00"
      trailingIcon="at"
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})

test('renders - with suffix', () => {
  const { container } = render(
    <NumberInput
      type="number"
      id="currencyInput"
      label="Currency"
      name="currencyInput"
      value=""
      onChange={(str) => console.log(str)}
      placeholder="100.00"
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})

test('renders - disabled', () => {
  const { container } = render(
    <NumberInput
      type="number"
      id="currencyInput"
      label="Currency"
      name="currencyInput"
      value=""
      onChange={(str) => console.log(str)}
      placeholder="100.00"
      disabled={true}
    />,
  )
  expect(container.firstChild).toMatchSnapshot()
})
