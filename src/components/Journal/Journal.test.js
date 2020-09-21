import React from 'react'
import Journal from './Journal'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
jest.mock('../../localStorageCalls.js')

describe('Journal', () => {
  let activities

  beforeEach(() => {
    global.localStorage.clear()
    activities = [
      {
        date: "9/20/2020",
        description: "Look at pictures and videos of cute animals",
        link: null
      },
      {
        date: "9/21/2020",
        description: "Hire a clown for my birthday party",
        link: null
      },
      {
        date: "9/22/2020",
        description: "Write a research paper about sharks",
        link: "www.sharksider.com"
      },
    ]
    global.localStorage.setItem('savedActivities', JSON.stringify(activities));
  })

  afterEach(() => {
    global.localStorage.clear()
  })

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

  it.skip('should display a list of saved activities', async () => {
    const { findByText } = render(
      <MemoryRouter>
        <Journal />
      </MemoryRouter>
    )

    const firstEntryDate = await findByText(/9\/20\/2020 -/i)
    const firstEntryDescription = await findByText(/look at pictures and videos of cute animals/i)
    const lastEntryDate = await findByText(/9\/22\/2020 -/i)
    const lastEntryDescription = await findByText(/write a research paper about sharks/i)
    
    expect(firstEntryDate).toBeInTheDocument()
    expect(firstEntryDescription).toBeInTheDocument()
    expect(lastEntryDate).toBeInTheDocument()
    expect(lastEntryDescription).toBeInTheDocument()
  })
})