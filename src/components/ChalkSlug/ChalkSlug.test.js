import React from 'react'
import ChalkSlug from './ChalkSlug'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

describe('ChalkSlug', () => {
  it('should display an image of a snail when rendered', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ChalkSlug />
      </MemoryRouter>
    )

    const snail = getByTestId('324')
  })
})