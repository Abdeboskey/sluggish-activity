import React from 'react'
import DoesNotExist from './DoesNotExist'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('DoesNotExist', () => {
  it('should tell the user that there is nothing at this url path', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <DoesNotExist />
      </MemoryRouter>
    )

    const nothingHere = getByRole('heading', { name: /there is nothing here/i })
    expect(nothingHere).toBeInTheDocument()
  })

  it('should have a button to take the user back home', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <DoesNotExist />
      </MemoryRouter>
    )

    const goHomeButton = getByRole('button', { name: /go back/i })
    expect(goHomeButton).toBeInTheDocument()
  })
})