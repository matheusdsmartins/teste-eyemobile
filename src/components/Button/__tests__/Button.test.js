import React from 'react'
import { cleanup, render } from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'

import Button from '../Button'

afterEach(cleanup)

describe('(Component) Button', () => {
  test('should render without crash', async () => {
    const FragmentToTest = () => (
      <Button
        data-testid='btn'
      >
        Test Children
      </Button>
    )

    const { getByTestId } = render(<FragmentToTest />)

    expect(getByTestId('btn')).toBeTruthy()
  })
})
