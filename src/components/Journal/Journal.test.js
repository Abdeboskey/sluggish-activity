import React from 'react'
import Journal from './Journal'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
jest.mock('../../localStorageCalls.js')

describe('Journal', () => {

  // Saving an activity to the journal is tested in App.test.js

  it('should display the correct headings when rendered', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Journal />
      </MemoryRouter>
    )

    const journalHeader = getByRole('heading', { name: /my journal/i })
    const activityListHeader = getByRole('heading', { name: /activities i\'ve tried/i })

    expect(journalHeader).toBeInTheDocument()
    expect(activityListHeader).toBeInTheDocument()
  })

  it('should display a button to go back home', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Journal />
      </MemoryRouter>
    )
 
    const goHomeButton = getByRole('button', { name: /go home/i })

    expect(goHomeButton).toBeInTheDocument()
  })
})